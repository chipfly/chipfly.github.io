import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { FilterPanel } from 'components/FilterPanel'
import { List } from 'components/List'
import { ContentLayout } from 'components/ContentLayout'

const Resources: NextPage = () => {
  const [filterParams, setFilterParams] = useState<any>({})

  const onFilterChange = (filterParams: any) => {
    setFilterParams(filterParams)
  }

  return (
    <>
      <SEO title="杏客 - 资源中心" />
      <ContentLayout>
        <FilterPanel onFilterChange={onFilterChange} />
        <List filterParams={filterParams} />
      </ContentLayout>
    </>
  )
}

export default Resources
