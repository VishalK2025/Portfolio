import { Calendar, MapPin, Zap, TrendingUp, Cpu, BarChart3 } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500 rounded-full animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up">
          Professional Experience
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border-l-8 border-blue-500 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up group">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="group-hover:translate-x-2 transition-transform duration-500">
                <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">Machine Learning Intern</h3>
                <p className="text-2xl text-blue-600 font-semibold mb-3 group-hover:text-blue-700 transition-colors duration-300">VP Electronics</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600">
                  <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
                    <Calendar className="w-5 h-5" />
                    <span>June 2024 – November 2024</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                    <span>New Delhi, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 group/item">
                  <div className="p-3 bg-blue-100 rounded-xl group-hover/item:bg-blue-200 transition-colors duration-300 group-hover/item:rotate-6">
                    <Cpu className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg group-hover/item:text-blue-700 transition-colors duration-300">Predictive Maintenance System</h4>
                    <p className="text-gray-600">Developed ML-based system analyzing real-time and historical sensor data from semiconductor devices</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-green-50 transition-all duration-300 hover:scale-105 group/item">
                  <div className="p-3 bg-green-100 rounded-xl group-hover/item:bg-green-200 transition-colors duration-300 group-hover/item:rotate-6">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg group-hover/item:text-green-700 transition-colors duration-300">Failure Prediction</h4>
                    <p className="text-gray-600">Predicted potential failures to optimize maintenance schedules and reduce downtime</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-purple-50 transition-all duration-300 hover:scale-105 group/item">
                  <div className="p-3 bg-purple-100 rounded-xl group-hover/item:bg-purple-200 transition-colors duration-300 group-hover/item:rotate-6">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg group-hover/item:text-purple-700 transition-colors duration-300">Operational Efficiency</h4>
                    <p className="text-gray-600">Enhanced operational efficiency and minimized maintenance costs through intelligent automation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 group/item">
                  <div className="p-3 bg-orange-100 rounded-xl group-hover/item:bg-orange-200 transition-colors duration-300 group-hover/item:rotate-6">
                    <BarChart3 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg group-hover/item:text-orange-700 transition-colors duration-300">Analytics Expertise</h4>
                    <p className="text-gray-600">Gained hands-on experience in semiconductor device analytics and ML model implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;