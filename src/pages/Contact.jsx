import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaUsers,
  FaBuilding,
  FaGraduationCap,
  FaQuestionCircle,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: ["hello@internshiphub.com", "support@internshiphub.com"],
    color: "bg-green-100 text-green-600",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Office",
    details: ["123 Innovation Drive", "San Francisco, CA 94107"],
    color: "bg-red-100 text-red-600",
  },
  {
    icon: FaClock,
    title: "Hours",
    details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat-Sun: 10:00 AM - 4:00 PM"],
    color: "bg-purple-100 text-purple-600",
  },
];

const categories = [
  {
    icon: FaUsers,
    title: "General Inquiry",
    description: "Questions about our platform and services",
    email: "hello@internshiphub.com",
  },
  {
    icon: FaBuilding,
    title: "Partnership",
    description: "Interested in partnering with us",
    email: "partnerships@internshiphub.com",
  },
  {
    icon: FaGraduationCap,
    title: "Student Support",
    description: "Help with applications and account issues",
    email: "support@internshiphub.com",
  },
  {
    icon: FaQuestionCircle,
    title: "Technical Support",
    description: "Technical issues and bug reports",
    email: "tech@internshiphub.com",
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    url: "#",
    color: "hover:text-blue-600",
    bg: "hover:bg-blue-50",
  },
  {
    icon: FaTwitter,
    url: "#",
    color: "hover:text-blue-400",
    bg: "hover:bg-blue-50",
  },
  {
    icon: FaFacebook,
    url: "#",
    color: "hover:text-blue-700",
    bg: "hover:bg-blue-50",
  },
  {
    icon: FaInstagram,
    url: "#",
    color: "hover:text-pink-600",
    bg: "hover:bg-pink-50",
  },
];


const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're here to help you succeed. Reach out to us with any
              questions, feedback, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the category that best describes your inquiry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <category.icon className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <a
                  href={`mailto:${category.email}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  {category.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">


            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl"
                  >
                    <div
                      className={`${info.color} p-3 rounded-full flex-shrink-0`}
                    >
                      <info.icon className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 transition-all duration-200 ${social.color} ${social.bg}`}
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer:
                  "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
              },
              {
                question: "Do you offer phone support?",
                answer:
                  "Yes, our phone support is available Monday through Friday from 9:00 AM to 6:00 PM PST. Weekend support is available from 10:00 AM to 4:00 PM.",
              },
              {
                question: "Can I schedule a meeting with your team?",
                answer:
                  "Absolutely! For partnership discussions or detailed consultations, we'd be happy to schedule a meeting. Please mention your preferred meeting times in your message.",
              },
              {
                question: "What information should I include in my message?",
                answer:
                  "Please provide as much relevant detail as possible, including your specific question or request, any relevant background information, and your preferred method of follow-up contact.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
