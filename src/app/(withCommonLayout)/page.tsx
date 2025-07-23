'use client'

import CourierCharges from '@/src/components/Home/CourierCharges';
import CTA from '@/src/components/Home/CTA';
import FAQ from '@/src/components/Home/Faq';
import Hero from '@/src/components/Home/Hero';
import Services from '@/src/components/Home/service';



import React from 'react';

const HomePage = () => {


  return (
    <div>
      <Hero/>
      <Services/>
      <CourierCharges/>
     <FAQ/>
     <CTA/>
    </div>
  );
};

export default HomePage;