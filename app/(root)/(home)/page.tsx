import Objectif from '@/components/Objectif'
import Hero from '@/components/Hero'

export default async function Home() {
  const objectifs = await fetch('http://localhost:1337/api/objectifs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  }).then(res => res.json())

  return (
    <main className='pt-[96px] w-full font-sans'>
      <Hero />

      <section className='w-full flex flex-col justify-center gap-6'>
        <div className='pt-3'>
          <h1 className='text-center font-extrabold text-3xl text-slate-600 drop-shadow-lg font-mono'>
            Notre objectif
          </h1>
          <h2 className='text-center font-semibold text-lg text-slate-600 drop-shadow-md'>
            est de développer le Football de Table
          </h2>
        </div>
        {objectifs && (
          <div className='grid grid-cols-4 grid-flow-col'>
            {objectifs.data.map((obj: any) => (
              <Objectif
                key={obj.id}
                titre={obj.attributes.titre}
                details={obj.attributes.details}
                icon={obj.attributes.icon}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
