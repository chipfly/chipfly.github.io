import { Typography, Col, Row } from 'antd'
import { HotCard } from './Card'

const { Title } = Typography

const dataList = [
  {
    title: '【彩生活】高考（助力梦想决胜未来）活动！提供全国范围',
    industry: '企业服务-品牌公关',
    type: '其他',
  },
  {
    title: '【彩生活】高考（助力梦想决胜未来）活动！提供全国范围',
    industry: '企业服务-品牌公关',
    type: '其他',
  },
  {
    title: '【彩生活】高考（助力梦想决胜未来）活动！提供全国范围',
    industry: '企业服务-品牌公关',
    type: '其他',
  },
  {
    title: '【彩生活】高考（助力梦想决胜未来）活动！提供全国范围',
    industry: '企业服务-品牌公关',
    type: '其他',
  },
  {
    title: '【彩生活】高考（助力梦想决胜未来）活动！提供全国范围',
    industry: '企业服务-品牌公关',
    type: '其他',
  },
  {
    title: '【彩生活】高考（助力梦想决胜未来）活动！提供全国范围',
    industry: '企业服务-品牌公关',
    type: '其他',
  },
]

export const HotResources = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-24 mb-24">
      <Title level={2}>今日热门</Title>
      <Row className="max-w-6xl" gutter={[18, 18]}>
        {dataList.map((item, index) => {
          return (
            <Col key={index} span={8}>
              <HotCard {...item} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
