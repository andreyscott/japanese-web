import React, {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Inter } from '@next/font/google'


import Button from '@/components/Button'
import { CTA } from '@/components/CTA'
import VoiceSection from '@/components/VoiceSection'
import Grid from '@/components/Grid'
import Faq from '@/components/Faq'
import { FaqSection } from '@/components/FaqSection'
import Footer from '@/components/Footer'
import { FadeInWhenVisible } from '@/components/FadeInWhenVisible'
import Link from 'next/link'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
// You can also use <link> for styles
// ..


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: false,
    });
  }, []);
  return (
    <div className=' snap-y snap-mandatory overflow-hidden'>
      <Head>
        <title>TKO Personal Trainer</title>
        <meta name="description" 
        content="TKO Personal Trainer は、フィットネスの目標を達成するのに役立つパーソナライズされたトレーニング プランを提供する包括的なフィットネス プラットフォームです。経験豊富で認定を受けたトレーナーが最先端のテクノロジーを使用して、お客様の特定のニーズや好みに合わせたカスタム ワークアウト プログラムを作成します。体型を維持したい初心者でも、パフォーマンスを次のレベルに引き上げたいベテラン アスリートでも、TKO には、目標を達成するのに役立つツールと専門知識があります。今日参加して、TKO パーソナル トレーナーと一緒にフィットネスの旅を次のレベルに引き上げましょう。"         />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main className=' w-full  md:w-screen block overflow-hidden'>
       
      <section id="hero" className="snap-start">
        <div className='flex justify-center items-center bg-lblack w-full h-screen'>
      
          <div className='max-w-6xl'>
            {/* create a red div in the shape of a triangle and position it on the bottom left */}
            <div className='absolute bottom-0 left-5 md:left-10'>
              
              <div 
                   className='bottom-tri animate-blob'>
              </div>

                     {/* className='bg-red-500 w-0 h-0 border-b-[100px] border-b-red-500 border-solid-b'      */}
              {/* className='bg-red-500 w-0 h-0 border-b-[100px] border-b-red-500 border-solid-b  '></div> */}
            </div>

            <div className='absolute animate-blob2 top-7 right-6 md:right-12'>
              <div className='top-tri' >
              </div>
            </div>

            {/* create a nav menu with 3 text as logo align to the left and no links  */}

<div className=' w-full h-full'>
  <div     className='m-0 lg:hidden z-20' >

            <Image src='/images/bg-small.png' 
            layout='fill'
            objectPosition='center'
             objectFit='cover' 
             alt={'background Image gym'} />
  </div>


              <Image src='/images/bg.png' 
            className='hidden lg:flex m-0  z-20'
            layout='fill'
            objectPosition='center'
             objectFit='cover' alt={'background Image gym'} />
             </div>
               <nav
               className='flex flex-col text-start justify-self-start justify-start md:left-10 left-5 absolute w-40 top-5 items-start z-50'>
              <div className='pt-2 pl-2 z-40' >
              <Image src='/svgs/TKO.svg'
              width={80}
              height={60}
              alt={'logo'} />
              </div>
    
               
            </nav>

    <FadeInWhenVisible>
      
            <div className='hidden absolute bottom-0 right-0 md:flex flex-col items-end justify-center z-40'>
                  <CTA />
    </div>

    </FadeInWhenVisible>

            {/* bottom content with a div amnd 3 divs inside it all flex -column  */}
               
               <motion.div
               initial={{ x: 500, opacity: 0, scale: 0.5 }}
               animate={{ x: 0, opacity: 1, scale: 1 }}
               transition={{ duration: 1.5 }}
            className='absolute  md:bottom-64 lg:top-44 xl:bottom-44 md:right-3 lg:right-28 xl:right-40 right-[0%]  w-full flex flex-col justify-center items-start md:items-end z-50 text-center'>
    <div className='flex flex-col mb-20 lg:mb-10 font-black items-start'>
              <div className='w-fit bg-white h-fit md:text-4xl text-2xl m-3 font-bold md:font-extrabold paral'>
                <h1 className='text-black px-2 md:font-extrabold'>今度こそ理想の身体に。</h1>
                </div>
                <div className='bg-white w-fit h-fit m-2 md:text-4xl text-xl font-bold paral'>
                <h1 className='text-black px-1 md:font-extrabold'>
                あなただけのダイエットプランで
                </h1>
                </div>
                <div className='bg-white w- w-fit h-fit m-2 text-2xl md:text-4xl font-bold paral'>
                <h1 className='text-black font px-2 md:font-extrabold'>
                 <span
                 className='text-primaryRed'>
                  続けられる
                  </span>
                  フィットネス。
                  </h1>


                </div>
                <Link  href="#footer">
                <div className='mt-16 md:hidden pl-1 flex items-center justify-center mx-auto'>
                  <Button />
</div>
</Link>

                </div>

         
    
    </motion.div>

          </div>
        </div>
        <div className='flex md:hidden flex-col items-end justify-center'>
                  <CTA />
    </div>
    </section>

    </main>

    <section id='details' className=' snap-center flex flex-col items-center z-50 justify-center'>
      <VoiceSection />

      </section>

      <section id="grid" className="snap-start">
      <FadeInWhenVisible>
      <Grid />

      </FadeInWhenVisible>
</section>
      <section id='faq' className='snap-start'>
      <FaqSection />
      </section>

      <section id='footer' className=' bg-tblack'>
      <Footer />
      </section>


      {/* </main> */}
    
    </div>
  )
}
