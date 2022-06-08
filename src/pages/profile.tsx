import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { SEO } from 'components/SEO'

import { ContentLayout } from 'components/ContentLayout'
import { BaseInfo } from 'components/Profile/BaseInfo'
import { CredentialsInfo } from 'components/Profile/CredentialsInfo'
import { ContactInfo } from 'components/Profile/ContactInfo'
import { useUser } from 'hooks/user'

import { getUserProfile } from 'service/user'

export const getStaticProps = () => {
  const props: any = {
    auth: true,
  }
  return {
    props,
  }
}

const Profile: NextPage = () => {
  const { user } = useUser()
  const { id } = (user as any) || {}

  const [profile, setProfile] = useState({})

  const fetchUserProfile = async () => {
    if (!id) {
      return
    }
    try {
      const res: any = await getUserProfile(id)
      setProfile(res)
    } catch (error) {
      setProfile({})
    }
  }

  useEffect(() => {
    fetchUserProfile()
  }, [id])

  return (
    <>
      <SEO title="杏客 - 个人中心" />

      <ContentLayout>
        <BaseInfo profile={profile} />
        <CredentialsInfo profile={profile} />
        <ContactInfo profile={profile} />
      </ContentLayout>
    </>
  )
}

export default Profile
