import React from 'react'

const page = () => {
    return (
        <div>
            <h1 className='text-center text-6xl py-6 my-2 font-extrabold text-primaryColor'>Option 01 : 4 jours / 3 nuits</h1>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>1er jour : Marrakech - Ouarzazate - Kasbah de Tamnougalte</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                            Départ le matin de Marrakech en 4x4 pour Ouarzazate en passant par le col Tizi-N-Tichka (2260 m), déjeuner à Ouarzazate, visite de la kasbah de Taourirt et continuation par la Vallée du Drâa pour arriver à Agdz, dîner et nuit dans une des plus anciennes kasbah de la vallée du Draa (Kasbah de Tamnougalt).
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>2ème jour : Kasbah de Tamnougalte - Zagora - M'hamid - Chegaga</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                            Départ en 4x4 vers M’hamid en passant par  la Vallée du Drâa en empênant l’ancienne route des caravanes, passage sur Zagora. Arrivée a M’hamid et déjeuner dans un hôtel de charme au cœur de la palmeraie. En après-midi, continuation en 4x4 pour rejoindre le vaste désert du Chegaga après 60 km de piste désertique, assister au coucher de soleil, dîner et nuit au bivouac sous tentes nomade traditionnelles avec tapis, matelas, etc.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>3ème jour : Chegaga - Foum Zguide - Ouarzazate</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                            Après un petit déjeuner en plein désert, vous ferez une balade en dromadaire autour les dunes ensuite départ en  4x4 vers Foum Zguid en traversant 90 km de plus dans le désert et en profitant de paysages différents (lac Iriqui, montagnes, fossiles), déjeuner à Foum Zguid 1er village après le désert.

                            Arrivée, en fin d’après-midi à Ouarzazate, dîner et nuit à l’hôtel.

                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>4ème jour : Ouarzazate-Ait Ben Haddou-Marrakech</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                        Départ le matin en 4x4 pour visiter les studios de cinéma et continuation pour rejoindre la kasbah d’Ait Ben Haddou en passant par la piste où vous pourrez voir différents paysages (désert de cailloux, plateaux désertiques ayant servis pour des tournages de western. Déjeuner à la kasbah d’Ait Ben Haddou. En après-midi retour à Marrakech.
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