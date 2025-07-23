"use client"
import PFORM from '@/src/components/Form/PFORM';
import PINPUT from '@/src/components/Form/PINPUT';
import PSELECT from '@/src/components/Form/PSELECT';
import PTEXTAREA from '@/src/components/Form/PTEXTAREA';
import { parcelSchema } from '@/src/schema/Parcel';
import { createParcel } from '@/src/services/parcel';
import { Button } from '@heroui/button';
import { Card, CardBody } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const parcelType = ['document', 'package', 'fragile', 'other'];
const parcelSize = ['small', 'medium', 'large', 'xlarge'];
const paymentMethod = ['cod', 'prepaid'];

const BookingParcel = () => {
    const router = useRouter()
    const {reset} = useForm()
    const handleParcel = async (data: any) => {
        try {
            
            const res = await createParcel(data);
           if(res.success){
            toast.success(res?.message)
            reset({
                    parcelType: "",
                    parcelSize: "",
                    pickupAddress: "",
                    deliveryAddress: "",
                    paymentMethod: "",
                    codAmount: undefined
                });
           }
            // Add success notification here
        } catch (error) {
            console.error("Error creating parcel:", error);
            // Add error notification here
        }
    };

    return (
        <div className='container mx-auto mt-5 p-5'>
            <h1 className="text-2xl font-bold mb-4">Booking Parcel</h1>
            <Card className="shadow-lg">
                <CardBody>
                    <PFORM 
                        onSubmit={handleParcel}
                        resolver={zodResolver(parcelSchema)}
                        defaultValues={{
                            parcelType: "",
                            parcelSize: "",
                            pickupAddress: "",
                            deliveryAddress: "",
                            paymentMethod: "",
                            codAmount: undefined
                        }}
                    >
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='py-2'>
                                <PSELECT 
                                    options={parcelType} 
                                    name='parcelType' 
                                    label='Parcel Type' 
                                    
                                />
                            </div>
                            <div className='py-2'>
                                <PSELECT 
                                    variant='flat' 
                                    name='parcelSize' 
                                    label='Parcel Size'
                                    options={parcelSize}  
                                    
                                />
                            </div>
                        </div>

                        <div className='py-2'>
                            <PTEXTAREA 
                                name='pickupAddress' 
                                label='PickUp Address'
                                required
                              
                            />
                        </div>
                        <div className='py-2'>
                            <PTEXTAREA 
                                name='deliveryAddress' 
                                label='Delivery Address'
                                required
                               
                            />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='py-2'>
                                <PSELECT 
                                    options={paymentMethod} 
                                    name='paymentMethod' 
                                    label='Payment Method'
                                    
                                />
                            </div>
                            <div className='py-2'>
                                <PINPUT 
                                    name="codAmount" 
                                    label='COD Amount (৳)' 
                                    type='number'
                                    min="0"
                                    step="1"
                                    required={false}
                                />
                            </div>
                        </div>

                        <Button 
                            type='submit' 
                            color="primary" 
                            variant="solid" 
                            className='w-full mt-5 py-6 text-lg font-semibold'
                        >
                            Book Parcel
                        </Button>
                    </PFORM>
                </CardBody>
            </Card>
        </div>
    );
};

export default BookingParcel;