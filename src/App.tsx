import React, { useState, useEffect } from 'react';
import { Palette, TrendingUp, Trophy, Users, ArrowRight, Sparkles, Moon, Sun } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [toast, setToast] = useState<{ visible: boolean; message: string }>({ visible: false, message: '' });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50'}`}>
      <nav className={`${isDark ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-gray-700'} backdrop-blur-md shadow-sm fixed w-full z-50 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/logo.ico" alt="Artopus India" className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-colors font-medium`}>Features</a>
              <a href="#how-it-works" className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-colors font-medium`}>How It Works</a>
              <a href="#community" className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-colors font-medium`}>Community</a>
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
                onClick={(e) => showComingSoon(e)}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Toast: simple info banner */}
      {toast.visible && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-60">
          <div className={`max-w-md ${isDark ? 'bg-blue-950 border-blue-800 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-800'} border px-4 py-3 rounded-lg shadow-md flex items-center space-x-3 transition-colors duration-300`}>
            <span className={`inline-flex items-center justify-center w-8 h-8 ${isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} rounded-full font-semibold`}>i</span>
            <div className="flex-1 text-sm">{toast.message}</div>
            <button
              onClick={() => setToast({ visible: false, message: '' })}
              className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-bold px-2 transition-colors`}
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
              <div className={`inline-flex items-center space-x-2 backdrop-blur-sm px-4 py-2 rounded-full border transition-colors duration-300 ${isDark ? 'bg-gray-800/60 border-purple-800' : 'bg-white/60 border-purple-200'}`}>
                <Sparkles className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className={`text-sm font-medium ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>India's Creative Marketplace</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className={`bg-gradient-to-r ${isDark ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-600 via-purple-600 to-blue-600'} bg-clip-text text-transparent`}>
                  Where Art Meets Opportunity
                </span>
              </h1>

              <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                  className={`px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg border-2 transition-all duration-200 ${isDark ? 'bg-gray-800 text-purple-300 border-purple-700 hover:border-purple-500' : 'bg-white text-purple-600 border-purple-200 hover:border-purple-400'}`}
                >
                  Explore Art
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className={`text-3xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>100+</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Artists</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>100+</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Artworks</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>10+</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Competitions</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className={`relative backdrop-blur-md p-8 rounded-3xl shadow-2xl border transition-colors duration-300 ${isDark ? 'bg-gray-800/60 border-gray-700' : 'bg-white/60 border-white/50'}`}>
                <img src="/logo.ico" alt="Artopus India" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gray-800/40 backdrop-blur-sm' : 'bg-white/40 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${isDark ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-600 via-purple-600 to-blue-600'} bg-clip-text text-transparent`}>
                Why Choose Artopus India?
              </span>
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Everything you need to thrive as an artist in one powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`bg-gradient-to-br p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${isDark ? 'from-pink-900/40 to-pink-800/40 border-pink-700' : 'from-pink-100 to-pink-50 border-pink-200'}`}>
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Easy Selling</h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                List your artwork in minutes. Reach thousands of art enthusiasts ready to discover your talent.
              </p>
            </div>

            <div className={`bg-gradient-to-br p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${isDark ? 'from-purple-900/40 to-purple-800/40 border-purple-700' : 'from-purple-100 to-purple-50 border-purple-200'}`}>
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Low Commission</h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Keep more of what you earn. Our minimal fees mean maximum profit for your creativity.
              </p>
            </div>

            <div className={`bg-gradient-to-br p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${isDark ? 'from-blue-900/40 to-blue-800/40 border-blue-700' : 'from-blue-100 to-blue-50 border-blue-200'}`}>
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Art Competitions</h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Showcase your skills in exciting competitions. Win prizes, recognition, and new opportunities.
              </p>
            </div>

            <div className={`bg-gradient-to-br p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${isDark ? 'from-pink-900/40 via-purple-900/40 to-blue-900/40 border-purple-700' : 'from-pink-100 via-purple-100 to-blue-100 border-purple-200'}`}>
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Quick Registration</h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Get started in seconds. No complicated forms, just your passion for art and you're ready to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${isDark ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-600 via-purple-600 to-blue-600'} bg-clip-text text-transparent`}>
                Get Started in 3 Simple Steps
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
                1
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Sign Up</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Create your account in under a minute with minimal information required.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
                2
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Upload Art</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Share your masterpieces with our vibrant community of art lovers.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
                3
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Start Earning</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Sell your art, join competitions, and grow your creative career.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-pink-600/80 via-purple-600/80 to-blue-600/80' : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'}`}>
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Join India's Most Vibrant Art Community
          </h2>
          <p className="text-xl opacity-90">
            Be part of a movement that celebrates creativity, supports artists, and makes art accessible to everyone.
          </p>
          <button
            onClick={(e) => showComingSoon(e)}
            className={`px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 ${isDark ? 'bg-gray-900 text-purple-300 hover:text-purple-200' : 'bg-white text-purple-600'}`}
          >
            Join Now - It's Free!
          </button>
        </div>
      </section>

      <footer className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-900 text-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.ico" alt="Artopus India" className="h-12 w-auto mb-4" />
              <p className={isDark ? 'text-gray-500' : 'text-gray-400'}>Empowering artists across India</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400'}`}>
                <li><a href="#" className="hover:text-white transition-colors">Sell Art</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Buy Art</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Competitions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400'}`}>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400'}`}>
                <li><a href="https://saralaufeyson.github.io/ArtopusIndia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Our Card</a></li>
                <li><a href="https://www.instagram.com/artopus_india/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className={`border-t pt-8 text-center ${isDark ? 'border-gray-800 text-gray-500' : 'border-gray-800 text-gray-400'}`}>
            <p>&copy; 2025 Artopus India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
