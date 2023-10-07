import Carte from '@/components/Carte'

const page = () => {
  return (
    <main className='w-full min-h-screen font-sans  text-black'>
      <h1 className='text-center font-mono text-xl capitalize'>la pratique</h1>
      <div className='px-2 pt-3 text-justify text-sm page-content md:text-base'>
        {/* les regles */}
        <h2 className='text-lg text-center'>Les r&egrave;gles</h2>
        <div className='flex flex-col items-center md:flex-row md:flex-wrap gap-6 justify-evenly my-2'>
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
        <h2 className='text-lg text-center mt-6'>Les tables ITSF</h2>
        <div className='flex flex-col items-center md:flex-row md:flex-wrap gap-6 justify-evenly my-2'>
          <Carte titre='Bonzini B90' texte='Table Fran&ccedil;aise' />
          <Carte titre='Leonhart Tournament' texte='Table Allemande' />
          <Carte titre='Tornado Tour Edition' texte='Table Am&eacute;ricaine' />
          <Carte titre='Garlando Wolrd Champion' texte='Table Autrichienne' />
          <Carte titre='Roberto Adrenaline' texte='Table Italienne' />
        </div>
        <h2 className='text-lg text-center mt-6'>
          Les f&eacute;d&eacute;rations
        </h2>
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
