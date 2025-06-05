import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import internshipDetails from "../assets/internshipDetail.js";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Internships Grid */}
      <div className="max-w-7xl mx-auto lg:px-8 p-12 m-12 flex flex-col gap-8">
        {internshipDetails && internshipDetails.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {internshipDetails.slice(0, 6).map((internship) => (
              <div className="flex justify-center">
                <Card data={internship} />
              </div>
            ))}
            <div className="flex gap-4 justify-center">
              <Link
                to="/internships"
                className="bg-gradient-to-r from-blue-500 to-blue-800  hover:from-blue-600 hover:to-blue-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaSearch />
                Explore All Internships
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-lg mx-auto">
              {/* Animated Empty State */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white rounded-full p-8 shadow-xl">
                  <svg
                    className="mx-auto h-24 w-24 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V6m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                No Internships Available
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're working hard to bring you amazing internship
                opportunities. Check back soon or subscribe to get notified when
                new positions are posted.
              </p>

              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
