import Head from 'next/head'

export const SEO = ({
  description = 'FY网络科技，一站式解决方案提供商，自动化脚本，逆向爬虫，前端Vue、React、小程序、iOS、安卓、NodeJS生态，后端Python、数据库，云服务、项目难点、重构思路，App、小程序、Web网站、前端后端开发，信息化系统对接，抖音快手自动化，网站数据爬取，产品秒杀抢购，移动端加密破解，抓包分析',
  keywords = 'FY网络科技，一站式解决方案提供商，自动化脚本，逆向爬虫，前端Vue、React、小程序、iOS、安卓、NodeJS生态，后端Python、数据库，云服务、项目难点、重构思路，App、小程序、Web网站、前端后端开发，信息化系统对接，抖音快手自动化，网站数据爬取，产品秒杀抢购，移动端加密破解，抓包分析',
  title = 'FY网络科技',
}) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
