import React from 'react'

const page = () => {
    return (
        <div>
            <h1 className='text-center text-6xl py-6 my-2 font-extrabold text-primaryColor'>2 jours / 1 nuits à partir de Ouarzazate</h1>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>Jour 1</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                            Départ le matin de <strong> Ouarzazate </strong> po ur <strong>M’hamid</strong>    et la <strong> vallée du Drâa </strong>en traverssant l’ Anti-Atlas jusqu’au village d’<strong>Agdez</strong> , continuation par la piste de l’ancienne route des caravanes afin de vous trouver au plus près de la palmeraie de la vallée du Drâa et de ses villages fortifiés. Re prendre la route pour arriver à Zagora, déjeuner sur place. L’après-midi, départ en 4×4 pour le petit village de M’hamid(fin de la route goudronnée).

                            Départ en dromadaire (1 h) dans le désert pour rejoindre le bivouac situé aux dunes de L’Erg Lihoudi, balade à pied autour des dunes en profitant d’un superbe couil cher de sole, dîner et nuit sous tentes nomades .
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <div className='mb-8 border-b border-black  max-w-[75%]'>
                    <h2 className='text-xl font-semibold '>Jour 2</h2>
                    <div className='mb-2'>
                        <p className='p-2'>
                            Après le petit-déjeuner, retour en dromadaire (1 h) pour rejoindre le village de M’hamid  puis départ pour Ouarzazate en passant par Tamegroute(visite de la fabrication de poterie et de la bibliothèque coranique) et la vallée du Drâa, déjeuner dans la kasbah de Tamnougalt.

                            L’après-midi remonter le temps pour Ouarzazate en traversant l’ Anti-Atlas et le col de Tizi-n-Tinfifite(1660 m). Arrivée à Ouarzazate en cours d’après-midi.
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