import { MdSchool } from 'react-icons/md'

interface Props {
  titre: string
  details: string
}

const HeroCard = ({ titre, details }: Props) => {
  return (
    <div className='flex flex-col gap-3 text-center px-3'>
      <div className='mx-auto text-red-500 text-5xl'>
        <MdSchool />
      </div>
      <h3 className='block'>{titre}</h3>
      <p>{details}</p>
    </div>
  )
}

export default HeroCard
