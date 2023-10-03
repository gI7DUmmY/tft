import Objectif from '@/components/Objectif'

interface Props {
  objectifs: {
    data: [
      {
        id: string
        attribtues: {
          titre: string
          details: string
          icon: string
        }
      }
    ]
  }
}

const Objectifs = ({ objectifs }: Props) => {
  return (
    <section className='w-full flex flex-col justify-center gap-6'>
      <div className='pt-3'>
        <h1 className='text-center font-extrabold text-3xl text-slate-600 drop-shadow-black font-mono'>
          Notre objectif
        </h1>
        <h2 className='text-center font-semibold text-lg text-slate-600 drop-shadow-black'>
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
  )
}

export default Objectifs
