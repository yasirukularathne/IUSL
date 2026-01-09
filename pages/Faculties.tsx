import React, { useState, useEffect } from "react";
import { FACULTIES } from "../constants";
import {
  Settings,
  Search,
  Briefcase,
  Code,
  Palette,
  Compass,
  ChevronRight,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const IconMap: any = {
  Settings: Settings,
  Search: Search,
  Briefcase: Briefcase,
  Code: Code,
  Palette: Palette,
  Compass: Compass,
};

const Faculties: React.FC = () => {
  const [activeFaculty, setActiveFaculty] = useState(FACULTIES[0]);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const navigate = useNavigate();

  // Reset selected course when faculty changes
  useEffect(() => {
    setSelectedCourse(null);
  }, [activeFaculty]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section - styled like About Us page */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <img
          src="public/faculties.webp"
          alt="Life at IUSL"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl font-serif font-bold mb-6"> Our Faculties</h1>
          <p className="text-2xl font-light text-blue-100 italic">
            " Explore our diverse range of academic programs designed to shape
            future leaders "
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-600 leading-relaxed text-justify">
            The IUSL campuses offer a range of degree courses and foundation
            courses as part of its education services and skills development
            portfolio; all of which are recognised by the University Grants
            Commission (UGC) of Sri Lanka. These are managed via six key
            faculties, each of which comprises a team of fulltime and part time
            teaching staff. Our unparalleled research facilities ensure that
            students are equipped with the best academic qualifications, putting
            them on the best career path possible, which includes the most
            sought after Information Technology (IT) degrees in Sri Lanka.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Navigation / List */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">
              Select Faculty
            </h3>
            {FACULTIES.map((f) => {
              const Icon = IconMap[f.icon];
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFaculty(f)}
                  className={`w-full hover:cursor-pointer text-left flex items-center p-5 rounded-xl transition-all border-2 ${
                    activeFaculty.id === f.id
                      ? "bg-white border-primary shadow-lg translate-x-2"
                      : "bg-transparent border-transparent hover:bg-slate-100 text-gray-500"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg mr-4 ${
                      activeFaculty.id === f.id
                        ? "bg-primary text-white"
                        : "bg-slate-200 text-gray-500"
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4
                      className={`font-bold ${
                        activeFaculty.id === f.id ? "text-primary" : ""
                      }`}
                    >
                      {f.name}
                    </h4>
                    <span className="text-xs opacity-60">
                      {f.courses.length} Programs
                    </span>
                  </div>
                  <ChevronRight
                    className={`ml-auto ${
                      activeFaculty.id === f.id
                        ? "text-primary"
                        : "text-slate-300"
                    }`}
                  />
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
                  <h2 className="text-3xl font-serif font-bold text-white">
                    {activeFaculty.name}
                  </h2>
                </div>
              </div>

              <div className="p-10">
                <div className="prose prose-lg max-w-none mb-10">
                  <p className="text-xl text-gray-600 leading-relaxed font-light text-justify">
                    {activeFaculty.longDescription}
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" /> Available Courses
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 italic">
                    Click on a course to view enrollment options
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeFaculty.courses.map((course, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedCourse(course)}
                        className={`flex items-center p-4 rounded-xl border-2 transition-all text-left ${
                          selectedCourse === course
                            ? "bg-blue-50 border-primary shadow-sm scale-[1.02]"
                            : "bg-slate-50 border-slate-100 hover:border-primary/30"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-3 ${
                            selectedCourse === course
                              ? "bg-primary animate-pulse"
                              : "bg-secondary"
                          }`}
                        ></div>
                        <span
                          className={`font-semibold ${
                            selectedCourse === course
                              ? "text-primary"
                              : "text-slate-700"
                          }`}
                        >
                          {course}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Enrollment Section */}
                {selectedCourse ? (
                  <div className="mt-12 p-8 bg-primary rounded-2xl text-white animate-in slide-in-from-bottom-4 duration-500 shadow-xl shadow-primary/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">
                          Ready to start?
                        </h4>
                        <p className="text-2xl font-serif font-bold">
                          Enroll in {selectedCourse}
                        </p>
                      </div>
                      <Link
                        to="/portal"
                        state={{ course: selectedCourse }}
                        className="bg-secondary text-dark px-10 py-4 rounded-xl font-bold text-lg flex items-center hover:scale-105 transition-all shadow-lg"
                      >
                        Enroll Now <ArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                    <button className="bg-primary/50 text-white text-center px-8 py-4 rounded-xl font-bold cursor-not-allowed flex-1">
                      Select a course to enroll
                    </button>
                    <Link
                      to="/contact"
                      className="bg-slate-100 text-primary text-center px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all"
                    >
                      Inquire for Details
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculties;
