export default function Footer() {
  const footerLinks = {
    "Liens rapides": [
      { label: "Accueil", href: "#" },
      { label: "Formules", href: "#" },
      { label: "Contact", href: "#" }
    ],
    "Légal": [
      { label: "Mentions légales", href: "#" },
      { label: "CGV", href: "#" }
    ],
    "Contact": [
      { label: "Réserver un appel", href: "#" },
      { label: "Nous écrire", href: "#" }
    ]
  };

  return (
    <footer className="bg-[#010101] border-t border-t-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <img src="/logo.svg" alt="" />
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sovita. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}