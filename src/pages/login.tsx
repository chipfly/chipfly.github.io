import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import { Login as LoginLayout } from 'components/Login'

const Login: NextPage = () => {
  return (
    <>
      <SEO title="杏客 - 登录" />
      <LoginLayout />
    </>
  )
}

export default Login
