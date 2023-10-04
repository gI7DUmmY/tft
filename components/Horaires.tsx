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
              22h00
            </li>
          </ul>
        </div>
      </div>
      <div>
        <iframe
          id='gmap'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.985564825796!2d1.429965976864997!3d43.648468671102364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aea497e3f0544b%3A0xb4d8b5637610e11b!2sCentre%20d&#39;Animation%20de%20Lalande!5e0!3m2!1sfr!2sfr!4v1696405649237!5m2!1sfr!2sfr'
          className='w-full h-[45vh]'
        ></iframe>
      </div>
    </section>
  )
}

export default Horaires
