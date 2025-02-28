import { Plus } from "lucide-react"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="mx-6 flex max-w-7xl gap-6">
        {/* Case Statistics Card */}
        <div className="ml-4 min-h-[80vh] min-w-[40vw] rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Case Statistics
          </h2>
          <div className="mb-6 flex gap-4">
            <div className="rounded-lg bg-green-100 p-4">
              <p className="mb-2 text-sm font-medium text-green-600">
                No. of Cases
              </p>
              <p className="text-3xl font-bold text-green-700">7</p>
            </div>
            <div className="rounded-lg bg-blue-100 p-4">
              <p className="mb-2 text-sm font-medium text-blue-600">
                Cases Resolved
              </p>
              <p className="text-3xl font-bold text-blue-700">4</p>
            </div>
          </div>
          <a
            href="#/track-cases"
            className="block rounded-md bg-indigo-600 px-4 py-2 text-center font-medium text-white transition duration-200 hover:bg-indigo-700"
          >
            Track My Cases
          </a>
        </div>

        {/* Mediation Card */}
        <div className="flex-col gap-5">
          <div className="mb-5 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Mediation
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Learn about our mediation process and how it can help you resolve
              disputes efficiently and cost-effectively.
            </p>
            <a
              href="#/mediation"
              className="block rounded-md bg-amber-500 px-4 py-2 text-center font-medium text-white transition duration-200 hover:bg-amber-600"
            >
              Know More About Mediation
            </a>
          </div>

          {/* Arbitration Card */}
          <div className="rounded-lg bg-purple-600 p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Arbitration
            </h2>
            <p className="mb-6 leading-relaxed text-purple-100">
              Explore our arbitration services designed to provide binding
              decisions for complex legal disputes.
            </p>
            <a
              href="#/arbitration"
              className="block rounded-md bg-white px-4 py-2 text-center font-medium text-purple-700 transition duration-200 hover:bg-purple-50"
            >
              Know More About Arbitration
            </a>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <a
        href="#/booking"
        className="group fixed right-6 bottom-6 flex items-center space-x-2 rounded-full bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700"
      >
        <span>Book Now</span>
        <Plus
          size={20}
          className="transition-transform duration-300 group-hover:rotate-90"
        />
      </a>
    </div>
  )
}

export default Home
