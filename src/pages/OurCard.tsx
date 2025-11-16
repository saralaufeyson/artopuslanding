import React, { useState } from 'react';
import { Moon, Sun, ArrowLeft, Instagram, Facebook, ShoppingCart, Globe, Mail, MessageCircle } from 'lucide-react';

interface OurCardProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  onBack: () => void;
}

export function OurCard({ isDark, setIsDark, onBack }: OurCardProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComingSoon(true);
  };

  const links = [
    {
      icon: Instagram,
      label: 'Follow us on Instagram',
      href: 'https://www.instagram.com/artopus_india/',
      external: true,
    },
    {
      icon: Facebook,
      label: 'Like our Facebook Profile',
      href: '#',
      onClick: handleComingSoon,
    },
    {
      icon: Facebook,
      label: 'Join the Artopus Community',
      href: 'https://www.facebook.com/groups/artopusindia',
      external: true,
    },
    {
      icon: ShoppingCart,
      label: 'Shop Artopus on Amazon',
      href: 'https://www.amazon.in/s?k=artopus',
      external: true,
    },
    {
      icon: Globe,
      label: 'Official Website Coming Soon',
      href: '#',
      onClick: handleComingSoon,
    },
    {
      icon: Mail,
      label: 'Email Us',
      href: 'mailto:sasirekhacreations@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp (Link Coming Soon)',
      href: '#',
      onClick: handleComingSoon,
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50'}`}>
      <nav className={`${isDark ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-gray-700'} backdrop-blur-md shadow-sm fixed w-full z-50 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/logo.ico" alt="Artopus India" className="h-12 w-auto" />
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-200 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={onBack}
                className={`p-2 rounded-full transition-all duration-200 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <div className="flex justify-center">
              <img src="/logo.ico" alt="Artopus Logo" className="h-24 w-auto" />
            </div>
            <h1 className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Artopus India
            </h1>
            <h2 className={`text-2xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent`}>
              Create • Connect • Grow
            </h2>
          </div>

          <div className="space-y-4 pt-8">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <div key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                        isDark
                          ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                          : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm hover:shadow-lg'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{link.label}</span>
                    </a>
                  ) : (
                    <button
                      onClick={link.onClick || (() => {})}
                      className={`w-full flex items-center justify-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                        isDark
                          ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                          : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm hover:shadow-lg'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{link.label}</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <footer className={`pt-12 border-t ${isDark ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-600'}`}>
            <p>&copy; 2025 Artopus India. All rights reserved.</p>
          </footer>
        </div>
      </main>

      {showComingSoon && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setShowComingSoon(false)}
        >
          <div
            className={`${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white'
            } rounded-2xl p-8 max-w-sm mx-4 shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              🚧 Coming Soon 🚧
            </h3>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              We're working hard to bring this feature live. Stay tuned!
            </p>
            <button
              onClick={() => setShowComingSoon(false)}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
