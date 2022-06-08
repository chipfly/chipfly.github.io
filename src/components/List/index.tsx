import { Item } from './Item'
import { searchBusinessList } from 'service/business'
import { useEffect, useState } from 'react'

export const List = ({ filterParams }: any) => {
  const [list, setList] = useState<any>([])

  const fetchBusinessList = async () => {
    try {
      const res: any = await searchBusinessList(filterParams)
      setList(res)
    } catch (error) {}
  }

  useEffect(() => {
    fetchBusinessList()
  }, [filterParams])

  return (
    <div className="w-full">
      {list.map(
        ({
          id,
          logo = '',
          title,
          industryLabel,
          userGroupLabel,
          createAtLabel,
          updatedAtLabel,
        }: any) => {
          return (
            <Item
              key={id}
              logo={logo}
              title={title}
              industry={industryLabel}
              userGroup={userGroupLabel}
              createAt={createAtLabel}
              updateAt={updatedAtLabel}
            />
          )
        },
      )}
    </div>
  )
}
