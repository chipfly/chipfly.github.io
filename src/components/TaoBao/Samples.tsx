const features = [
  {
    name: '自动化脚本',
    description:
      'PC端流程自动化，Excel表格数据定制处理，自动化办公，智能机器模拟，移动端自动化，解放双手，让工具为我们服务。',
    icon: '自',
  },
  {
    name: '逆向爬虫',
    description:
      '网站数据爬取，数据分析处理可视化，文本提取及分析，App/Web端数据采集定制。',
    icon: '逆',
  },
  {
    name: '技术咨询',
    description:
      '前端Vue、React、小程序、iOS、安卓、NodeJS生态，后端Python、数据库，云服务、项目难点、重构思路等，随时随地，远程沟通，一对一服务',
    icon: '技',
  },
  {
    name: '软件开发',
    description:
      'App、小程序、Web网站、前端后端开发，信息化系统对接，提供版权和数据，创造更棒的项目合作体验，更高的项目交付，更全面的服务质量。',
    icon: '软',
  },
]

export const Samples = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            FY网络科技
          </h2>
          <h1 className="text-3xl text-gray-800 font-semibold">
            一站式解决方案提供商
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto text-lg">
            我们可以帮助您无缝地完成数字化转型，从而提高您的经济效益。技术咨询，网站开发，自动化脚本，只需要告诉我们您的想法，我们就会披荆斩棘帮您实现。
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <span
                      className="h-6 w-6 text-center text-xl"
                      aria-hidden="true"
                    >
                      {feature.icon}
                    </span>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
