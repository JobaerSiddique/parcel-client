"use client"
import PFORM from '@/src/components/Form/PFORM';
import PINPUT from '@/src/components/Form/PINPUT';


import { Button, Card, CardBody, CardHeader, Form, Input } from '@heroui/react';
import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import loginValidationSchema from '@/src/schema/Auth';
import {  storeUserInfo, UserLogin } from '@/src/services/auth';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '@/src/context/userProvider';



const Login = () => {
  const router = useRouter()
 const {setIsLoading}=useUser()
  const handleLogin =async (data:FieldValues)=>{
    try {
       const res = await UserLogin(data);
      
      if(res?.success){
      
        storeUserInfo({accessToken:res?.data})
        toast.success(res?.message)
        setIsLoading(true)
        router.push('/')
      }else{
       
        toast.error(res?.message)
      }
    } catch (error) {
      
    }
    
  } 
  
  return (
        <div className='min-h-screen flex justify-center items-center' >
           <Card className='w-[500px]'>
           
            <h1 className='text-center my-5 text-2xl'>Login Page</h1>
            <CardBody>
                 <PFORM onSubmit={handleLogin} resolver={zodResolver(loginValidationSchema)} defaultValues={{
                    email: "",
                    password: "",
                  }}>
                  <div className='py-2'>
                    <PINPUT variant='flat' name='email' type='email' label='email' size='lg'/>
                  </div>
                  <div className='py-2'>
                    <PINPUT variant='flat' name='password' type='password' label='Password' size='lg'/>
                  </div>
                  <strong>Are You New From Here?<Link href="/register" className='text-success ml-2'>Please Register</Link></strong>
                  <Button color='success' type='submit' className='w-full my-3' size='lg'>Login</Button>
                 </PFORM>
            </CardBody>
           </Card>
        </div>
    );
};

export default Login;