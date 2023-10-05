import Link from 'next/link'
import { MdFacebook, MdWhatsapp } from 'react-icons/md'
import { FaDiscord } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='p-6 w-full bg-indigo-900 text-white text-left font-sans'>
      <div className='flex flex-col justify-evenly gap-6 md:flex-row'>
        <div className='shrink-0'>
          <h3 className='text-2xl pl-1'>
            <MdFacebook className='inline align-text-bottom text-blue-600' />
            acebook
          </h3>
          <ul>
            <li>
              <a
                href='https://www.facebook.com/BabyfootToulouse'
                target='_blank'
              >
                Toulouse Football de Table
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/pages/F%C3%A9d%C3%A9ration-Fran%C3%A7aise-Football-de-Table-Baby-Foot/107819762597087'
                target='_blank'
              >
                F&eacute;d&eacute;ration Fran&ccedil;aise de Football de Table
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-2xl pl-1'>
            <MdWhatsapp className='inline align-text-bottom mr-1 text-green-600' />
            <span className='text-xl'>Whatsapp</span>
          </h3>
          <p>
            Les annonces internes au club passent par Whatsapp. Demandez
            &agrave; un responsable du club de vous y inviter!
          </p>
        </div>
        <div>
          <h3 className='text-2xl pl-1'>
            <FaDiscord className='inline align-text-bottom mr-1 text-purple-600' />
            Discord
          </h3>
          <p>
            Demandez &agrave; un responsable du club de vous inviter sur notre
            serveur Discord et venez &eacute;changer avec nous sur notre passion
            et nos &eacute;v&egrave;nements Babyfoot!
          </p>
        </div>
      </div>
      <p className='mt-6 text-sm'>
        Copyright ©️ 2009 Toulouse Football de Table | Tous Doits
        R&eacute;serv&eacute;s
      </p>
    </footer>
  )
}

export default Footer
