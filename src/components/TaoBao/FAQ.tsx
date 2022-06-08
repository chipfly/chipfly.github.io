import { useRef, useState } from 'react'

const FaqsCard = (props: any) => {
  const answerElRef: any = useRef()
  const [state, setState] = useState(false)
  const [answerH, setAnswerH] = useState('0px')
  const { faqsList, idx } = props

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight
    setState(!state)
    setAnswerH(`${answerElH + 20}px`)
  }

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  )
}

const faqsList = [
  {
    q: '产品如何购买呢?',
    a: '请添加我们的联系方式，给我们留言，我们会尽快联系您。',
  },
  {
    q: '软件是否可以提供源码形式?',
    a: '在不涉及到技术隐私的情况下，我们可以提供源码，但需要支付一定的费用。',
  },
  {
    q: '是否接受定制化开发呢？',
    a: '所有软件都接受定制话开发，若有额外需求，比如第三方平台推送等，请联系我们。',
  },
]

export const FAQ = () => {
  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">常见问题</h1>
        <p className="text-gray-500 max-w-lg mx-auto text-lg">
          这里列举了一些高频问题，如果还有其他问题，请联系我们。
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={item.q} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  )
}
