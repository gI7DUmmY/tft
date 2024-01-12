import Objectif from '@/components/Objectif'
import { TypeObjectif } from '@/types/Objectif'

interface Props {
  objectifs: TypeObjectif[]
}

const Objectifs = ({ objectifs }: Props) => {
  return (
    <section className='w-full flex flex-col justify-center py-6'>
      <div>
        <h1 className='text-center font-extrabold text-3xl text-slate-600 drop-shadow-white font-mono'>
          Notre objectif
        </h1>
        <h2 className='text-center font-semibold text-lg text-slate-600 drop-shadow-white'>
          est de développer le Football de Table
        </h2>
      </div>
      {objectifs && (
        <div className='flex flex-col justify-evenly gap-6 mt-9 md:grid md:grid-cols-4 md:grid-flow-col'>
          {objectifs.map((obj: TypeObjectif) => (
            <Objectif
              key={obj.id}
              titre={obj.titre}
              details={obj.details}
              icon={obj.icon}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Objectifs
