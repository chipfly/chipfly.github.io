import { FaUserAlt } from 'react-icons/fa'
import { FC } from 'react'
import Image from 'next/image'

interface IBDLogoProps {
  logo: string
}

export const Logo: FC<IBDLogoProps> = ({ logo }: IBDLogoProps) => {
  if (logo) {
    return <Image src={logo} width={64} height={64} alt="logo" />
  }
  return <FaUserAlt className="text-primary w-16 h-16" />
}
