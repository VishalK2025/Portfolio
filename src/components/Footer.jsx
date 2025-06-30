const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-1/4 w-16 h-16 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-1/4 w-12 h-12 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="mb-6 md:mb-0 animate-fade-in-up">
            <p className="text-gray-400 text-lg text-center">
              © 2025 Vishal Khandelwal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
