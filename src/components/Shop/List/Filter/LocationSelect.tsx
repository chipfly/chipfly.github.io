import { BaseSelect } from './BaseSelect'

export const LocationSelect = () => {
  const onLocationChange = (value: string) => {
    console.log('location select: ', value)
  }

  return (
    <>
      <BaseSelect title="位置" type="location" onChange={onLocationChange} />
    </>
  )
}
