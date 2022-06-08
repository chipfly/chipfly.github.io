import { Row, Col, Card, Form, Input, Button, Checkbox, message } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineLock, AiOutlinePhone } from 'react-icons/ai'
import { useState } from 'react'
import { userRegister } from 'service/user'
import { useRouter } from 'next/router'

export const Register = () => {
  const router = useRouter()
  const [submitLoading, setSubmitLoading] = useState(false)

  const onFormFinish = async (values: any) => {
    const { name, phone, password, privacy } = values

    if (!privacy) {
      message.error('请先阅读并同意 服务协议 和 隐私政策')
      return
    }
    setSubmitLoading(true)
    try {
      await userRegister({ name, phone, password })
      router.push('/')
    } catch (error) {}
    setSubmitLoading(false)
  }

  const onFormError = (error: any) => {
    console.log('form error: ', error)
  }

  const validateRepeatPwd = ({ getFieldValue }: any) => {
    return {
      validator: (_: any, value: string) => {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve()
        }
        return Promise.reject(new Error('两次输入的密码不一致'))
      },
    }
  }

  return (
    <Row className="w-screen h-screen">
      <Col span={6}>
        <div className="pl-9 pt-7">
          <Link href="/">
            <a>
              <Image src="/logo.png" alt="logo" height={40} width={100} />
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-full pt-36">
          <h1 className="font-semibold text-3xl text-gray-500">
            来杏客，找资源，找合作
          </h1>
          <Image
            src="/undraw_font_re_efri.svg"
            width={360}
            height={360}
            alt="undraw_font_re_efri.svg"
          />
        </div>
      </Col>
      <Col className="bg-primary" span={18}>
        <div className="flex flex-col items-center justify-center">
          <Card
            style={{
              width: 444,
              height: 550,
              marginTop: 100,
              borderWidth: 2,
              borderRadius: 12,
            }}
          >
            <h1 className="font-semibold  text-2xl">欢迎注册杏客</h1>
            <div className="mt-12">
              <Form
                name="register_form"
                onFinish={onFormFinish}
                onError={onFormError}
                initialValues={{ privacy: false }}
                size="large"
              >
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: '请输入用户名' }]}
                >
                  <Input
                    prefix={<AiOutlineUser />}
                    placeholder="请输入用户名"
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: '请输入手机号' },
                    {
                      pattern: new RegExp(/^1(3|4|5|6|7|8|9)\d{9}$/, 'g'),
                      message: '请输入正确的手机号',
                    },
                  ]}
                >
                  <Input
                    prefix={<AiOutlinePhone />}
                    placeholder="请输入手机号"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: '请输入密码' },
                    // {
                    //   min: 8,
                    //   message: '密码长度不能小于8位',
                    // },
                    // {
                    //   pattern: new RegExp(
                    //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
                    //     'g',
                    //   ),
                    //   message: '密码必须同时包含大写字母、小写字母和数字',
                    // }
                  ]}
                >
                  <Input
                    prefix={<AiOutlineLock />}
                    type="password"
                    placeholder="请输入密码"
                  />
                </Form.Item>
                <Form.Item
                  name="repeat_password"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: '请再次输入密码' },
                    // {
                    //   min: 8,
                    //   message: '密码长度不能小于8位',
                    // },
                    // {
                    //   pattern: new RegExp(
                    //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
                    //     'g',
                    //   ),
                    //   message: '密码必须同时包含大写字母、小写字母和数字',
                    // }
                    validateRepeatPwd,
                  ]}
                >
                  <Input
                    prefix={<AiOutlineLock />}
                    type="password"
                    placeholder="请再次输入密码"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    className="w-full mt-12"
                    type="primary"
                    htmlType="submit"
                    loading={submitLoading}
                  >
                    注册
                  </Button>
                </Form.Item>
                <Form.Item name="privacy" valuePropName="checked">
                  <Checkbox>
                    我已阅读并同意
                    <Link href="/terms">
                      <a> 服务协议 </a>
                    </Link>
                    和
                    <Link href="/privacy">
                      <a> 隐私政策 </a>
                    </Link>
                  </Checkbox>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </div>
      </Col>
    </Row>
  )
}
