import { Moon, Sun, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  onBack: () => void;
}

export function PrivacyPolicy({ isDark, setIsDark, onBack }: PrivacyPolicyProps) {
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
        <div className="max-w-4xl mx-auto">
          <article className={`${isDark ? 'text-gray-300' : 'text-gray-800'} space-y-8`}>
            <h1 className={`text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Privacy Policy for Artopus India
            </h1>

            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Effective Date: November 16, 2025
            </p>

            <section className="space-y-4">
              <p>
                Artopus India ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.artopusindia.com or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Information We Collect</h2>
              <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <li><strong>Personal Information:</strong> Name, email address, phone number, billing and shipping address, payment information.</li>
                <li><strong>Artwork Information:</strong> Details related to artworks you sell or buy.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, visit times, and other technical data.</li>
                <li><strong>Cookies:</strong> To enhance your experience and gather analytics.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>How We Use Your Information</h2>
              <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <li>To provide and maintain our services.</li>
                <li>Process transactions and send confirmations.</li>
                <li>Communicate important updates and marketing.</li>
                <li>Improve website functionality and user experience.</li>
                <li>Fulfill legal and regulatory obligations.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Legal Compliance and Data Protection in India</h2>
              <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <li>We comply with the Information Technology Act 2000 and Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.</li>
                <li>Sensitive personal data, including financial and authentication details, is collected only with explicit consent and protected with stringent security measures.</li>
                <li>Personal data collected in India is stored and processed within India; cross-border data transfer will have necessary safeguards and user consent.</li>
                <li>Data is retained only as long as necessary for the purpose collected.</li>
                <li>You have rights to access, correct, update, or delete your personal information as per Indian laws.</li>
                <li>You may withdraw consent at any time for data processing requiring it.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Sharing Your Information</h2>
              <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <li>With service providers supporting payments, delivery, and marketing.</li>
                <li>To comply with laws, legal processes, or to protect rights.</li>
                <li>We do not sell your information to third parties.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Security of Your Information</h2>
              <p>
                We take reasonable technical and organizational measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Your Rights and Choices</h2>
              <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <li>Access and update your information through your account.</li>
                <li>Opt-out of marketing emails anytime.</li>
                <li>Contact us for data deletion or privacy concerns.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Grievance Officer</h2>
              <p>
                For privacy-related complaints, contact our Grievance Officer at <a href="mailto:grievance@artopusindia.com" className="text-purple-500 hover:text-purple-600">grievance@artopusindia.com</a>.
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
