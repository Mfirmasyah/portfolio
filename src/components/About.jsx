import { Code2, User, Briefcase, GraduationCap } from 'lucide-react'

export default function About() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 70 },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50 transition-colors">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <User className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold transition-colors">ABOUT ME</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white transition-colors">
            Get to <span className="text-blue-600 dark:text-blue-400">Know</span> Me
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors">
            Passionate developer with 2+ years of experience building web applications. 
            I love turning complex problems into simple, beautiful designs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white transition-colors">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Experience
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors">
                  <h4 className="text-lg font-bold dark:text-white">Frontend Developer</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2 transition-colors">Tech Startup • 2022 - Present</p>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">
                    Built responsive web applications using React and Next.js, improved performance by 40%.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors">
                  <h4 className="text-lg font-bold dark:text-white">Web Developer Intern</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2 transition-colors">Digital Agency • 2021 - 2022</p>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">
                    Developed client websites and maintained existing projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white transition-colors">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </h3>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors">
                <h4 className="text-lg font-bold dark:text-white">Computer Science</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-2 transition-colors">University of Technology • 2018 - 2022</p>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  Focus on software engineering, web technologies, and database management.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white transition-colors">
                <Code2 className="w-6 h-6 text-blue-600" />
                Skills
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium dark:text-gray-300 transition-colors">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400 transition-colors">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden transition-colors">
                      <div 
                        className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}