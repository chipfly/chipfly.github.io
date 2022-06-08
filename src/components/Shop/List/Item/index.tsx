import { FC } from 'react'
import { Card, Tag, Row, Col } from 'antd'

import { Logo } from './Logo'
import { TextItem } from './TextItem'

interface IBDSimpleProps {
  logo: string
  title: string
  industry: string
  userGroup: string
  createAt: string
  updateAt: string
}

export const Item: FC<IBDSimpleProps> = ({
  logo,
  title,
  industry,
  userGroup,
  createAt,
  updateAt,
}: IBDSimpleProps) => {
  return (
    <Card hoverable style={{ marginBottom: 20 }}>
      <div className="flex">
        <div className="mt-6">
          <Logo logo={logo} />
        </div>
        <div className="flex flex-col ml-4 flex-1">
          <p className="font-bold text-base">{title}</p>
          <Row className="mt-6">
            <Col span={12}>
              <TextItem label="行业分类:" text={industry} />
            </Col>
            <Col span={12}>
              <TextItem label="用户群体:" text={userGroup} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <TextItem label="创建时间:" text={createAt} />
            </Col>
            <Col span={12}>
              <TextItem label="上次更新时间:" text={updateAt} />
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  )
}
