import { Tabs, Table, Button } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getBusinessList } from 'service/business'
import { useUser } from 'hooks/user'
import { debounce } from 'lodash'

import { BUSINESS_STATUS_LIST } from 'data/business'
import { TableActionColumn } from './TableActionColumn'

const { TabPane } = Tabs

const tableColumns = [
  {
    title: '资源标题 ',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '行业分类',
    dataIndex: 'industryLabel',
    key: 'industryLabel',
  },
  {
    title: '用户群体',
    dataIndex: 'userGroupLabel',
    key: 'userGroupLabel',
  },
  {
    title: '状态',
    dataIndex: 'businessStatusLabel',
    key: 'businessStatusLabel',
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAtLabel',
    key: 'updatedAtLabel',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: (text: any, record: any) => <TableActionColumn record={record} />,
  },
]

export const BusinessTable = () => {
  const router = useRouter()
  const { user } = useUser()
  const [tableData, setTableData] = useState([])

  const { query } = router
  const { tab = 'ALL' } = query || {}

  const defaultActiveKey = tab as string
  const { id: userId } = (user as any) || {}

  const fetchBusinessList = async () => {
    if (!tab || !userId) {
      return
    }
    try {
      const res = await getBusinessList({ user: userId, status: tab })
      setTableData(res as any)
    } catch (error) {}
  }
  const onTabChange = (key: string) => {
    router.push({
      pathname: '/business/manage',
      query: { tab: key },
    })
  }

  useEffect(() => {
    debounce(fetchBusinessList, 200)()
  }, [userId, tab])

  return (
    <div className="p-5 mb-5 bg-white rounded">
      <div className="flex items-center justify-between">
        <Tabs defaultActiveKey={defaultActiveKey} onChange={onTabChange}>
          {BUSINESS_STATUS_LIST.map(({ key, label }) => {
            return <TabPane tab={label} key={key} />
          })}
        </Tabs>
      </div>
      <Table columns={tableColumns} dataSource={tableData} />
    </div>
  )
}
