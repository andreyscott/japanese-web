import Image from "next/image";

const VoiceSection = () => {
    return (
        <div className=' px-2 bg-base w-full flex flex-col justify-center items-center'>
            <div className="w-full flex justify-center items-center text-center pb-5">
               <div className='flex flex-col w-96 py-4  text-tblack justify-center items-center'>
            <p className=' font-bold text-xl md:text-2xl leading-9 '>
            TKO PERSONAL TRAININGは 
            <br />
             パーソナルコーチによる 個別トレーニング・栄養指導で
          </p>
         <h6 className='font-bold text-xl md:text-2xl leading-9 py-5'>
          <span className=" border-b-4 border-primaryRed m-0 p-0 font-extrabold">
            ご利用者満足度96％を
            </span>
            
            達成いたしました!!
            </h6>
</div>
</div>

<div className=" w-full flex flex-col gap-y-9 max-w-4xl md:flex-row justify-around items-center text-center px-2 py-14">


<div className='flex flex-col  h-96 w-96  py-4  text-tblack justify-center items-center'>
           <div className='flex w-full flex-col mb-9 text-start justify-start items-start'>
            <h2
            className=' font-bold text-4xl pb-1 '>
            ご利用者様の声
            </h2>
            <div className='font-bold flex justify-center items-center text-xl md:text-2xl leading-9'>
                {/* create a 2px solid straight line with a color of tblack  */}
                <p className="border-b-2 border-tblack w-16  mr-2 p-0"></p>
                <span className="m-0 p-0 font-medium text-sm">
               voice
                </span>

            </div>
            </div>

  {/* create a div with an image on the left  2 text on the right one big and one some and paragrash on the bottom div shoulb be a class of flex flex-col and a class of w-96 and a class of py-4 and a class of text-tblack */}
            <div className='flex flex-col justify-start px-3 bg-white drop-shadow-2xl shadow-xl border-b-2 border-r-2 border-tblack shadow-tblack mt-20 w-96 h-96 items-center'>

            <div className='flex  pt-1 w-full '>
            <Image
            src="/images/women-icon-1.png"
            alt="Picture of the author"
            width={120}
            height={160}
            className="-mt-12"
            />

            <p className="h-full w-full text-start ml-3  mt-8">
            <span className=" font-bold text-xl md:text-2xl mb-4 pb-2  leading-9 ">
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
                パーソナルコーチによる 個別トレーニング・栄養指導で
         
                <br />
                いまではお友達もでき、同じ目標に向かって一緒に頑張っています。(100文字程度）
                </p>

                <p className="text-end pb-4 font-medium text-base leading-6 text-tblack tracking-tighter">
                20代　女性　OL
                </p>
                
            </div>
            </div>

            </div>

            <div
            
    className='flex flex-col justify-start px-3 bg-white drop-shadow-2xl shadow-xl border-b-2 border-r-2 border-tblack shadow-tblack mt-20 w-96 h-96 items-center'>
         

            <div className='flex  pt-1 w-full '>
            <Image
            src="/images/women-icon-2.png"
            alt="Picture of women in a gym"
            width={120}
            height={160}
            className="-mt-12"
            />

            <p className="h-full w-full text-start ml-3  mt-8">
            <span className=" font-bold text-xl md:text-2xl mb-4 pb-2  leading-9 ">
            before72kg
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
                ダミーテキスト：ジムに通うのは初めてだったので最初は不安でしたが、スタッフのみなさんが明るく接してくれたのでとても安心できました。
         
                <br />
                    いまではお友達もでき、同じ目標に向かって一緒に頑張っています。(100文字程度）
                </p>

                <p className="text-end pb-4 font-medium text-base leading-6 text-tblack tracking-tighter">
                30代　女性　OL
                </p>
                
            </div>

            </div>
       


</div>

        </div>
    

    );
}

export default VoiceSection;