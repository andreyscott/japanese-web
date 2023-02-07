// import ribbon banner images and icons for public/svgs 
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import Button from '@/components/Footer/Button'


export const CTAF = () => {
    return (
        <>
       {/* first flex direction column justify center align center */}
         <div className='flex flex-col justify-center items-center py-10 md:py-0 w-full'>
{/* 3 icons with text here svg first flex direction column justify center align center md: grid */}
<div className='flex flex-col justify-center md:px-2 items-center w-full'>
                    {/* ribbon banner images and icons for public/svgs */}
                    <div className='w-full justify-center px-3 items-center'>
                        <Image src='/svgs/ribbon-img.svg' 
                        layout='fixed'
                        width={400}
                        height={60}
                        className='my-7 md:hidden  mx-auto'
                         alt='TKO Banner Image' />

<Image src='/svgs/ribbon-img-lg.svg' 
                        layout='fixed'
                        width={700}
                        height={40}
                        className='my-7 hidden md:block  mx-auto'
                         alt='TKO Banner Image' />

                    </div>
                    <div className='md:grid grid-cols-2 gap-0 gap-x-0  md:grid-cols-3  md:mx-2'>
                    <div className='w-full pb-4 px-2 md:flex md:justify-center md:items-center md:w-full md:px-0'> 
                        {/* 3 icons here svg first flex direction column justify center align center md: grid  */}
                        <div className='flex flex-col md:justify-center justify-start md:items-center items-start w-56 '>

                      <div className='flex flex-row justify-between  md:justify-center w-80 md:px-1 lg:px-3 lg:w-[21rem] md:w-64 ml-7 md:ml-0 items-center'>
                                {/* Icon 1 */}
                                <Image src='/svgs/fv-icon1.svg'
                                layout='fixed'
                                width={60}
                                height={60}
                                className='mx-3 md:mx-0'
                                alt='TKO Icon 1' />

                                <div className='flex md:px-1 flex-col  justify-center items-center'>
<p>
    <span className='text-base md:text-sm lg:text-base gap-y-5 md:gap-y-3 font-medium text-white'>入会金の
    <br/>
¥4,980が</span>
</p>
                                </div>
                                    {/* number  */}
                                    <h2 className='text-4xl md:text-3xl xl:text-4xl mr-2 md:mr-0 lg:mr-2 font-medium text-white'>
                                    ¥0
                                    </h2>

                                </div>
                                
                                </div>

        
        </div>
        <div className=' w-full my-1  px-2 md:px-0'>
                        {/* 3 icons here svg first flex direction column justify center align center md: grid  */}
                        <div className='w-full pb-4 px-2  md:px-0 lg:px-2 md:flex md:justify-center md:items-center md:w-fit'>

                      <div className='flex flex-row  justify-between md:justify-start 2xl:justify-center w-80 md:px-1 lg:px-3 lg:w-[21rem] md:w-64  ml-7 md:ml-0 lg:ml-2  items-center'>
                                {/* Icon 1 */}
                                <Image src='/svgs/fv-icon2.svg'
                                layout='fixed'
                                width={60}
                                height={60}
                                className='mx-3 md:mx-0'
                                alt='TKO Icon 1' />

                                <div className='flex flex-col justify-center items-center'>
<p >
    <span className='text-base md:text-sm lg:px-2 xl:px-3 lg:text-base gap-y-5 font-medium text-white'>   初月の
    <br />
利用料が
</span>
</p>
                                </div>
                                    {/* number  */}
                                    <h2 className='text-4xl md:text-3xl xl:text-4xl mr-2 md:mr-0 lg:mr-2 font-medium text-white'>
                                    ¥0
                                    </h2>

                                </div>
                                
                                </div>       
        </div>
        <div className=' w-full pb-4'>
                        {/* 3 icons here svg first flex direction column justify center align center md: grid  */}
                        <div className='flex flex-col md:justify-center justify-start md:items-center items-start w-full md:grid gap-3 '>

                      <div className='flex flex-row justify-between  md:justify-center px-3  w-80 md:px-1 lg:px-3 lg:w-[21rem] md:w-64 ml-7 items-center'>
                                {/* Icon 1 */}
                                <Image src='/svgs/fv-icon3.svg'
                                layout='fixed'
                                width={60}
                                height={60}
                                className='mx-3 md:mx-0'
                                alt='TKO Icon 1' />

                                <div className='flex flex-col justify-center items-center'>
<p>
    <span className='text-base md:text-sm lg:px-1 xl:px-3 lg:text-base gap-y-5 font-medium text-white'>  専用ロッカー
    <br />
月額利用料が
</span>
</p>
                                </div>
                                    {/* number  */}
                                    <h2 className='text-4xl md:text-3xl xl:text-4xl mr-2 md:mr-0 lg:mr-2 font-medium text-white'>
                                    半額
                                    </h2>

                                </div>
                                
                                </div>
                    </div>

        
        </div>

<div className='w-full items-center justify-center flex overflow-hidden pt-4'>

        <Button
        />

        
        </div>


        </div>
        </div>
        </>
    )
}
