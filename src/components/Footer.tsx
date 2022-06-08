import { Row, Col, Button, Typography } from 'antd'

const { Title } = Typography
export const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-16">
      <Row className="w-2/3" gutter={[16, 16]}>
        <Col span={6}>
          <div className="flex flex-col items-center">
            <Title level={4}>热门链接</Title>
            <p className=" hover:text-primary cursor-pointer mb-2">功能概览</p>
            <p className=" hover:text-primary cursor-pointer mb-2">客户案例</p>
            <p className=" hover:text-primary cursor-pointer mb-2">增值服务</p>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex  flex-col items-center">
            <Title level={4}>解决方案</Title>
            <p className=" hover:text-primary cursor-pointer mb-2">互联网</p>
            <p className=" hover:text-primary cursor-pointer mb-2">电子芯片</p>
            <p className=" hover:text-primary cursor-pointer mb-2">人力资源</p>
            <p className=" hover:text-primary cursor-pointer mb-2">自媒体</p>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex  flex-col items-center">
            <Title level={4}>帮助和支持</Title>
            <p className=" hover:text-primary cursor-pointer mb-2">帮助中心</p>
            <p className=" hover:text-primary cursor-pointer mb-2">合作伙伴</p>
            <p className=" hover:text-primary cursor-pointer mb-2">联系我们</p>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex  flex-col items-center">
            <Title level={4}>探索杏客</Title>
            <p className=" hover:text-primary cursor-pointer mb-2">关于我们</p>
            <p className=" hover:text-primary cursor-pointer mb-2">服务协议</p>
            <p className=" hover:text-primary cursor-pointer mb-2">隐私政策</p>
          </div>
        </Col>
      </Row>
      <div className="flex mt-16">
        <p>Copyright © 2018 - 2022 杏客科技（深圳）有限公司 版权所有</p>
      </div>
    </div>
  )
}
