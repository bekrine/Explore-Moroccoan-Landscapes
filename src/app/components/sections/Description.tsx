import React from 'react'
import SectionSlider from './SectionSlider'


const Description = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center gap-2 items-center min-h-[40rem] md:grid-cols-2'>
            <div className='text-center'>
                <p className='font-bold text-3xl'>Nos tarifs sont en fonction de nombreux postes :
                    la saison - les moyens de transport - la durée - le nombre de personnes
                    Interrogez-nous.
                    Nous répondrons rapidement à votre mail.</p>
            </div>

                <SectionSlider />
        </div>
    )
}

export default Description