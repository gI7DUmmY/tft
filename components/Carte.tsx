'use client'

import { useRouter } from 'next/navigation'

interface Props {
  titre: string
  texte: string
  push?: string
}

const Carte = ({ titre, texte, push }: Props) => {
  const router = useRouter()

  return (
    <div
      className='max-md:w-[90%] md:w-[25%] border-2 border-slate-500 rounded-lg shadow-sm shadow-slate-500 bg-slate-100 p-2 cursor-pointer'
      onClick={() => push && router.push(push)}
    >
      <h4 className='font-medium text-center uppercase my-1'>{titre}</h4>
      <p className='text-center p-4'>{texte}</p>
    </div>
  )
}

export default Carte
