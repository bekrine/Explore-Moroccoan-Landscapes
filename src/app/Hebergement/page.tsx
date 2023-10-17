import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-center text-6xl py-6 my-2 font-extrabold text-primaryColor'>Hébergement</h1>
      <div>
        <div className='block my-10 md:grid grid-cols-3'>
          <div className='flex justify-center items-center mb-6 col-span-1 '>
            <img src="/hebergement.jpeg" alt="hebergement" className='rounded-lg' />
          </div>
          <div className='text-center md:col-span-2 '>
            <h2 className='text-primaryColor font-bold text-xl ml-4'>Hébergement a M'hamid</h2>
            <div className='text-xl font-medium'>
              <p>Hébergement a M'hamid</p>
              <p>le bivouac il nous faut 1h à dos de dromadaire ou à pied et 15 minutes en 4x4 ou bien un normal</p>
              <p>voiture .</p>
              <p>Excursion Desert vous invite de passer une nuit inoubliable au sein de</p>
              <p>nombreuses dunes dorées et palmeries  . </p>
              <p>Notre bivouac est votre place ou vous pouvez rester tranquilement</p>
              <p>avant et apres votre circuits ou voyage.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='block my-10 md:grid grid-cols-3'>
          <div className='flex justify-center items-center mb-6 col-span-1'>
            <img src="/Bivouac.jpeg" alt="hebergement" className='rounded-lg' />
          </div>
          <div className='text-center md:col-span-2'>
            <h2 className='text-primaryColor font-bold text-xl ml-4'>Bivouac Chegaga</h2>
            <div className='text-xl font-medium'>
              <p>Erg Chegaga est le nom des plus grandes dunes dans cette région. </p>
              <p>Elles atteignent un peu prés une</p>
              <p>hauteur de 300 m sur une longueur de 40 km on se trouve à 60 km de M’hamid.</p>
              <p>Notre bivouac fixe est se situe directement au pied des dunes, avec 7 tentes qui sont</p>
              <p>manufacturées par des nomades et rendent l’hébergement des groupe même pour 25 personnes. </p>
              <p>Les tentes sont aménagées par des tapis et des lits, des matelas, des draps et des couvertures à</p>
              <p>votre disposition. </p>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div className='block my-10 md:grid grid-cols-3'>
          <div className='flex justify-center items-center mb-6 col-span-1'>
            <img src="/bivouac1.jpeg" alt="hebergement" className='rounded-lg' />
          </div>
          <div className='text-center md:col-span-2'>
            <h2 className='text-primaryColor font-bold text-xl ml-4'>Bivouac Sauvage</h2>
            <div className='text-xl font-medium'>
              <p>Si vous le désirez vous pouvez dormir certainement sous le ciel étoilé.</p>
              <p>Notre excellente gastronomie vous offre des plats marocains très délicieux équilibrés, vous allez</p>
              <p>les goûter .</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page