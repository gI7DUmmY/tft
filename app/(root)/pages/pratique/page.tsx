import { collection, getDocs, orderBy, query } from 'firebase/firestore/lite'
import { db } from '@/lib/App'

import Carte from '@/components/Carte'
import { TypeCarte, Cartes } from '@/types/Carte'

export const revalidate = 900

const page = async () => {
  const tablesRef = collection(db, 'tables')
  const tablesSnap = await getDocs(query(tablesRef, orderBy('titre')))

  const tables: Cartes = []

  tablesSnap.docs.map(doc =>
    tables.push({
      id: doc.id,
      titre: doc.data().titre,
      texte: doc.data().texte,
      image: doc.data().image,
      url: doc.data().url,
    })
  )

  const federationsRef = collection(db, 'federations')
  const federationsSnap = await getDocs(query(federationsRef, orderBy('titre')))

  const federations: Cartes = []

  federationsSnap.docs.map(doc =>
    federations.push({
      id: doc.id,
      titre: doc.data().titre,
      texte: doc.data().texte,
      image: doc.data().image,
      url: doc.data().url,
    })
  )

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
              url='https://gi7dummy.github.io/itsf_rules/'
            />
            <Carte
              titre='Quiz ludique'
              texte='Testez vos connaissances des r&egrave;gles de jeu ! '
              url='https://ffft-db.web.app/'
            />
          </div>
        </section>

        {/* les tables */}
        <section className='mt-12'>
          <h2 className='text-lg text-center mt-6 font-bold text-purple-500 mb-9'>
            Les tables ITSF
          </h2>
          <div className='flex flex-col items-center gap-6 justify-evenly my-2 md:flex-row md:flex-wrap md:place-content-center md:gap-12'>
            {tables.length > 0 &&
              tables.map((table: TypeCarte) => (
                <Carte
                  key={table.id}
                  titre={table.titre}
                  texte={table.texte}
                  image={table.image}
                  url={table.url}
                />
              ))}
          </div>
        </section>

        {/* les federations */}
        <section className='mt-12'>
          <h2 className='text-lg text-center mt-6 font-bold text-purple-500 mb-9'>
            Les f&eacute;d&eacute;rations
          </h2>
          <div className='flex flex-col items-center gap-6 justify-evenly my-2 md:flex-row md:flex-wrap md:place-content-center md:gap-12'>
            {federations.length > 0 &&
              federations.map((fede: TypeCarte) => (
                <Carte
                  key={fede.id}
                  titre={fede.titre}
                  texte={fede.texte}
                  image={fede.image}
                  url={fede.url}
                />
              ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default page
