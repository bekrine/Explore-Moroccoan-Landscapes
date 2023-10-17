'use client'

import { Formik,Form,Field,ErrorMessage } from "formik"
import * as Yup from 'yup'
import { sendEmail } from "../utils/sendEmail"
import { useState } from "react";

interface Values {
    message: string;
    name: string;
    email: string;
  }

const FormContact = () => {

    const info = {
        message:'',
        name:'',
        email:''
    }
    const [responceMessage,setResponceMessage] = useState()

   const validationSchema=Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().required('Message is required'),
    })

    const handleSubmit =async (values:Values, actions:any) => {
   let res = await sendEmail(values,setResponceMessage)
  
        actions.setSubmitting(false);
      };
    
  return (
    <Formik 
    initialValues={info} 
  validationSchema={validationSchema}
    onSubmit={handleSubmit} 
        id="contact_form">
        <Form>
    <div className="mb-4">
      {
        responceMessage !== undefined ? <div className="text-center text-2xl text-green-300">{responceMessage}</div>  : null
      }
        <label htmlFor="message_field" className="block text-sm text-gray-500">Message:</label>
        <Field as='textarea'   
                    className="w-full rounded border-b border-primaryColor focus:border-primaryColor focus:border focus:outline-none focus:ring-0 " 
                    name="message" id="message_field" rows={6} required />
                    <ErrorMessage name="message" component="div" className="text-xl font-bold text-red-400" />

    </div>
    <div className="flex mb-5">
        <div className="w-1/2 mr-2">
            <label htmlFor="name_field" className="block text-sm text-gray-500">Your Name:</label>
            <Field  
                     className="rounded border-b border-primaryColor w-full focus:border-primaryColor focus:border focus:outline-none focus:ring-0" 
                     type="text" name="name" id="name_field" required />
                     <ErrorMessage name="name" component="div" className="text-xl font-bold text-red-400"  />

        </div>
        <div className="w-1/2">
            <label htmlFor="email_field" className="block text-sm text-gray-500">Email Address:</label>
            <Field 
            
            className="rounded border-b border-primaryColor w-full focus:border-primaryColor focus:border focus:outline-none focus:ring-0 " 
            type="email" name="email" id="email_field" required />
            <ErrorMessage name="email" component="div" className="text-xl font-bold text-red-400"  />

        </div>
    </div>
    <button type="submit"  className="bg-primaryColor w-full py-2 px-4 rounded  shadow-sm text-lg text-white hover:text-white hover:opacity-40" >Send</button>
    </Form>

</Formik>


  )
}

export default FormContact