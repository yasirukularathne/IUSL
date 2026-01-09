import React from "react";
import {
  Award,
  Target,
  Landmark,
  Users2,
  ShieldCheck,
  MapPin,
  Eye,
  GraduationCap,
  Building2,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <img
          src="public\about-us.webp"
          alt="Life at IUSL"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl font-serif font-bold mb-6"> About Us</h1>
          <p className="text-2xl font-light text-blue-100 italic">
            " Establishing a ground-breaking path to career success since 2020."
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Paragraph 1 */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center">
                <Landmark className="mr-3 text-secondary" /> Our Establishment
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                With the establishment of the IUSL in Sri Lanka in 2020, a
                ground-breaking path to career success was opened up for
                students both here and abroad. A wide array of University Grants
                Commission (UGC)-approved academic qualifications, including
                certificate, diploma, degree and postgraduate degree programmes
                are offered by the IUSL, spanning many popular and relevant
                fields of study. With an ever-increasing demand for high quality
                private higher education in Sri Lanka, the IUSL, with its
                UK-accredited courses builds a pathway that is suitable no
                matter what the requirement may be.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center">
                <Target className="mr-3 text-secondary" /> Vision and Origins
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                The idea for the IUSL took shape several years ago when it was
                first introduced in the national budget proposal of 2020. The
                option of attending non-State universities or private
                universities as an alternative to joining the Government
                universities has become a necessity. A group of educators and
                scholars stressed the need for a campus providing international
                education which could to broaden Sri Lanka’s learning horizons.
                The IUSL Campus is located on Srimath Anagarika Dharmapala
                Mawatha, in Colombo 07, where its main faculties of Science,
                Computing and Management are housed.
              </p>
            </div>

            {/* Paragraph 3 */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center">
                <GraduationCap className="mr-3 text-secondary" /> Foundation and
                Academic Life
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                Prior to embarking on the first year of the degree itself, the
                IUSL offers the option of reading for several foundation
                courses, with a particular emphasis on language courses; whereby
                a sound basis will be set for a student prior to their
                commencement on their chosen degree modules. Creating a high
                sense of student satisfaction as part of the students’ academic
                life is an integral part of the experience at IUSL. Thus, while
                working towards obtaining a UK degree right here in Sri Lanka,
                students are encouraged to take part in the various campus
                events organised through a range of clubs and societies.
              </p>
            </div>

            {/* Paragraph 4 */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center">
                <Building2 className="mr-3 text-secondary" /> Holistic
                Environment
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                Over the past 24 years, highly respected professionals in the
                field of academics collaborated in designing the IUSL campus.
                Their meticulous work resulted in setting up a holistic learning
                environment inclusive of key degree modules, coupled with
                cultural learning activities, hands-on experiences and a range
                of campus events that ensure that the best possible learning
                experience is enjoyed by each and every student. Furthermore, a
                carefully picked academic staff and research mentors are ever
                present to provide guidance and mentorship at all times. This
                academic arena is complimented with the a group of vibrant clubs
                and societies.
              </p>
            </div>

            {/* Paragraph 5 */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center">
                <ShieldCheck className="mr-3 text-secondary" /> Professional
                Development
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                Prior to leaving our halls, IUSL ensures the total professional
                development of all students. This goes beyond academic training
                and technical skills, well into the experiential learning which
                comes with industrial exposure, particularly as they learn to
                deal with real work projects. Academic-industry collaboration is
                given significant prominence at IUSL, because of the positive
                effects that are gleaned by the students, who are then able to
                make meaningful contributions in their future workplaces. In
                addition to academic skills and critical and analytical
                thinking, industry collaboration enhances personal growth,
                professional skills and effective communication skills.
              </p>
            </div>

            {/* Paragraph 6 */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center">
                <Users2 className="mr-3 text-secondary" /> Community and
                Mentorship
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                Furthermore, a dedicated group of industry mentors are at hand
                to provide career guidance at a degree required by each student.
                A rare breed of disciplined students are created by the
                amalgamation of these hard and soft skills. Our campus
                community, comprising the student body and lecture panel,
                including several highly experienced senior lecturers, as well
                all non-academic staff come together in combining academic
                excellence with sound people skills, all in an enthralling
                educational environment which is envisioned to be a valuable
                experience for all.
              </p>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 p-8 rounded-3xl sticky top-28 border border-slate-200">
              <h3 className="text-xl font-bold text-primary mb-6">
                Key Attributes
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded shadow-sm mr-4 mt-1 text-secondary">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase text-gray-400">
                      Accreditation
                    </h4>
                    <p className="text-primary font-medium">
                      UGC Approved & UK Accredited
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded shadow-sm mr-4 mt-1 text-secondary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase text-gray-400">
                      Campus Location
                    </h4>
                    <p className="text-primary font-medium">
                      Colombo 07, Sri Lanka
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded shadow-sm mr-4 mt-1 text-secondary">
                    <Users2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase text-gray-400">
                      Collaborators
                    </h4>
                    <p className="text-primary font-medium">
                      Highly Respected Professionals
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-10 p-6 bg-primary rounded-2xl text-white text-center">
                <p className="text-sm italic opacity-80 mb-4">
                  "A world-class education preparing a new generation of
                  professionals."
                </p>
                <div className="font-serif font-bold text-secondary">
                  The IUSL Vision
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
