const footerNavs = [
  {
    href: 'https://github.com/chipfly',
    name: 'GitHub',
  },
  {
    href: 'mailto:iafineden@gmail.com',
    name: '邮箱',
  },
  {
    href: 'https://t.me/tgaurora',
    name: 'Telegram',
  },
  {
    href: 'https://discord.gg/37JM2JKqv9',
    name: 'Discard',
  },
  {
    href: 'https://shop196644268.taobao.com/',
    name: '淘宝店铺',
  },
]

export const Footer = () => {
  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <p className="leading-relaxed mt-2 text-[15px]">
          我们为您提供专业的技术服务，欢迎咨询
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li key={item.name} className=" hover:text-gray-800">
            <a key={idx} href={item.href} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 FY网络科技 All rights reserved.
        </div>
      </div>
    </footer>
  )
}
