import Link from 'next/link'
import React from 'react'

const Cards = () => {
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
      <div
        className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <Link href='/Excursions'>
        <img
          className="rounded-t-lg w-full p-2 aspect-[2/1]"
          src="/cardImage.webp"
          alt="Skyscrapers" />
        <div className="p-6">
          <h5
            className="mb-4 text-xl font-medium text-center leading-tight text-neutral-800 dark:text-neutral-50">
            Excursions Randonnées  Désert Mhamid
          </h5>
          <p className="mb-4 text-base text-neutral-600 text-center dark:text-neutral-200">
            Au départ de Mhamid vers la dune Erg Lihoudi ou les grandes dunes de Chegaga à dos de dromadaire , 4x4 ou en excursions mixtes, accompagnateurs et des chameliers .
            Nuit sous tentes nomades -Bivouac- .
            Retour au point de départ à Mhamid par des chemins différents pour varier les paysages.
          </p>
        </div>
        <div
          className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
          <small>Explore Moroccoan Landscapes</small>
        </div>
            </Link>
      </div>
      <div
        className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
     
     <Link href='/DepartMarakech'>
          <img
            className="rounded-t-lg w-full p-2 aspect-[2/1]"
            src="/cardImage1.webp"
            alt="Los Angeles Skyscrapers" />
        <div className="p-6">
          <h5
            className="mb-4 text-xl font-medium leading-tight text-center text-neutral-800 dark:text-neutral-50">
            kasbahs ,vallée et désert Départ de Ouarzazate
          </h5>
          <p className="mb-4 text-base text-neutral-600 text-center dark:text-neutral-200">
            Passant par la vallée du Drâa et ses mille et une kasbah millénaires, longeant une palmeraie sur plus de 200 km. Passage par Agdez et Zagora, arrêt à Tamgroute pour visiter la bibliothèque coranique, la fabrication de poterie ainsi que les ruelles souterraines. Continuation vers Chegaga via M’hamid.

          </p>
        </div>
        <div
          className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
          <small>Explore Moroccoan Landscapes</small>
        </div>
            </Link>
      </div>
      <div
        className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
       <Link href='/CIRCUIT'>
          <img
            className="rounded-t-lg w-full p-2 aspect-[2/1]"
            src="/cardImage2.webp"
            alt="Palm Springs Road" />
        <div className="p-6">
          <h5
            className="mb-4 text-xl font-medium text-center leading-tight text-neutral-800 dark:text-neutral-50">
            Circuits Sud Maroc A partir de Marrakech
          </h5>
          <p className="mb-4 text-base text-neutral-600 text-center dark:text-neutral-200">
            Départ par une superbe route traversant le Haut Atlas et passage par le col de Tizi-N-Tichka.  pour atteindre les grands dunes du Chegaga via la vallée de Drâa.
          </p>
        </div>
        <div
          className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
          <small>Explore Moroccoan Landscapes</small>
        </div>
            </Link>
      </div>
    </div>
  )
}

export default Cards