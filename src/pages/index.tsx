import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import { Banner } from 'components/TaoBao/Banner'
import { Samples } from 'components/TaoBao/Samples'
import { FAQ } from 'components/TaoBao/FAQ'
import { Footer } from 'components/TaoBao/Footer'
import { AutoJSDemo } from 'components/TaoBao/Autojs'
import { WebsiteBreak } from 'components/TaoBao/WebsiteBreak'

const Intro: NextPage = () => {
  return (
    <>
      <SEO title="FY网络科技 - 一站式解决服务" />
      <Banner />
      <Samples />
      <AutoJSDemo />
      <WebsiteBreak />
      <FAQ />
      <Footer />
    </>
  )
}

export default Intro
