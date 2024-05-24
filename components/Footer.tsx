import Link from 'next/link'
import { MdFacebook, MdLink, MdWhatsapp } from 'react-icons/md'
import { FaDiscord, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='p-6 pb-2 w-full bg-indigo-900 text-white text-justify font-sans md:text-left md:p-3 xl:p-12 xl:pb-4 2xl:p-16 2xl:pb-6'>
      <div className='flex flex-col justify-evenly gap-6 md:grid md:grid-cols-2 lg:flex-none lg:grid-cols-4'>
        {/* Facebook */}
        <div className='shrink-0'>
          <h3 className='text-2xl'>
            <MdFacebook className='inline align-text-bottom text-blue-600 text-3xl' />
            acebook
          </h3>
          <ul>
            <li>
              <Link
                href='https://www.facebook.com/BabyfootToulouse'
                target='_blank'
              >
                <MdLink className='inline mr-1 align-middle' />
                Toulouse Football de Table
              </Link>
            </li>
            <li>
              <Link
                href='https://www.facebook.com/pages/F%C3%A9d%C3%A9ration-Fran%C3%A7aise-Football-de-Table-Baby-Foot/107819762597087'
                target='_blank'
              >
                <MdLink className='inline mr-1 align-middle' />
                F&eacute;d&eacute;ration Fran&ccedil;aise de Football de Table
              </Link>
            </li>
          </ul>
        </div>
        {/* Instagram */}
        <div>
          <h3 className='text-2xl'>
            <FaInstagram className='inline align-text-bottom text-3xl mr-1 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-400 rounded-md' />
            Instagram
          </h3>
          <Link
            href='https://www.instagram.com/toulouse_football_de_table/'
            target='_blank'
          >
            <MdLink className='inline mr-1 align-middle' />
            Découvrez notre galerie!
          </Link>
        </div>
        {/* Whatsapp */}
        <div>
          <h3 className='text-2xl'>
            <MdWhatsapp className='inline align-text-bottom text-3xl mr-1 text-green-600' />
            Whatsapp
          </h3>
          <p>
            Les annonces internes au club passent par Whatsapp. Demandez
            &agrave; un responsable du club de vous y ajouter!
          </p>
        </div>
        {/* Discord */}
        <div>
          <h3 className='text-2xl'>
            <FaDiscord className='inline align-text-bottom mr-1 text-purple-600 text-3xl' />
            Discord
          </h3>
          <p>
            Demandez &agrave; un responsable du club de vous inviter sur notre
            serveur Discord et venez &eacute;changer avec nous sur notre passion
            et nos &eacute;v&egrave;nements Babyfoot!
          </p>
        </div>
      </div>
      <p className='mt-6 text-sm text-slate-200'>
        Copyright ©️ 2009 Toulouse Football de Table | Tous Doits
        R&eacute;serv&eacute;s
      </p>
    </footer>
  )
}

export default Footer
