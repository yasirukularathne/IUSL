
import React from 'react';
import { Award, Target, Landmark, Users2, ShieldCheck, MapPin, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">About IUSL Campus</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Establishing a ground-breaking path to career success since 2020.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1st Paragraph */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center">
                <Landmark className="mr-3 text-secondary" /> Our Foundation
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                The doors of the IUSL Campus opened in 2020, with the primary aim of meeting the higher education and industrial needs of both local and international students residing right here in Sri Lanka. IUSL’s fully fledged campus offers a range of academic qualifications, including foundation courses and degree courses giving special emphasis on developing the students’ professional skills in addition to his/her academic skills.
              </p>
            </div>

            {/* 2nd Paragraph */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center">
                <Users2 className="mr-3 text-secondary" /> Academic Excellence
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                The experienced and dedicated lecture panel and staff of the institute are committed to ensuring that each student who qualifies from IUSL is a well-rounded individual who is not only armed with an academic qualification, but is also very familiar with the professional nuances needed to be a successful part of the workforce anywhere in the world.
              </p>
            </div>

            {/* 3rd Paragraph - Vision Statement */}
            <div className="prose prose-lg max-w-none bg-primary/5 p-8 rounded-2xl border-l-8 border-secondary">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4 flex items-center">
                <Eye className="mr-3 text-secondary" /> Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed text-xl italic font-medium">
                "IUSL’s vision is to shine the brightest among all higher education institutes in Sri Lanka, delivering a world-class education to prepare a new generation of professionals to suit a global economy."
              </p>
            </div>

            {/* 4th Paragraph */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center">
                <ShieldCheck className="mr-3 text-secondary" /> Accreditation & Standards
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Each course at the IUSL Campus is vetted and approved by the University Grants Commission of Sri Lanka (UGC), and accredited to prestigious universities in the UK. IUSL’s long term vision is to create a holistic private university environment for students who wish to obtain their higher education qualifications at private, non-state universities, whilst still residing in Sri Lanka.
              </p>
            </div>

            {/* Additional Paragraphs for depth */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center">
                <Target className="mr-3 text-secondary" /> Location & Integration
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                The IUSL Campus is located on Srimath Anagarika Dharmapala Mawatha, in Colombo 07, where its main faculties of Science, Computing and Management are housed. Prior to embarking on the first year of the degree itself, the IUSL offers the option of reading for several foundation courses, with a particular emphasis on language courses; whereby a sound basis will be set for a student prior to their commencement on their chosen degree modules.
              </p>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 p-8 rounded-3xl sticky top-28 border border-slate-200">
              <h3 className="text-xl font-bold text-primary mb-6">At a Glance</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded shadow-sm mr-4 mt-1">
                    <Award className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase text-gray-400">Accreditation</h4>
                    <p className="text-primary font-medium">UGC Approved & UK Accredited</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded shadow-sm mr-4 mt-1">
                    <MapPin className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase text-gray-400">Campus Location</h4>
                    <p className="text-primary font-medium">Colombo 07, Sri Lanka</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded shadow-sm mr-4 mt-1">
                    <Users2 className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase text-gray-400">Enrollment</h4>
                    <p className="text-primary font-medium">Over 2,000+ Active Students</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10 p-6 bg-primary rounded-2xl text-white text-center">
                <p className="text-sm italic opacity-80 mb-4">"Creating a holistic private university environment in Sri Lanka."</p>
                <div className="font-serif font-bold text-secondary">The IUSL Standard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
