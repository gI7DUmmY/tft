import Objectifs from '@/components/Objectifs'
import Hero from '@/components/Hero'
import Horaires from '@/components/Horaires'

export default async function Home() {
  const objectifs = await fetch('http://localhost:1337/api/objectifs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  }).then(res => res.json())

  return (
    <main className='w-full font-sans md:pt-[96px]'>
      <Hero />

      <Objectifs objectifs={objectifs} />

      <Horaires />
    </main>
  )
}
