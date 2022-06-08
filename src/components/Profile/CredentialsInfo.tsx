import { useState, useEffect } from 'react'
import { RoundLayout } from 'components/RoundLayout'
import { Row, Col, Form, Input, Button, message, Select } from 'antd'
import { useUser } from 'hooks/user'
import { editUserProfile } from 'service/user'
import { useGlobalConfig } from 'hooks/config'

const { useForm } = Form

export const CredentialsInfo = ({ profile }: any) => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const { globalConfig } = useGlobalConfig()
  const [form] = useForm()
  const { user } = useUser()

  const { id } = (user as any) || {}
  const { industry: industryOptions = [], userGroup: userGroupOptions = [] } =
    (globalConfig as any) || {}

  const {
    realName = '',
    company = '',
    industry = '',
    userGroup = '',
    cooperation = '',
  } = profile

  const initialValues = {
    realName,
    company,
    industry,
    userGroup,
    cooperation,
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
    <RoundLayout title="认证信息">
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
              name="realName"
              label="真实姓名"
              rules={[{ required: true, message: '请输入真实姓名' }]}
            >
              <Input placeholder="请输入您的真实姓名" />
            </Form.Item>
            <Form.Item
              name="company"
              label="公司名称"
              rules={[{ required: true, message: '请输入公司名称' }]}
            >
              <Input placeholder="请输入您的公司名称" />
            </Form.Item>
            <Form.Item
              name="industry"
              label="所在行业"
              rules={[{ required: true, message: '请选择所在行业' }]}
            >
              <Select options={industryOptions} placeholder="请选择所在行业" />
            </Form.Item>
            <Form.Item
              name="userGroup"
              label="目标用户"
              rules={[{ required: true, message: '请选择目标用户' }]}
            >
              <Select options={userGroupOptions} placeholder="请选择目标用户" />
            </Form.Item>
            <Form.Item
              name="cooperation"
              label="合作需求"
              rules={[{ required: true, message: '请输入合作需求' }]}
            >
              <Input.TextArea
                rows={4}
                maxLength={200}
                placeholder="请输入合作需求，最多200字"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={submitLoading}>
            保存认证信息
          </Button>
        </Form.Item>
      </Form>
    </RoundLayout>
  )
}
