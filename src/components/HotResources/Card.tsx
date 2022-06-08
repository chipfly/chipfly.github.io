import { Typography, Card } from 'antd'

const { Title, Link, Text } = Typography

export const HotCard = ({ title, industry, type }: any) => {
  return (
    <Card hoverable>
      <div className="flex flex-col">
        <Title level={3}>{title}</Title>
        <Text className="mt-2">
          <Text type="secondary">所属行业：</Text>
          {industry}
        </Text>
        <Text className="mt-2">
          <Text type="secondary">活动类型：</Text>
          {type}
        </Text>
        <Link className="mt-2">点击进入</Link>
      </div>
    </Card>
  )
}
