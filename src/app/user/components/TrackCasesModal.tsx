import { Calendar, Clock, MapPin, User, X } from "lucide-react"

interface TrackCasesModalProps {
    isOpen: boolean
    onClose: () => void
}

const disputes = [
    {
        id: "DIS-2024-001",
        status: "ACTIVE",
        type: "Commercial Dispute",
        petitioner: {
            name: "John Smith",
            company: "Tech Solutions Inc.",
            contact: "+1 234-567-8900",
            email: "john.smith@techsolutions.com",
        },
        respondent: {
            name: "Sarah Johnson",
            company: "Digital Innovations Ltd.",
            contact: "+1 234-567-8901",
            email: "s.johnson@digitalinnovations.com",
        },
        mediator: {
            name: "Dr. Michael Brown",
            id: "MED-2024-123",
            specialization: "Commercial Mediation",
            experience: "15 years",
        },
        nextMeeting: {
            date: "2024-03-25",
            time: "10:00 AM",
            duration: "2 hours",
            location: "Virtual Meeting Room 1",
            link: "https://meet.resolv.com/dis-2024-001",
        },
        progress: 65,
        lastUpdate: "Documentation review completed",
    },
    {
        id: "DIS-2024-002",
        status: "PENDING",
        type: "Employment Dispute",
        petitioner: {
            name: "Emma Davis",
            company: "Marketing Pro LLC",
            contact: "+1 234-567-8902",
            email: "emma.d@marketingpro.com",
        },
        respondent: {
            name: "Robert Wilson",
            company: "Creative Agency Inc.",
            contact: "+1 234-567-8903",
            email: "r.wilson@creativeagency.com",
        },
        mediator: {
            name: "Lisa Anderson",
            id: "MED-2024-124",
            specialization: "Employment Law",
            experience: "12 years",
        },
        nextMeeting: {
            date: "2024-03-28",
            time: "2:00 PM",
            duration: "1.5 hours",
            location: "Virtual Meeting Room 2",
            link: "https://meet.resolv.com/dis-2024-002",
        },
        progress: 30,
        lastUpdate: "Initial consultation completed",
    },
    // Add more disputes as needed
]

const TrackCasesModal = ({ isOpen, onClose }: TrackCasesModalProps) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 ml-80 flex items-center justify-center bg-black/50">
            <div className="relative max-h-[90vh] w-[90%] overflow-y-auto rounded-xl bg-white p-8 shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100"
                >
                    <X className="h-6 w-6" />
                </button>

                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold text-gray-900">My Disputes</h2>
                        <div className="flex gap-4">
                            <select className="rounded-lg border p-2 text-sm">
                                <option>All Disputes</option>
                                <option>Active</option>
                                <option>Pending</option>
                                <option>Resolved</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Search disputes..."
                                className="rounded-lg border p-2 text-sm"
                            />
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {disputes.map((dispute) => (
                            <div
                                key={dispute.id}
                                className="rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                            >
                                {/* Header */}
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                                            <span className="text-lg font-semibold text-orange-600">
                                                {dispute.id.split("-")[2]}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {dispute.type}
                                            </h3>
                                            <p className="text-sm text-gray-500">ID: {dispute.id}</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`rounded-full px-4 py-1 text-sm font-medium ${dispute.status === "ACTIVE"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-orange-100 text-orange-700"
                                            }`}
                                    >
                                        {dispute.status}
                                    </div>
                                </div>

                                {/* Content Grid */}
                                <div className="mb-6 grid grid-cols-3 gap-6">
                                    {/* Petitioner Info */}
                                    <div className="rounded-lg bg-gray-50 p-4">
                                        <h4 className="mb-3 font-semibold text-gray-700">
                                            Petitioner Details
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4 text-gray-500" />
                                                <span className="text-sm">{dispute.petitioner.name}</span>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                {dispute.petitioner.company}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {dispute.petitioner.contact}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {dispute.petitioner.email}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Respondent Info */}
                                    <div className="rounded-lg bg-gray-50 p-4">
                                        <h4 className="mb-3 font-semibold text-gray-700">
                                            Respondent Details
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4 text-gray-500" />
                                                <span className="text-sm">{dispute.respondent.name}</span>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                {dispute.respondent.company}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {dispute.respondent.contact}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {dispute.respondent.email}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Mediator Info */}
                                    <div className="rounded-lg bg-gray-50 p-4">
                                        <h4 className="mb-3 font-semibold text-gray-700">
                                            Mediator Details
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4 text-gray-500" />
                                                <span className="text-sm">{dispute.mediator.name}</span>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                ID: {dispute.mediator.id}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {dispute.mediator.specialization}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Experience: {dispute.mediator.experience}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Next Meeting & Progress */}
                                <div className="grid grid-cols-2 gap-6">
                                    {/* Next Meeting */}
                                    <div className="rounded-lg bg-orange-50 p-4">
                                        <h4 className="mb-3 font-semibold text-orange-800">
                                            Next Meeting
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-orange-600" />
                                                <span className="text-sm text-orange-700">
                                                    {dispute.nextMeeting.date}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-orange-600" />
                                                <span className="text-sm text-orange-700">
                                                    {dispute.nextMeeting.time}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-orange-600" />
                                                <span className="text-sm text-orange-700">
                                                    {dispute.nextMeeting.location}
                                                </span>
                                            </div>
                                            <a
                                                href={dispute.nextMeeting.link}
                                                className="flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
                                            >
                                                Join Meeting
                                            </a>
                                        </div>
                                    </div>

                                    {/* Progress */}
                                    <div className="rounded-lg bg-blue-50 p-4">
                                        <h4 className="mb-3 font-semibold text-blue-800">Progress</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-blue-700">
                                                    Case Progress
                                                </span>
                                                <span className="text-sm font-medium text-blue-700">
                                                    {dispute.progress}%
                                                </span>
                                            </div>
                                            <div className="h-2 rounded-full bg-blue-200">
                                                <div
                                                    className="h-2 rounded-full bg-blue-600"
                                                    style={{ width: `${dispute.progress}%` }}
                                                />
                                            </div>
                                            <p className="text-sm text-blue-700">
                                                Last Update: {dispute.lastUpdate}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackCasesModal 