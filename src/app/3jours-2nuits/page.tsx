import React from 'react'

const page = () => {
    return (
        <div>
            <h1 className='text-center text-6xl py-6 my-2 font-extrabold text-primaryColor'>3 jours / 2 nuits à partir de Ouarzazate</h1>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>Jour 1</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                            Départ le matin de Ouarzazate  pour Mhamid  et la vallée du Drâa en traversant l’Anti-Atlas jusqu’au village d’ Agdez, continuation par la piste de l’ancienne route des caravanes afin de vous trouver au plus près de la palmeraie de la vallée du Drâa et de ses kasbahs. Reprendre la route pour arriver à Zagora, déjeuner sur place. L’après-midi, départ en 4×4 pour M’hamid(fin de la route goudronnée). Départ en dromadaire (1 h) dans le désert pour rejoindre le bivouac situé aux dunes de L’Erg Lihoudi, balade à pied autour des dunes en profitant d’un superbe coucher de soleil, dîner et nuit au bivouac.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>Jour 2</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                        Retour en dromadaire (1 h) pour rejoindre le village de M’hamid, déjeuner sur place. L’après-midi, départ en 4×4 par la piste  pour les dunes de Chagaga en traversant 65 km de désert (hamada, erg, reg, oasis…). Arrivée aux dunes de Chagaga dans l’après-midi, balade à pied dans les dunes en profitant d’un superbe coucher de soleil au sommet de l’ Erg Laabidlia(300 m), dîner et nuit au bivouac au pied des dunes.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>Jour 3</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                        Après le petit-déjeuner, départ en 4×4 des dunes de Chagaga  pour le village de Foum Zguid en longeant les dunes de Chagaga jusqu’au lac Iriqui. Continuation par la piste du Paris-Dakar jusqu’à Foum Zguid, déjeuner sur place. L’après-midi, départ en 4×4 pour Ouarzazate en passant par Taznakht(village réputé pour sa fabrication de tapis). Arrivée à Ouarzazate en fin d’après-midi.
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