"use client"
import { getSocket } from '@/src/lib/socket';
import { getCustomerParcel } from '@/src/services/parcel';
import { Button } from '@heroui/button';
import React, { useEffect, useState } from 'react';

// Define the Parcel type
type Parcel = {
  _id: string;
  parcelType: string;
  codAmount: number;
  parcelSize: string;
  status: 'pending' | 'delivered' | string;
  isDeleted: boolean;
};

const CustomerPage = () => {
    const [parcelData, setParcelData] = useState<Parcel[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
        const socket = getSocket();
        
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getCustomerParcel();
                setParcelData(data?.data);
                setupSocketListeners(socket);
            } catch (error) {
                console.error("Error fetching parcels:", error);
                setError(error instanceof Error ? error.message : "Failed to fetch data");
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();

        return () => {
            socket.off('parcelUpdated');
            socket.off('parcelDeleted');
            socket.off('newParcel');
        };
    }, []);

    const setupSocketListeners = (socket: ReturnType<typeof getSocket>) => {
        socket.on('parcelUpdated', (updatedParcel: Parcel) => {
            setParcelData(prevData => 
                prevData ? prevData.map(parcel => 
                    parcel._id === updatedParcel._id ? updatedParcel : parcel
                ) : [updatedParcel]
            );
        });

        socket.on('parcelDeleted', (deletedParcelId: string) => {
            setParcelData(prevData => 
                prevData ? prevData.map(parcel => 
                    parcel._id === deletedParcelId 
                        ? { ...parcel, isDeleted: true } 
                        : parcel
                ) : null
            );
        });

        socket.on('newParcel', (newParcel: Parcel) => {
            setParcelData(prevData => 
                prevData ? [newParcel, ...prevData] : [newParcel]
            );
        });

        socket.on('error', (error: Error) => {
            console.error('Socket error:', error);
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!parcelData || parcelData.length === 0) return <div>No parcels found</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Your Parcels</h1>
            
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
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
                                        {parcel.isDeleted && <span className="ml-2 text-xs text-red-500">(Deleted)</span>}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                       ৳ {parcel.codAmount} 
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
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
                                    <div className="text-sm text-gray-900">
                                        {parcel.status === 'pending' ? (
                                            <Button 
                                                variant='bordered' 
                                                color='danger' 
                                                size='sm'
                                            >
                                                Delete
                                            </Button>
                                        ) : (
                                            <strong>{parcel.status}</strong>
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

export default CustomerPage;