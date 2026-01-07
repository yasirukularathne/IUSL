
import React from 'react';
import { Heart, UserCheck, Shield, Rocket, Lightbulb, Users } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="relative py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">Our Philosophy</h1>
          <p className="text-2xl text-gray-500 max-w-3xl mx-auto font-light italic">
            "At IUSL Campus, we respect our students and understand that each of them has individual wants and needs."
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-8 leading-snug">
                Student-Centered Education for a Modern World
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We believe that learning can only be fostered from a feeling of mutual respect, guidance, and direction, and we do our very best to maintain those values in everything we do. Our unique approach supplies our students with the proper support system that will help lead them down the path to success.
              </p>
              <div className="space-y-4">
                {[
                  "Personalized educational pathways",
                  "Safe and respectful learning environments",
                  "Mentorship from industry experts",
                  "Development of leadership abilities"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-primary font-semibold">
                    <Shield className="text-secondary h-5 w-5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                alt="Philosophy"
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-10">
            <div className="p-8 bg-slate-50 rounded-2xl text-center">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4">Mutual Respect</h3>
              <p className="text-gray-500">Every student is valued for their unique background and aspirations.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl text-center">
              <UserCheck className="h-12 w-12 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4">Personal Guidance</h3>
              <p className="text-gray-500">Mentorship that adapts to the speed and style of the learner.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl text-center">
              <Rocket className="h-12 w-12 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4">Career Acceleration</h3>
              <p className="text-gray-500">Focusing on professional skills that matter in the global economy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
