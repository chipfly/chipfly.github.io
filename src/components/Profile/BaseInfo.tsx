import { RoundLayout } from 'components/RoundLayout'
import { Row, Col, Form, Input, Button, Radio, DatePicker, message } from 'antd'
import { useState, useEffect } from 'react'
import moment from 'moment'
import { useUser } from 'hooks/user'
import { editUserProfile } from 'service/user'

const { useForm } = Form
const dateFormat = 'YYYY-MM-DD'

export const BaseInfo = ({ profile }: any) => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = useForm()
  const { user } = useUser()
  const { id } = (user as any) || {}

  const onFormFinish = async (values: any) => {
    setSubmitLoading(true)
    try {
      await editUserProfile(id, {
        ...values,
        birthday: values.birthday.format(dateFormat),
      })
      message.success('保存基本信息成功')
    } catch (error) {}
    setSubmitLoading(false)
  }

  const { name = '', gender = '男', birthday = '' } = profile
  const initialValues = {
    name,
    gender,
    birthday: birthday ? moment(birthday, dateFormat) : '',
  }

  useEffect(() => {
    form.resetFields()
  }, [profile])

  return (
    <RoundLayout title="基本信息">
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
              name="name"
              label="姓名"
              rules={[{ required: true, message: '请输入姓名' }]}
            >
              <Input placeholder="请输入您的手机号" />
            </Form.Item>
            <Form.Item
              name="gender"
              label="性别"
              rules={[{ required: true, message: '请选择性别' }]}
              valuePropName="value"
            >
              <Radio.Group>
                <Radio value="男">男士</Radio>
                <Radio value="女">女士</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="birthday" label="出生日期">
              <DatePicker
                className="w-60"
                placeholder="请选择您的出生日期"
                format={dateFormat}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={submitLoading}>
            保存基本信息
          </Button>
        </Form.Item>
      </Form>
    </RoundLayout>
  )
}
