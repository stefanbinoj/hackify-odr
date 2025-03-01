import { X } from "lucide-react"
import Image from "next/image"

interface ArbitrationModalProps {
    isOpen: boolean
    onClose: () => void
}

const ArbitrationModal = ({ isOpen, onClose }: ArbitrationModalProps) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 ml-80 flex items-center justify-center bg-black/50">
            <div className="relative max-h-[90vh] w-[80%] overflow-y-auto rounded-xl bg-white p-8 shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100"
                >
                    <X className="h-6 w-6" />
                </button>

                {/* Content */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Understanding the Arbitration Process
                    </h2>

                    {/* Introduction */}
                    <div className="rounded-lg bg-purple-50 p-6">
                        <h3 className="mb-3 text-xl font-semibold text-purple-800">
                            What is Arbitration?
                        </h3>
                        <p className="text-purple-700">
                            Arbitration is a private dispute resolution process where an
                            independent arbitrator makes a final and binding decision. Unlike
                            mediation, the arbitrator acts like a judge and has the power to
                            make a decision that both parties must follow.
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
                                <h4 className="text-lg font-semibold">Filing the Claim</h4>
                            </div>
                            <p className="text-gray-600">
                                One party initiates arbitration by filing a claim and notifying
                                the other party. The claim outlines the dispute and desired
                                outcome.
                            </p>
                            <Image
                                src="/images/arbitration-step1.png"
                                alt="Filing the Claim"
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
                                <h4 className="text-lg font-semibold">Arbitrator Selection</h4>
                            </div>
                            <p className="text-gray-600">
                                Parties either agree on an arbitrator or follow a selection
                                process. The arbitrator must be neutral and have relevant
                                expertise.
                            </p>
                            <Image
                                src="/images/arbitration-step2.png"
                                alt="Arbitrator Selection"
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
                                <h4 className="text-lg font-semibold">Preliminary Hearing</h4>
                            </div>
                            <p className="text-gray-600">
                                The arbitrator meets with parties to establish procedures,
                                timelines, and exchange of evidence requirements.
                            </p>
                            <Image
                                src="/images/arbitration-step3.png"
                                alt="Preliminary Hearing"
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
                                <h4 className="text-lg font-semibold">Evidence & Hearings</h4>
                            </div>
                            <p className="text-gray-600">
                                Parties present evidence, witnesses, and arguments. The process is
                                more formal than mediation but less formal than court.
                            </p>
                            <Image
                                src="/images/arbitration-step4.png"
                                alt="Evidence & Hearings"
                                width={400}
                                height={300}
                                className="mt-4 rounded-lg"
                            />
                        </div>

                        {/* Step 5 */}
                        <div className="rounded-lg border p-6">
                            <div className="mb-4 flex items-center">
                                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                                    5
                                </div>
                                <h4 className="text-lg font-semibold">Final Award</h4>
                            </div>
                            <p className="text-gray-600">
                                The arbitrator reviews all evidence and issues a binding decision
                                called an "award." This decision is typically final and
                                enforceable by law.
                            </p>
                            <Image
                                src="/images/arbitration-step5.png"
                                alt="Final Award"
                                width={400}
                                height={300}
                                className="mt-4 rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="mb-4 text-xl font-semibold">
                            Key Features of Arbitration
                        </h3>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <h5 className="mb-2 font-semibold text-blue-600">
                                    Binding Decision
                                </h5>
                                <p className="text-sm text-gray-600">
                                    Arbitrator's decision is final and legally enforceable
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <h5 className="mb-2 font-semibold text-green-600">
                                    Expert Arbitrators
                                </h5>
                                <p className="text-sm text-gray-600">
                                    Specialists with industry-specific knowledge
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <h5 className="mb-2 font-semibold text-purple-600">
                                    Private Process
                                </h5>
                                <p className="text-sm text-gray-600">
                                    Confidential proceedings away from public record
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArbitrationModal 