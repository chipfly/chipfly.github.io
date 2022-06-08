import { RoundLayout } from 'components/RoundLayout'
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Select,
  message,
  Radio,
  InputNumber,
  Checkbox,
} from 'antd'
import { useState, useEffect } from 'react'
import { useUser } from 'hooks/user'
import { useGlobalConfig } from 'hooks/config'
import { useRouter } from 'next/router'

import { createBusiness, getBusiness, updateBusiness } from 'service/business'
import Link from 'next/link'

const { useForm } = Form

const assetsList = [
  '客梯',
  '货梯',
  '中央空调',
  '停车位',
  '天然气',
  '电话/网络',
  '暖气',
  '扶梯',
  '上水',
  '下水',
  '排烟',
  '排污',
  '管煤',
  '380V',
  '可明火',
  '外摆区',
]

const userGroupList = ['办公人群', '学生人群', '居民人群', '旅游人群', '其他']

export const ShopForm = () => {
  const { globalConfig } = useGlobalConfig()
  const [submitLoading, setSubmitLoading] = useState(false)
  const [businessInfo, setBusinessInfo] = useState({})
  const [form] = useForm()
  const { user } = useUser()
  const router = useRouter()

  const { query } = router
  const { id: businessId = '' } = query || {}

  const { id: userId } = (user as any) || {}

  const {
    industry: industryOptions = [],
    location: locationOptions,
    type: typeOptions = [],
  } = (globalConfig as any) || {}

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
  const layoutTitle = businessId ? '编辑商铺合作资源' : '创建商铺合作资源'
  const submitBtnText = businessId ? '保存商铺合作资源' : '创建商铺合作资源'

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
              name="type"
              label="商铺类型"
              rules={[{ required: true, message: '请选择商铺类型' }]}
            >
              <Select options={typeOptions} placeholder="请选择商铺类型" />
            </Form.Item>
            <Form.Item
              name="type"
              label="当前状态"
              rules={[{ required: true, message: '请选择当前状态' }]}
            >
              <Radio.Group>
                <Radio value="manage">经营中</Radio>
                <Radio value="vacancy">空置中</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="industry"
              label="经营行业"
              rules={[{ required: true, message: '请选择经营行业' }]}
            >
              <Select options={industryOptions} placeholder="请选择经营行业" />
            </Form.Item>
            <Form.Item
              name="area"
              label="建筑面积"
              rules={[{ required: true, message: '请输入建筑面积' }]}
            >
              <InputNumber addonAfter="㎡" />
            </Form.Item>
            <Form.Item
              name="is_frontage"
              label="是否临街"
              rules={[{ required: true, message: '请选择是否临街' }]}
            >
              <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="0">否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="location"
              label="商铺位置"
              rules={[{ required: true, message: '请选择商铺位置' }]}
            >
              <Select options={locationOptions} placeholder="请选择商铺位置" />
            </Form.Item>
            <Form.Item
              name="location_detail"
              label="商铺具体位置"
              rules={[{ required: true, message: '请输入商铺具体位置' }]}
            >
              <Input placeholder="请输入商铺具体位置" />
            </Form.Item>
            <Form.Item
              name="assets"
              label="商铺配套"
              rules={[{ required: true, message: '请选择商铺配套' }]}
            >
              <Checkbox.Group>
                <Row>
                  {assetsList.map((value: string) => {
                    return (
                      <Col span={6} key={value}>
                        <Checkbox value={value}>{value}</Checkbox>
                      </Col>
                    )
                  })}
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              name="userGroup"
              label="客流人群"
              rules={[{ required: true, message: '请选择客流人群' }]}
            >
              <Checkbox.Group>
                {userGroupList.map((value: string) => {
                  return (
                    <Checkbox key={value} value={value}>
                      {value}
                    </Checkbox>
                  )
                })}
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              name="rent"
              label="租金"
              rules={[{ required: true, message: '请输入租金' }]}
            >
              <InputNumber addonAfter="元/月" />
            </Form.Item>
            <Form.Item
              name="payment_mode"
              label="支付方式"
              rules={[{ required: true, message: '请输入支付方式' }]}
            >
              <Input placeholder="请输入支付方式" />
            </Form.Item>
            <Form.Item
              name="total_tenancy_term"
              label="起租期"
              rules={[{ required: true, message: '请输入起租期' }]}
            >
              <InputNumber addonAfter="月" />
            </Form.Item>
            <Form.Item
              name="free_tenancy_term"
              label="免租期"
              rules={[{ required: true, message: '请输入免租期' }]}
            >
              <InputNumber addonAfter="月" />
            </Form.Item>
            <Form.Item
              name="property_fee"
              label="物业费"
              rules={[{ required: true, message: '请输入物业费' }]}
            >
              <InputNumber addonAfter="元/㎡/月" />
            </Form.Item>
            <Form.Item
              name="electric_fee"
              label="电费"
              rules={[{ required: true, message: '请输入电费' }]}
            >
              <InputNumber addonAfter="元/度" />
            </Form.Item>
            <Form.Item
              name="water_fee"
              label="水费"
              rules={[{ required: true, message: '请输入水费' }]}
            >
              <InputNumber addonAfter="元/吨" />
            </Form.Item>
            <Form.Item
              name="title"
              label="标题"
              rules={[{ required: true, message: '请输入标题' }]}
            >
              <Input placeholder="请输入标题" />
            </Form.Item>
            <Form.Item
              name="description"
              label="描述"
              rules={[{ required: true, message: '请输入描述' }]}
            >
              <Input.TextArea rows={4} placeholder="请输入描述" />
            </Form.Item>
            <Form.Item
              name="image_list"
              label="商铺图片"
              rules={[{ required: true, message: '请输入商铺图片，换行分割' }]}
            >
              <Input.TextArea rows={4} placeholder="请输入商铺图片，换行分割" />
            </Form.Item>
            <Form.Item
              name="contact_person"
              label="联系人"
              rules={[{ required: true, message: '请输入联系人' }]}
            >
              <Input placeholder="请输入联系人" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="联系电话"
              rules={[{ required: true, message: '请输入联系电话' }]}
            >
              <Input placeholder="请输入联系电话" />
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
