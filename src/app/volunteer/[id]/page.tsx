import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import Link from "next/link";
import { getPageData } from "@/components/lib/data";

export default function VolunteerPage({ params }: { params: { uuid: string } }) {

    return (
        <>
            <Breadcrumbs href="/volunteer" parent="All Assignments" currentPage="Saturday, Jan 14" />
            <h1 className="text-3xl font-bold">Saturday, Jan 14, 2024 | 9:00am</h1>
            <div className="mt-8 p-10 bg-lightgray-100 border-2 border-gray-300 rounded-lg">

                <div className="headingarea flex justify-between items-center space-x-4">
                    <p className="title text-3xl font-bold">Your assignment</p>
                </div>
                <p className="label text-xl font-semibold mt-4">Your Assignments</p>
                <h3 className="text-2xl font-bold mt-2">Bathrooms</h3>
                <p className="mt-1">Mark each as complete when you finish them</p>
                <form className="mt-4">
                    <div className="itemblock flex items-center space-x-4 pb-6">
                        <input type="checkbox" id="sinks" name="sinks" className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out" />
                        <label htmlFor="sinks">
                            <div className="item">
                                <h4 className="text-lg font-semibold">Sinks and Countertops</h4>
                                <p className="mt-1">Ensure the bathrooms are spotless by cleaning sinks, toilets, and mirrors, restocking supplies, and emptying trash bins.</p>
                            </div>
                        </label>
                    </div>
                    <div className="itemblock flex items-center space-x-4 pb-6">
                        <input type="checkbox" id="bathrooms" name="bathrooms" className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out" />
                        <label htmlFor="bathrooms">
                            <div className="item">
                                <h4 className="text-lg font-semibold">Sinks and Countertops</h4>
                                <p className="mt-1">Ensure the bathrooms are spotless by cleaning sinks, toilets, and mirrors, restocking supplies, and emptying trash bins.</p>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </>
    )
}