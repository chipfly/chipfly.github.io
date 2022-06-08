import { WeChatAlert } from './WeChatAlert'
import { useState } from 'react'

export const WebsiteBreak = () => {
  const [isOpenWeChat, setIsOpenWeChat] = useState(false)

  const posts = [
    {
      title: '网站数据爬取',
      desc: '爬取网站数据，提取数据，可定制服务，生成数据模型，可推送到第三方数据平台。',
      img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorName: '面议',
      date: '全平台',
    },
    {
      title: '产品秒杀抢购',
      desc: '茅台，耐克，奢侈品，芯片等产品秒杀抢购服务，可定制化服务。',
      img: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorName: '面议',
      date: '全平台',
    },
    {
      title: '移动端加密破解，抓包分析',
      desc: '安卓/iOS App加密破解，抓包分析，登录注册解析，App数据抓取等，可定制化服务。',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorName: '面议',
      date: '全平台',
    },
  ]

  return (
    <>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">逆向爬虫</h1>
          <p className="text-gray-500 max-w-lg mx-auto text-lg">
            网站/App数据爬取，产品抢购秒杀
          </p>
        </div>
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={key}
            >
              <a onClick={() => setIsOpenWeChat(true)}>
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className="w-full h-48 rounded-t-md"
                />
                <div className="pt-3 ml-4 mr-2 mt-2">
                  <h3 className="text-xl text-gray-900">{items.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                </div>
                <div className="flex items-center pt-3 mr-2 mb-3">
                  <div className="ml-3">
                    <span className="block text-gray-900">
                      {items.authorName}
                    </span>
                    <span className="block text-gray-400 text-sm">
                      {items.date}
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-12 relative overflow-hidden py-28 px-4 bg-indigo-600 sm:px-8">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
        <div className="max-w-xl mx-auto text-center relative">
          <div className="py-4">
            <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
              高端抢购爬虫定制服务
            </h3>
            <p className="text-gray-300 leading-relaxed mt-3">
              在秒杀抢购和网站爬虫领域，我们拥有丰富的经验，需要定制业务的高端客户，请联系我们。
            </p>
          </div>
          <div className="mt-5 items-center justify-center gap-3 sm:flex">
            <a
              onClick={() => setIsOpenWeChat(true)}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              联系我们
            </a>
          </div>
        </div>
      </section>
      <WeChatAlert
        isOpen={isOpenWeChat}
        onChange={(isOpen: boolean) => setIsOpenWeChat(isOpen)}
      />
    </>
  )
}
