import { useParams } from "react-router-dom";
import {
  FaLocationDot,
  FaRegMoneyBill1,
  FaCalendar,
  FaUpload,
} from "react-icons/fa6";
import internshipDetails from "../assets/internshipDetail.js";

const Internshipdetail = () => {
  const { id: internshipId } = useParams();
  const internship = internshipDetails.find(
    (internship) => internship._id === internshipId
  );

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {internship.title}
              </h1>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                {internship.company}
              </p>

              {/* Key Details  */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <FaLocationDot className="text-red-600 text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      Location
                    </p>
                    <p className="text-gray-900 font-semibold">
                      {internship.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <FaRegMoneyBill1 className="text-green-600 text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      Stipend
                    </p>
                    <p className="text-gray-900 font-semibold">
                      {internship.stipend}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <FaCalendar className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      Duration
                    </p>
                    <p className="text-gray-900 font-semibold">
                      {internship.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 mb-8">
          {/* Description Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1 h-8 bg-blue-600 rounded"></div>
              Job Description
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {internship.description}
              </p>
            </div>
          </div>
        </div>

        {/* Application Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-green-600 rounded"></div>
            Apply Now
          </h2>

          {/* Resume Upload */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Upload Resume
            </label>
            <div className="relative">
              <input
                type="file"
                accept=".pdf"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:border-blue-400"
              >
                <div className="flex flex-col items-center justify-center">
                  <FaUpload className="text-2xl text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 font-medium">
                    Click to upload PDF
                  </p>
                  <p className="text-xs text-gray-400">Max file size: 5MB</p>
                </div>
              </label>
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Submit Application
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By applying, you agree to our terms and conditions
          </p>
        </div>

        {/* Quick Info Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
          <h3 className="text-xl font-bold mb-4">Application Tips</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
              <span>Tailor your resume to match the job requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
              <span>Highlight relevant skills and experiences</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
              <span>Keep your resume concise and well-formatted</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Internshipdetail;
