import Image from 'next/image'
import { MdSchool, MdModelTraining, MdEvent } from 'react-icons/md'

interface Props {
  titre: string
  details: string
  icon: string
}

const HeroCard = ({ titre, details, icon }: Props) => {
  return (
    <div className='flex flex-col gap-3 justify-start items-center text-center text-black px-3'>
      {icon === 'school' && (
        <div className='mx-auto text-purple-600 text-5xl'>
          <MdSchool />
        </div>
      )}

      {icon === 'training' && (
        <div className='mx-auto text-green-600 text-5xl'>
          <MdModelTraining />
        </div>
      )}
      {icon === 'event' && (
        <div className='mx-auto text-blue-600 text-5xl'>
          <MdEvent />
        </div>
      )}
      {icon === 'fede' && (
        <Image
          src='/ffft_logo.png'
          alt='logo fede'
          width={50}
          height={50}
          className='rounded-full mx-auto'
        />
      )}
      <h3 className='block uppercase'>{titre}</h3>
      <p className='block'>{details}</p>
    </div>
  )
}

export default HeroCard
