import Objectif from '@/components/Objectif'
import Hero from '@/components/Hero'

export default async function Home() {
  const objectifs = await fetch('http://localhost:1337/api/objectifs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())

  return (
    <main className='pt-[96px] w-full'>
      <Hero />

      <section className='w-full flex flex-col justify-center gap-6'>
        <div className='pt-3'>
          <h1 className='text-center font-extrabold text-3xl text-white drop-shadow-lg'>
            Notre objectif
          </h1>
          <h2 className='text-center font-semibold text-lg text-white drop-shadow-md'>
            est de développer le Football de Table
          </h2>
        </div>
        {objectifs && (
          <div className='flex flex-col md:flex-row justify-between items-center'>
            {objectifs.data.map((obj: any) => (
              <Objectif
                key={obj.id}
                titre={obj.attributes.titre}
                details={obj.attributes.details}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
