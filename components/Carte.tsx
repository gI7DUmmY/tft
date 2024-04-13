import Image from 'next/image'

import { TypeCarte } from '@/types/Carte'
import Link from 'next/link'

const Carte = ({ titre, texte, url, image }: TypeCarte) => {
  const imageHeight = image ? 'lg:h-60' : 'lg:h-36'

  return (
    <>
      {!url && (
        <div
          className={`${imageHeight} max-md:w-[90%] md:w-[40%] lg:w-[25%] xl:w-60 border-2 border-slate-500 rounded-lg shadow-sm shadow-slate-500 bg-slate-100 p-2 cursor-pointer`}
        >
          <h4 className='font-medium text-center uppercase my-1 h-12'>
            {titre}
          </h4>
          {image && (
            <Image
              src={image}
              alt='image'
              width={120}
              height={120}
              className='object-contain w-auto max-w-[90%] h-28 mx-auto my-2'
            />
          )}
          <p className='text-center p-2'>{texte}</p>
        </div>
      )}

      {url && (
        <Link
          href={url}
          target='_blank'
          rel='noreferrer'
          className={`${imageHeight} max-md:w-[90%] md:w-[40%] lg:w-[25%] xl:w-60 border-2 border-slate-500 rounded-lg shadow-sm shadow-slate-500 bg-slate-100 p-2 cursor-pointer`}
        >
          <h4 className='font-medium text-center uppercase my-1 h-12'>
            {titre}
          </h4>
          {image && (
            <Image
              src={image}
              alt='image'
              width={120}
              height={120}
              className='object-contain w-auto max-w-[90%] h-28 mx-auto my-2'
            />
          )}
          <p className='text-center'>{texte}</p>
        </Link>
      )}
    </>
  )
}

export default Carte
