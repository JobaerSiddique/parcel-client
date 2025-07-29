"use client"
import PFORM from '@/src/components/Form/PFORM';
import PINPUT from '@/src/components/Form/PINPUT';


import { Button, Card, CardBody, CardHeader, Form, Input } from '@heroui/react';
import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { registerValidtionSchema } from '@/src/schema/Auth';
import { registerUser } from '@/src/services/auth';

import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Register = () => {
const router = useRouter()
  const handleLogin =async (data:FieldValues)=>{
    try {
       const res = await registerUser (data);
      console.log(res);
      if(res?.success){
      
        
        toast.success(res?.message)
        router.push('/login')
      }else{
       
        toast.error(res?.message)
      }
    } catch (error) {
      
    }
    
  } 
  
  return (
        <div className='min-h-screen flex justify-center items-center' >
           <Card className='w-[550px]'>
           
            <h1 className='text-center my-5 text-2xl'>Register Page</h1>
            <CardBody>
                 <PFORM onSubmit={handleLogin} resolver={zodResolver(registerValidtionSchema)} defaultValues={{
                    name:"",
                    email: "",
                    password: "",
                    phone:""
                  }}>
                  <div className='py-2'>
                    <PINPUT variant='flat' name='name' type='text' label='Name' size='lg'/>
                  </div>
                  <div className='py-2'>
                    <PINPUT variant='flat' name='email' type='email' label='Email' size='lg'/>
                  </div>
                  <div className='py-2'>
                    <PINPUT variant='flat' name='password' type='password' label='Password' size='lg'/>
                  </div>
                  <div className='py-2'>
                    <PINPUT variant='flat' name='phone' type='text' label='Phone' size='lg'/>
                  </div>
                  <div className='py-2'>
                    <PINPUT variant='flat' name='address' type='text' label='Address' size='lg'/>
                  </div>
                  <strong className='mt-3'>Already Registerd?<Link href="/login" className='text-success'>Please Login</Link></strong>
                  <Button color='success' type='submit' className='w-full my-3' size='lg'>Register</Button>
                 </PFORM>
            </CardBody>
           </Card>
        </div>
    );
};

export default Register;