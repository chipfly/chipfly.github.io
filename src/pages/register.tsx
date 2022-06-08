import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import { Register as RegisterLayout } from 'components/Register'

const Register: NextPage = () => {
  return (
    <>
      <SEO title="杏客 - 注册" />
      <RegisterLayout />
    </>
  )
}

export default Register
