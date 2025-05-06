
import { Calendar, Database, Github, Award } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="section-container">
  <h2 className="section-title pb-4">Experience</h2>

  <div className="mt-12 max-w-4xl mx-auto">
    {/* Timeline */}
    <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-12">

      {/* Salesforce Internship */}
      <div className="relative animate-fade-in">
        <div className="absolute -left-12 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Database className="text-white" size={16} />
        </div>
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <h3 className="text-xl font-bold text-primary">Salesforce Developer Intern</h3>
            <span className="bg-secondary/10 text-secondary text-xs px-3 py-1 rounded-full">
              Jul 2024 – Sep 2024
            </span>
          </div>
          <p className="text-gray-700 mb-4">
            Completed an 8-week Salesforce Developer Internship at SmartInternz, where I worked with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Apex and Lightning Web Components (LWC)</li>
            <li>Salesforce Data Models</li>
            <li>Process Automation using Flows</li>
            <li>Validation Rules and Reports & Dashboards</li>
          </ul>
          <p className="text-gray-700 mb-4">
            I built and customized Salesforce applications including over 5 flows and components. As part of the
            internship, I developed a CRM Application for Client & Property Management, streamlining lead capture
            and enabling personalized property recommendations.
          </p>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Key Achievements:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                Apex Specialist Super Badge
              </span>
              <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                Process Automation Specialist Badge
              </span>
              <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                Developer Super Set
              </span>
            </div>
          </div>
          <p className="text-gray-700 mt-4 text-sm flex items-center gap-2">
  <Award className="text-primary" size={16} />
  <a
    href="https://drive.google.com/file/d/17_xCbGc9OSCerJ_262n58gvae-Gd7_Gt/view?usp=sharing"  
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-primary hover:text-primary/80"
  >
    Certificate of Internship
  </a>
</p>
        </div>
      </div>

      {/* Cybersecurity Internship */}
      <div className="relative animate-fade-in delay-100">
        <div className="absolute -left-12 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Calendar className="text-white" size={16} />
        </div>
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <h3 className="text-xl font-bold text-primary">Palo Alto Cybersecurity Virtual Internship</h3>
            <span className="bg-secondary/10 text-secondary text-xs px-3 py-1 rounded-full">
              Sept 2023 – Nov 2023
            </span>
          </div>
          <p className="text-gray-700 mb-4">
            Completed Cybersecurity Internship with AICTE-Eduskills and Palo Alto Networks, covering 20+ security processes and enhancing knowledge of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>SOC Operations</li>
            <li>Network Security</li>
            <li>Cloud Security</li>
          </ul>
          <p className="text-gray-700 mt-4 text-sm flex items-center gap-2">
  <Award className="text-primary" size={16} />
  <a
    href="https://drive.google.com/file/d/1M_VyYGePnMuZQPSzB15pt2cl6UMsWIZd/view?usp=sharing"  
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-primary hover:text-primary/80"
  >
    Certificate of Internship
  </a>
</p>
        </div>
      </div>

      {/* Srilin Electronics Internship */}
      <div className="relative animate-fade-in delay-150">
        <div className="absolute -left-12 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Calendar className="text-white" size={16} />
        </div>
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <h3 className="text-xl font-bold text-primary">Electronics Production Intern</h3>
            <span className="bg-secondary/10 text-secondary text-xs px-3 py-1 rounded-full">
              Aug 2023 – Jan 2024
            </span>
          </div>
          <p className="text-gray-700 mb-4">
            Interned at Srilin Electronics Private Limited, Hyderabad. Worked on Surface Mount Technology (SMT) machines and testing operations in the Production Department.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Hands-on experience with SMT machines</li>
            <li>Product testing and quality assurance</li>
            <li>Exhibited strong self-motivation and a quick learning attitude</li>
          </ul>
          <p className="text-gray-700 mt-4 text-sm flex items-center gap-2">
  <Award className="text-primary" size={16} />
  <a
    href="https://drive.google.com/file/d/1LFxWk8SgrPpbXjpstOZwFWHGp5RhGDA1/view?usp=sharing"  
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-primary hover:text-primary/80"
  >
    Certificate of Internship
  </a>
</p>
        
        </div>
      </div>

    </div>
  </div>


        
<div className="mt-16 text-center animate-fade-in delay-200">
  <h3 className="text-xl font-bold mb-4 text-primary">Certifications</h3>
  <div className="flex flex-wrap justify-center gap-4">
    <a
      href="https://drive.google.com/file/d/1JkTVmwlPyk9c29Y2O6TqTPKYbnReG8yy/view?usp=sharing" 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-100 px-5 py-3 rounded-lg hover:bg-gray-200 transition"
    >
      <p className="font-medium">Master Course in Full Stack Development</p>
    </a>
    <a
      href="https://www.hackerrank.com/certificates/fec57769c1e3"  
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-100 px-5 py-3 rounded-lg hover:bg-gray-200 transition"
    >
      <p className="font-medium">SQL Advanced from Hackerrank</p>
    </a>
    <a
      href="https://www.credly.com/users/vinay-kumar-agathamudi" 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-100 px-5 py-3 rounded-lg hover:bg-gray-200 transition"
    >
      <p className="font-medium">Cybersecurity from Cisco</p>
    </a>
    <a
      href="https://drive.google.com/file/d/1jcIiZkfX53QV6652SaHF7P8xu3shtfp4/view?usp=sharing"  
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-100 px-5 py-3 rounded-lg hover:bg-gray-200 transition"
    >
      <p className="font-medium">AWS Cloud Foundation from AWS</p>
    </a>
  </div>
</div>

      </div>
    </section>
  );
};

export default Experience;
