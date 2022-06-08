import Head from 'next/head'

export const SEO = ({
  description = '来杏客,找合作,找资源',
  keywords = 'BD,异业合作,跨界营销,异业联盟,市场合作,商务拓展,联合营销平台,找客户,必得我客,BD交流,杏客',
  title = '杏客',
}) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
    </Head>
  )
}
