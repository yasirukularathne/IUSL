
import React from 'react';
import { ArrowRight, CheckCircle, Globe, Award, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-dark">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
          alt="IUSL Campus Students"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h4 className="text-secondary font-bold tracking-widest uppercase mb-4 animate-bounce">Welcome to IUSL Campus</h4>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              Take your first step towards a <span className="text-secondary underline decoration-secondary/30">brighter future</span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link to="/portal" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center group transition-all hover:scale-105 shadow-xl shadow-primary/20">
                Enroll Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="w-20 h-1 bg-secondary mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed mb-12">
            The doors of the IUSL Campus opened in 2020, with the primary aim of meeting the higher education and industrial needs of both local and international students residing right here in Sri Lanka. IUSL’s fully fledged campus offers a range of academic qualifications, including foundation courses and degree courses giving special emphasis on developing the students’ professional skills in addition to his/her academic skills.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Globe className="h-10 w-10 text-primary mb-2" />
              <span className="font-bold text-primary">International</span>
              <span className="text-xs text-gray-400 uppercase tracking-tighter">Standard Education</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-10 w-10 text-primary mb-2" />
              <span className="font-bold text-primary">UK Accredited</span>
              <span className="text-xs text-gray-400 uppercase tracking-tighter">Prestigious Degrees</span>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-10 w-10 text-primary mb-2" />
              <span className="font-bold text-primary">UGC Approved</span>
              <span className="text-xs text-gray-400 uppercase tracking-tighter">Recognized Locally</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-10 w-10 text-primary mb-2" />
              <span className="font-bold text-primary">Est. 2020</span>
              <span className="text-xs text-gray-400 uppercase tracking-tighter">Modern Vision</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Collaboration */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Partnering with industry to add depth to the university experience
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  At IUSL, we strongly believe that first-hand work experience at real workplaces provides the best practical conditioning for students. This is why we facilitate industry training and internship programmes at acclaimed public and private workplaces for each of our students.
                </p>
                <p>
                  In addition to obtaining experiential learning, on-the-job training helps students gain invaluable professional skills which employers today actively seek. IUSL is geared towards creating the best environment for this.
                </p>
              </div>
              <Link to="/life" className="mt-8 inline-flex items-center text-primary font-bold hover:underline">
                Explore Student Placements <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Industry Training"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden lg:block border border-slate-100">
                <p className="text-primary font-bold text-lg mb-1">95% Employability</p>
                <p className="text-gray-500 text-sm">Our graduates are preferred by top industrial partners in Sri Lanka and abroad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Fostering leadership qualities and the best student experience
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                The experienced and dedicated lecture panel and staff of the institute are committed to ensuring that each student who qualifies from IUSL is a well-rounded individual who is not only armed with an academic qualification, but is also very familiar with the professional nuances needed to be a successful part of the workforce anywhere in the world.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-secondary h-6 w-6 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Clubs and Societies</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-secondary h-6 w-6 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Mental Health Support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-secondary h-6 w-6 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Leadership Programs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-secondary h-6 w-6 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Academic Advising</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" className="rounded-xl h-64 w-full object-cover shadow-lg" alt="Campus Life" />
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" className="rounded-xl h-64 w-full object-cover shadow-lg mt-8" alt="Teamwork" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 italic">
            "Your journey to excellence starts with a single step."
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Each course at the IUSL Campus is vetted and approved by the University Grants Commission of Sri Lanka (UGC), and accredited to prestigious universities in the UK.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/portal" className="bg-secondary text-dark px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-lg">
              Apply Now
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-primary transition-all">
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
