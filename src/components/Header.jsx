import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0 animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent animate-gradient-x">
              Vishal Khandelwal
            </h1>
            <p className="text-2xl lg:text-3xl text-blue-100 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Machine Learning Engineer & Electronics Specialist
            </p>
            <p className="text-lg text-blue-50 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Passionate about developing intelligent systems for predictive maintenance and semiconductor analytics.
              Combining deep technical knowledge in electronics with cutting-edge machine learning techniques.
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105 animate-fade-in-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-blue-50 hover:text-white transition-colors duration-300 group">
                <div className="p-2 bg-blue-500/30 rounded-lg group-hover:bg-blue-400/40 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-4 text-blue-50 hover:text-white transition-colors duration-300 group">
                <div className="p-2 bg-green-500/30 rounded-lg group-hover:bg-green-400/40 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-green-200 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">+91-9205709986</span>
              </div>
              <div className="flex items-center space-x-4 text-blue-50 hover:text-white transition-colors duration-300 group">
                <div className="p-2 bg-purple-500/30 rounded-lg group-hover:bg-purple-400/40 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Khandelwalvishal341@gmail.com</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8 pt-6 border-t border-white/30">
              <a href="https://github.com/VishalK2025" className="p-3 bg-white/15 rounded-xl hover:bg-white/25 transition-all duration-300 hover:scale-110 hover:rotate-6 group">
                <Github className="w-6 h-6 group-hover:text-blue-200 transition-colors duration-300" />
              </a>
              <a href="https://in.linkedin.com/in/vishal-khandelwal-4922482a2" className="p-3 bg-white/15 rounded-xl hover:bg-white/25 transition-all duration-300 hover:scale-110 hover:-rotate-6 group">
                <Linkedin className="w-6 h-6 group-hover:text-blue-200 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;