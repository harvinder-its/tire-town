import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const DEFAULT_EMAIL = 'info@tiretown.ca';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tire-town.vercel.app';

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
} else {
  console.warn('SENDGRID_API_KEY is not set. Contact form submissions will fail.');
}

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const createEmailHtml = (payload: Required<Omit<ContactPayload, 'company' | 'phone'>> & ContactPayload) => {
  const companyLogoUrl = `${SITE_URL}/images/final-logo.png`;
  const siteDisplay = SITE_URL.replace(/^https?:\/\//, '');
  const sanitize = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  const messageHtml = sanitize(payload.message).replace(/\n/g, '<br />');

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Tire Town Quote Request</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #050505; margin: 0; padding: 32px 0; color: #f3f4f6; }
        .wrapper { max-width: 640px; margin: 0 auto; padding: 0 16px; }
        .card { background: #050505; border-radius: 28px; overflow: hidden; border: 1px solid #1f2937; box-shadow: 0 35px 85px rgba(0, 0, 0, 0.55); }
        .header { display: flex; justify-content: center; align-items: center; padding: 24px; background: #ffffff; }
        .header img { max-height: 56px; width: auto; }
        .content { padding: 36px; background: #050505; }
        .badge { display: inline-flex; align-items: center; justify-content: center; padding: 10px 22px; border-radius: 999px; font-size: 13px; font-weight: 700; background: #f97316; color: #ffffff; letter-spacing: 0.08em; text-transform: uppercase; }
        .form-grid { display: grid; gap: 18px; margin-top: 32px; }
        .field { background: #0f172a; border: 1px solid #1f2937; border-radius: 14px; padding: 18px 20px; }
        .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 6px; display: block; }
        .value { font-size: 17px; font-weight: 600; color: #f9fafb; }
        .message-label { margin-top: 32px; color: #94a3b8; letter-spacing: 0.1em; font-size: 11px; text-transform: uppercase; }
        .message { background: #0f172a; border: 1px solid #1f2937; color: #e5e7eb; padding: 24px; border-radius: 18px; line-height: 1.7; white-space: normal; font-size: 16px; }
        .footer { padding: 24px 32px 32px; background: #0b1120; color: #cbd5f5; text-align: center; font-size: 13px; border-top: 1px solid #1f2937; }
        a { color: #60a5fa; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="card">
          <div class="header">
            <img src="${companyLogoUrl}" alt="Tire Town Distributors" />
          </div>
          <div class="content">
            <div class="badge">New Quote Request</div>
            <div class="form-grid">
              <div class="field">
                <span class="label">Contact</span>
                <span class="value">${sanitize(payload.name)}</span>
              </div>
              <div class="field">
                <span class="label">Company</span>
                <span class="value">${sanitize(payload.company || '—')}</span>
              </div>
              <div class="field">
                <span class="label">Email</span>
                <span class="value"><a href="mailto:${sanitize(payload.email)}" style="color:#60a5fa;">${sanitize(payload.email)}</a></span>
              </div>
              <div class="field">
                <span class="label">Phone</span>
                <span class="value">${sanitize(payload.phone || '—')}</span>
              </div>
            </div>
            <div class="message-label">Message</div>
            <div class="message">${messageHtml}</div>
          </div>
          <div class="footer">
            Sent via <a href="${SITE_URL}">${siteDisplay}</a> contact form · Tire Town Distributors Ltd. · Authorized CEAT Dealer in Canada
          </div>
        </div>
      </div>
    </body>
  </html>`;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const { name, email, message, company, phone } = payload;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  if (!SENDGRID_API_KEY) {
    return NextResponse.json({ error: 'SendGrid is not configured.' }, { status: 500 });
  }

  try {
    await sgMail.send({
      to: DEFAULT_EMAIL,
      from: DEFAULT_EMAIL,
      replyTo: email,
      subject: `New Tire Town quote request from ${name}`,
      text: `Name: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      html: createEmailHtml({ name, email, message, company, phone }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send contact form via SendGrid', error);
    return NextResponse.json({ error: 'Unable to send your message right now. Please try again later.' }, { status: 500 });
  }
}
