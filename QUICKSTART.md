# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
cd tire-town-distributors
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Add Product Images (Optional)

Place your tire product images in `/public/images/`:
- `winsuper-lht.jpg`
- `winmile-aw.jpg`
- `winmile-d.jpg`

The site will use placeholder icons until images are added.

## 📝 Customization

### Update Company Information

Edit `/app/layout.tsx` to change:
- Phone number
- Email address
- Business address (in JSON-LD schema)
- Website URL

### Modify Content

All section components are in `/app/components/`:
- `Hero.tsx` - Main headline and CTA buttons
- `About.tsx` - Company description
- `Products.tsx` - Product listings
- `Features.tsx` - Key benefits
- `FAQ.tsx` - Q&A section
- `Contact.tsx` - Contact form
- `Footer.tsx` - Footer links

### Styling

Global styles: `/app/globals.css`
Theme colors and fonts configured in Tailwind CSS v4 inline theme.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📞 Support

For questions, contact the development team or refer to the main README.md file.

---

Happy coding! 🎉

