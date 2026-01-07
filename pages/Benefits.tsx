
import React from 'react';
import { Star, Zap, Building2, UserCircle2, BookOpenCheck, BarChart3, Globe2, ShieldPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Benefits: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">Why Choose IUSL?</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A host of UGC-approved courses catering to the needs of a variety of potential students. Discover the benefits of joining our elite community.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-secondary/10 p-4 rounded-2xl h-16 w-16 flex items-center justify-center">
                  <UserCircle2 className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 italic underline decoration-secondary decoration-4 underline-offset-8">Personalised Education</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Within the broad framework of each academic course, students have the flexibility of selecting certain major and minor modules, based on their preferences. This ensures sound academic and professional skills translation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-secondary/10 p-4 rounded-2xl h-16 w-16 flex items-center justify-center">
                  <BarChart3 className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 italic underline decoration-secondary decoration-4 underline-offset-8">Courses for Today’s Workforce</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    All our courses are carefully curated, and regularly reviewed and updated to ensure that graduate-employment stays at its peak at all times with proper workforce development.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-secondary/10 p-4 rounded-2xl h-16 w-16 flex items-center justify-center">
                  <Zap className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 italic underline decoration-secondary decoration-4 underline-offset-8">Start Right After O/L’s</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Our foundation courses mean that students can get an early start on their professional careers at age 16, rather than waiting until age 20 to start university studies.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-secondary/10 p-4 rounded-2xl h-16 w-16 flex items-center justify-center">
                  <Building2 className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 italic underline decoration-secondary decoration-4 underline-offset-8">Modern Research Facilities</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Conducting new research means creating new knowledge. We ensure students are equipped with modern facilities to carry out their own unique studies.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-secondary/10 p-4 rounded-2xl h-16 w-16 flex items-center justify-center">
                  <Star className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 italic underline decoration-secondary decoration-4 underline-offset-8">Leadership Skill Development</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Leadership is a skill that must be developed before going into the real world. We consider leadership skill development to be a cross-cutting feature across all our courses.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-secondary/10 p-4 rounded-2xl h-16 w-16 flex items-center justify-center">
                  <ShieldPlus className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 italic underline decoration-secondary decoration-4 underline-offset-8">Safe Learning Environment</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    The provision of a safe, comfortable and happy experience is the foundation upon which our courses are built. Student satisfaction is our priority.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-10">Ready to reap the benefits?</h2>
          <Link to="/portal" className="bg-secondary text-dark px-12 py-5 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-secondary/10">
            Join the IUSL Family
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
