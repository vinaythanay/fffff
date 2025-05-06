
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full mb-8 transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <h2 className="text-2xl font-bold mb-4">Agathamudi Vinay Kumar</h2>
          <p className="text-gray-400 mb-8 text-center max-w-md">
            Aspiring IT Specialist with expertise in Salesforce CRM and full-stack development.
          </p>
          
          <div className="border-t border-gray-800 w-full max-w-lg pt-8 mt-4">
            <p className="text-center text-gray-500">
              &copy; {currentYear} Vinay Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
