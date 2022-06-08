import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import { ContentLayout } from 'components/ContentLayout'
import { ShopForm } from 'components/Shop/Publish'

const Shop: NextPage = () => {
  return (
    <>
      <SEO title="杏客旺铺 - 发布" />
      <ContentLayout>
        <ShopForm />
      </ContentLayout>
    </>
  )
}

export default Shop
