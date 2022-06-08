import { BaseSelect } from './BaseSelect'

export const SourceSelect = () => {
  const onSourceChange = (value: string) => {
    console.log('source select: ', value)
  }

  return (
    <>
      <BaseSelect title="来源" type="source" onChange={onSourceChange} />
    </>
  )
}
