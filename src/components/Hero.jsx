import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90  to-blue-800/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
            alt="Students collaborating" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative text-center px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 animate-pulse">
                Internship
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover amazing internship opportunities from top companies and kickstart your career journey with real-world experience.
            </p>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-500 hover:from-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
              Explore Internships
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm">
              About Us
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-300">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">2,000+</div>
              <div className="text-sm md:text-base text-gray-300">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">10,000+</div>
              <div className="text-sm md:text-base text-gray-300">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-sm md:text-base text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <FaArrowDownLong className="text-white" size={30}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
