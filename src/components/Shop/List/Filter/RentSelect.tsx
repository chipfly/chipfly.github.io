import { BaseSelect } from './BaseSelect'

export const RentSelect = () => {
  const onRentChange = (value: string) => {
    console.log('rent select: ', value)
  }

  return (
    <>
      <BaseSelect title="租金" type="rent" onChange={onRentChange} />
    </>
  )
}
