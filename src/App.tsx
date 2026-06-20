import React, { useState, useEffect } from 'react';
import { ShoppingBag, Package, Palette, ArrowRight, Sparkles, Moon, Sun, Users, Brush, Heart, Mail } from 'lucide-react';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { OurCard } from './pages/OurCard';

type Page = 'home' | 'privacy' | 'terms' | 'card';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
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

  if (currentPage === 'privacy') {
    return <PrivacyPolicy isDark={isDark} setIsDark={setIsDark} onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService isDark={isDark} setIsDark={setIsDark} onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'card') {
    return <OurCard isDark={isDark} setIsDark={setIsDark} onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50'}`}>
      <nav className={`${isDark ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-gray-700'} backdrop-blur-md shadow-sm fixed w-full z-50 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/logo.ico" alt="Artopus India" className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#gallery" className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-colors font-medium`}>Art Studio & Gallery</a>
              <a href="#academy" className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-colors font-medium`}>Creative Academy</a>
              <a href="#about" className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-colors font-medium`}>About</a>
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
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </nav>

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
              x
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
                <span className={`text-sm font-medium ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>Art Studio & Creative Academy</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className={`bg-gradient-to-r ${isDark ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-600 via-purple-600 to-blue-600'} bg-clip-text text-transparent`}>
                  Where Art Finds a Home.
                </span>
              </h1>

              <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Find artworks that perfectly match your style and needs. Crafted for Better Living.
              </p>

              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Style in every room. Exceptional craftsmanship at affordable prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Explore Gallery</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => document.getElementById('academy')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg border-2 transition-all duration-200 ${isDark ? 'bg-gray-800 text-purple-300 border-purple-700 hover:border-purple-500' : 'bg-white text-purple-600 border-purple-200 hover:border-purple-400'}`}
                >
                  Join Academy
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className={`text-3xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>500+</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Happy Students</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>1,000+</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Artworks Sold</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>10+</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Collections</div>
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

      {/* Branch 1: Art Studio & Gallery */}
      <section id="gallery" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gray-800/40 backdrop-blur-sm' : 'bg-white/40 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 ${isDark ? 'bg-pink-900/40 text-pink-300' : 'bg-pink-100 text-pink-700'}`}>
              <ShoppingBag className="w-5 h-5" />
              <span className="font-medium">Branch 1</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${isDark ? 'from-pink-400 to-purple-400' : 'from-pink-600 to-purple-600'} bg-clip-text text-transparent`}>
                Art Studio & Gallery
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Elevate your living spaces with handpicked artworks that blend culture, heritage, and contemporary expression.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-gradient-to-br p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${isDark ? 'from-pink-900/40 to-pink-800/40 border-pink-700 hover:border-pink-500' : 'from-pink-100 to-pink-50 border-pink-200 hover:border-pink-300'}`}>
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Brush className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Original Artworks</h3>
              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Handcrafted pieces celebrating culture, heritage, and contemporary expressions. Each artwork is unique, authentic, and tells a story.
              </p>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  <span>Canvas Paintings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  <span>Acrylic & Oil Works</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  <span>Contemporary Expressions</span>
                </li>
              </ul>
            </div>

            <div className={`bg-gradient-to-br p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${isDark ? 'from-purple-900/40 to-purple-800/40 border-purple-700 hover:border-purple-500' : 'from-purple-100 to-purple-50 border-purple-200 hover:border-purple-300'}`}>
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Artwork Prints</h3>
              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                High-quality reproductions to bring art into modern spaces. Perfect for those who appreciate fine aesthetics without compromising on quality.
              </p>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>Fine Art Prints</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>Premium Quality</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>Multiple Sizes Available</span>
                </li>
              </ul>
            </div>

            <div className={`bg-gradient-to-br p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${isDark ? 'from-blue-900/40 to-blue-800/40 border-blue-700 hover:border-blue-500' : 'from-blue-100 to-blue-50 border-blue-200 hover:border-blue-300'}`}>
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Custom Orders</h3>
              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Tailor-made commissions designed specifically for your unique space and style. Let us create the perfect piece for your vision.
              </p>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span>Personalized Artwork</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span>Size Customization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span>Style Consultation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={(e) => showComingSoon(e, 'Shop opening soon!')}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Branch 2: Creative Academy */}
      <section id="academy" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 ${isDark ? 'bg-purple-900/40 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
              <Palette className="w-5 h-5" />
              <span className="font-medium">Branch 2</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${isDark ? 'from-purple-400 to-blue-400' : 'from-purple-600 to-blue-600'} bg-clip-text text-transparent`}>
                Creative Academy
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Unlock your creative potential and elevate your artistic skills through our interactive, live educational programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${isDark ? 'bg-gray-800/60 border-purple-700 hover:border-purple-500' : 'bg-white border-purple-200 hover:border-purple-400'}`}>
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Live Art Classes</h3>
              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Interactive, live educational programs designed to help individuals unlock their creative potential and elevate their artistic skills. Learn from experienced artists in real-time.
              </p>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>Live Online Sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>Personalized Guidance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>All Skill Levels Welcome</span>
                </li>
              </ul>
            </div>

            <div className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${isDark ? 'bg-gray-800/60 border-blue-700 hover:border-blue-500' : 'bg-white border-blue-200 hover:border-blue-400'}`}>
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Our Community</h3>
              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                celebrating a thriving space of over 500 happy students who have transformed their creative journeys. Join our growing family of artists.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <div className={`text-4xl font-bold bg-gradient-to-r ${isDark ? 'from-purple-400 to-blue-400' : 'from-purple-600 to-blue-600'} bg-clip-text text-transparent`}>500+</div>
                <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  <p className="font-semibold">Happy Students</p>
                  <p className="text-sm">Transformed their creative journeys</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`max-w-2xl mx-auto mt-16 p-8 rounded-3xl border ${isDark ? 'bg-gray-900/60 border-purple-800' : 'bg-white border-purple-100'} shadow-xl`}>
            <div className="text-center mb-8">
              <h4 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Register for Live Art Classes</h4>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Age group: 5-18 years - Online sessions via Zoom/Google Meet</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                console.log('Form data:', data);
                fetch('https://api.example.com/register-class', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data),
                }).finally(() => {
                  showComingSoon(undefined, 'Registration successful! We will contact you soon.');
                  (e.target as HTMLFormElement).reset();
                });
              }}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Student Name</label>
                  <input required name="studentName" type="text" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none transition-all ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Age</label>
                  <input required name="age" type="number" min="5" max="18" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none transition-all ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Parent's Email</label>
                <input required name="email" type="email" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none transition-all ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>WhatsApp Number</label>
                <input required name="phone" type="tel" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none transition-all ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gray-800/40 backdrop-blur-sm' : 'bg-white/40 backdrop-blur-sm'}`}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className={`bg-gradient-to-r ${isDark ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-600 via-purple-600 to-blue-600'} bg-clip-text text-transparent`}>
              About Artopus India
            </span>
          </h2>
          <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            We are a creative platform dedicated to celebrating art and the artists behind it by helping art find a home through creativity, passion, and expression.
          </p>
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900/60' : 'bg-white'} shadow-lg`}>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Our commitment: <span className="font-semibold">Exceptional craftsmanship at affordable prices.</span>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${isDark ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-600 via-purple-600 to-blue-600'} bg-clip-text text-transparent`}>
                How It Works
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
                1
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Browse Collections</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Explore our curated selection of original paintings, prints, and custom order options in the Art Studio & Gallery.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
                2
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Become a Student</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Enroll in our Creative Academy and join 500+ students on their artistic journey.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
                3
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Create & Enjoy</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Own beautiful art for your space and develop your creative skills with Artopus India.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-pink-600/80 via-purple-600/80 to-blue-600/80' : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'}`}>
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Where Art Finds a Home
          </h2>
          <p className="text-xl opacity-90">
            Style in every room. Exceptional craftsmanship at affordable prices. Join us in celebrating creativity and bringing beautiful art into your world.
          </p>
          <button
            onClick={(e) => showComingSoon(e)}
            className={`px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 ${isDark ? 'bg-gray-900 text-purple-300 hover:text-purple-200' : 'bg-white text-purple-600'}`}
          >
            Explore Gallery
          </button>
        </div>
      </section>

      <footer className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-900 text-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.ico" alt="Artopus India" className="h-12 w-auto mb-4" />
              <p className={isDark ? 'text-gray-500' : 'text-gray-400'}>Where Art Finds a Home</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Art Studio & Gallery</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400'}`}>
                <li><a href="#gallery" className="hover:text-white transition-colors">Original Artworks</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Artwork Prints</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Custom Orders</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Creative Academy</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400'}`}>
                <li><a href="#academy" className="hover:text-white transition-colors">Live Art Classes</a></li>
                <li><a href="#academy" className="hover:text-white transition-colors">Our Community</a></li>
                <li><button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors text-left">Terms of Service</button></li>
                <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400'}`}>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:sasirekhacreations@gmail.com" className="hover:text-white transition-colors">sasirekhacreations@gmail.com</a>
                </li>
                <li><button onClick={() => setCurrentPage('card')} className="hover:text-white transition-colors text-left">Our Card</button></li>
                <li><a href="https://www.instagram.com/artopus_india/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.facebook.com/groups/artopusindia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className={`border-t pt-8 text-center ${isDark ? 'border-gray-800 text-gray-500' : 'border-gray-800 text-gray-400'}`}>
            <p>&copy; 2026 Artopus India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
