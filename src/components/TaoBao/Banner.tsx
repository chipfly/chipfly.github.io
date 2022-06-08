import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { WeChatAlert } from './WeChatAlert'
import { useState } from 'react'

export const Banner = () => {
  const [isOpenWeChat, setIsOpenWeChat] = useState(false)

  return (
    <>
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <HiOutlineSpeakerphone
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <div className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  FY网络科技，为您提供最优质的服务。
                </span>
                <span className="hidden md:inline">
                  FY网络科技，12年资深开发团队，为您提供最优质的服务，欢迎进店咨询。
                </span>
              </div>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                onClick={() => setIsOpenWeChat(true)}
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                联系我们
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3"></div>
          </div>
        </div>
      </div>
      <WeChatAlert
        isOpen={isOpenWeChat}
        onChange={(isOpen: boolean) => setIsOpenWeChat(isOpen)}
      />
    </>
  )
}
