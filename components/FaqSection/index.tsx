import { ReactNode } from 'react'
import { FadeInWhenVisible } from '../FadeInWhenVisible'
import { FaqPanel } from './FaqPanel/index'

interface FaqSectionProps {
  children?: ReactNode
}

const FAQS = [
  {
    id: 1,
    title: '質問文テキストテキストテキストテキストテキストテキスト',
    content:
      '回答文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    id: 2,
    title: '質問文テキストテキストテキストテキストテキストテキスト',
    content:
      '',
      },
  {
    id: 3,
    title: '質問文テキストテキストテキストテキストテキストテキスト',
    content:
      "",
  },
  {
    id: 4,
    title:
      '質問文テキストテキストテキストテキストテキストテキスト',
    content:
      ' ',
  },
  
]

export const FaqSection: React.FC<FaqSectionProps> = () => {
  return (
    <section id="faq" className=" mt-8 py-32 bg-white text-tblack">
      <div className=" text-tblack">
        <div className="flex flex-col items-center justify-center">
        <div className='flex w-full px-4 flex-col mb-9 text-end justify-center items-center'>
            <h2
            className=' font-bold text-4xl pb-1 '>
          よくある質問

            </h2>
            <div className='font-bold flex justify-center items-center text-xl md:text-2xl leading-9'>
                {/* create a 2px solid straight line with a color of tblack  */}
                <p className="border-b-[1px] border-tblack w-16  mr-2 p-0"></p>
                <span className="m-0 p-0 font-medium text-sm">
               step
                </span>

            </div>
            </div>         
          </div>
      </div>

      <div className="max-w-5xl pb-5 mx-auto text-tblack">
        <FadeInWhenVisible>
          {FAQS.map((faq, index) => {
            return (
              <FaqPanel
                index={index}
                title={faq.title}
                content={faq.content}
                key={faq.id}
              />
            )
          })}
        </FadeInWhenVisible>
      </div>
    </section>
  )
}