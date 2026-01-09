import React from "react";
import {
  Camera,
  Users,
  Music,
  Coffee,
  Heart,
  Map,
  Sparkles,
  UserPlus,
  Target,
} from "lucide-react";

const LifeAtIUSL: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <img
          src="lifeHero.webp"
          alt="Life at IUSL"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl font-serif font-bold mb-6">Life at IUSL</h1>
          <p className="text-2xl font-light text-blue-100 italic">
            "Building relationships that last a lifetime."
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed text-justify">
              <div className="w-20 h-1 bg-secondary mb-6"></div>
              <p>
                The commitment to follow an undergraduate or postgraduate course
                is an important period of a student’s life. In addition to the
                main objective of acquiring academic qualifications, this is a
                time where practical experience is gathered, leadership skills
                are developed, and a campus community is formed based on strong
                relationships.
              </p>
              <p>
                At the IUSL campus, we understand this reality, and strive to
                ensure that student satisfaction is brought about with ample
                opportunities for mixing and mingling during a multitude of
                campus events that are carried out throughout the year,
                particularly those that are planned by the various in-house
                clubs and societies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="life2.webp"
                className="rounded-2xl shadow-lg h-64 w-full object-cover mt-8"
                alt="Students collaborating"
              />
              <img
                src="life1.webp"
                className="rounded-2xl shadow-lg h-64 w-full object-cover"
                alt="Campus event"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership and Growth Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex p-3 bg-primary/10 rounded-2xl text-primary mb-6">
            <Sparkles size={32} />
          </div>
          <h2 className="text-4xl font-serif font-bold text-primary mb-8">
            Nurturing Wisdom & Compassion
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed italic mb-12">
            "The IUSL campus, we understand that higher education is not limited
            to good grades. Through meticulously planned student leadership
            programmes and skills development programmes, personal growth is
            also encouraged. Developing interpersonal skills in the busy life of
            student organisations is an important element at the IUSL campus."
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <Target className="text-secondary mx-auto mb-4" />
              <h4 className="font-bold text-primary">Leadership</h4>
              <p className="text-sm text-gray-500">
                Structured programs for future leaders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <UserPlus className="text-secondary mx-auto mb-4" />
              <h4 className="font-bold text-primary">Interpersonal</h4>
              <p className="text-sm text-gray-500">
                Building soft skills through organizations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <Sparkles className="text-secondary mx-auto mb-4" />
              <h4 className="font-bold text-primary">Personal Growth</h4>
              <p className="text-sm text-gray-500">
                Beyond grades, focus on individual development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellbeing Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            <div className="md:w-3/5 relative z-10">
              <h2 className="text-4xl font-serif font-bold mb-8 flex items-center">
                <Heart className="mr-4 text-secondary" /> Healthy Body, Healthy
                Mind
              </h2>
              <div className="space-y-6 text-lg text-blue-100 leading-relaxed text-justify">
                <p>
                  And through it all, the faculty and staff, as well as the
                  various student bodies keep a careful watch upon all students
                  to ensure that student well being and their mental health are
                  never adversely affected. The pursuit of higher studies is a
                  critical time in any student’s life, filled with many new
                  aspects of transitioning from teenager to adult.
                </p>
                <p>
                  Coupled with the stresses of academic work, a range of trying
                  situations can arise. The entire campus community is committed
                  to ensure the wellbeing of all its students to ensure that
                  each individual joins the workforce with confidence.
                </p>
              </div>
              <button className="mt-10 bg-secondary text-dark px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-secondary/20">
                Student Support Services
              </button>
            </div>
            <div className="md:w-2/5">
              <img
                src="students.webp"
                className="rounded-3xl shadow-2xl h-[400px] w-full object-cover border-4 border-white/10"
                alt="Wellbeing and Support"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-16 underline decoration-secondary decoration-4 underline-offset-8">
            Engagement Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Clubs & Societies",
                icon: <Users className="text-secondary" size={32} />,
                desc: "Over 20+ active student organizations covering tech, debate, and culture.",
              },
              {
                title: "Campus Events",
                icon: <Music className="text-secondary" size={32} />,
                desc: "Festivals, sports meets, and industry networking nights throughout the year.",
              },
              {
                title: "Student Wellbeing",
                icon: <Heart className="text-secondary" size={32} />,
                desc: "Dedicated counseling and wellness programs for all students.",
              },
              {
                title: "Professional Bodies",
                icon: <Map className="text-secondary" size={32} />,
                desc: "Industry-linked associations that bridge the gap between study and work.",
              },
              {
                title: "Collaboration Hubs",
                icon: <Camera className="text-secondary" size={32} />,
                desc: "Spaces designed for creativity, innovation, and group projects.",
              },
              {
                title: "Social Common Areas",
                icon: <Coffee className="text-secondary" size={32} />,
                desc: "Vibrant spaces to relax and build long-lasting relationships.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 border border-slate-100 rounded-3xl hover:shadow-xl transition-all group"
              >
                <div className="mb-6 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeAtIUSL;
