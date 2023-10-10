import Image from 'next/image'
import logo from '@/public/logo.png'
import { CiStreamOn } from 'react-icons/ci'
import { BsCameraVideo } from 'react-icons/bs'

const Youtube = () => {
  return (
    <section className='w-full parallax' id='youtube'>
      <div className='pt-24 h-[35vh]'>
        <h1 className='text-center font-extrabold text-3xl text-slate-50 drop-shadow-black font-mono uppercase'>
          Youtube
        </h1>
      </div>
      <div className='flex flex-col justify-evenly items-center gap-3 bg-slate-200 text-center text-black min-h-[35vh] pt-6 md:min-h-[25vh] md:pt-12'>
        <h3>
          <BsCameraVideo className='inline mr-1 text-red-600 text-xl align-text-bottom' />
          Visionnez en Direct ou en Rediffusion les matchs de Football de Table
          !
          <CiStreamOn className='inline ml-1 text-red-600 text-xl align-text-bottom' />
        </h3>
        <div className='flex flex-row flex-wrap justify-evenly items-center gap-16 p-6'>
          <a
            href='https://www.youtube.com/@toulousefootballdetable6184/videos'
            target='_blank'
            className='block'
          >
            <Image
              src={logo}
              alt='logo TFT'
              width={50}
              height={50}
              className='mx-auto'
            />
            <p>TFT</p>
          </a>
          <a
            href='https://www.youtube.com/@PhoenixATB/videos'
            target='_blank'
            className='block'
          >
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/atb.jpg?alt=media&token=d27645a1-14f8-4f4e-8958-0746e015d2e6'
              alt='logo ATB'
              width={50}
              height={50}
              className='mx-auto rounded-full'
            />
            <p>ATB</p>
          </a>
          <a
            href='https://www.youtube.com/@a.sevrylescoyotesbaby-foot4717/videos'
            target='_blank'
            className='block'
          >
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/evry.jpg?alt=media&token=fe2a783c-b368-4a08-bddc-aa594f8f1488'
              alt='logo Evry'
              width={50}
              height={50}
              className='mx-auto rounded-full'
            />
            <p>A.S. Evry</p>
          </a>
          <a
            href='https://www.youtube.com/@ftbmbabyfootbordeaux-merig2955/videos'
            target='_blank'
            className='block'
          >
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/ftbm.jpg?alt=media&token=57a11f0d-1fcf-4f0f-95f8-abbd7c305cfa'
              alt='logo FTBM'
              width={50}
              height={50}
              className='mx-auto rounded-full'
            />
            <p>FTBM</p>
          </a>
          <a
            href='https://www.youtube.com/@clubwbaby-footbeziers3206/videos'
            target='_blank'
            className='block'
          >
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/bezier.jpg?alt=media&token=631da62d-9c43-4043-8631-f1454fc3611d'
              alt='logo Bezier'
              width={50}
              height={50}
              className='mx-auto rounded-full'
            />
            <p>B&eacute;zier</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Youtube
