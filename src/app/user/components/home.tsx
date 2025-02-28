import { ArrowRight, Scale, Users } from "lucide-react"
import Link from "next/link"
import { FaPlus } from "react-icons/fa"

export default function Home() {
  return (
    <div className="ml-5 min-h-screen bg-gray-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Case Statistics Card */}
          <div className="w-[370px] overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Case Statistics
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="text-sm font-medium text-green-800">
                    Number of Cases
                  </p>
                  <p className="text-3xl font-bold text-green-600">7</p>
                </div>
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="text-sm font-medium text-orange-600">
                    Cases Resolved
                  </p>
                  <p className="text-3xl font-bold text-orange-600">4</p>
                </div>
                <Link
                  href="/track-cases"
                  className="mt-2 flex items-center justify-between rounded-lg bg-gray-100 p-4 transition-colors hover:bg-gray-200"
                >
                  <span className="font-medium text-gray-800">
                    Track My Cases
                  </span>
                  <ArrowRight className="h-5 w-5 text-gray-600" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mediation Card */}
          <div className="ml-12 w-[300px] overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="p-6">
              <div className="mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6 text-indigo-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Mediation
                </h2>
              </div>
              <p className="mb-6 text-gray-600">
                Learn about our mediation services and how they can help resolve
                disputes efficiently and amicably.
              </p>
              <Link
                href="/user/"
                className="mt-25 inline-flex items-center font-medium text-orange-400 hover:text-orange-600"
              >
                Know more about Mediation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Arbitration Card */}
          <div className="ml-8 w-[300px] overflow-hidden rounded-xl bg-white text-black shadow-lg">
            <div className="p-6">
              <div className="mb-4 flex items-center">
                <Scale className="mr-2 h-6 w-6 text-indigo-600" />
                <h2 className="text-xl font-semibold text-black">
                  Arbitration
                </h2>
              </div>
              <p className="mb-6 text-black">
                Discover how our arbitration services provide a binding
                resolution to complex disputes through expert arbitrators.
              </p>
              <Link
                href="/arbitration"
                className="mt-25 inline-flex items-center font-medium text-orange-500 hover:text-purple-200"
              >
                Know more about Arbitration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="fixed right-8 bottom-8 z-20 rounded-4xl">
          <Link
            href="/book-appointment"
            className="flex items-center rounded-4xl bg-orange-400 px-6 py-3 text-white shadow-lg transition-colors hover:bg-orange-500"
          >
            <FaPlus size={20} />
            <span className="ml-3 font-medium">File Case</span>
          </Link>
        </div>
      </div>
      <h1 className="mb-5 ml-3 text-2xl">Case Stories</h1>
      <div className="ml-[-70px] flex justify-center gap-10">
        <div className="relative h-[150px] w-[450px] rounded-2xl bg-white shadow-md">
          <h1 className="absolute top-5 right-5 font-mono text-xl">
            <strong>KARTHIK</strong> vs <strong>ICCI </strong>
          </h1>
          {/* <p className="absolute right-5 bottom-0 flex text-sm text-blue-400">
            View More <FaArrowRightLong />
          </p> */}
          <img
            src="/images/case11.jpg"
            className="h-full w-3/4 rounded-2xl object-cover object-[10%_20%]"
          />
        </div>
        <div className="relative h-[150px] w-[450px] rounded-2xl bg-white shadow-md">
          <h1 className="absolute top-5 right-5 font-mono text-xl">
            <strong>AYUSH</strong> vs <strong>TCS </strong>
          </h1>
          <img
            src="/images/case22.jpg"
            className="h-full w-3/4 rounded-2xl object-cover object-[50%_20%]"
          />
        </div>
      </div>
    </div>
  )
}
