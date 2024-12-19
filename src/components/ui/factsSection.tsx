import {
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaCode,
  FaSmile,
  FaUserTie,
} from "react-icons/fa";

export default function FactsSection() {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaUsers className="text-green-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-green-600">100+</h3>
            <p className="text-gray-600 mt-2">Clients & Partners</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaCheckCircle className="text-green-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-green-600">50+</h3>
            <p className="text-gray-600 mt-2">Problem solved</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaClock className="text-green-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-green-600">10+</h3>
            <p className="text-gray-600 mt-2">
              Years experienced in this industry
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaCode className="text-green-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-green-600">10B+</h3>
            <p className="text-gray-600 mt-2">Line of code has been written</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaUserTie className="text-green-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-green-600">100+</h3>
            <p className="text-gray-600 mt-2">DOT Talents</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaSmile className="text-green-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-green-600">UNLIMITED</h3>
            <p className="text-gray-600 mt-2">Client's smile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
