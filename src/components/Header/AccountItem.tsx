import { Menu, Dropdown, Button } from 'antd'
import Link from 'next/link'
import { AiFillCaretDown } from 'react-icons/ai'
import { logout } from 'service/user'
import { isEmpty } from 'lodash'

import { useRouter } from 'next/router'
import { useUser } from 'hooks/user'
import { FaLink } from 'react-icons/fa'

let router

const LoginLayout = () => {
  return (
    <div className="flex items-center">
      <Button className="mr-4" type="link" size="large">
        <Link href="/login">
          <a>登录</a>
        </Link>
      </Button>
      <Button type="primary" size="large">
        <Link href="/register">
          <a>立即注册</a>
        </Link>
      </Button>
    </div>
  )
}

const DropdownMenu = (
  <Menu>
    <Menu.Item key="/business/manage">
      <Link
        href={{
          pathname: '/business/manage',
          query: { tab: 'ALL' },
        }}
      >
        <a className="px-4 py-2 text-base">发布管理</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="profile">
      <Link href="/profile">
        <a className="px-4 py-2 text-base">个人中心</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="logout">
      <a className="px-4 py-2 text-base" onClick={logout}>
        退出
      </a>
    </Menu.Item>
  </Menu>
)

const LogedLayout = ({ userInfo }: any) => {
  const { phone } = userInfo
  router = useRouter()

  return (
    <div className="flex items-center">
      <Button className="mr-4" type="primary" size="large">
        <Link href="/business/edit">
          <a>发布合作</a>
        </Link>
      </Button>
      <Dropdown overlay={DropdownMenu} placement="bottom">
        <span className="flex items-center hover:text-primary text-base">
          {phone} <AiFillCaretDown className="ml-2" />
        </span>
      </Dropdown>
    </div>
  )
}

export const AccountItem = () => {
  const { user: userInfo } = useUser()

  return isEmpty(userInfo) ? (
    <LoginLayout />
  ) : (
    <LogedLayout userInfo={userInfo} />
  )
}
