import {
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaFilter,
  FaTimes,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";

const Filter = ({ activeFilters, setActiveFilters }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const clearAllFilters = () => {
    setActiveFilters({
      search: "",
      location: "",
      duration: "",
      stipend: "",
    });
  };

  const hasActiveFilters = Object.values(activeFilters).some(
    (value) => value !== ""
  );

  return (
    <div className="py-6">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FaFilter className="text-sm" />
          Filters
        </button>
      </div>

      {/* Filter Content */}
      <div
        className={`${
          isFilterOpen ? "block" : "hidden"
        }  lg:flex justify-center`}
      >
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FaSearch className="text-blue-600" />
                Find Your Perfect Internship
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1 font-medium"
                >
                  <FaTimes className="text-xs" />
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Filter Controls */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Search Input */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Keywords
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Job title, company, or skills..."
                    value={activeFilters.search}
                    onChange={(e) =>
                      setActiveFilters({
                        ...activeFilters,
                        search: e.target.value,
                      })
                    }
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-gray-50 focus:bg-white"
                  />
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  Location
                </label>
                <div className="relative">
                  <select
                    value={activeFilters.location}
                    onChange={(e) =>
                      setActiveFilters({
                        ...activeFilters,
                        location: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-gray-50 focus:bg-white transition-all duration-200 text-gray-900"
                  >
                    <option value="">All Locations</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">On-site</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaClock className="text-blue-500" />
                  Duration
                </label>
                <div className="relative">
                  <select
                    value={activeFilters.duration}
                    onChange={(e) =>
                      setActiveFilters({
                        ...activeFilters,
                        duration: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-gray-50 focus:bg-white transition-all duration-200 text-gray-900"
                  >
                    <option value="">All Durations</option>
                    <option value="1">1 Month</option>
                    <option value="2">2 Months</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Stipend and Action Button */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {/* Stipend Filter */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaMoneyBillWave className="text-green-500" />
                  Stipend Range
                </label>
                <div className="relative">
                  <select
                    value={activeFilters.stipend}
                    onChange={(e) =>
                      setActiveFilters({
                        ...activeFilters,
                        stipend: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-gray-50 focus:bg-white transition-all duration-200 text-gray-900"
                  >
                    <option value="">All Stipends</option>
                    <option value="unpaid">Unpaid</option>
                    <option value="0-5000">Up to ₹5,000</option>
                    <option value="5000-10000">₹5,000 - ₹10,000</option>
                    <option value="10000-15000">₹10,000 - ₹15,000</option>
                    <option value="15000+">₹15,000+</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <FaSearch />
                  Search Internships
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-gray-700">
                  Active filters:
                </span>
                {Object.entries(activeFilters).map(
                  ([key, value]) =>
                    value && (
                      <span
                        key={key}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {key}: {value}
                        <button
                          onClick={() =>
                            setActiveFilters({ ...activeFilters, [key]: "" })
                          }
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <FaTimes className="text-xs" />
                        </button>
                      </span>
                    )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
