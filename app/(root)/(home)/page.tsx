import Image from 'next/image'
import photo1 from '../../../public/photo-section1.jpg'
import HeroCard from '@/components/HeroCard'

export default function Home() {
  return (
    <main className='pt-[100px]'>
      <section className='w-full h-full relative'>
        <Image src={photo1} alt='photo section 1' className='' />
        <div className='absolute top-4 inset-x-0'>
          <h1 className='text-center font-extrabold text-3xl text-white drop-shadow-2xl'>
            Toulouse Football de Table
          </h1>
          <h2 className='text-center font-semibold text-lg text-white drop-shadow-md'>
            Un esprit, un club, une même passion
          </h2>
        </div>
      </section>

      <section className='w-full flex flex-col justify-center gap-6'>
        <div className='pt-3'>
          <h1 className='text-center font-extrabold text-3xl text-white drop-shadow-lg'>
            Notre objectif
          </h1>
          <h2 className='text-center font-semibold text-lg text-white drop-shadow-md'>
            est de développer le Football de Table
          </h2>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </div>
      </section>
    </main>
  )
}
