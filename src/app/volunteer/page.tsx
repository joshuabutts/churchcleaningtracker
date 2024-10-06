import React from 'react';
import clsx from 'clsx';
import Link from 'next/link'
import { upcomingEvents } from '@/components/lib/data'



function getMonthName(dateString: string) {
    const date = new Date(dateString);
    const options: object = { month: 'long' };
    return date.toLocaleString('en-US', options);
}


const SuppliesPage: React.FC = () => {



    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Upcoming Cleaning Schedule</h1>
            <p className="text-gray-600">
                Here you can find information about supplies needed for upcoming events.
            </p>
            <div className='flex-col'>

                {upcomingEvents.map((item) => (

                    <div className="wardblock " key={item.ward}>
                        <h3 className='text-xl font-bold pb-2'>{getMonthName(item.events[0].date)}</h3>
                        <ul className={`divide-y divide-gray-200 sm:rounded-md mb-10 shadow overflow-hidden ${clsx(item.mymonth ? 'bg-green-50' : 'bg-white ')}`}>

                            {item.events.map((event) => {
                                return (
                                    <Link href={`volunteer/${item.uuid}`}>
                                        <li key={event.id}>
                                            <div className="px-4 py-4 sm:px-6 transition-colors hover:bg-gray-100">
                                                <div className="flex items-center justify-between">
                                                    <h3 className={`text-lg font-medium text-gray-900`}>{event.date}</h3>
                                                    <h4 className={`text-lg font-bold ${clsx(item.mymonth ? 'text-green-600' : 'text-gray-900')}`}>{item.ward}</h4>
                                                </div>
                                            </div>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                ))}

            </div>
        </div >
    );
};

export default SuppliesPage;
