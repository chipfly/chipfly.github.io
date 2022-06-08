import { RoundLayout } from 'components/RoundLayout'
import { Row, Col, Form, Input, Button, Select, message } from 'antd'
import { useState, useEffect } from 'react'
import { useUser } from 'hooks/user'
import { useGlobalConfig } from 'hooks/config'
import { useRouter } from 'next/router'

import { createBusiness, getBusiness, updateBusiness } from 'service/business'
import Link from 'next/link'

const { useForm } = Form

export const BusinessForm = () => {
  const { globalConfig } = useGlobalConfig()
  const [submitLoading, setSubmitLoading] = useState(false)
  const [businessInfo, setBusinessInfo] = useState({})
  const [form] = useForm()
  const { user } = useUser()
  const router = useRouter()

  const { query } = router
  const { id: businessId = '' } = query || {}

  const { id: userId } = (user as any) || {}

  const { industry: industryOptions = [], userGroup: userGroupOptions = [] } =
    (globalConfig as any) || {}

  const onFormFinish = async (values: any) => {
    setSubmitLoading(true)
    try {
      if (businessId) {
        await updateBusiness(businessId as string, { ...values })
      } else {
        await createBusiness({ user: userId, data: { ...values } })
      }

      const successMessage = businessId
        ? '更新合作资源成功'
        : '发布合作资源成功'
      message.success(successMessage)
      router.push('/business/manage')
    } catch (error) {}
    setSubmitLoading(false)
  }

  const fetchBusinessInfo = async () => {
    if (!businessId) {
      return
    }
    try {
      const res: any = await getBusiness(businessId as string)
      setBusinessInfo(res)
    } catch (error) {
      setBusinessInfo({})
    }
  }

  const {
    title = '',
    industry = '',
    userGroup = '',
    provideResources = '',
    seekResources = '',
  } = (businessInfo as any) || {}
  const initialValues = {
    title,
    industry,
    userGroup,
    provideResources,
    seekResources,
  }

  useEffect(() => {
    fetchBusinessInfo()
  }, [businessId])

  useEffect(() => {
    console.log(businessInfo, initialValues)
    form.resetFields()
  }, [businessInfo])

  // 编辑模式
  const layoutTitle = businessId ? '编辑合作资源' : '创建合作资源'
  const submitBtnText = businessId ? '保存合作资源' : '创建合作资源'

  return (
    <RoundLayout title={layoutTitle}>
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
              name="title"
              label="标题"
              rules={[{ required: true, message: '请输入标题' }]}
            >
              <Input placeholder="请输入标题" />
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
              name="provideResources"
              label="提供资源"
              rules={[{ required: true, message: '请输入提供资源的内容' }]}
            >
              <Input.TextArea rows={4} placeholder="请输入提供的资源详情" />
            </Form.Item>
            <Form.Item
              name="seekResources"
              label="寻求资源"
              rules={[{ required: true, message: '请输入寻求资源的内容' }]}
            >
              <Input.TextArea rows={4} placeholder="请输入寻求的资源详情" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={submitLoading}>
            {submitBtnText}
          </Button>
          <Link
            href={{ pathname: '/business/manage', query: { tab: 'ALL' } }}
            passHref
          >
            <Button className="ml-3">返回</Button>
          </Link>
        </Form.Item>
      </Form>
    </RoundLayout>
  )
}
