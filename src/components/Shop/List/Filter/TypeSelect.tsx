import { BaseSelect } from './BaseSelect'

export const TypeSelect = () => {
  const onTypeChange = (value: string) => {
    console.log('type select: ', value)
  }

  return (
    <>
      <BaseSelect title="类型" type="type" onChange={onTypeChange} />
    </>
  )
}
