import React, { useState, useEffect } from 'react';
import { Palette, TrendingUp, Trophy, Users, ArrowRight, Sparkles } from 'lucide-react';

function App() {
  // Toast state and handler
  const [toast, setToast] = useState<{ visible: boolean; message: string }>({ visible: false, message: '' });

  useEffect(() => {
    let t: number | undefined;
    if (toast.visible) {
      t = window.setTimeout(() => setToast({ visible: false, message: '' }), 3000);
    }
    return () => {
      if (t) clearTimeout(t);
    };
  }, [toast.visible]);

  const showComingSoon = (e?: React.MouseEvent, msg = 'Coming soon!') => {
    e?.preventDefault();
    setToast({ visible: true, message: msg });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/logo.ico" alt="Artopus India" className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">How It Works</a>
              <a href="#community" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Community</a>
            </div>
            <button
              onClick={(e) => showComingSoon(e)}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Toast: simple info banner */}
      {toast.visible && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-60">
          <div className="max-w-md bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg shadow-md flex items-center space-x-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full font-semibold">i</span>
            <div className="flex-1 text-sm">{toast.message}</div>
            <button
              onClick={() => setToast({ visible: false, message: '' })}
              className="text-blue-600 hover:text-blue-800 font-bold px-2"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">India's Creative Marketplace</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Where Art Meets Opportunity
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                Join India's fastest-growing art community. Sell your masterpieces, discover incredible artwork,
                and compete in thrilling art competitions—all with minimal hassle and maximum rewards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={(e) => showComingSoon(e)}
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Start Creating</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => showComingSoon(e)}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-200"
                >
                  Explore Art
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600">Artists</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600">100+</div>
                  <div className="text-sm text-gray-600">Artworks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Competitions</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50">
                <img src="/logo.ico" alt="Artopus India" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Why Choose Artopus India?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to thrive as an artist in one powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Easy Selling</h3>
              <p className="text-gray-600 leading-relaxed">
                List your artwork in minutes. Reach thousands of art enthusiasts ready to discover your talent.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Low Commission</h3>
              <p className="text-gray-600 leading-relaxed">
                Keep more of what you earn. Our minimal fees mean maximum profit for your creativity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Art Competitions</h3>
              <p className="text-gray-600 leading-relaxed">
                Showcase your skills in exciting competitions. Win prizes, recognition, and new opportunities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quick Registration</h3>
              <p className="text-gray-600 leading-relaxed">
                Get started in seconds. No complicated forms, just your passion for art and you're ready to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Get Started in 3 Simple Steps
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Sign Up</h3>
              <p className="text-gray-600">Create your account in under a minute with minimal information required.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Upload Art</h3>
              <p className="text-gray-600">Share your masterpieces with our vibrant community of art lovers.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Start Earning</h3>
              <p className="text-gray-600">Sell your art, join competitions, and grow your creative career.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Join India's Most Vibrant Art Community
          </h2>
          <p className="text-xl opacity-90">
            Be part of a movement that celebrates creativity, supports artists, and makes art accessible to everyone.
          </p>
          <button
            onClick={(e) => showComingSoon(e)}
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Join Now - It's Free!
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.ico" alt="Artopus India" className="h-12 w-auto mb-4" />
              <p className="text-gray-400">Empowering artists across India</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sell Art</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Buy Art</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Competitions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://saralaufeyson.github.io/ArtopusIndia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Our Card</a></li>
                <li><a href="https://www.instagram.com/artopus_india/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Artopus India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
