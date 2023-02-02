import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import { CTA } from '@/components/CTA'
import VoiceSection from '@/components/VoiceSection'
import Grid from '@/components/Grid'
import Faq from '@/components/Faq'
import { FaqSection } from '@/components/FaqSection'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main className=' w-full md:w-screen block overflow-hidden'>
        {/* create a div justify and align center with a max w-6xl and in the div a background Image should be in it 
         */}
        <div className='flex justify-center items-center bg-lblack w-full h-screen'>
      
          <div className='max-w-6xl'>
            {/* create a red div in the shape of a triangle and position it on the bottom left */}
            <div className='absolute bottom-0 left-5 md:left-10'>
              
              <div 
                   className='bottom-tri'>
              </div>

                     {/* className='bg-red-500 w-0 h-0 border-b-[100px] border-b-red-500 border-solid-b'      */}
              {/* className='bg-red-500 w-0 h-0 border-b-[100px] border-b-red-500 border-solid-b  '></div> */}
            </div>

            <div className='absolute top-0 right-3 md:right-5'>
              <div className='top-tri' >
              </div>
            </div>

            {/* create a nav menu with 3 text as logo align to the left and no links  */}
           



<div className=' w-full h-full'>
            <Image src='/images/bg-small.png' 
            className='m-0 lg:hidden z-20'
            layout='fill'
            objectPosition='center'

            
             objectFit='cover' alt={'background Image gym'} />
              <Image src='/images/bg.png' 
            className='hidden lg:flex m-0  z-20'
            layout='fill'
            objectPosition='center'
             objectFit='cover' alt={'background Image gym'} />
             </div>
               <nav
               className='flex flex-col text-start justify-self-start justify-start md:left-10 left-5 absolute w-40 top-5 items-start z-50'>
              <div className='pt-2 pl-2'>
              <Image src='/svgs/TKO.svg'
              width={80}
              height={60}
              alt={'logo'} />

              </div>
    
               
            </nav>

            <div className='hidden absolute bottom-0 right-0 md:flex flex-col items-end justify-center z-40'>
                  <CTA />
    </div>

            {/* bottom content with a div amnd 3 divs inside it all flex -column  */}
            <div className='absolute bottom-14 md:bottom-72 md:right-3 right-[0%]  w-full flex flex-col justify-center items-start md:items-end z-50 text-center'>
    <div className='flex flex-col font-black items-start'>

              <div className='w-fit bg-white h-fit md:text-4xl text-2xl m-3 font-bold paral'>
                <h1 className='text-black px-2'>今度こそ理想の身体に。</h1>
                </div>
                <div className='bg-white w-fit h-fit m-2 md:text-4xl text-xl font-bold paral'>
                <h1 className='text-black px-1 f'>
                あなただけのダイエットプランで
                </h1>
                </div>
                <div className='bg-white w- w-fit h-fit m-2 text-2xl md:text-4xl font-bold paral'>
                <h1 className='text-black font px-2'>
                 <span
                 className='text-primaryRed'>
                  続けられる
                  </span>
                  フィットネス。
                  </h1>


                </div>
                <div className='mt-20 md:hidden pl-5 flex items-center justify-center mx-auto'>
                  <Button />
</div>
                </div>

         
    </div>

          </div>
        </div>
        <div className='flex md:hidden flex-col items-end justify-center'>
                  <CTA />
    </div>

    <section className='flex flex-col items-center z-50 justify-center'>
      <VoiceSection />

      </section>

      <>
      <Grid />
      </>

      <>
      <FaqSection />
      </>

      <>
      <Footer />
      </>


      </main>
    
    </>
  )
}