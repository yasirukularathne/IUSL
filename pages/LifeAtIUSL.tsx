
import React from 'react';
import { Camera, Users, Music, Coffee, Heart, Map } from 'lucide-react';

const LifeAtIUSL: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
          alt="Life at IUSL"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center max-w-4xl px-4">
          <h1 className="text-6xl font-serif font-bold mb-6">Life at IUSL</h1>
          <p className="text-2xl font-light text-blue-100">Building relationships that last a lifetime.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">More than just Academics</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At the IUSL Campus, we nurture meaningful connections with our students, tailoring curricula to address their social, emotional, and educational requirements. Through myriad of courses, internships, activities and events, our students build strong, long-lasting relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Clubs & Societies", icon: <Users className="text-secondary" size={32} />, desc: "From tech clubs to debate societies, there is something for everyone." },
              { title: "Campus Events", icon: <Music className="text-secondary" size={32} />, desc: "Cultural festivals, sports meets, and industry nights throughout the year." },
              { title: "Student Wellbeing", icon: <Heart className="text-secondary" size={32} />, desc: "Personal growth and mental health support are at the core of our campus." },
              { title: "Associations", icon: <Map className="text-secondary" size={32} />, desc: "Build your professional network through our various student bodies." },
              { title: "Creative Spaces", icon: <Camera className="text-secondary" size={32} />, desc: "Modern labs and studios designed for inspiration and collaboration." },
              { title: "Social Hubs", icon: <Coffee className="text-secondary" size={32} />, desc: "Relax and connect with peers in our vibrant campus common areas." },
            ].map((item, i) => (
              <div key={i} className="p-10 border border-slate-100 rounded-3xl hover:shadow-xl transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            <div className="md:w-1/2 relative z-10">
              <h2 className="text-4xl font-serif font-bold mb-6">Healthy Body, Healthy Mind</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                The pursuit of higher studies is a critical time in any student’s life. We ensure that student well-being and their mental health are never adversely affected through meticulously planned support programs.
              </p>
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                Learn about Counseling
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
                className="rounded-2xl shadow-2xl h-80 w-full object-cover" 
                alt="Wellbeing"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeAtIUSL;
