import { Tag } from 'antd'
import { useState, useEffect, useMemo } from 'react'
import { useGlobalConfig } from 'hooks/config'

const { CheckableTag } = Tag

export const BaseSelect = ({ title, type, onChange }: any) => {
  const { globalConfig = {} } = useGlobalConfig()

  const [selectTag, setSelectTag] = useState<string>('')

  const onTagsCheckedChanged = ({ label, value }: any, checked: boolean) => {
    console.log('You are interested in: ', label, checked)
    setSelectTag(value)
    onChange(value)
  }

  const list = useMemo(() => {
    return ((globalConfig || {}) as any)[type] || []
  }, [globalConfig, type])

  useEffect(() => {
    if (list.length > 0) {
      const { value = '' } = list[0]
      setSelectTag(value)
    }
  }, [list])

  return (
    <div className="flex items-start mb-4">
      <p className="font-bold mr-2">{title}:</p>
      <div className="flex-1">
        {list.map(({ label, value }: any) => {
          return (
            <CheckableTag
              key={value}
              checked={selectTag === value}
              onChange={(checked) =>
                onTagsCheckedChanged({ label, value }, checked)
              }
              style={{ fontSize: 14, marginBottom: 4 }}
            >
              {label}
            </CheckableTag>
          )
        })}
      </div>
    </div>
  )
}
