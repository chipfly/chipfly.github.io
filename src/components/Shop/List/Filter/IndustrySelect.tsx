import { BaseSelect } from './BaseSelect'

export const IndustrySelect = () => {
  const onIndustryChange = (value: string) => {
    console.log('industry select: ', value)
  }

  return (
    <>
      <BaseSelect title="行业" type="industry" onChange={onIndustryChange} />
    </>
  )
}
