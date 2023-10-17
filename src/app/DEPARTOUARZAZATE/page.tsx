import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col items-center '>
            <h1 className='text-center text-6xl py-6 my-2 font-extrabold text-primaryColor'>CIRCUIT DEPART OUARZAZATE</h1>
            <div className='grid grid-cols-1 justify-items-center  max-w-[80%] md:grid-cols-3 sm:grid-cols-2'>
                <div
                    className="block m-6 rounded-lg  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative h-40 overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg  aaspect-[3/2]"
                            src="/OuarzazateDaparte.jpeg"
                            alt="" />
                    </div>
                    <div className="p-6 flex flex-col justify-center items-center">
                    <button className='text-bleck w-full bg-primaryColor rounded-lg py-4 p-6 m-4'>2 Jours</button>
                
                    </div>
                </div>
                <div
                    className="block m-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative h-40  overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg aspect-[3/2]"
                            src="/OuarzazateDepart1.jpeg"
                            alt="ouarzazate" />
                    </div>
                    <div className="p-6 flex flex-col justify-center items-center">
                    <button className='text-bleck w-full bg-primaryColor rounded-lg py-4 p-6 m-4'>3 Jours</button>
                
                    </div>
                </div>

                <div
                    className="block m-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative h-40 overflow-hidden  bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg  aaspect-[3/2]"
                            src="/OuarzazateDepart2.jpeg"
                            alt="mhamid" />
                    </div>
                    <div className="p-6 flex flex-col justify-center items-center">
                    <button className='text-bleck w-full bg-primaryColor rounded-lg py-4 p-6 m-4'>4 Jours</button>
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page