import React from 'react'

const page = () => {
    return (
        <div>
            <h1 className='text-center text-6xl py-6 my-2 font-extrabold text-primaryColor'>3 jours / 2 nuits</h1>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>Jour 1: Marrakech - Tizi-n-Tichka - Agdez - Zagora-Mhamid</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                            Rendez-vous tôt le matin 8h00, départ en 4x4 vers M’hamid en passant par le col de Tizi-N-Tichka, continuation pour rejoindre la kasbah de Tamdakhte et celle de Ait Ben Haddou puis arrivée à Ouarzazate où un déjeuner savoureux sera servi.
                            Départ vers Zagora, en route visite de la ville d'Agdez, vue panoramique sur la vallée du Drâa, continuation le long de la vallée jusqu’à Tanskhirt et fin de la piste.
                            Direction M’hamid sur la route, arrêt à Tamgroute pour la visite de la bibliothèque coranique, de la kasbah souterraine et de la fabrication de poterie.
                            Continuation vers M’hamid, arrivée au bivouac, dune de juif, installation, dîner autour du feu au son du folklore Sahraoui, nuit  sous tente.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>Jour 2 : M’Hamid – Erg Chegaga</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                            Après le petit-déjeuner, balade à dos de dromadaire pour une heure puis départ en 4x4 par une piste sablonneuse pour les grandes dunes de Chegaga, les plus grand dunes au Maroc; déjeuner sous l’ombre des palmiers ou des tamaris, l’après-midi reprise de la piste vers Chegaga.
                            Arrivée au bivouac de Chegaga pour assister au coucher de soleil, dîner et nuit sous tente ou à la belle étoile.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>Jour 3: Chegaga - lac Iriqui - Foum Zguid - Taznakht –Marrakech</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                        Départ pour Marrakech par la piste entre l’erg de Chegaga et le lit desséché du Drâa en passant par le lac Iriqui, puis par Foum Zguid et poursuite par la route viaFoum Zguid .
                        
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-20 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold text-red-400'>Remarque</h2>
                    <div className='mb-2'>
                        <h3 className='text-lg font-semibold '>Inclus:</h3>
                        <ul className='p-2'>
                            <li>
                                · Transport en 4x4 avec chauffeur et gasoil et assurance de voiture (transport touristique)

                            </li>
                            <li>
                                · Les hotels et bivouacs avec demi-pension

                            </li>
                            <li>
                                · Balade en dromadaires

                            </li>


                        </ul>
                        <p>Tous nos voyages sont ajustables, modifiables et extensibles : contactez-nous en nous précisant la référence du voyage à personnaliser!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page