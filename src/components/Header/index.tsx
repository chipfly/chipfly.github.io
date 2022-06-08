import Image from 'next/image'
import Link from 'next/link'

import { HeaderMenu } from './Menu'
import { AccountItem } from './AccountItem'

export const Header = () => {
  return (
    <div className="fixed z-10 w-full bg-white h-16 flex items-center justify-center shadow-md">
      <div className="flex items-center justify-between max-w-6xl w-full h-full">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <Image src="/logo.png" alt="logo" height={40} width={100} />
            </a>
          </Link>

          <HeaderMenu />
        </div>
        <AccountItem />
      </div>
    </div>
  )
}
