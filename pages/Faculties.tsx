
import React, { useState } from 'react';
import { FACULTIES } from '../constants';
import { Settings, Search, Briefcase, Code, Palette, Compass, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const IconMap: any = {
  Settings: Settings,
  Search: Search,
  Briefcase: Briefcase,
  Code: Code,
  Palette: Palette,
  Compass: Compass
};

const Faculties: React.FC = () => {
  const [activeFaculty, setActiveFaculty] = useState(FACULTIES[0]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-dark py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl font-serif font-bold mb-6">Our Faculties</h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            The IUSL campuses offer a range of degree courses and foundation courses, all recognized by the University Grants Commission (UGC) of Sri Lanka.
          </p>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Navigation / List */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Select Faculty</h3>
            {FACULTIES.map((f) => {
              const Icon = IconMap[f.icon];
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFaculty(f)}
                  className={`w-full text-left flex items-center p-5 rounded-xl transition-all border-2 ${
                    activeFaculty.id === f.id 
                      ? 'bg-white border-primary shadow-lg translate-x-2' 
                      : 'bg-transparent border-transparent hover:bg-slate-100 text-gray-500'
                  }`}
                >
                  <div className={`p-3 rounded-lg mr-4 ${activeFaculty.id === f.id ? 'bg-primary text-white' : 'bg-slate-200 text-gray-500'}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${activeFaculty.id === f.id ? 'text-primary' : ''}`}>{f.name}</h4>
                    <span className="text-xs opacity-60">{f.courses.length} Programs</span>
                  </div>
                  <ChevronRight className={`ml-auto ${activeFaculty.id === f.id ? 'text-primary' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Details Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="h-64 relative">
                <img 
                  src={activeFaculty.imageUrl} 
                  alt={activeFaculty.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <h2 className="text-3xl font-serif font-bold text-white">{activeFaculty.name}</h2>
                </div>
              </div>

              <div className="p-10">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                  {activeFaculty.longDescription}
                </p>

                <div className="mb-10">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" /> Available Courses
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeFaculty.courses.map((course, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/30 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                        <span className="font-semibold text-primary">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                  <Link to="/portal" className="bg-primary text-white text-center px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all flex-1">
                    Enroll in {activeFaculty.name}
                  </Link>
                  <Link to="/contact" className="bg-slate-100 text-primary text-center px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all">
                    Inquire for Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Faculties;
