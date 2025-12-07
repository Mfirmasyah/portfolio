import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900/50 dark:to-gray-800/50 transition-colors"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full transition-colors">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="font-medium">Available for opportunities</span>
          </div>
        </div>
        
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block text-3xl sm:text-4xl md:text-5xl dark:text-white transition-colors">Hi, I'm</span>
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
              M. FIRMANSYA
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Fullstack Developer
          </h2>
        </div>
        
        {/* Description */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center leading-relaxed transition-colors">
            I create beautiful, functional websites with <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> Tailwind CSS</span>, and modern web technologies. 
            Passionate about <span className="font-semibold text-green-600 dark:text-green-400">UX</span>, 
            <span className="font-semibold text-yellow-600 dark:text-yellow-400"> performance</span>, and 
            <span className="font-semibold text-red-600 dark:text-red-400"> clean code</span>.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="group relative bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          
          <button className="border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-300 transition-colors">
            Contact Me
          </button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors" />
          </a>
          <a href="mailto:hello@example.com"
             className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Scroll down</span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center transition-colors">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}