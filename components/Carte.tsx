'use client'

import { useRouter } from 'next/navigation'

interface Props {
  titre: string
  texte: string
  push?: string
  image?: string
}

const Carte = ({ titre, texte, push, image }: Props) => {
  const router = useRouter()

  return (
    <>
      {!push && (
        <div className='max-md:w-[90%] md:w-[40%] lg:w-[25%] xl:w-60 lg:h-32 border-2 border-slate-500 rounded-lg shadow-sm shadow-slate-500 bg-slate-100 p-2 cursor-pointer'>
          <h4 className='font-medium text-center uppercase my-1'>{titre}</h4>
          <p className='text-center p-4'>{texte}</p>
        </div>
      )}

      {push && (
        <a
          href={push}
          target='_blank'
          rel='noreferrer'
          className='max-md:w-[90%] md:w-[40%] lg:w-[25%] xl:w-60 lg:h-32 border-2 border-slate-500 rounded-lg shadow-sm shadow-slate-500 bg-slate-100 p-2 cursor-pointer'
        >
          <h4 className='font-medium text-center uppercase my-1'>{titre}</h4>
          <p className='text-center p-4'>{texte}</p>
        </a>
      )}
    </>
  )
}

export default Carte
