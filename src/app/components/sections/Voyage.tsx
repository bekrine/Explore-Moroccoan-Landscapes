import React from 'react'
import SectionHeader from '../SectionHeader'
import Cards from '../Cards'
import Description from './Description'
import Link from 'next/link'

const Voyage = () => {
    return (
        <div>
            <SectionHeader title='Pack voyages' description="A pied, à dos de dromadaires, en 4x4 , Nous vous proposons des séjours - durée, degré de difficulté, sécurité - adaptés à votre attente. Découverte d'un panorama du Maroc aux circuits à thèmes dans le sud du Maroc." />
            <Cards />
            <Link href='/OfferSpecial'>
            <div className='bg-primaryColor my-6 text-center'>
                <button className='text-bleck bg-white rounded-lg py-4 p-6 m-4'>Offers Spéciales</button>
            </div>
            </Link>
            <Description/>
        </div>
    )
}

export default Voyage