import { MdAccessTime, MdLocationOn } from 'react-icons/md'

const Horaires = () => {
  return (
    <section className='w-full parallax' id='horaires'>
      <div className='pt-24 h-[35vh]'>
        <h1 className='text-center font-extrabold text-3xl text-slate-50 drop-shadow-black font-mono uppercase'>
          Horaires des entraînements
        </h1>
      </div>
      <div className='flex flex-row justify-evenly bg-indigo-900 text-center text-slate-50 pt-12 h-[25vh]'>
        <div>
          <MdLocationOn className='text-6xl  mx-auto mb-3' />
          <p>
            <span className='font-bold'>Centre d'animation de Lalande</span>{' '}
            <br />
            239 Avenue de Fronton <br />
            31200 TOULOUSE
          </p>
        </div>
        <div>
          <MdAccessTime className='text-6xl mx-auto mb-3' />
          <ul>
            <li>
              <span className='font-bold uppercase'>mercredi</span> de 18h30 à
              21h00
            </li>
            <li>
              <span className='font-bold uppercase'>vendredi</span> de 18h00 à
              22h30
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Horaires
