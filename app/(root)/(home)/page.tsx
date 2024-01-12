import { collection, getDocs } from 'firebase/firestore/lite'

import { db } from '@/lib/App'

import Objectifs from '@/components/Objectifs'
import Hero from '@/components/Hero'
import Horaires from '@/components/Horaires'
import Youtube from '@/components/Youtube'

import { TypeObjectif } from '@/types/Objectif'

export const revalidate = 900

export default async function Home() {
  const objectifsCol = collection(db, 'objectifs')
  const objectifsSnap = await getDocs(objectifsCol)
  const objectifsList: TypeObjectif[] = []
  objectifsSnap.docs.map(doc =>
    objectifsList.push({
      id: doc.id,
      icon: doc.data().icon,
      titre: doc.data().titre,
      details: doc.data().details,
    })
  )

  return (
    <main className='w-full font-sans md:pt-[96px]'>
      <Hero />

      <Objectifs objectifs={objectifsList} />

      <Horaires />

      <Youtube />
    </main>
  )
}
