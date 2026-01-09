import React from "react";
import {
  Star,
  Zap,
  Building2,
  UserCircle2,
  BookOpenCheck,
  BarChart3,
  Globe2,
  ShieldPlus,
  Briefcase,
  GraduationCap,
  Laptop,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Benefits: React.FC = () => {
  const benefitItems = [
    {
      title: "Personalised education",
      desc: "Within the broad framework of each academic course, students have the flexibility of selecting certain major and minor modules, based on their preferences. This ensures that sound academic and professional skills will be translated into academic excellence by the time the course is complete.",
      icon: <UserCircle2 className="text-secondary" size={32} />,
    },
    {
      title: "Courses for today’s workforce",
      desc: "All our courses are carefully curated, and regularly reviewed and updated to ensure that graduate-employment stays at its peak at all times with proper workforce development.",
      icon: <BarChart3 className="text-secondary" size={32} />,
    },
    {
      title: "Start on your degree right after the O/L’s",
      desc: "The availability of comprehensive foundation courses means that students can get an early start on their professional careers, at the age of 16. This option is considered a primary benefit of attending non-state universities in Sri Lanka, where the alternative would be to start on one’s university studies at the age of 20.",
      icon: <GraduationCap className="text-secondary" size={32} />,
    },
    {
      title: "Modern research facilities",
      desc: "Conducting new research means creating new knowledge. The educational experiences that come with carrying out new research is a key component of any tertiary educational course, and something that is often lacking in Sri Lanka’s tertiary education sphere. We at the IUSL campus strive to ensure that all students who leave our halls are equipped with the knowhow to carry out their own unique studies.",
      icon: <Building2 className="text-secondary" size={32} />,
    },
    {
      title: "Professional development through industry placements",
      desc: "The value of industry training and practical experience is beyond measure. Through a rich variety of academic-industry collaboration as well as university-industry partnerships, IUSL ensures that all of its students have first hand experience in being part of a workforce even before they have completed their chosen courses of study. Such placements further underscore the fact that our courses are attuned to cater to an employment market.",
      icon: <Briefcase className="text-secondary" size={32} />,
    },
    {
      title: "Student leadership programmes",
      desc: "Leadership is a skill that must be developed before going out into the real world, and we at IUSL consider leadership skill development to be a cross-cutting feature across all our courses. Our highly qualified panel of in-house and visiting senior lecturers methodically and systematically guide each student to reach his/her highest potential in this and other soft skills.",
      icon: <Star className="text-secondary" size={32} />,
    },
    {
      title: "Modern teaching methods",
      desc: "While working and learning online became a necessity during the Covid19 pandemic, in-person classes are very much the norm today. In addition to regular use of information technology to enhance the teaching and learning experience, the IUSL campus offers the option of following online degrees in Sri Lanka as well. This is a feature that would be particularly beneficial to those who find it difficult to attend physical classes due to physical constraints or geographical location. Online courses also allow for time flexibility in attending classes, allowing students to work whilst obtaining their degree.",
      icon: <Laptop className="text-secondary" size={32} />,
    },
    {
      title: "Safe and respectful learning environment",
      desc: "Student well-being and student satisfaction is essential in ensuring a beneficial outcome for all parties in an academic and professional environment; thus the provision of a safe, comfortable and happy experience is the foundation upon which our courses are built.",
      icon: <Heart className="text-secondary" size={32} />,
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <img
          src="public/benefits.webp"
          alt="Life at IUSL"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl font-serif font-bold mb-6">
            {" "}
            Why Choose IUSL?
          </h1>
          <p className="text-2xl font-light text-blue-100 italic">
            " A host of University Grants Commission (UGC)-approved courses are
            on offer at the IUSL campus, catering to the needs of a variety of
            potential students. In addition to contributing to filling the need
            for high quality private universities in Sri Lanka, the IUSL campus
            offers the following benefits, among others; "
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {benefitItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 group hover:translate-y-[-4px] transition-transform duration-300"
              >
                <div className="flex-shrink-0 bg-slate-50 p-5 rounded-[2rem] h-20 w-20 flex items-center justify-center border border-slate-100 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    <Star className="text-secondary mr-2 h-4 w-4 fill-secondary" />
                    <h3 className="text-2xl font-serif font-bold text-primary italic leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg text-justify border-l-2 border-slate-100 pl-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block p-2 bg-secondary/20 rounded-full mb-6">
            <Zap className="text-primary animate-pulse" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-10">
            Ready to unlock your potential?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/portal"
              className="bg-primary text-white px-12 py-5 rounded-2xl text-xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all flex items-center justify-center"
            >
              Start Application
            </Link>
            <Link
              to="/faculties"
              className="bg-white text-primary border-2 border-primary/20 px-12 py-5 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
