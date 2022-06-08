import Link from 'next/link'

export const HeaderMenu = () => {
  return (
    <Link href="/resources">
      <a className="hover:text-primary text-gray-900 text-base ml-12">
        资源中心
      </a>
    </Link>
  )
}
