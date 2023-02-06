import Image from "next/image";

import { FadeInWhenVisible } from '@/components/FadeInWhenVisible'

const VoiceSection = () => {
    return (
        <div className=' px-2 py-10 w-full flex relative -z-20 bg-tblack flex-col justify-center items-center'>
         
         {/* create a backgroung Image for the page with z-index of 0  */}
          <div className="absolute top-0 left-0  w-full h-full z-0">
          <Image
          src="/images/background.png"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          />
          </div>
          <div className='absolute  animate z-0  bottom-32 lg:bottom-16 xl:bottom-32 left-0'>
              
              <div 
                   className='bottom-tri-v '>
              </div>

            </div>

            <div className='absolute hidden md:block -z-10 top-8 left-0 md:right-5'>
              <div className='top-tri-v' >
              </div>
            </div>

            {/* create a box with width 43px and height 124px with a text col and an arrow pointing downwards  */}
            <div className='absolute hidden md:block top-3 lg:top-2 right-0 md:right-0 z-10'>
              <div className='flex col w-20 px-3 h-52 md:h-56 pb-2 bg-primaryRed text-white hover:bg-white hover:text-primaryRed transition-all duration-700 ease-in-out flex-col justify-center items-center'>
              {/* 体験入会する */}
              <div className="h-full flex flex-col justify-center items-center">

              <p className='text-base md:text-sm md:w-6 mb-2 lg:text-lg h-fit text-center w-7 font-bold'>体験入会する</p>
        
        <Image src='/svgs/arrow-d.svg' width={8} height={8} alt={'arrow'} />  

 

        

              </div>
          
              </div>
            </div>


            <div className="w-full flex justify-center items-center z-10 text-center pb-5">
               <div className='flex flex-col w-96 md:w-[29rem] py-4  text-tblack justify-center items-center'>
            <div className=' font-bold text-2xl py-10 mt-5 md:text-3xl leading-9 '>
           <span className="pb-8 md:py-4">
            TKO PERSONAL TRAININGは 
           </span>

            <br />
           <span className="py-4 mt-4">
           パーソナルコーチによる 個別トレーニング・栄養指導で
           </span>
          </div>
         <h6 className='font-bold text-2xl md:text-3xl leading-9 py-3'>
          <span className=" border-b-4 border-primaryRed m-0 p-0 font-extrabold">
            ご利用者満足度<span className="text-5xl">96</span>％を
            </span>
            
            達成いたしました!!
            </h6>
</div>
</div>
<div>
<div className='flex flex-col h-32 w-96 text-tblack justify-center items-center'>
           <div className='flex w-full flex-col mb-9 z-10 text-start justify-start items-start'>
            <h2
            className=' font-bold text-4xl pb-1 '>
            ご利用者様の声
            </h2>
            <div className='font-bold flex justify-center items-center text-xl md:text-2xl leading-9'>
                <p className="border-b-2 border-tblack w-16  mr-2 p-0"></p>
                <span className="m-0 p-0 font-medium text-sm">
               voice
                </span>

            </div>
            </div>
</div>
<FadeInWhenVisible>
<div className=" w-full md:max-w-5xl md:grid pb-5 mx-auto z-10 grid-cols-1 md:grid-cols-2  gap-4 gap-y-20 md:gap-y-0 flex flex-col justify-center items-center text-center px-2 py-14">
            <div className='flex flex-col justify-start px-3 bg-white drop-shadow-2xl shadow-xl border-b-2 border-r-2 border-tblack shadow-tblack  w-[21rem] md:w-[w-26rem] lg:w-[470px] h-[31rem] md:h-96 items-center'>
                  <div className='flex flex-col md:flex-row pb-3  pt-1 w-full '>
                  <div className="-mt-12">
                    <Image
                    src="/images/women-icon-1.png"
                    alt="Picture of women in a gym"
                    width={161}
                    height={210}
                    />
                  </div>

        
                    <p className="h-full w-full text-start mt-3 md:mt-0 ml-3">
                    <span className=" font-bold text-xl md:text-3xl mb-4 pb-2  leading-9 ">
                    before68kg
                    </span>
                    <br />
                    <span className=" font-bold text-5xl pt-1 leading-9 ">
                    after<span className="text-primaryRed m-0 p-0 text-6xl">48</span>kg
                    </span>
        
                    </p>
                    </div>


                    <div className=" flex flex-col  pt-2 ">
                        {/* the paragraph section  */}
                        <p className="text-start text-base leading-6 text-tblack tracking-tighter">
                        ダミーテキスト：ジムに通うのは初めてだったので最初は不安でしたが、スタッフのみなさんが明るく接してくれたのでとても安心できました。
         
         <br />
         いまではお友達もでき、同じ目標に向かって一緒に頑張っています。(100文字程度）
                        </p>
        
                        <p className="text-end pb-4 pt-2 font-medium text-base leading-6 text-tblack tracking-tighter">
                        20代　女性　OL
                        </p>
                        
                    </div>
        
                    </div>
            <div className='flex flex-col justify-start px-3 bg-white drop-shadow-2xl shadow-xl border-b-2 border-r-2 border-tblack shadow-tblack  w-[21rem] md:w-[w-26rem] lg:w-[470px] h-[31rem] md:h-96 items-center'>

                  <div className='flex flex-col md:flex-row pb-3  pt-1 w-full '>
                  <div className="-mt-12">
                    <Image
                    src="/images/women-icon-2.png"
                    alt="Picture of women in a gym"
                    width={161}
                    height={210}
                    />
                  </div>

        
                    <p className="h-full w-full text-start mt-3 md:mt-0 ml-3">
                    <span className=" font-bold text-xl md:text-3xl mb-4 pb-2  leading-9 ">
                    Before72kg
                    </span>
                    <br />
                    <span className=" font-bold text-5xl pt-1 leading-9 ">
                    after<span className="text-primaryRed m-0 p-0 text-6xl">56</span>kg
                    </span>
        
                    </p>
                    </div>


                    <div className=" flex flex-col  pt-2 ">
                        {/* the paragraph section  */}
                        <p className="text-start text-base leading-6 text-tblack tracking-tighter">
                        ダミーテキスト：ジムに通うのは初めてだったので最初は不安でしたが、スタッフのみなさんが明るく接してくれたのでとても安心できました
         <br />
         いまではお友達もでき、同じ目標に向かって一緒に頑張っています。(100文字程度）
                        </p>
        
                        <p className="text-end pb-4 pt-2 font-medium text-base leading-6 text-tblack tracking-tighter">
                        30代　女性　OL
                        </p>
                        
                    </div>
        
                    </div>
            

</div>

</FadeInWhenVisible>

</div>

        </div>
    

    );
}

export default VoiceSection;