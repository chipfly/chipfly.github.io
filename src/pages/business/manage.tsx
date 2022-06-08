import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import { ContentLayout } from 'components/ContentLayout'
import { BusinessTable } from 'components/Business/table'

export const getStaticProps = () => {
  const props: any = {
    auth: true,
  }
  return {
    props,
  }
}

const BusinessManage: NextPage = () => {
  return (
    <>
      <SEO title="杏客 - 发布管理" />
      <ContentLayout>
        <BusinessTable />
      </ContentLayout>
    </>
  )
}

export default BusinessManage
