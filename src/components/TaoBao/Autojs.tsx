import { WeChatAlert } from './WeChatAlert'
import { useState } from 'react'

export const AutoJSDemo = () => {
  const [isOpenWeChat, setIsOpenWeChat] = useState(false)

  const posts = [
    {
      title: '抖音自动养号',
      desc: '抖音新号养号，模拟人工浏览，模拟随机点赞，模拟随机评论。',
      img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorName: '49元',
      date: '安卓',
    },
    {
      title: '快手自动养号',
      desc: '快手新号养号，精选页面模拟浏览，可随机点赞、随机评论。',
      img: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorName: '49元',
      date: '安卓',
    },
    {
      title: '微信群消息自动发送',
      desc: '可实现模拟群消息发送，多个群自动发送，可定制聊天信息，可对接第三方接口。',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorName: '99元',
      date: '安卓',
    },
    {
      title: '微信自动发朋友圈',
      desc: '支持微信一键式发朋友圈，可定制朋友圈文案，支持文本形式，图文形式，视频形式。',
      img: 'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorName: '49元',
      date: '安卓',
    },
    {
      title: '抖音私信机器人',
      desc: '支持抖音私信机器人，可定制私信内容，可帮助您进行粉丝管理，粉丝回复等等。',
      img: 'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorName: '49元',
      date: '安卓',
    },
    {
      title: '快手私信机器人',
      desc: '快手私信管理，可定制私信内容，可帮助您进行粉丝管理，粉丝回复等等。',
      img: 'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorName: '49元',
      date: '安卓',
    },
  ]

  return (
    <>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">自动化脚本</h1>
          <p className="text-gray-500 max-w-lg mx-auto text-lg">
            解放您的双手，让工具为我们服务
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
              高端自动化定制服务
            </h3>
            <p className="text-gray-300 leading-relaxed mt-3">
              在自动化场景业务中，我们拥有丰富的经验，需要定制业务的高端客户，请联系我们，帮助您更好的实现自动化场景，解放双手重复劳动。
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
