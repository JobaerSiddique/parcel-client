'use client'
import { title } from "@/src/components/primitives";
import { Input } from "@heroui/input";
import { Card, CardBody, Form } from "@heroui/react";


export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
     <Card>
      <CardBody>
         <Form>
             <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      
      <Input label="Email" placeholder="Enter your email" type="email" />
    </div>
           </Form>
      </CardBody>
     </Card>
    </div>
  );
}
