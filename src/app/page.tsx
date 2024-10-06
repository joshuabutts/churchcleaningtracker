import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="text-2xl font-bold text-leftr">Your upcoming assignments</div>
      <div className="mt-8 p-10 bg-lightgray-100 border-2 border-gray-300 rounded-lg">
        <div className="headingarea flex justify-between items-center space-x-4">
          <p className="title text-3xl font-bold">Saturday, Jan 14, 2024 | 9:00am</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link href="/volunteer/393848">Details</Link></button>
        </div>
        <p className="label text-xl font-semibold mt-4">Your Assignments</p>
        <h3 className="text-2xl font-bold mt-2">Bathrooms</h3>
        <p className="mt-1">Mark each as complete when you finish them</p>
        <form className="mt-4">
          <div className="itemblock flex items-center space-x-4 pb-6">
            <input type="checkbox" id="bathrooms" name="bathrooms" className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out" />
            <div className="item">
              <h4 className="text-lg font-semibold">Sinks and Countertops</h4>
              <p className="mt-1">Ensure the bathrooms are spotless by cleaning sinks, toilets, and mirrors, restocking supplies, and emptying trash bins.</p>
            </div>
          </div>
          <div className="itemblock flex items-center space-x-4 pb-6">
            <input type="checkbox" id="bathrooms" name="bathrooms" className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out" />
            <div className="item">
              <h4 className="text-lg font-semibold">Sinks and Countertops</h4>
              <p className="mt-1">Ensure the bathrooms are spotless by cleaning sinks, toilets, and mirrors, restocking supplies, and emptying trash bins.</p>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col py-6">
        <div className="text-2xl font-bold text-leftr">Other Upcoming Assignments</div>
        <Link href="/volunteer">Volunteer</Link>
      </div>
    </>
  );
}
