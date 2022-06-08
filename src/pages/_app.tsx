import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'

import '../styles/tailwind.css'
import '../styles/antd.less'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import NextNProgress from 'nextjs-progressbar'
import { getUserInfo } from 'service/user'
import { getGlobalConfig } from 'service/config'
import { UserContext } from 'hooks/user'
import { GlobalConfigContext } from 'hooks/config'

const NotNeedLayoutPaths = [
  '/login',
  '/register',
  '/forget-password',
  '/reset-password',
  '/about',
]

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  // const [user, setUser] = useState(null)
  const [config, setConfig] = useState(null)

  // console.log(pageProps)

  useEffect(() => {
    // 获取配置
    getGlobalConfig().then((res) => {
      setConfig(res)
    })

    // if (NotNeedLayoutPaths.includes(asPath)) {
    //   return
    // }
    // const userInfo = getUserInfo()
    // console.log('=======获取用户信息=======: ', userInfo)
    // setUser(userInfo)

    // if (pageProps.auth && !userInfo) {
    //   Router.push('/login')
    // }
  }, [asPath])

  // if (NotNeedLayoutPaths.includes(asPath)) {
  //   return (
  //     <GlobalConfigContext.Provider value={config}>
  //       <NextNProgress color="#2d65ff" />
  //       <Component {...pageProps} />
  //     </GlobalConfigContext.Provider>
  //   )
  // }

  return (
    <GlobalConfigContext.Provider value={config}>
      <NextNProgress color="#2d65ff" />
      <Component {...pageProps} />
    </GlobalConfigContext.Provider>
  )

  // return (
  //   <GlobalConfigContext.Provider value={config}>
  //     <UserContext.Provider value={user}>
  //       <NextNProgress color="#2d65ff" />
  //       <Header />
  //       <div className="pt-16">
  //         <Component {...pageProps} />
  //         <Footer />
  //       </div>
  //     </UserContext.Provider>
  //   </GlobalConfigContext.Provider>
  // )
}

export default MyApp
