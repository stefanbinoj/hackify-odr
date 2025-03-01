"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, Info } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    // Petitioner Details
    petitionerName: z.string().min(2, "Name is required"),
    petitionerCompany: z.string().optional(),
    petitionerPhone: z.string().min(10, "Valid phone number required"),
    petitionerAddress: z.string().min(5, "Address is required"),

    // Respondent Details
    respondentName: z.string().min(2, "Name is required"),
    respondentCompany: z.string().optional(),
    respondentPhone: z.string().min(10, "Valid phone number required"),
    respondentAddress: z.string().min(5, "Address is required"),

    // Case Details
    caseTitle: z.string().min(5, "Title is required"),
    caseType: z.enum([
        "COMMERCIAL",
        "EMPLOYMENT",
        "INTELLECTUAL_PROPERTY",
        "CONSUMER",
        "OTHER",
    ]),
    caseDescription: z.string().min(50, "Please provide more details about the case"),
    estimatedValue: z.string().optional(),
    preferredLanguage: z.enum(["ENGLISH", "HINDI", "TAMIL"]),
})

export default function BookAppointment() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            caseType: "COMMERCIAL",
            preferredLanguage: "ENGLISH",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
        // Handle form submission
    }

    return (
        <main className="flex-1">
            <div className="px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    {/* Title Section */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Book a Consultation
                        </h1>
                        <p className="mt-2 text-gray-600">
                            Start your journey towards dispute resolution
                        </p>
                    </div>

                    {/* Why Consultation Section */}
                    <div className="mb-12 rounded-xl bg-orange-50 p-6">
                        <div className="flex items-center gap-2">
                            <Info className="h-5 w-5 text-orange-600" />
                            <h2 className="text-xl font-semibold text-orange-500">
                                Why Consultation?
                            </h2>
                        </div>
                        <div className="mt-4 space-y-4 text-orange-400">
                            <p>
                                A preliminary consultation is a crucial step in your dispute
                                resolution journey. Our experienced mediators will:
                            </p>
                            <ul className="ml-6 list-disc space-y-2">
                                <li>
                                    Assess the viability of your case for Online Dispute Resolution
                                    (ODR)
                                </li>
                                <li>
                                    Evaluate the complexity and determine the most effective approach
                                </li>
                                <li>
                                    Ensure compliance with legal requirements and ODR guidelines
                                </li>
                                <li>
                                    Provide initial guidance on documentation and preparation
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Form Section */}
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* Petitioner Details */}
                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <h3 className="mb-6 text-lg font-semibold text-gray-900">
                                    Petitioner Details
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Full Name *
                                        </label>
                                        <input
                                            {...form.register("petitionerName")}
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                        />
                                        {form.formState.errors.petitionerName && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {form.formState.errors.petitionerName.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Company/Organization
                                        </label>
                                        <input
                                            {...form.register("petitionerCompany")}
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Phone Number *
                                        </label>
                                        <input
                                            {...form.register("petitionerPhone")}
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                        />
                                        {form.formState.errors.petitionerPhone && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {form.formState.errors.petitionerPhone.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Address *
                                        </label>
                                        <textarea
                                            {...form.register("petitionerAddress")}
                                            rows={3}
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                        />
                                        {form.formState.errors.petitionerAddress && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {form.formState.errors.petitionerAddress.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Respondent Details */}
                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <h3 className="mb-6 text-lg font-semibold text-gray-900">
                                    Respondent Details
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Full Name *
                                        </label>
                                        <input
                                            {...form.register("respondentName")}
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                        />
                                        {form.formState.errors.respondentName && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {form.formState.errors.respondentName.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Company/Organization
                                        </label>
                                        <input
                                            {...form.register("respondentCompany")}
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Phone Number *
                                        </label>
                                        <input
                                            {...form.register("respondentPhone")}
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                        />
                                        {form.formState.errors.respondentPhone && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {form.formState.errors.respondentPhone.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Address *
                                        </label>
                                        <textarea
                                            {...form.register("respondentAddress")}
                                            rows={3}
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                        />
                                        {form.formState.errors.respondentAddress && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {form.formState.errors.respondentAddress.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Case Details */}
                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <h3 className="mb-6 text-lg font-semibold text-gray-900">
                                Case Details
                            </h3>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Case Title *
                                    </label>
                                    <input
                                        {...form.register("caseTitle")}
                                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                    />
                                    {form.formState.errors.caseTitle && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {form.formState.errors.caseTitle.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Case Type *
                                    </label>
                                    <select
                                        {...form.register("caseType")}
                                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                    >
                                        <option value="COMMERCIAL">Commercial Dispute</option>
                                        <option value="EMPLOYMENT">Employment Dispute</option>
                                        <option value="INTELLECTUAL_PROPERTY">
                                            Intellectual Property
                                        </option>
                                        <option value="CONSUMER">Consumer Dispute</option>
                                        <option value="OTHER">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Estimated Value (Optional)
                                    </label>
                                    <input
                                        {...form.register("estimatedValue")}
                                        placeholder="₹"
                                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Preferred Language *
                                    </label>
                                    <select
                                        {...form.register("preferredLanguage")}
                                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                    >
                                        <option value="ENGLISH">English</option>
                                        <option value="HINDI">Hindi</option>
                                        <option value="TAMIL">Tamil</option>
                                    </select>
                                </div>

                                <div className="col-span-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Case Description *
                                    </label>
                                    <textarea
                                        {...form.register("caseDescription")}
                                        rows={4}
                                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                                        placeholder="Please provide detailed information about your case..."
                                    />
                                    {form.formState.errors.caseDescription && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {form.formState.errors.caseDescription.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 text-white shadow-sm transition-colors hover:bg-orange-600"
                            >
                                Book Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
} 