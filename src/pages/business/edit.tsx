import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import { useRouter } from 'next/router'

import { ContentLayout } from 'components/ContentLayout'
import { BusinessForm } from 'components/Business/form'

export const getStaticProps = () => {
  const props: any = {
    auth: true,
  }
  return {
    props,
  }
}

const Business: NextPage = () => {
  const router = useRouter()
  const { query } = router
  const { id: businessId = '' } = query || {}

  const seoTitle = businessId ? '杏客 - 编辑资源' : '杏客 - 发布资源'
  return (
    <>
      <SEO title={seoTitle} />
      <ContentLayout>
        <BusinessForm />
      </ContentLayout>
    </>
  )
}

export default Business
