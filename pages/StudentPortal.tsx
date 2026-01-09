import React, { useState, useEffect } from "react";
import {
  ShieldAlert,
  CreditCard,
  Send,
  CheckCircle2,
  User,
  MapPin,
  Phone,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { FACULTIES } from "../constants";

// Data for form selections
const COUNTRIES = [
  { name: "Sri Lanka", code: "+94" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "India", code: "+91" },
  { name: "Singapore", code: "+65" },
];

const SALUTATIONS = ["Mr.", "Ms.", "Mrs."];
const STREAMS = [
  "Physical Science",
  "Biological Science",
  "Commerce",
  "Arts",
  "Technology",
  "Other",
];
const COURSE_TYPES = ["Foundation", "Degree", "Masters", "Diploma", "Other"];
const GRADES = ["A", "B", "C", "S", "F"];
const PAYMENT_METHODS = [
  "Cash",
  "Card Payment",
  "Online Payment",
  "Bank Transfer",
  "Cheque",
];

// Helper to get years for DOB (must be at least 15 years old)
const getDobYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear - 15; i >= currentYear - 65; i--) {
    years.push(i);
  }
  return years;
};

const StudentPortal: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [olRows, setOlRows] = useState(
    Array(10).fill({ subject: "", grade: "" })
  );

  const [formData, setFormData] = useState({
    salutation: "",
    firstName: "",
    middleName: "",
    lastName: "",
    houseNo: "",
    street1: "",
    street2: "",
    city: "",
    postcode: "",
    country: "Sri Lanka",
    mobileCode: "+94",
    mobileNo: "",
    homeCode: "+94",
    homeNo: "",
    nic: "",
    passport: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    gender: "",
    alStream: "",
    olYear: "",
    courseType: "",
    courseName: "",
    agentName: "",
    paymentMethod: "",
    email: "", // Added for follow-up communication
  });

  // Handle phone code update based on country
  useEffect(() => {
    const selectedCountry = COUNTRIES.find((c) => c.name === formData.country);
    if (selectedCountry) {
      setFormData((prev) => ({
        ...prev,
        mobileCode: selectedCountry.code,
        homeCode: selectedCountry.code,
      }));
    }
  }, [formData.country]);

  // Generate filtered course list based on type
  const [filteredCourses, setFilteredCourses] = useState<string[]>([]);
  useEffect(() => {
    if (!formData.courseType) {
      setFilteredCourses([]);
      return;
    }

    const type = formData.courseType.toLowerCase();
    const allCourses: string[] = [];
    FACULTIES.forEach((f) => {
      f.courses.forEach((c) => {
        if (type === "other") {
          allCourses.push(c);
        } else if (c.toLowerCase().includes(type)) {
          allCourses.push(c);
        } else if (
          type === "foundation" &&
          (c.toLowerCase().includes("foundation") ||
            c.toLowerCase().includes("it"))
        ) {
          allCourses.push(c);
        } else if (
          type === "degree" &&
          !c.toLowerCase().includes("foundation")
        ) {
          allCourses.push(c);
        }
      });
    });
    // Fallback if no specific match
    if (allCourses.length === 0) {
      FACULTIES.forEach((f) => f.courses.forEach((c) => allCourses.push(c)));
    }
    setFilteredCourses([...new Set(allCourses)]);
  }, [formData.courseType]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOlChange = (index: number, field: string, value: string) => {
    const newRows = [...olRows];
    newRows[index] = { ...newRows[index], [field]: value };
    setOlRows(newRows);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isSriLanka = formData.country === "Sri Lanka";

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 py-20 px-4">
        <div className="max-w-xl w-full bg-white p-12 rounded-3xl shadow-2xl text-center border border-slate-200">
          <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Application Submitted!
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you, {formData.salutation} {formData.lastName}. Your
            enrollment application for the{" "}
            <strong>{formData.courseName}</strong> has been received. Our team
            will contact you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 shadow-lg shadow-primary/20"
          >
            Back to Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen ">
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <img
          src="studentportal.webp"
          alt="Student Enrollment at IUSL"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl font-serif font-bold mb-6">Student Portal</h1>
          <p className="text-2xl font-light text-blue-100 italic">
            "Join our community and start your journey towards academic
            excellence"
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-primary p-6 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 flex items-center space-x-4 mb-4">
              <GraduationCap size={40} className="text-secondary" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold">
                Enrollment Form
              </h1>
            </div>
            <p className="text-blue-100 max-w-2xl text-lg italic">
              Empowering your future with quality education. Fields marked with{" "}
              <span className="text-secondary font-bold text-xl">*</span> are
              mandatory.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-3 md:p-16 space-y-16">
            {/* 1. Student Name */}
            <section>
              <h3 className="text-xl font-bold text-primary mb-8 flex items-center">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                  1
                </span>
                Student Name
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Salutation*
                  </label>
                  <select
                    required
                    name="salutation"
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="">Select</option>
                    {SALUTATIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    First Name*
                  </label>
                  <input
                    required
                    name="firstName"
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Middle Name
                  </label>
                  <input
                    name="middleName"
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Last Name*
                  </label>
                  <input
                    required
                    name="lastName"
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>
            </section>

            {/* 2. Address */}
            <section>
              <h3 className="text-xl font-bold text-primary mb-8 flex items-center">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                  2
                </span>
                Address Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    House No.*
                  </label>
                  <input
                    required
                    name="houseNo"
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Street Name 1*
                  </label>
                  <input
                    required
                    name="street1"
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Street Name 2
                  </label>
                  <input
                    name="street2"
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    City*
                  </label>
                  <input
                    required
                    name="city"
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Postcode
                  </label>
                  <input
                    name="postcode"
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Country*
                  </label>
                  <select
                    required
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* 3. Telephone */}
            <section>
              <h3 className="text-xl font-bold text-primary mb-8 flex items-center">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                  3
                </span>
                Contact Numbers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Mobile Number*
                  </label>
                  <div className="flex">
                    <input
                      name="mobileCode"
                      readOnly
                      value={formData.mobileCode}
                      className="w-24 px-4 py-3 bg-slate-100 border border-slate-200 rounded-l-xl text-gray-500 font-bold outline-none"
                    />
                    <input
                      required
                      name="mobileNo"
                      onChange={handleChange}
                      type="text"
                      placeholder="XXX XXXXXX"
                      className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 border-l-0 rounded-r-xl focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Home Number
                  </label>
                  <div className="flex">
                    <input
                      name="homeCode"
                      readOnly
                      value={formData.homeCode}
                      className="w-24 px-4 py-3 bg-slate-100 border border-slate-200 rounded-l-xl text-gray-500 font-bold outline-none"
                    />
                    <input
                      name="homeNo"
                      onChange={handleChange}
                      type="text"
                      placeholder="XXX XXXXXX"
                      className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 border-l-0 rounded-r-xl focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Email Address (for communication)
                  </label>
                  <input
                    required
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>
            </section>

            {/* 4. NIC/Passport & Personal */}
            <section>
              <h3 className="text-xl font-bold text-primary mb-8 flex items-center">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                  4
                </span>
                Identification & Personal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    NIC Number {isSriLanka && "*"}
                  </label>
                  <input
                    required={isSriLanka}
                    name="nic"
                    onChange={handleChange}
                    type="text"
                    placeholder="NIC no."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Passport Number*
                  </label>
                  <input
                    required
                    name="passport"
                    onChange={handleChange}
                    type="text"
                    placeholder="Passport no."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Date of Birth*
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      required
                      name="dobDay"
                      onChange={handleChange}
                      className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                    >
                      <option value="">Day</option>
                      {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <select
                      required
                      name="dobMonth"
                      onChange={handleChange}
                      className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                    >
                      <option value="">Month</option>
                      {[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ].map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                    <select
                      required
                      name="dobYear"
                      onChange={handleChange}
                      className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                    >
                      <option value="">Year</option>
                      {getDobYears().map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Gender
                  </label>
                  <div className="flex space-x-6 py-3">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                        className="w-5 h-5 accent-primary"
                      />
                      <span>Male</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                        className="w-5 h-5 accent-primary"
                      />
                      <span>Female</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Academic Results */}
            <section>
              <h3 className="text-xl font-bold text-primary mb-8 flex items-center">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                  5
                </span>
                Academic Background
              </h3>

              <div className="mb-10">
                <label className="block text-sm font-semibold text-gray-600 mb-4">
                  A/L Results
                </label>
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="text-gray-500 font-medium">Stream:</span>
                  <select
                    name="alStream"
                    onChange={handleChange}
                    className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none min-w-[200px]"
                  >
                    <option value="">Please select one</option>
                    {STREAMS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="block text-sm font-semibold text-gray-600">
                    O/L Results*
                  </label>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-500">
                      Year of Completion:
                    </span>
                    <input
                      required
                      name="olYear"
                      onChange={handleChange}
                      type="text"
                      placeholder="Year"
                      className="w-24 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                    />
                  </div>
                </div>

                <div className=" rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {olRows.map((row, idx) => (
                      <div key={idx} className="flex space-x-2">
                        <input
                          placeholder={`Subject ${idx + 1}`}
                          className="flex-1 px-4 py-2 border border-slate-200 rounded-lg outline-none focus:ring-1 focus:ring-primary"
                          onChange={(e) =>
                            handleOlChange(idx, "subject", e.target.value)
                          }
                        />
                        <select
                          className="w-24 px-2 py-2 border border-slate-200 rounded-lg outline-none bg-white"
                          onChange={(e) =>
                            handleOlChange(idx, "grade", e.target.value)
                          }
                        >
                          <option value="">Grade*</option>
                          {GRADES.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Course Applied For */}
            <section>
              <h3 className="text-xl font-bold text-primary mb-8 flex items-center">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                  6
                </span>
                Course Applied For
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Type of Course*
                  </label>
                  <select
                    required
                    name="courseType"
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                  >
                    <option value="">Please select</option>
                    {COURSE_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Name of the Course*
                  </label>
                  <select
                    required
                    name="courseName"
                    onChange={handleChange}
                    disabled={!formData.courseType}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none disabled:opacity-50"
                  >
                    <option value="">Please select</option>
                    {filteredCourses.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Agent name / Social Media
                  </label>
                  <input
                    name="agentName"
                    onChange={handleChange}
                    type="text"
                    placeholder="Please enter handle or name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Method of Payment*
                  </label>
                  <select
                    required
                    name="paymentMethod"
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                  >
                    <option value="">Please select</option>
                    {PAYMENT_METHODS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            <div className="pt-10 flex flex-col items-center">
              <p className="text-sm text-gray-500 mb-6 text-center max-w-lg">
                By submitting this application, I declare that the information
                provided is true and accurate to the best of my knowledge.
              </p>
              <button
                type="submit"
                className="bg-secondary text-dark px-20 py-5 rounded-2xl font-bold text-2xl flex items-center justify-center hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest"
              >
                SUBMIT APPLICATION
              </button>
            </div>
          </form>

          {/* Footer Note */}
          <div className="bg-slate-50 p-8 text-center text-gray-400 text-xs border-t border-slate-200">
            <p>
              IUSL Campus Student Enrollment Services | Dharmapala Mawatha,
              Colombo 07 | Accredited by UGC and UK Universities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
