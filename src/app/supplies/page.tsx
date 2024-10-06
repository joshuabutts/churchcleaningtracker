'use client'
// import Image from 'next/image';
import { useState } from 'react'
import clsx from 'clsx';

interface SupplyItem {
    id: number;
    name: string;
    description: string;
    image: string;
    status: 'available' | 'pending' | 'ordered recently';
    defaultQuantity: number;
}

const supplyItems: SupplyItem[] = [
    {
        id: 1,
        name: 'Sacrament Cups',
        description: 'Box of 1000 disposable sacrament cups',
        image: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/fswvqbgntk/imageFileData/search?fileName=/Products%2FPI15700_000_001.png',
        status: 'available',
        defaultQuantity: 2,
    },
    {
        id: 2,
        name: 'Window Cleaner',
        description: 'Box of 3 containers',
        image: 'https://m.media-amazon.com/images/I/61dT56dHRgL.jpg',
        status: 'pending',
        defaultQuantity: 1,
    },
    {
        id: 3,
        name: 'Paper Towels',
        description: 'Set of 4 colors, chisel tip dry erase markers',
        image: 'https://images.thdstatic.com/productImages/8836b129-158e-4dff-8fe3-8b3dce966310/svn/commercial-paper-towels-morr12350-c3_600.jpg',
        status: 'ordered recently',
        defaultQuantity: 3,
    },
];

const SuppliesPage: React.FC = () => {
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    // const updateQuantity = (id: number, delta: number) => {
    //     setQuantities(prev => ({
    //         ...prev,
    //         [id]: Math.max(0, (prev[id] || supplyItems.find(item => item.id === id)?.defaultQuantity || 0) + delta)
    //     }));
    // };

    const submitOrder = (id: number) => {
        // TODO: Implement order submission logic
        console.log(`Ordered ${quantities[id] || supplyItems.find(item => item.id === id)?.defaultQuantity} of item ${id}`);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Supplies</h1>
            <p className="text-gray-600">
                Request supplies from the admin. Adjust quantities as needed and submit your order.
            </p>
            <ul className="space-y-10 pb-10">
                {supplyItems.map((item) => (
                    <li key={item.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="flex">
                            <div className="flex-shrink-0 w-48 h-48 relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                // layout="fill"
                                // objectFit="cover"
                                />
                            </div>
                            <div className="flex-1 px-6 py-4">
                                <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                                <p className="mt-2 text-sm font-medium text-gray-500">
                                    {/* Status:
                                    <span className={`ml-1 ${item.status === 'available' ? 'text-green-600' :
                                        item.status === 'pending' ? 'text-yellow-600' : 'text-blue-600'
                                        }`}>
                                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                    </span> */}
                                    {
                                        item.status !== 'available' ?
                                            <>Status:
                                                < span className={`ml-1 ${item.status === 'pending' ? 'text-yellow-600' : 'text-blue-600'
                                                    }`}>
                                                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                                </span></> : null
                                    }

                                </p>
                                <div className="mt-4 flex items-left">
                                    {/* <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="px-2 py-1 border border-gray-300 rounded-l"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-1 border-t border-b border-gray-300">
                                        {quantities[item.id] || item.defaultQuantity}
                                    </span>
                                    <button
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="px-2 py-1 border border-gray-300 rounded-r"
                                    >
                                        +
                                    </button> */}
                                    <button
                                        onClick={() => submitOrder(item.id)}
                                        className={`px-4 py-2 rounded transition-colors duration-300 ${clsx(item.status !== 'available' ? 'bg-gray-200 text-gray-400' : 'bg-blue-500 hover:bg-blue-600 text-white')}`}
                                    >
                                        Request from Bishop
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default SuppliesPage;
