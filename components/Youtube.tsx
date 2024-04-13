import Image from 'next/image'
import logo from '@/public/logo.png'
import { CiStreamOn } from 'react-icons/ci'
import { BsBell } from 'react-icons/bs'
import Link from 'next/link'

const Youtube = () => {
  return (
    <section className='w-full parallax' id='youtube'>
      <div className='pt-24 h-[35vh]'>
        <h1 className='text-center font-extrabold text-3xl text-slate-50 drop-shadow-black font-mono uppercase'>
          Youtube
        </h1>
      </div>
      <div className='flex flex-col justify-evenly items-center gap-3 bg-slate-200 text-center text-black min-h-[35vh] pt-6 md:min-h-[25vh] md:pt-12'>
        <h3 className='text-lg xl:text-2xl 2xl:text-3xl'>
          <CiStreamOn className='inline mr-1 text-red-600 text-xl align-text-bottom xl:text-2xl 2xl:text-3xl' />
          Visionnez en Direct ou en Rediffusion les matchs de Football de Table
          : abonnez vous !
          <BsBell className='inline ml-1 text-red-600 text-xl align-text-bottom xl:text-2xl 2xl:text-3xl' />
        </h3>
        <div className='flex flex-row flex-wrap justify-evenly items-center gap-16 p-6 xl:text-xl 2xl:text-2xl xl:gap-24 2xl:gap-32'>
          <Link
            href='https://www.youtube.com/@toulousefootballdetable6184/videos'
            target='_blank'
            className='block'
          >
            <Image
              src={logo}
              alt='logo TFT'
              width={50}
              height={50}
              className='mx-auto logo-chaine'
            />
            <p>TFT</p>
          </Link>
          <Link
            href='https://www.youtube.com/@PhoenixATB/videos'
            target='_blank'
            className='block'
          >
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/atb.jpg?alt=media&token=d27645a1-14f8-4f4e-8958-0746e015d2e6'
              alt='logo ATB'
              width={50}
              height={50}
              className='mx-auto rounded-full logo-chaine'
            />
            <p>ATB</p>
          </Link>
          <Link
            href='https://www.youtube.com/@a.sevrylescoyotesbaby-foot4717/videos'
            target='_blank'
            className='block'
          >
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/evry.jpg?alt=media&token=fe2a783c-b368-4a08-bddc-aa594f8f1488'
              alt='logo Evry'
              width={50}
              height={50}
              className='mx-auto rounded-full logo-chaine'
            />
            <p>A.S. Evry</p>
          </Link>
          <Link
            href='https://www.youtube.com/@ftbmbabyfootbordeaux-merig2955/videos'
            target='_blank'
            className='block'
          >
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/ftbm.jpg?alt=media&token=57a11f0d-1fcf-4f0f-95f8-abbd7c305cfa'
              alt='logo FTBM'
              width={50}
              height={50}
              className='mx-auto rounded-full logo-chaine'
            />
            <p>FTBM</p>
          </Link>
          <Link
            href='https://www.youtube.com/@clubwbaby-footbeziers3206/videos'
            target='_blank'
            className='block'
          >
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/bezier.jpg?alt=media&token=631da62d-9c43-4043-8631-f1454fc3611d'
              alt='logo Bezier'
              width={50}
              height={50}
              className='mx-auto rounded-full logo-chaine'
            />
            <p>B&eacute;zier</p>
          </Link>
          <Link
            href='https://www.youtube.com/@ardennesbaby-foot6429/videos'
            target='_blank'
            className='block'
          >
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/Ardennes%20baby-foot.jpg?alt=media&token=7bae36d5-d3db-45aa-aca0-fc8209ef6806'
              alt='logo Bezier'
              width={50}
              height={50}
              className='mx-auto rounded-full logo-chaine'
            />
            <p>Ardennes</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Youtube
