import Image from 'next/image'

const page = () => {
  return (
    <main className='w-full min-h-screen font-sans mx-auto text-black md:max-w-[85%]'>
      <h1 className='text-center font-mono text-xl capitalize'>
        Qui sommes nous ?
      </h1>

      <div className='w-full px-3 flex flex-col gap-8 items-center mx-auto text-left md:max-w-[425px]'>
        <h2 className='w-full capitalize mt-3 mb-12 ml-3 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400'>
          le bureau
        </h2>
        <div className='w-full p-3 border-2 border-slate-400 rounded-2xl my-6 relative'>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/clementine.png?alt=media&token=ca3b680a-be34-45cc-907c-20094a5ceabe'
            alt='photo-clementine'
            width={80}
            height={80}
            className='absolute inset-x-0 -top-[67px] mx-auto'
          />
          <h3 className='text-center'>Cl&eacute;mentine Thomar</h3>
          <ul>
            <li className='font-semibold'>Pr&eacute;sidente</li>
            <li className='text-sm'>
              Membre de l&apos;&eacute;quipe de France F&eacute;minine
            </li>
            <li className='text-sm'>Championne du monde 2015/2017</li>
            <li className='text-sm'>Championne de France 2019</li>
            <li className='text-sm'>Vice championne de France 2023</li>
          </ul>
        </div>
        <div className='w-full p-3 border-2 border-slate-400 rounded-2xl my-6 relative'>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/gilles.png?alt=media&token=ee055a38-4e6d-4be0-9e39-4b4ed84167af'
            alt='photo-gilles'
            width={80}
            height={80}
            className='absolute inset-x-0 -top-[67px] mx-auto'
          />
          <h3 className='text-center'>Gilles Garrigues</h3>
          <ul>
            <li className='font-semibold'>Tr&eacute;sorier</li>
          </ul>
        </div>
        <div className='w-full p-3 border-2 border-slate-400 rounded-2xl my-6 relative'>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/cedric.png?alt=media&token=73aba47b-61e0-487c-9e4f-cd27c573cf03'
            alt='photo-cedric'
            width={80}
            height={80}
            className='absolute inset-x-0 -top-[67px] mx-auto'
          />
          <h3 className='text-center'>C&eacute;dric Rollo</h3>
          <ul>
            <li className='font-semibold'>Secr&eacute;taire</li>
            <li className='font-semibold'>Webmaster</li>
            <li className='font-semibold'>R&eacute;f&eacute;rent Coral</li>
          </ul>
        </div>
      </div>

      <div className='w-full px-3 flex flex-col gap-8 items-center mx-auto text-left md:max-w-[425px]'>
        <h2 className='w-full capitalize mt-3 mb-12 ml-3 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400'>
          Entraîneur/Coach
        </h2>

        <div className='w-full p-3 border-2 border-slate-400 rounded-2xl my-6 relative'>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/aurelien.png?alt=media&token=040cc168-2312-48c1-beae-a583fbb57b05'
            alt='photo-aurelien'
            width={80}
            height={80}
            className='absolute inset-x-0 -top-[67px] mx-auto'
          />
          <h3 className='text-center'>Aurélien Le Godec</h3>
          <ul>
            <li className='font-semibold'>Joueur Expert</li>
          </ul>
        </div>
        <div className='w-full p-3 border-2 border-slate-400 rounded-2xl my-6 relative'>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/cedric.png?alt=media&token=73aba47b-61e0-487c-9e4f-cd27c573cf03'
            alt='photo-cedric'
            width={80}
            height={80}
            className='absolute inset-x-0 -top-[67px] mx-auto'
          />
          <h3 className='text-center'>C&eacute;dric Rollo</h3>
          <ul>
            <li className='font-semibold'>Joueur Expert</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default page
