import Carte from '@/components/Carte'
import Image from 'next/image'

const page = () => {
  return (
    <main className='w-full min-h-screen font-sans mx-auto text-black md:max-w-[85%]'>
      <h1 className='text-center font-mono prose-2xl capitalize'>
        Qui sommes nous ?
      </h1>

      {/* status & reglement */}

      <div className='flex flex-col items-center gap-6 justify-evenly my-2 md:flex-row md:place-content-center md:gap-12 md:my-6'>
        <Carte
          titre='statuts'
          texte="Consultez les statuts de l'association"
          url='https://drive.google.com/file/d/10JY7a0nlOIWpjyAJo-X_wxkkVW0sMn9-/view?usp=sharing'
        />
        <Carte
          titre='R&egrave;glement Int&eacute;rieur'
          texte="Consultez le r&egrave;glement Int&eacute;rieur de l'association"
          url='/pages/about/reglement'
        />
      </div>

      {/* bureau */}

      <div className='w-full px-3 flex flex-col gap-8 items-center mx-auto text-left md:max-w-[425px]'>
        <h2 className='w-full capitalize mt-3 mb-12 ml-3 prose-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400'>
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
            <li>Membre de l&apos;&eacute;quipe de France F&eacute;minine</li>
            <li>Championne du monde 2015/2017</li>
            <li>Championne de France 2019</li>
            <li>Vice championne de France 2023</li>
            <li>Vice championne du monde 2024</li>
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

      {/* Entraineurs */}

      <div className='w-full px-3 flex flex-col gap-8 items-center mx-auto text-left md:max-w-[425px]'>
        <h2 className='w-full capitalize mt-3 mb-12 ml-3 prose-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400'>
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

      {/* selectionneurs */}
      <div className='w-full px-3 flex flex-col gap-8 items-center mx-auto text-left md:max-w-[425px]'>
        <h2 className='w-full capitalize mt-3 mb-12 ml-3 prose-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400'>
          Sélectionneurs
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
            src='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/stephane.png?alt=media&token=735ab057-2e4e-4c6c-a440-21c441ca1d78'
            alt='photo-stephane'
            width={80}
            height={80}
            className='absolute inset-x-0 -top-[67px] mx-auto'
          />
          <h3 className='text-center'>Stéphane Merceron</h3>
          <ul>
            <li className='font-semibold'>Joueur Pro</li>
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
