import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col items-center '>
            <h1 className='text-center text-6xl py-6 my-2 font-extrabold text-primaryColor'>Méharée Dans Le Désert</h1>
            <div className='grid grid-cols-2 justify-items-center  max-w-[80%]'>
                <div
                    className="block m-6 rounded-lg  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative aspect-[2/1] overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg"
                            src="/caravan.jpeg"
                            alt="" />
                    </div>
                    <div className="p-6 flex flex-col justify-center items-center">
                    <button className='text-bleck w-full bg-primaryColor rounded-lg py-4 p-6 m-4'>3 Jours</button>
                
                    </div>
                </div>
                <div
                    className="block m-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative aspect-[2/1] overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg"
                            src="/caravan2.jpeg"
                            alt="" />
                    </div>
                    <div className="p-6 flex flex-col justify-center items-center">
                    <button className='text-bleck w-full bg-primaryColor rounded-lg py-4 p-6 m-4'>3 Jours</button>
                
                    </div>
                </div>

                <div
                    className="block m-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative aspect-[2/1] overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg"
                            src="/caravan1.jpeg"
                            alt="" />
                    </div>
                    <div className="p-6 flex flex-col justify-center items-center">
                    <button className='text-bleck w-full bg-primaryColor rounded-lg py-4 p-6 m-4'>3 Jours</button>
                
                    </div>
                </div>
               
                <div
                    className="block m-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative aspect-[2/1] overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg"
                            src="/caravan3.jpeg"
                            alt="" />
                    </div>
                    <div className="p-6 flex flex-col justify-center items-center">
                    <button className='text-bleck w-full bg-primaryColor rounded-lg py-4 p-6 m-4'>3 Jours</button>
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page