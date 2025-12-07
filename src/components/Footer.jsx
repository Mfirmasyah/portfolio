import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12 transition-colors">
      <div className="container-custom">
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo & Copyright */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="font-bold">DEV</span>
              </div>
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <p className="text-gray-400">
              © {currentYear} All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 mb-8 md:mb-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap gap-6">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}