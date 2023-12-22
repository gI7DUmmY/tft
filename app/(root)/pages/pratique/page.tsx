import Carte from '@/components/Carte'

const page = () => {
  return (
    <main className='w-full min-h-screen font-sans  text-black'>
      <h1 className='text-center font-mono text-xl capitalize'>la pratique</h1>
      <div className='px-2 pt-3 text-justify page-content md:text-base'>
        {/* les regles */}
        <section className='mt-12'>
          <h2 className='text-lg text-center font-bold text-purple-500 mb-9'>
            Les r&egrave;gles
          </h2>
          <div className='flex flex-col items-center gap-6 justify-evenly my-2 md:flex-row md:flex-wrap md:place-content-center md:gap-12'>
            <Carte
              titre='R&egrave;gles de jeu'
              texte='Consultez le r&egrave;glement officiel du football de table'
              push='https://gi7dummy.github.io/itsf_rules/'
            />
            <Carte
              titre='Quiz ludique'
              texte='Testez vos connaissances des r&egrave;gles de jeu ! '
              push='https://ffft-db.web.app/'
            />
          </div>
        </section>

        {/* les tables */}
        <section className='mt-12'>
          <h2 className='text-lg text-center mt-6 font-bold text-purple-500 mb-9'>
            Les tables ITSF
          </h2>
          <div className='flex flex-col items-center gap-6 justify-evenly my-2 md:flex-row md:flex-wrap md:place-content-center md:gap-12'>
            <Carte
              titre='Bonzini B90'
              texte='Table Fran&ccedil;aise'
              image='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/bonzini.png?alt=media&token=75f63d34-8809-45c1-a3e2-de87e928da00'
              push='https://www.bonzini.com/fr/'
            />
            <Carte
              titre='Leonhart Tournament'
              texte='Table Allemande'
              image='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/leonhart.png?alt=media&token=b31d2272-cf92-4e5b-a2aa-acca07a72123'
              push='https://original-leonhart.com/?lang=en'
            />
            <Carte
              titre='Tornado Tour Edition'
              texte='Table Am&eacute;ricaine'
              image='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/tornado.png?alt=media&token=e5d0e12e-39ac-4ae2-9590-40467467fe59'
              push='https://tornadofoosball.com/'
            />
            <Carte
              titre='Garlando World Champion'
              texte='Table Autrichienne'
              image='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/garlando.png?alt=media&token=4f48df8e-db20-43d3-abc1-a308d99ccba8'
              push='https://foosballplanet.com/collections/garlando-foosball-tables'
            />
            <Carte
              titre='Roberto Adrenaline'
              texte='Table Italienne'
              image='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/roberto.png?alt=media&token=055ef707-cf82-481e-811e-1d59b4d69285'
              push='https://www.robertosport.it/en/'
            />
          </div>
        </section>

        {/* les federations */}
        <section className='mt-12'>
          <h2 className='text-lg text-center mt-6 font-bold text-purple-500 mb-9'>
            Les f&eacute;d&eacute;rations
          </h2>
          <div className='flex flex-col items-center gap-6 justify-evenly my-2 md:flex-row md:flex-wrap md:place-content-center md:gap-12'>
            <Carte
              titre='FFFT'
              texte='F&eacute;d&eacute;ration Fran&ccedil;aise de Football de Table'
              image='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/logo_ffft.png?alt=media&token=b99c1415-5130-40aa-966e-e341103fd295'
              push='https://www.ffft.fr/'
            />
            <Carte
              titre='ITSF'
              texte='International Table Soccer Federation'
              image='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/logo_itsf.png?alt=media&token=02bea8e7-d30e-4557-8f1c-7fe605dbb512'
              push='https://www.tablesoccer.org/'
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default page
