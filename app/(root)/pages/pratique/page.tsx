import Carte from '@/components/Carte'

const page = () => {
  return (
    <main className='w-full min-h-screen font-sans  text-black'>
      <h1 className='text-center font-mono text-xl capitalize'>la pratique</h1>
      <div className='px-2 pt-3 text-justify text-sm page-content md:text-base'>
        {/* les regles */}
        <h2 className='text-lg text-center font-bold text-purple-500'>
          Les r&egrave;gles
        </h2>
        <div className='flex flex-col items-center md:flex-row md:flex-wrap gap-6 justify-evenly my-2'>
          <Carte
            titre='statuts'
            texte="Consultez les statuts de l'association"
            push='https://drive.google.com/file/d/10JY7a0nlOIWpjyAJo-X_wxkkVW0sMn9-/view?usp=sharing'
          />
          <Carte
            titre='R&egrave;glement Int&eacute;rieur'
            texte="Consultez le r&egrave;glement Int&eacute;rieur de l'association"
            push='/pages/pratique/reglement'
          />
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

        {/* les tables */}
        <h2 className='text-lg text-center mt-6 font-bold text-purple-500'>
          Les tables ITSF
        </h2>
        <div className='flex flex-col items-center md:flex-row md:flex-wrap gap-6 justify-evenly my-2'>
          <Carte
            titre='Bonzini B90'
            texte='Table Fran&ccedil;aise'
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
            titre='Garlando Wolrd Champion'
            texte='Table Autrichienne'
            push='https://foosballplanet.com/collections/garlando-foosball-tables'
          />
          <Carte
            titre='Roberto Adrenaline'
            texte='Table Italienne'
            push='https://www.robertosport.it/en/'
          />
        </div>
        <h2 className='text-lg text-center mt-6 font-bold text-purple-500'>
          Les f&eacute;d&eacute;rations
        </h2>

        {/* les federations */}
        <div className='flex flex-col items-center md:flex-row md:flex-wrap gap-6 justify-evenly my-2'>
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
      </div>
    </main>
  )
}

export default page
