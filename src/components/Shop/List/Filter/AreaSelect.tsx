import { BaseSelect } from './BaseSelect'

export const AreaSelect = () => {
  const onAreaChange = (value: string) => {
    console.log('area select: ', value)
  }

  return (
    <>
      <BaseSelect title="面积" type="area" onChange={onAreaChange} />
    </>
  )
}
