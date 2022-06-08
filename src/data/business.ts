export enum BusinessStatus {
  // 全部
  All = 'ALL',
  // 待审核
  PENDING = 'PENDING',
  // 审核通过
  APPROVED = 'APPROVED',
  // 审核不通过
  REJECTED = 'REJECTED',
  // 已删除
  DELETED = 'DELETED',
}

export const BUSINESS_STATUS_LIST = [
  {
    key: BusinessStatus.All,
    label: '全部',
  },
  {
    key: BusinessStatus.APPROVED,
    label: '已发布',
  },
  {
    key: BusinessStatus.PENDING,
    label: '待审核',
  },
  {
    key: BusinessStatus.REJECTED,
    label: '未通过',
  },
  {
    key: BusinessStatus.DELETED,
    label: '已下线',
  },
]
