import { useState, useEffect } from 'react'
import { RoundLayout } from 'components/RoundLayout'
import { Row, Col, Form, Input, Button, message } from 'antd'
import { useUser } from 'hooks/user'
import { editUserProfile } from 'service/user'

const { useForm } = Form

export const ContactInfo = ({ profile }: any) => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = useForm()
  const { user } = useUser()
  const { id } = (user as any) || {}

  const { user: profileUser = {}, wechat = '', qq = '', email = '' } = profile
  const { phone = '' } = profileUser || {}
  const initialValues = {
    phone,
    wechat,
    qq,
    email,
  }

  useEffect(() => {
    form.resetFields()
  }, [profile])

  const onFormFinish = async (values: any) => {
    setSubmitLoading(true)
    try {
      await editUserProfile(id, {
        ...values,
      })
      message.success('保存联系方式成功')
    } catch (error) {}
    setSubmitLoading(false)
  }

  return (
    <RoundLayout title="联系方式">
      <Form
        form={form}
        onFinish={onFormFinish}
        layout="vertical"
        initialValues={initialValues}
        size="middle"
      >
        <Row>
          <Col span={12}>
            <Form.Item
              name="phone"
              label="手机号"
              rules={[{ required: true, message: '请绑定手机号码' }]}
            >
              <Input disabled placeholder="请绑定手机号码" />
            </Form.Item>
            <Form.Item
              name="email"
              label="邮箱"
              rules={[{ required: true, message: '请输入邮箱' }]}
            >
              <Input placeholder="请输入邮箱" />
            </Form.Item>
            <Form.Item name="wechat" label="微信号">
              <Input placeholder="请输入您的微信号" />
            </Form.Item>
            <Form.Item name="qq" label="QQ号">
              <Input placeholder="请输入您的QQ号" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={submitLoading}>
            保存联系方式
          </Button>
        </Form.Item>
      </Form>
    </RoundLayout>
  )
}
