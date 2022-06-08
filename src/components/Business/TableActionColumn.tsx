import { BusinessStatus } from 'data/business'
import { Button } from 'antd'

const onEditBusiness = async (record: any) => {
  const { id } = record
  window.open(`/business?id=${id}`, '_blank')
}

export const TableActionColumn = ({ record }: any) => {
  const { businessStatus } = record

  if (businessStatus === BusinessStatus.APPROVED) {
    return (
      <>
        <Button
          type="link"
          onClick={() => {
            onEditBusiness(record)
          }}
        >
          编辑
        </Button>
        <Button type="link">下线</Button>
      </>
    )
  }
  if (businessStatus === BusinessStatus.PENDING) {
    return (
      <>
        <Button
          type="link"
          onClick={() => {
            onEditBusiness(record)
          }}
        >
          编辑
        </Button>
        <Button type="link">下线</Button>
      </>
    )
  }

  if (businessStatus === BusinessStatus.REJECTED) {
    return (
      <>
        <Button
          type="link"
          onClick={() => {
            onEditBusiness(record)
          }}
        >
          编辑上线
        </Button>
      </>
    )
  }

  if (businessStatus === BusinessStatus.DELETED) {
    return (
      <>
        <Button
          type="link"
          onClick={() => {
            onEditBusiness(record)
          }}
        >
          编辑上线
        </Button>
      </>
    )
  }

  return <> </>
}
