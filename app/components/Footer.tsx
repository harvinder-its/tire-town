export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-gray-400">
            © 2025 Tire Town Distributors Ltd. | Authorized CEAT Dealer in Canada
          </p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#sitemap" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
