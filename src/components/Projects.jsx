import { Brain, Database, TrendingUp, Zap, Settings, BarChart3 } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-48 h-48 bg-blue-500 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-36 h-36 bg-indigo-500 rounded-full animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up group">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 relative overflow-hidden">
              {/* Animated background elements in header */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-300 rounded-full animate-bounce"></div>
              </div>

              <div className="flex items-center space-x-4 mb-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Predictive Maintenance for Machines using ML</h3>
              </div>
              <p className="text-blue-100 text-xl relative z-10 group-hover:translate-x-1 transition-transform duration-500">
                Advanced machine learning system for industrial equipment maintenance optimization
              </p>
            </div>

            <div className="p-10">
              <p className="text-gray-700 text-xl mb-10 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Developed a comprehensive ML-based system to analyze real-time and historical sensor data,
                predicting machine failures to optimize maintenance schedules. The solution enhanced operational
                efficiency, reduced downtime, and minimized maintenance costs across industrial operations.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors duration-300">Key Features</h4>

                  <div className="flex items-start space-x-4 p-5 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 group/item">
                    <div className="p-3 bg-blue-100 rounded-xl group-hover/item:bg-blue-200 transition-all duration-300 group-hover/item:rotate-12">
                      <Database className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 text-lg mb-2 group-hover/item:text-blue-700 transition-colors duration-300">Real-time Data Analysis</h5>
                      <p className="text-gray-600">Continuous monitoring and analysis of sensor data streams</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-5 rounded-2xl hover:bg-green-50 transition-all duration-300 hover:scale-105 group/item">
                    <div className="p-3 bg-green-100 rounded-xl group-hover/item:bg-green-200 transition-all duration-300 group-hover/item:rotate-12">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 text-lg mb-2 group-hover/item:text-green-700 transition-colors duration-300">Predictive Analytics</h5>
                      <p className="text-gray-600">Advanced algorithms for failure prediction and trend analysis</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-5 rounded-2xl hover:bg-purple-50 transition-all duration-300 hover:scale-105 group/item">
                    <div className="p-3 bg-purple-100 rounded-xl group-hover/item:bg-purple-200 transition-all duration-300 group-hover/item:rotate-12">
                      <Settings className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 text-lg mb-2 group-hover/item:text-purple-700 transition-colors duration-300">Maintenance Optimization</h5>
                      <p className="text-gray-600">Intelligent scheduling to minimize downtime and costs</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors duration-300">Impact & Results</h4>

                  <div className="flex items-start space-x-4 p-5 rounded-2xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 group/item">
                    <div className="p-3 bg-orange-100 rounded-xl group-hover/item:bg-orange-200 transition-all duration-300 group-hover/item:rotate-12">
                      <Zap className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 text-lg mb-2 group-hover/item:text-orange-700 transition-colors duration-300">Enhanced Efficiency</h5>
                      <p className="text-gray-600">Significant improvement in operational efficiency metrics</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-5 rounded-2xl hover:bg-red-50 transition-all duration-300 hover:scale-105 group/item">
                    <div className="p-3 bg-red-100 rounded-xl group-hover/item:bg-red-200 transition-all duration-300 group-hover/item:rotate-12">
                      <BarChart3 className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 text-lg mb-2 group-hover/item:text-red-700 transition-colors duration-300">Reduced Downtime</h5>
                      <p className="text-gray-600">Proactive maintenance reduced unexpected equipment failures</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:scale-105">
                    <h5 className="font-bold text-gray-800 mb-4 text-lg">Technologies Used</h5>
                    <div className="flex flex-wrap gap-3">
                      {["Python", "Machine Learning", "Data Analytics", "Sensor Integration", "Predictive Modeling"].map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 hover:scale-110 transition-all duration-300 cursor-default"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Projects;