import { Typography, Button } from 'antd'

const { Title, Text } = Typography

export const Cooperation = () => {
  return (
    <div className="w-full h-80 bg-primary flex flex-col items-center justify-center">
      <Title style={{ color: 'white' }} level={1}>
        先进团队 共创未来
      </Title>
      <Text style={{ color: 'white', fontSize: 16 }}>
        已累计完成78921277次合作
      </Text>
      <div className="flex items-center mt-6">
        <Button
          style={{ backgroundColor: 'white', width: 154, height: 52 }}
          className="mr-4"
          type="link"
          size="large"
        >
          免费入驻
        </Button>
        <Button
          style={{ borderColor: 'white', width: 154, height: 52 }}
          type="primary"
          size="large"
        >
          联系我们
        </Button>
      </div>
    </div>
  )
}
