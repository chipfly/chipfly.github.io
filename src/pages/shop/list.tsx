import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import { ContentLayout } from 'components/ContentLayout'
// import { ShopList } from 'components/Shop/List'

const Shop: NextPage = () => {
  return (
    <>
      <SEO title="杏客旺铺" />
      <ContentLayout>{/* <ShopList /> */}</ContentLayout>
    </>
  )
}

export default Shop
