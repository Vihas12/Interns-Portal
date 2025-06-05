import { Link } from "react-router-dom";
import { FaLocationDot, FaRegMoneyBill1, FaCalendar } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = ({ data }) => {
  return (
    <div className="group w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl hover:border-blue-200">
      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
            {data.title}
          </h2>
          <p className="text-gray-600 text-base font-medium mt-2 group-hover:text-blue-500 transition-colors duration-200">
            {data.company}
          </p>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-6">
          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 text-blue-600 flex items-center justify-center rounded-full transition-colors duration-200">
              <FaLocationDot size={16} />
            </div>
            <div>
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                Location
              </span>
              <p className="text-gray-800 text-sm font-semibold">
                {data.location}
              </p>
            </div>
          </div>

          {/* Stipend */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 text-blue-600 flex items-center justify-center rounded-full transition-colors duration-200">
              <FaRegMoneyBill1 size={16} />
            </div>
            <div>
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                Stipend
              </span>
              <p className="text-gray-800 text-sm font-semibold">
                ₹{data.stipend}/month
              </p>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 text-blue-600 flex items-center justify-center rounded-full transition-colors duration-200">
              <FaCalendar size={16} />
            </div>
            <div>
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                Duration
              </span>
              <p className="text-gray-800 text-sm font-semibold">
                {data.duration} months
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer/Action Area */}
      <div className="flex items-center px-6 py-4 bg-gray-50 group-hover:bg-blue-50 border-t rounded-b-2xl border-gray-100 transition-colors duration-200">
        <Link
          to={`/internship/${data._id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold group-hover:text-lg transition-all duration-200"
        >
          View Details
          <MdKeyboardArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
