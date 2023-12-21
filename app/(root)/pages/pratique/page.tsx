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
              image='https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/bonzini.webp?alt=media&token=82c3d8df-377d-44d7-9e4f-4900082a713a'
              push='https://www.bonzini.com/fr/'
            />
            <Carte
              titre='Leonhart Tournament'
              texte='Table Allemande'
              push='https://original-leonhart.com/?lang=en'
            />
            <Carte
              titre='Tornado Tour Edition'
              texte='Table Am&eacute;ricaine'
              push='https://tornadofoosball.com/'
            />
            <Carte
              titre='Garlando World Champion'
              texte='Table Autrichienne'
              push='https://foosballplanet.com/collections/garlando-foosball-tables'
            />
            <Carte
              titre='Roberto Adrenaline'
              texte='Table Italienne'
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
              push='https://www.ffft.fr/'
            />
            <Carte
              titre='ITSF'
              texte='International Table Soccer Federation'
              push='https://www.tablesoccer.org/'
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default page
