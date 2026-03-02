import React, { useState, useEffect } from 'react';
import { ShoppingBag, Package, Heart, ArrowRight, Sparkles, Moon, Sun } from 'lucide-react';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { OurCard } from './pages/OurCard';

type Page = 'home' | 'privacy' | 'terms' | 'card';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeTab, setActiveTab] = useState<'shop' | 'classes'>('shop');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (activeTab === 'classes') {
      const timer = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % 4); // Show 3 items at a time, so 6 items total, 4 steps if we move by 1 each time?
        // Actually for a simple loop, let's just do it simply.
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [activeTab]);
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
             
              <a href="#community" className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-colors font-medium`}>About</a>
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
                onClick={() => {
                  setActiveTab('shop');
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Shop Now
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
                <span className={`text-sm font-medium ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>Original Art & Creative Education</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className={`bg-gradient-to-r ${isDark ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-600 via-purple-600 to-blue-600'} bg-clip-text text-transparent`}>
                  Discover Original Art. Elevate Your Skills. Own the Canvas.
                </span>
              </h1>

              <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Handpicked paintings, prints, digital art, and stickers—plus live art classes to unlock your creative potential.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setActiveTab('shop');
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Shop Art Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setActiveTab('classes');
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg border-2 transition-all duration-200 ${isDark ? 'bg-gray-800 text-purple-300 border-purple-700 hover:border-purple-500' : 'bg-white text-purple-600 border-purple-200 hover:border-purple-400'}`}
                >
                  Explore Classes
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

      <section id="features" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gray-800/40 backdrop-blur-sm' : 'bg-white/40 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className={`inline-flex p-1 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <button
                onClick={() => setActiveTab('shop')}
                className={`px-8 py-3 rounded-lg font-bold transition-all duration-200 ${
                  activeTab === 'shop'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                    : `${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => setActiveTab('classes')}
                className={`px-8 py-3 rounded-lg font-bold transition-all duration-200 ${
                  activeTab === 'classes'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : `${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              >
                Classes
              </button>
            </div>
          </div>

          {activeTab === 'shop' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
              <div className={`bg-gradient-to-br p-8 rounded-2xl border transition-all duration-300 ${isDark ? 'from-pink-900/40 to-pink-800/40 border-pink-700' : 'from-pink-100 to-pink-50 border-pink-200'}`}>
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <ShoppingBag className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Original Artwork</h3>
                <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Discover hand-painted masterpieces, ranging from abstract to contemporary realism. Each piece is unique and comes with a certificate of authenticity.
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
                    <span>Custom Commissions</span>
                  </li>
                </ul>
              </div>

              <div className={`bg-gradient-to-br p-8 rounded-2xl border transition-all duration-300 ${isDark ? 'from-purple-900/40 to-purple-800/40 border-purple-700' : 'from-purple-100 to-purple-50 border-purple-200'}`}>
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Art Products</h3>
                <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Take art with you wherever you go. Our high-quality products feature original designs printed with precision.
                </p>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <span>Fine Art Prints</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <span>Vinyl Stickers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <span>Artistic Stationery</span>
                  </li>
                </ul>
              </div>

              <div className={`bg-gradient-to-br p-8 rounded-2xl border transition-all duration-300 ${isDark ? 'from-blue-900/40 to-blue-800/40 border-blue-700' : 'from-blue-100 to-blue-50 border-blue-200'}`}>
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Outlined Canvas</h3>
                <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Enjoy Painting your favorite peices without the worry of drawing, - Colur it your way !
                </p>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span>Outlined canvas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span>High Quality prints</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span>Concept Art</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="animate-fadeIn space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Artopus Drawing Class</h3>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Unleash your inner artist with our professional drawing classes. We offer personalized guidance to help you master various techniques and find your unique style.
                </p>
              </div>

              {/* Simple Carousel */}
              <div className="relative overflow-hidden rounded-3xl group px-12">
                <div 
                  className="flex transition-transform duration-700 ease-in-out" 
                  style={{ transform: `translateX(-${carouselIndex * (100 / (window.innerWidth < 768 ? 1 : 3))}%)` }}
                >
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="min-w-full md:min-w-[33.33%] px-2">
                      <div className={`aspect-video rounded-2xl flex items-center justify-center border-2 border-dashed ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
                        <div className="text-center">
                          <Sparkles className={`w-8 h-8 mx-auto mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                          <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>Art Sample {i}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setCarouselIndex((prev) => (prev - 1 + 4) % 4)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ArrowRight className="w-6 h-6 rotate-180" />
                </button>
                <button 
                  onClick={() => setCarouselIndex((prev) => (prev + 1) % 4)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              <div className={`max-w-2xl mx-auto p-8 rounded-3xl border ${isDark ? 'bg-gray-900/60 border-purple-800' : 'bg-white border-purple-100'} shadow-xl`}>
                <div className="text-center mb-8">
                  <h4 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Register for Online Classes</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Age group: 5-18 years • Online sessions via Zoom/Google Meet</p>
                </div>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData.entries());
                    console.log('Form data:', data);
                    // Connection to Excel (Placeholder URL)
                    // In a real scenario, this would be a POST to something like sheet.best or a backend
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
          )}
        </div>
      </section>

      <section id="how-it-works" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
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
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Explore our curated selection of original paintings, prints, stickers, and digital art.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
                2
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Are you an artist?</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Enroll as an artist to our platform and showcase your talent.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
                3
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Create & Enjoy</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Own beautiful art for your space and develop your creative skills with us.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-pink-600/80 via-purple-600/80 to-blue-600/80' : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'}`}>
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Artopus India: Where Creativity Comes to Life
          </h2>
          <p className="text-xl opacity-90">
            We curate exceptional art and share our passion through hands-on classes. Join us in celebrating creativity and bringing beautiful art into your world.
          </p>
          <button
            onClick={(e) => showComingSoon(e)}
            className={`px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 ${isDark ? 'bg-gray-900 text-purple-300 hover:text-purple-200' : 'bg-white text-purple-600'}`}
          >
            Explore Shop
          </button>
        </div>
      </section>

      <footer className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-900 text-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.ico" alt="Artopus India" className="h-12 w-auto mb-4" />
              <p className={isDark ? 'text-gray-500' : 'text-gray-400'}>Bringing creativity and art education to life</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400'}`}>
                <li><a href="#" className="hover:text-white transition-colors">Paintings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Prints</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Stickers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400'}`}>
                <li><a href="#" className="hover:text-white transition-colors">Art Classes</a></li>
                <li><button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors text-left">Terms of Service</button></li>
                <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400'}`}>
                <li><button onClick={() => setCurrentPage('card')} className="hover:text-white transition-colors text-left">Our Card</button></li>
                <li><a href="https://www.instagram.com/artopus_india/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.facebook.com/groups/artopusindia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
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
