import { Moon, Sun, ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  onBack: () => void;
}

export function TermsOfService({ isDark, setIsDark, onBack }: TermsOfServiceProps) {
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
              Terms of Service for Artopus India
            </h1>

            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Effective Date: November 16, 2025
            </p>

            <section className="space-y-4">
              <p>
                Welcome to Artopus India. By using our website and services, you agree to the following terms:
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Eligibility</h2>
              <p>
                You must be at least 18 years old and capable of entering legally binding contracts under Indian law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Account Responsibilities</h2>
              <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <li>Provide accurate and complete information.</li>
                <li>Keep your login credentials confidential.</li>
                <li>Notify us of any unauthorized use.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Buying and Selling on Artopus India</h2>
              <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <li>Sellers retain ownership of artworks but grant us rights to display, market, and sell.</li>
                <li>Artworks listed must be original, lawful, and non-infringing.</li>
                <li>Buyers agree to pay the listed price and applicable fees.</li>
                <li>We facilitate transactions and may charge commissions or fees.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Prohibited Activities</h2>
              <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <li>Listing illegal, counterfeit, stolen, or infringing artworks.</li>
                <li>Using the platform for harassment, fraud, or unlawful behavior.</li>
                <li>Violating intellectual property rights.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Intellectual Property</h2>
              <p>
                All content on the site is owned or licensed by Artopus India or users. Use for personal, non-commercial purposes only unless authorized.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Limitation of Liability</h2>
              <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <li>Services are provided "as is" without warranties.</li>
                <li>Artopus India is not liable for damages from use or inability to use the platform.</li>
                <li>Users indemnify Artopus India against claims arising from misuse or violation of laws.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Governing Law and Jurisdiction</h2>
              <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <li>These Terms are governed by the laws of India, including the IT Act 2000.</li>
                <li>Disputes shall be resolved exclusively in courts located in Bangalore, India.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Electronic Communications</h2>
              <p>
                Electronic contracts and records formed through the platform are valid and binding under Indian law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Amendments</h2>
              <p>
                We may update these Terms and Privacy Policy. Continued use means acceptance of changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Us</h2>
              <p>
                For support or inquiries, email <a href="mailto:support@artopusindia.com" className="text-purple-500 hover:text-purple-600">support@artopusindia.com</a>.
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
