// src/app/dashboard/customer/my-parcels/page.tsx
"use client";
import { getCustomerParcel } from '@/src/services/parcel';
import { Button } from '@heroui/button';
import React, { useEffect, useState } from 'react';

type Parcel = {
  _id: string;
  parcelType: string;
  codAmount: number;
  parcelSize: string;
  status: 'pending' | 'delivered' | string;
  isDeleted: boolean;
};

const CustomerParcelsPage = () => {
    const [parcelData, setParcelData] = useState<Parcel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await getCustomerParcel();
            // Check the actual response structure here
            console.log("API Response:", response);
            // Adjust according to your actual API response structure
            setParcelData(response?.parcels || response?.data || []);
        } catch (err) {
            console.error("Error fetching parcels:", err);
            setError(err instanceof Error ? err.message : "Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };
    
    fetchData();
}, []);
    

    if (loading) return <div className="text-center py-8">Loading parcels...</div>;
    if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
    if (parcelData.length === 0) return <div className="text-center py-8">No parcels found</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Your Parcels</h1>
            
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parcel Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">COD Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {parcelData.map((parcel) => (
                            <tr 
                                key={parcel._id} 
                                className={parcel.isDeleted ? "bg-red-50" : "hover:bg-gray-50"}
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {parcel.parcelType}
                                        {parcel.isDeleted && (
                                            <span className="ml-2 text-xs text-red-500">(Deleted)</span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        ৳ {parcel.codAmount.toLocaleString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 capitalize">
                                        {parcel.parcelSize}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                        ${parcel.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                                          parcel.status === 'delivered' ? 'bg-green-100 text-green-800' : 
                                          'bg-gray-100 text-gray-800'}`}>
                                        {parcel.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex space-x-2">
                                        {parcel.status === 'pending' && !parcel.isDeleted && (
                                            <Button 
                                                variant="bordered" 
                                                color="danger" 
                                                size="sm"
                                               
                                            >
                                                Delete
                                            </Button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerParcelsPage;