import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Electrical and Electronics Engineering",
      institution: "Maharaja Agrasen Institute of Technology",
      university: "Guru Gobind Singh Indraprastha University",
      duration: "August 2021 – 2025",
      location: "Delhi, India",
      status: "Pursuing",
      color: "blue"
    },
    {
      degree: "AISSCE - Intermediate (12th)",
      institution: "Vidya Mandir Public School",
      university: "CBSE Board",
      duration: "June 2020 – June 2021",
      location: "Faridabad, Haryana, India",
      percentage: "90%",
      color: "green"
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Rawat Public School",
      university: "CBSE Board",
      duration: "June 2018 – June 2019",
      location: "Jaipur, Rajasthan, India",
      percentage: "90%",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "border-blue-500 bg-blue-50 hover:bg-blue-100",
      green: "border-green-500 bg-green-50 hover:bg-green-100",
      purple: "border-purple-500 bg-purple-50 hover:bg-purple-100"
    };
    return colors[color];
  };

  const getIconColorClasses = (color) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100 group-hover:bg-blue-200",
      green: "text-green-600 bg-green-100 group-hover:bg-green-200",
      purple: "text-purple-600 bg-purple-100 group-hover:bg-purple-200"
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up">
          Education
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-xl p-8 border-l-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 group animate-fade-in-up ${getColorClasses(edu.color)}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`p-4 rounded-2xl transition-all duration-300 group-hover:rotate-12 ${getIconColorClasses(edu.color)}`}>
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{edu.degree}</h3>
                      <p className="text-xl text-gray-700 font-semibold mb-1">{edu.institution}</p>
                      <p className="text-gray-600 text-lg">{edu.university}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-3 sm:space-y-0 text-gray-600 ml-20">
                    <div className="flex items-center space-x-3 hover:text-blue-600 transition-colors duration-300 group/item">
                      <Calendar className="w-5 h-5 group-hover/item:rotate-12 transition-transform duration-300" />
                      <span className="group-hover/item:translate-x-1 transition-transform duration-300">{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:text-blue-600 transition-colors duration-300 group/item">
                      <MapPin className="w-5 h-5 group-hover/item:rotate-12 transition-transform duration-300" />
                      <span className="group-hover/item:translate-x-1 transition-transform duration-300">{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:ml-8">
                  {edu.percentage && (
                    <div className="flex items-center space-x-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl px-6 py-4 hover:from-yellow-100 hover:to-orange-100 transition-all duration-300 hover:scale-110 group/badge">
                      <Award className="w-6 h-6 text-yellow-600 group-hover/badge:rotate-12 transition-transform duration-300" />
                      <span className="font-bold text-gray-800 text-lg">{edu.percentage}</span>
                    </div>
                  )}
                  {edu.status && (
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-2xl px-6 py-4 font-bold text-lg hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 hover:scale-110">
                      {edu.status}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;