import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <img
          src="lifeHero.webp"
          alt="Life at IUSL"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-2xl font-light text-blue-100 italic">
            " We are here to help you navigate your academic future. "{" "}
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-24 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-primary mb-8 underline decoration-secondary decoration-4 underline-offset-8">
                Reach Out
              </h2>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="bg-slate-50 p-3 rounded-xl mr-4 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase mb-1">
                      Our Location
                    </h4>
                    <p className="text-primary font-medium">
                      IUSL Campus, 207/24 -2/1, Dharmapala Mawatha, Colombo 07,
                      Sri Lanka 00700
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-slate-50 p-3 rounded-xl mr-4 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase mb-1">
                      Phone
                    </h4>
                    <p className="text-primary font-medium">+94 705 999 555</p>
                    <p className="text-primary font-medium">+94 766 621 176</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-slate-50 p-3 rounded-xl mr-4 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase mb-1">
                      Email
                    </h4>
                    <p className="text-primary font-medium">info@iusl.org</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-slate-50 p-3 rounded-xl mr-4 text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase mb-1">
                      Working Hours
                    </h4>
                    <p className="text-primary font-medium">
                      Mon - Sat: 8:00 AM - 5:00 PM
                    </p>
                    <p className="text-primary font-medium">
                      Sun: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-12 pt-10 border-t border-slate-100">
                <h4 className="font-bold text-gray-400 text-xs uppercase mb-6">
                  Connect with us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-slate-50 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-slate-50 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-slate-50 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Youtube size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-slate-50 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-slate-100 h-full">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Send us a message
              </h2>
              <p className="text-gray-500 mb-10">
                We welcome any comments or feedback regarding our service.
                Please feel free to share your thoughts with us.
              </p>

              <form className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telephone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none"
                    placeholder="+94 77 123 4567"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message Here
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none"
                    placeholder="How can we help you today?"
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-opacity-95 transition-all w-full md:w-auto shadow-lg shadow-primary/20"
                  >
                    <Send className="mr-2" size={20} /> Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="h-[450px] bg-slate-200 w-full relative overflow-hidden flex items-center justify-center grayscale">
        <img
          src="https://picsum.photos/seed/map/1920/600"
          className="w-full h-full object-cover"
          alt="Map Location"
        />
        <div className="absolute inset-0 bg-primary/20"></div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=IUSL+Campus+207%2F24+-2%2F1+Dharmapala+Mawatha+Colombo+07+Sri+Lanka"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bg-white p-6 rounded-2xl shadow-2xl flex items-center border border-slate-200 cursor-pointer hover:shadow-3xl transition-all"
        >
          <MapPin className="text-secondary mr-3" size={28} />
          <div>
            <h4 className="font-bold text-primary">IUSL Campus</h4>
            <p className="text-xs text-gray-500">
              Dharmapala Mawatha, Colombo 07
            </p>
          </div>
        </a>
      </section>
    </div>
  );
};

export default Contact;
