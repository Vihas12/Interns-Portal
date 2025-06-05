"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import internshipDetails from "../assets/internshipDetail.js";

const Internship = () => {
  const [filteredInternships, setFilteredInternships] = useState(internshipDetails);

  const [filter,setFilter] = useState({
    search: "",
    location: "",
    duration: "",
    stipend: "",
  });

  const applyFilters = () => {
  let filtered = internshipDetails;

  // Search filter
  // Working with case-insensitive search for title and company
  if (filter.search) {
    filtered = filtered.filter((internship) =>
      internship.title.toLowerCase().includes(filter.search.toLowerCase()) ||
      internship.company.toLowerCase().includes(filter.search.toLowerCase())
    );
  }

  // Location filter
  if (filter.location !== "All Locations" && filter.location !== "") {
    if (filter.location === "remote") {
      filtered = filtered.filter((internship) => internship.location.toLowerCase() === "remote");
    } else if (filter.location === "hybrid") {
      filtered = filtered.filter((internship) => internship.location.toLowerCase() === "hybrid");
    } else if (filter.location === "onsite") {
      filtered = filtered.filter((internship) =>
        internship.location.toLowerCase() !== "remote" &&
        internship.location.toLowerCase() !== "hybrid"
      );
    }
  }

  // Duration filter
  if (filter.duration !== "") {
    filtered = filtered.filter((internship) => internship.duration === parseInt(filter.duration));
  }

  // Stipend filter
  if (filter.stipend !== "") {
    if (filter.stipend === "unpaid") {
      filtered = filtered.filter((internship) => internship.stipend === "Unpaid");
    } else if (filter.stipend === "0-5000") {
      filtered = filtered.filter((internship) => internship.stipend <= 5000);
    } else if (filter.stipend === "5000-10000") {
      filtered = filtered.filter((internship) => internship.stipend > 5000 && internship.stipend <= 10000);
    } else if (filter.stipend === "10000-15000") {
      filtered = filtered.filter((internship) => internship.stipend > 10000 && internship.stipend <= 15000);
    } else if (filter.stipend === "15000+") {
      filtered = filtered.filter((internship) => internship.stipend > 15000);
    }
  }

  setFilteredInternships(filtered);
};


  // Function to handle filter changes
  useEffect(() => {
    applyFilters();
    console.log("Filters applied:", filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find Your Dream
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Internship
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore thousands of internship opportunities from top companies worldwide. Start your career journey today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
                <span className="text-2xl font-bold">{internshipDetails.length}</span>
                <span className="text-sm block text-blue-100">Available Positions</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
                <span className="text-2xl font-bold">500+</span>
                <span className="text-sm block text-blue-100">Partner Companies</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
                <span className="text-2xl font-bold">95%</span>
                <span className="text-sm block text-blue-100">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <Filter activeFilters={filter} setActiveFilters={setFilter}/>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        {/* Cards Grid */}
        {filteredInternships.length > 0 ? (
          <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through carefully curated internship positions that match your skills and career goals
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredInternships.map((internship) => (
            <div className="flex justify-center transform hover:scale-105 transition-all duration-300 hover:z-10">
              <Card data={internship} />
            </div>
          ))}
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
        ) }
        

      </div>

    </div>
  );
};

export default Internship;