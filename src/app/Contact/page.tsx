import React from 'react'
import GoogleMaps from '../components/GoogleMaps'
import FormContact from './FormContact'

const page = () => {
    
    return (
        <div>
            <h1 className='text-center text-6xl py-6 my-2 font-extrabold text-primaryColor'>Contactez Nous</h1>
            <div className='block mt-9 p-6 md:flex justify-between items-center'>
                <div className='flex items-center justify-center mr-4 min-w-[500px]' >

                    <GoogleMaps />
                </div>

                <div>

                    <div className="p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                        <h2 className="text-2xl text-gray-500 font-semibold mb-2">Contact Us</h2>
                        <p className="text-xl p-4 text-gray-500 font-medium mb-2">Si vous avez des questions à propos de nos excursions , circuits ou de nos services , veuillez nous contacter en remplissant le formulaire ou contacter nous directement par email ou téléphone/whatsapp, nous vous répondrons dans les plus brefs délais!</p>
                <FormContact/>
                   
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page