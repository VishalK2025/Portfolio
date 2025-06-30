import { Code, Cpu, Globe, Heart, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C", "C++", "Data Structures & Algorithms", "Machine Learning"],
      color: "blue"
    },
    {
      title: "Core Skills",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Deep Subjective Knowledge", "Circuit Designing", "Semiconductor Analytics"],
      color: "green"
    },
    {
      title: "Languages",
      icon: <Globe className="w-6 h-6" />,
      skills: ["English", "Hindi"],
      color: "purple"
    },
    {
      title: "Soft Skills",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Typing Speed 60+ WPM", "Basic Computer Knowledge", "Problem Solving"],
      color: "orange"
    },
    {
      title: "Hobbies",
      icon: <Heart className="w-6 h-6" />,
      skills: ["Singing", "Indoor Games", "Outdoor Games"],
      color: "pink"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100",
      green: "bg-green-50 border-green-200 text-green-800 hover:bg-green-100",
      purple: "bg-purple-50 border-purple-200 text-purple-800 hover:bg-purple-100",
      orange: "bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100",
      pink: "bg-pink-50 border-pink-200 text-pink-800 hover:bg-pink-100"
    };
    return colors[color];
  };

  const getIconColorClasses = (color) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100 group-hover:bg-blue-200",
      green: "text-green-600 bg-green-100 group-hover:bg-green-200",
      purple: "text-purple-600 bg-purple-100 group-hover:bg-purple-200",
      orange: "text-orange-600 bg-orange-100 group-hover:bg-orange-200",
      pink: "text-pink-600 bg-pink-100 group-hover:bg-pink-200"
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-2xl transition-all duration-300 group-hover:rotate-12 ${getIconColorClasses(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 ml-4 group-hover:text-blue-600 transition-colors duration-300">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default ${getColorClasses(category.color)} mr-2 mb-2`}
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;