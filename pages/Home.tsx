import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  ShieldCheck,
  Zap,
  Heart,
  GraduationCap,
  Building2,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/src/Components/Hero";

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="w-20 h-1 bg-secondary mx-auto mb-10"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary text-center mb-12">
            Our Mission and Vision
          </h2>

          <div className="space-y-10 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              The doors of the IUSL Campus opened in 2020, with the primary aim
              of meeting the higher education and industrial needs of both local
              and international students residing right here in Sri Lanka.
              IUSL’s fully fledged campus offers a range of academic
              qualifications, including foundation courses and degree courses
              giving special emphasis on developing the students’ professional
              skills in addition to his/her academic skills, which are crucial
              for success in today's world.
            </p>
            <p>
              The experienced and dedicated lecture panel and staff of the
              institute are committed to ensuring that each student who
              qualifies from IUSL is a well-rounded individual who is not only
              armed with an academic qualification, but is also very familiar
              with the professional nuances needed to be a successful part of
              the workforce anywhere in the world. This focus on readiness
              ensures our graduates excel in diverse and challenging
              international environments across various industries globally.
            </p>
            <p>
              Each course at the IUSL Campus is vetted and approved by the
              University Grants Commission of Sri Lanka (UGC), and accredited to
              prestigious universities in the UK. IUSL’s long term vision is to
              create a holistic private university environment for students who
              wish to obtain their higher education qualifications at private,
              non-state universities, whilst still residing in Sri Lanka. IUSL’s
              vision is to shine the brightest among all higher education
              institutes in Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Partnering with Industry */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Industry Partnerships
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
              Partnering with Industry to Add Depth to the University Experience
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300"></div>
              <img
                src="home1.webp"
                alt="Industry Training"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">95%</span>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-lg">
                      Employability Rate
                    </p>
                    <p className="text-gray-500 text-sm">
                      Our graduates are preferred by top industrial partners in
                      Sri Lanka and abroad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-primary" size={24} />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    At IUSL, we strongly believe that first-hand work experience
                    at real workplaces provides the best practical conditioning
                    for students. This is why we facilitate industry training
                    and internship programmes at acclaimed public and private
                    workplaces for each of our students, to help them gain the
                    practical experience of working on real-world projects. In
                    addition to obtaining experiential learning, on-the-job
                    training helps students gain invaluable professional skills
                    which employers today actively seek for their teams.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="text-secondary" size={24} />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    All-in-all, skills development needs to be given as much
                    importance as academic achievement, and IUSL is geared
                    towards creating the best environment for this. We provide
                    the resources and industry connections necessary to ensure
                    that our students are not just graduates, but seasoned
                    professionals ready to take on the world. This commitment to
                    practical excellence is what distinguishes our university
                    from others and provides a solid foundation for every
                    student's career journey in the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fostering Leadership Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Student Success
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
              Fostering Leadership Qualities and the Best Student Experience
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-2">
                      Mental Health & Wellbeing
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The youth today face immense demands from multiple
                      sources, often leading to heightened stress levels and
                      complex psychological challenges. At IUSL, we are acutely
                      aware of this reality and take special care to ensure that
                      the mental health of our students is always kept in check.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-2">
                      Leadership Development
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The campus events organised by IUSL's clubs and societies
                      encourage the development of interpersonal skills among
                      students, bringing about heightened leadership traits,
                      personal growth, and overall student satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-2">
                      Career Guidance
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      Career guidance and leadership are key factors that must
                      be tackled during the academic journey. At IUSL, these
                      needs are addressed as an on-going concern, ensuring
                      students receive support to navigate their evolving
                      aspirations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300"></div>
              <img
                src="home2.webp"
                alt="Campus Life"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex justify-around items-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">20+</p>
                    <p className="text-sm text-gray-500">Student Clubs</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">50+</p>
                    <p className="text-sm text-gray-500">Events/Year</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">100%</p>
                    <p className="text-sm text-gray-500">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Class Academics */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 mb-10">
            <GraduationCap size={48} className="text-secondary" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              World Class Academics
            </h2>
          </div>
          <div className="space-y-10 text-lg md:text-xl text-blue-100 leading-relaxed text-justify italic">
            <p>
              Among the higher education institutes in Sri Lanka, the IUSL
              campus offers UK accredited, University Grants Commission (UGC)
              approved academic qualifications for anyone wishing to pursue
              their higher studies in a non-state university in the country. The
              students of the IUSL thrive while obtaining their desired academic
              qualifications thanks to several unique factors, including
              academic-industry collaboration that lays the foundation for
              exceptional work experience as well as academic skills which are
              obtained here.
            </p>
            <p>
              Academic skills are obtained with the support of academic experts
              who are always at hand to provide the necessary advice and
              guidance. This mentorship is fundamental to our mission, ensuring
              that students receive personalized attention throughout their
              studies. By integrating high-level academic theory with practical
              industrial insights, we offer a comprehensive educational package
              that is designed to meet the highest international standards while
              remaining deeply rooted in the local context of Sri Lankan
              educational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Life at the Campus */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 mb-10">
            <Heart size={48} className="text-secondary" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
              Life at the Campus
            </h2>
          </div>
          <div className="text-lg md:text-2xl text-gray-700 leading-relaxed text-center font-light">
            <p>
              Through the myriad of courses, internships, activities and events
              that students will be part of during their tenure at the IUSL
              campus, they will ultimately, and most valuably, build strong,
              long-lasting relationships that we hope will stay with them and
              enrich their lives well into the future. This communal spirit is
              the heartbeat of our campus, fostering a sense of belonging and
              mutual support that helps every student achieve their full
              potential during their university years.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
              <Users className="mx-auto text-primary mb-4" size={40} />
              <h4 className="font-bold text-primary mb-2">Vibrant Societies</h4>
              <p className="text-sm text-gray-500">
                Over 20+ active student organizations and hobby groups.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
              <Zap className="mx-auto text-primary mb-4" size={40} />
              <h4 className="font-bold text-primary mb-2">Modern Facilities</h4>
              <p className="text-sm text-gray-500">
                Cutting-edge laboratories and digital learning hubs.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
              <Building2 className="mx-auto text-primary mb-4" size={40} />
              <h4 className="font-bold text-primary mb-2">Central Location</h4>
              <p className="text-sm text-gray-500">
                Located in the heart of Colombo's education district.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 italic">
            "Your journey to excellence starts with a single step."
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Delivering a world-class education to prepare a new generation of
            professionals to suit a global economy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/portal"
              className="bg-secondary text-dark px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-primary transition-all"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
