import { MdSchool } from 'react-icons/md'

const HeroCard = () => {
  return (
    <div className='flex flex-col gap-3 text-center px-3'>
      <div className='mx-auto text-red-500 text-5xl'>
        <MdSchool />
      </div>
      <h3 className='block'>L'apprentissage</h3>
      <p>
        Le football de table est un sport avec ses règles, ses techniques. Comme
        tout sport, l’apprentissage se fait à travers un programme évolutif qui
        permet de progresser, quelque soit son niveau.
      </p>
    </div>
  )
}

export default HeroCard
