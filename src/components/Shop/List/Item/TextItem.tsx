import { FC } from 'react'

interface ITextItemProps {
  label: string
  text: string
}

export const TextItem: FC<ITextItemProps> = ({
  label,
  text,
}: ITextItemProps) => {
  return (
    <p className="flex items-center text-xs">
      <span className="mr-2 text-gray-400">{label}</span>
      {text}
    </p>
  )
}
