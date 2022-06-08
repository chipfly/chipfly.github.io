import Image from 'next/image'
import { Button } from 'antd'
import Link from 'next/link'

export const Guide = () => {
  return (
    <div className="w-full flex items-center justify-center pt-20">
      <div className="flex items-center flex-col mt-12 mr-32">
        <Button
          style={{ width: 140, height: 52 }}
          className="mb-4"
          type="primary"
          size="large"
        >
          <Link href="/resources">立即体验</Link>
        </Button>
        <Button
          style={{ width: 140, height: 52 }}
          className="absolute"
          size="large"
        >
          <Link href="/business/edit">发布合作信息</Link>
        </Button>
      </div>
      <Image
        src="/undraw_real_time_analytics_re_yliv.svg"
        width={800}
        height={620}
        alt="undraw_real_time_analytics_re_yliv"
      />
    </div>
  )
}
