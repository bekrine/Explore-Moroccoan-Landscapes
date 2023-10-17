import Link from 'next/link'
import React from 'react'

const Decouvrir = () => {
    return (
        <div className='my-4'>
            <div className='grid grid-cols-1 justify-center items-center  md:grid-cols-2 '>
                <div className='col-span-1' >
                    <div className='p-4 m-2'>
                        <p className='text-center text-3xl font-extrabold '>Voyagez au cœur du désert , séjours insolites dans le sud du Maroc.
                        </p>
                    </div>
                    <div className='p-4 m-2'>
                        <p className='text-center text-3xl font-extrabold '>Dépaysement complet au milieu des dunes. </p>
                    </div>
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <div className='rounded-full overflow-hidden'>
                        <img src="/desertImage.webp" alt="desert" />
                    </div>
                </div>
            </div>
            <div className='bg-primaryColor my-4 text-center'>
                <h1 className='font-bold text-3xl p-2'>Découvrir toute la beauté du Sahara</h1>
                <p className='font-semibold text-xl p-2'>Mhamid la destination de l'écotourisme saharien</p>
            </div>
            <div className='md:grid-cols-4 sm:grid grid-cols-2 my-4 justify-items-center   '>

                <div className='flex flex-col justify-center items-center'>
                    <Link href='/Meharee' >
                    <div className='p-2'>
                            <img src="/camel.svg" alt="" className='aspect-[2/1] w-full' />
                    </div>
                    <h3 className='text-center p-2 m-2 text-2xl font-bold '>
                        Caravane
                         Méharée
                    </h3>
                    </Link>
                </div>

              <div className='flex flex-col justify-center items-center'>
                <Link href='/CIRCUIT'>
              <div className='p-2'>
                            <img src="/car1.svg" alt="" className='aspect-[2/1] w-full' />
                    </div>
                    <h3 className='text-center p-2 m-2 text-2xl font-bold '>
                        Circuits 4x4 Maroc
                    </h3>
                </Link>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Link href='/Hebergement'>
                <div className='p-2'>
                            <img src="/tent1.svg" alt="" className='aspect-[2/1] w-full' />
                    </div>
                    <h3 className='text-center p-2 m-2 text-2xl font-bold '> 
                        Hébergement Bivouac Saharien
                    </h3>
                    </Link>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Link href='/Contact'>
                <div className='p-2'>
                            <img src="/compass1.svg" alt="" className='aspect-[2/1] w-full' />
                    </div>
                    <h3 className='text-center p-2 m-2 text-2xl font-bold '>
                         Comment Nous Trouver
                    </h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Decouvrir