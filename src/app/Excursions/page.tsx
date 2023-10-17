import React from 'react'

const page = () => {
    return (
        <div>
            <h1 className='text-center text-6xl py-6 my-2 font-extrabold text-primaryColor'>Excursions au départ de Mhamid</h1>
            <div>
                <div className='grid grid-cols-3 justify-items-center mb-6'>
                    <div className='col-span-1 px-4 mr-2'>
                        <img src="/Excursions.webp" alt="desert" className='aspect-[2/1]' />
                    </div>
                    <div className='col-span-2 px-2'>
                        <h2 className='ml-4 font-bold text-2xl mb-2'>M’hamid – Chegaga 01 &gt;Mixte&PC</h2>
                        <h3 className='text-xl ml-2 mb-1 font-semibold text-red-400'>Jour 01 : M’hamid – Chegaga</h3>
                        <p> 10h départ de M’hamid vers Chegaga pour 1h en dromadaire, puis en 4×4 par l’ancienne piste Paris-Dakar.

                            Déjeuner sous l’ombre des palmiers à l’oasis sacré.

                            L’après-midi reprise de la piste vers Chegaga.

                            Arrivée au Bivouac pour assister au coucher de soleil, dîner et nuit au  bivouac.</p>
                            <h3 className='text-xl ml-2 mb-1 font-semibold text-red-400'>Jour 02: Chegaga – M’hamid</h3>
                            <p>après un petit déjeuner en plein désert, retour à M’hamid à travers une piste sablonneuse. Arrivé à M’hamid vers 11h.</p>
                    </div>
                </div>
                <div className='grid grid-cols-3 justify-items-center mb-6'>
                    <div className='col-span-1 px-4 mr-2'>
                        <img src="/Excursions1.webp" alt="desert" className='aspect-[2/1]' />
                    </div>
                    <div className='col-span-2 px-2'>
                        <h2 className='ml-4 font-bold text-2xl mb-2'>M'hamid - Chegaga 02 &gt;4x4 & DP</h2>
                        <h3 className='text-xl ml-2 mb-1 font-semibold text-red-400'>Jour 01: M’hamid – Chegaga</h3>
                        <p> 14h départ de M’hamid vers Chegaga en 4×4 par une piste sablonneuse pour les grandes dunes de Chegaga en passant par l’oasis sacré d’Oum Laalag. Arrivée au Bivouac pour assister au coucher de soleil, balade en dromadaire, dîner et nuit sous tente ou à la belle étoile.</p>
                            <h3 className='text-xl ml-2 mb-1 font-semibold text-red-400'>Jour 02: Chegaga – M’hamid</h3>
                            <p>Petit déjeuner au campement avant le retour à M’hamid à travers les pistes. Arrivé à M’hamid vers 10h.</p>
                    </div>
                </div>
                <div className='grid grid-cols-3 justify-items-center mb-6'>
                    <div className='col-span-1 px-4 mr-2'>
                        <img src="/Excursions2.webp" alt="desert" className='aspect-[2/1]' />
                    </div>
                    <div className='col-span-2 px-2'>
                        <h2 className='ml-4 font-bold text-2xl mb-2'>M’hamid – Erg Lihoudi   Dromadaire & PC</h2>
                        <h3 className='text-xl ml-2 mb-1 font-semibold text-red-400'>Jour 01 : M’hamid – Erg Lihoudi</h3>
                        <p> Vers 16h départ pour 1h30 de randonnée en dromadaire à travers un paysage merveilleux de petites dunes (Erg) avec des tamaris, arrivée à temps pour admirer le coucher du soleil, dîner et nuit au bivouac, soirée animée avec des chants des Sahara.</p>
                            <h3 className='text-xl ml-2 mb-1 font-semibold text-red-400'>Jour 02 : Erg Lihoudi – M’hamid</h3>
                            <p>Après le petit déjeuner dans le désertretour à M’hamid à dos de  dromadaire, arrive vers 10h00.</p>
                    </div>
                </div>
            </div>

            <div className='mt-6 grid grid-cols-2 gap-4 justify-items-center'>
                <div>
                    <img src="desert.png" alt="desert" />
                </div>
                <div className='flex flex-col justify-center my-2'>
                    <h3 className='text-2xl ml-2 mb-1 font-semibold text-red-400'>Remarque</h3>
                    <h4 className='text-lg font-semibold'>· Transport en 4x4 avec chauffeur et gasoil et assurance de voiture (transport touristique)  </h4>
                    <h4 className='text-lg font-semibold'>·  Bivouacs .</h4>
                    <h4 className='text-lg font-semibold'>· Balade en dromadaires</h4>
                    <p className='text-lg font-semibold'>Tous nos voyages sont ajustables, modifiables et extensibles : contactez-nous en nous précisant la référence du voyage à personnaliser!</p>
                </div>
            </div>
        </div>
    )
}

export default page