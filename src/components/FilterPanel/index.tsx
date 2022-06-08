import { FC, useState, useEffect } from 'react'

import { Select, Space } from 'antd'
import { useGlobalConfig } from 'hooks/config'
import { useRouter } from 'next/router'
import { isEmpty } from 'lodash'

interface IFilterPanelProps {
  filterPropList: any[]
}

const getDefaultIndustry = (industryOptions: any, routerQuery: any) => {
  const { industry } = routerQuery || {}
  if (industry) {
    return industry
  }

  const { value } = industryOptions[0] || {}
  return value
}

const getDefaultUserGroup = (userGroupOptions: any, routerQuery: any) => {
  const { userGroup } = routerQuery || {}
  if (userGroup) {
    return userGroup
  }

  const { value } = userGroupOptions[0] || {}
  return value
}

export const FilterPanel = ({ onFilterChange }: any) => {
  const { globalConfig } = useGlobalConfig()
  const router = useRouter()
  const [filterParams, setFilterParams] = useState<any>({})

  const { query = {} } = router

  const { industry: industryOptions = [], userGroup: userGroupOptions = [] } =
    (globalConfig as any) || {}

  const onIndustrySearch = (industry: string) => {
    console.log(industry)
    setFilterParams({ ...filterParams, industry })
  }

  const onUserGroupSearch = (userGroup: string) => {
    console.log(userGroup)
    setFilterParams({ ...filterParams, userGroup })
  }

  useEffect(() => {
    onFilterChange(filterParams)
  }, [filterParams])

  return (
    <div className="w-full flex justify-end mb-3">
      <Space>
        <Select
          className="w-36"
          allowClear
          defaultValue={filterParams.industry}
          options={industryOptions.filter((item: any) => item.label !== '全部')}
          placeholder="请选择行业"
          onChange={onIndustrySearch}
        />
        <Select
          className="w-36"
          allowClear
          defaultValue={filterParams.userGroup}
          options={userGroupOptions.filter(
            (item: any) => item.label !== '全部',
          )}
          placeholder="请选择用户群体"
          onChange={onUserGroupSearch}
        />
      </Space>
    </div>
  )
}
