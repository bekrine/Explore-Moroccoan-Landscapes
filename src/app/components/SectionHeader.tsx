import React from 'react'

const SectionHeader = ({title,description}:{title:string,description:string}) => {
  return (
    <div className='bg-primaryColor my-4 text-center'>
    <h1 className='font-bold text-3xl p-2'>{title}</h1>
    <p className='font-semibold text-xl p-2'>{description}</p>
</div>
  )
}

export default SectionHeader