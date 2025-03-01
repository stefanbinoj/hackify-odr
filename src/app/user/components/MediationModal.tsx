import { X } from "lucide-react"
import Image from "next/image"

interface MediationModalProps {
    isOpen: boolean
    onClose: () => void
}

const MediationModal = ({ isOpen, onClose }: MediationModalProps) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 ml-80 flex items-center justify-center bg-black/50">
            <div className="relative max-h-[90vh] w-[80%] overflow-y-auto rounded-xl bg-white p-8 shadow-xl">
                {/* Close button moved inside the white container */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100"
                >
                    <X className="h-6 w-6" />
                </button>

                {/* Content */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Understanding the Mediation Process
                    </h2>

                    {/* Introduction */}
                    <div className="rounded-lg bg-orange-50 p-6">
                        <h3 className="mb-3 text-xl font-semibold text-orange-500">
                            What is Mediation?
                        </h3>
                        <p className="text-orange-400">
                            Mediation is a voluntary, confidential process where a neutral third
                            party helps disputants reach a mutually acceptable solution. Unlike
                            court proceedings, mediation empowers parties to control the outcome.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Step 1 */}
                        <div className="rounded-lg border p-6">
                            <div className="mb-4 flex items-center">
                                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    1
                                </div>
                                <h4 className="text-lg font-semibold">Initial Consultation</h4>
                            </div>
                            <p className="text-gray-600">
                                Parties meet separately with the mediator to discuss their
                                perspectives and goals. The mediator explains the process and sets
                                expectations.
                            </p>
                            <Image
                                src="/images/mediation-step1.png"
                                alt="Initial Consultation"
                                width={400}
                                height={300}
                                className="mt-4 rounded-lg"
                            />
                        </div>

                        {/* Step 2 */}
                        <div className="rounded-lg border p-6">
                            <div className="mb-4 flex items-center">
                                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    2
                                </div>
                                <h4 className="text-lg font-semibold">Joint Session</h4>
                            </div>
                            <p className="text-gray-600">
                                All parties meet together with the mediator. Each side presents
                                their perspective while the other listens without interruption.
                            </p>
                            <Image
                                src="/images/mediation-step2.png"
                                alt="Joint Session"
                                width={400}
                                height={300}
                                className="mt-4 rounded-lg"
                            />
                        </div>

                        {/* Step 3 */}
                        <div className="rounded-lg border p-6">
                            <div className="mb-4 flex items-center">
                                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                    3
                                </div>
                                <h4 className="text-lg font-semibold">Private Caucuses</h4>
                            </div>
                            <p className="text-gray-600">
                                The mediator meets privately with each party to discuss possible
                                solutions and negotiate terms.
                            </p>
                            <Image
                                src="/images/mediation-step3.png"
                                alt="Private Caucuses"
                                width={400}
                                height={300}
                                className="mt-4 rounded-lg"
                            />
                        </div>

                        {/* Step 4 */}
                        <div className="rounded-lg border p-6">
                            <div className="mb-4 flex items-center">
                                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                                    4
                                </div>
                                <h4 className="text-lg font-semibold">Agreement & Resolution</h4>
                            </div>
                            <p className="text-gray-600">
                                Once terms are agreed upon, a formal agreement is drafted and
                                signed by all parties.
                            </p>
                            <Image
                                src="/images/mediation-step4.png"
                                alt="Agreement & Resolution"
                                width={400}
                                height={300}
                                className="mt-4 rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="mb-4 text-xl font-semibold">Benefits of Mediation</h3>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <h5 className="mb-2 font-semibold text-blue-600">
                                    Cost-Effective
                                </h5>
                                <p className="text-sm text-gray-600">
                                    Significantly less expensive than litigation
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <h5 className="mb-2 font-semibold text-green-600">
                                    Time-Efficient
                                </h5>
                                <p className="text-sm text-gray-600">
                                    Faster resolution compared to court proceedings
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <h5 className="mb-2 font-semibold text-purple-600">
                                    Confidential
                                </h5>
                                <p className="text-sm text-gray-600">
                                    Discussions remain private and confidential
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediationModal 