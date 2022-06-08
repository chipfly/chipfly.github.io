import type { NextPage } from 'next'
import { SEO } from 'components/SEO'

export const getStaticProps = () => {
  return {
    props: {
      protected: true,
    },
  }
}

const Profile: NextPage = () => {
  return (
    <>
      <SEO title="杏客 - 活动详情" />
      <p>活动详情</p>
    </>
  )
}

export default Profile
