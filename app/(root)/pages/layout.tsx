import Link from 'next/link'
import { MdHome } from 'react-icons/md'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='pt-[8vh] md:pt-[13vh] pattern-hexagons-purple-400/5'>
      <div className='text-purple-500 text-lg pl-3 hidden md:block md:mb-6'>
        <Link href='/'>
          <MdHome className='inline align-text-bottom mr-1' />
          Accueil
        </Link>
      </div>
      {children}
    </div>
  )
}

export default Layout
