import { GET, POST } from './core/request'
import { getGlobalConfig } from './config'
import moment from 'moment'
import { BUSINESS_STATUS_LIST } from 'data/business'

const getIndustryLabel = async (industryCode: string) => {
  const globalConfig = await getGlobalConfig()
  const { industry = [] } = globalConfig || {}
  const { label = '' } =
    industry.find((item: any) => item.value === industryCode) || {}
  return label
}

const getUserGroupLabel = async (userGroupCode: string) => {
  const globalConfig = await getGlobalConfig()
  const { userGroup = [] } = globalConfig || {}
  const { label = '' } =
    userGroup.find((item: any) => item.value === userGroupCode) || {}
  return label
}

const getTime = (time: string) => {
  return moment(time).format('YYYY-MM-DD HH:mm:ss')
}

const getBusinessStatusLabel = (status: string) => {
  const { label = '' } =
    BUSINESS_STATUS_LIST.find((item: any) => item.key === status) || {}
  return label
}

const transformBusiness = async (business: any) => {
  const {
    id,
    title,
    industry,
    userGroup,
    provideResources,
    seekResources,
    updatedAt,
    createAt,
    businessStatus,
  } = business

  const industryLabel = await getIndustryLabel(industry)
  const userGroupLabel = await getUserGroupLabel(userGroup)
  const businessStatusLabel = getBusinessStatusLabel(businessStatus)

  return {
    key: id,
    id,
    title,
    industry,
    userGroup,
    provideResources,
    seekResources,
    updatedAt,
    businessStatus,
    industryLabel,
    userGroupLabel,
    businessStatusLabel,
    createAtLabel: getTime(createAt),
    updatedAtLabel: getTime(updatedAt),
  }
}

const transformBusinessList = async (list: any[]) => {
  const res: any[] = []
  for (let i = 0; i < list.length; i++) {
    const businessInfo = await transformBusiness(list[i])
    res.push(businessInfo)
  }
  console.log(res)
  return res
}

export const getBusiness = async (id: string) => {
  const res = await GET(`/business/${id}`, {})
  return await transformBusiness(res)
}

export const getBusinessList = async (params: any) => {
  const list: any = await POST(`/business/list`, params)
  return await transformBusinessList(list)
}

export const createBusiness = async (params: any) => {
  return await POST('/business/create', params)
}

export const updateBusiness = async (id: string, params: any) => {
  return await POST(`/business/${id}/update`, params)
}

export const searchBusinessList = async (params: any) => {
  const list: any = await POST('/business/search', params)
  return await transformBusinessList(list)
}
