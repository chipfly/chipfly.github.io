export interface IBlogItemProps {
  imgUrl: string
  title: string
  description: string
  tags: string[]
  author: string
  createDate: Date
  href: string
}

export const BLOG_LIST: IBlogItemProps[] = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Blog article title1',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.`,
    tags: ['Engineering', 'Product'],
    author: 'Topaz',
    createDate: new Date('2021-04-06T19:01:27Z'),
    href: 'https://www.baidu.com',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Blog article title2',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.`,
    tags: ['Engineering', 'Product'],
    author: 'Topaz',
    createDate: new Date('2021-04-06T19:01:27Z'),
    href: 'https://www.baidu.com',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Blog article title3',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.`,
    tags: ['Engineering', 'Product'],
    author: 'Topaz',
    createDate: new Date('2021-04-06T19:01:27Z'),
    href: 'https://www.baidu.com',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Blog article title4',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.`,
    tags: ['Engineering', 'Product'],
    author: 'Topaz',
    createDate: new Date('2021-04-06T19:01:27Z'),
    href: 'https://www.baidu.com',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Blog article title5',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.`,
    tags: ['Engineering', 'Product'],
    author: 'Topaz',
    createDate: new Date('2021-04-06T19:01:27Z'),
    href: 'https://www.baidu.com',
  },
]
