import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image Carousel with Overlay */}
      {(() => {
        const images = [
          "GraduationStudents.webp",
          "students.webp",
          "sport.webp",
        ];
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
          }, 5000);
          return () => clearInterval(interval);
        }, []);

        return (
          <>
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute z-10 inset-0 w-full h-full bg-cover bg-center scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate] transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-30" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url('${image}')`,
                }}
                aria-hidden="true"
              />
            ))}
          </>
        );
      })()}

      <div className="z-20 items-center justify-center flex w-fit mx-auto">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div
                className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full transform transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-sm font-medium bg-linear-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                  UGC Approved • UK Accredited
                </span>
              </div>

              <h1
                className={`text-5xl md:text-6xl xl:text-7xl font-serif font-bold leading-tight transform transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <span className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0 [animation-delay:0.3s]">
                  Shape Your
                </span>
                <span className="block mt-2 bg-linear-to-r from-secondary via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-[slideUpShimmer_0.8s_ease-out_forwards,shimmer_3s_linear_0.8s_infinite] opacity-0 [animation-delay:0.5s] bg-size-[200%_auto]">
                  Future Today
                </span>
              </h1>

              <p
                className={`text-xl text-gray-300 leading-relaxed max-w-xl transform transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Join Sri Lanka's premier private higher education institute.
                World-class academics, industry partnerships, and a
                transformative campus experience await you.
              </p>

              {/* Stats Row */}
              <div
                className={`flex flex-wrap gap-8 py-4 transform transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {[
                  {
                    value: "95%",
                    label: "Employability",
                    color: "text-secondary",
                  },
                  {
                    value: "50+",
                    label: "Industry Partners",
                    color: "text-white",
                  },
                  { value: "20+", label: "Programs", color: "text-white" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <p
                      className={`text-4xl font-bold ${stat.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-900 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Link
                  to="/portal"
                  className="group relative bg-linear-to-r from-secondary via-yellow-400 to-secondary bg-size-[200%_auto] text-slate-900 px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-500 hover:bg-position-[right_center] hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Journey
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
                <Link
                  to="/about"
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105 flex items-center gap-2"
                >
                  <Globe className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Campus
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </Link>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-6">
                {" "}
                {/* Changed from gap-4 to gap-6 */}
                {[
                  {
                    icon: Award,
                    title: "UK Accredited",
                    desc: "Degrees recognized worldwide",
                    offset: "",
                    delay: "0ms",
                  },
                  {
                    icon: ShieldCheck,
                    title: "UGC Approved",
                    desc: "Government recognized quality",
                    offset: "",
                    delay: "150ms",
                  },
                  {
                    icon: Zap,
                    title: "Industry Ready",
                    desc: "Real-world experience",
                    offset: "",
                    delay: "300ms",
                  },
                  {
                    icon: CheckCircle,
                    title: "Expert Faculty",
                    desc: "Learn from the best",
                    offset: "",
                    delay: "450ms",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-secondary/30 hover:scale-105 hover:-translate-y-2 cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${item.offset}`}
                    style={{
                      animation: isVisible
                        ? `fadeInUp 0.8s ease-out forwards`
                        : "none",
                      animationDelay: item.delay,
                      opacity: 0,
                    }}
                  >
                    <div className="relative">
                      <item.icon className="h-10 w-10 text-secondary mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-300" />
                      <div className="absolute -inset-2 bg-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-secondary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/50 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-[scrollDown_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(5deg); }
                }
                @keyframes rise {
                    0% { transform: translateY(100vh) scale(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-100vh) scale(1); opacity: 0; }
                }
                @keyframes slideUp {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes slideUpShimmer {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { transform: translateY(40px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes shimmer {
                    0% { background-position: 0% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes slowZoom {
                    0% { transform: scale(1.05); }
                    100% { transform: scale(1.15); }
                }
                @keyframes scrollDown {
                    0%, 100% { transform: translateY(0); opacity: 1; }
                    50% { transform: translateY(16px); opacity: 0.3; }
                }
            `}</style>
    </section>
  );
};

export default Hero;
