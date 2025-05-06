
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-gradient-to-br from-white to-tech-soft-purple"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tech-light-purple/10 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-t from-tech-blue/5 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            <p className="text-secondary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Agathamudi Vinay Kumar
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              <span className="text-primary">Aspiring IT Specialist</span> with a passion for Salesforce & Full-Stack Development
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Creating efficient solutions with Salesforce CRM and web technologies. Dedicated to building secure, scalable applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center animate-fade-in delay-200">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/80 rounded-full absolute -top-6 -left-6 animate-float"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-secondary/80 rounded-full absolute -bottom-6 -right-6 animate-float" style={{ animationDelay: "1.5s" }}></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full z-10 relative flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://imagizer.imageshack.com/img924/404/8mTCp1.jpg" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
