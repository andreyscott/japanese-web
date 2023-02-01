import Image from "next/image";

const Grid = () => {

    const gridData = [
        {
            id: '0',
            step: 'STEP 1',
            Image: '/svgs/icon1.svg',
            title: 'ご予約',
            description: 'webより体験入会の ご予約をしてください。'
        },
        {
            id: '1',
            step: 'STEP 2',
            Image: '/svgs/icon2.svg',
            title: '体験当日',
            description: '当日は動きやすい服装で  お越しください。'
        },
        {
            id: '2',
            step: 'STEP 3',
            Image: '/svgs/icon3.svg',
            title: 'ご入会',
            description: '体験当日の申し込みで 特典が適応されます。'
        }
    ]
    return (
        <section className="py-10 max-w-7xl">
             <div className='flex w-full px-4 pr-10 flex-col mb-9 text-end justify-end items-end'>
            <h2
            className=' font-bold text-4xl pb-1 '>
            ご利用方法
            </h2>
            <div className='font-bold flex justify-center items-center text-xl md:text-2xl leading-9'>
                {/* create a 2px solid straight line with a color of tblack  */}
                <p className="border-b-[1px] border-tblack w-16  mr-2 p-0"></p>
                <span className="m-0 p-0 font-medium text-sm">
               step
                </span>

            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-7 md:gap-y-0">
                {gridData.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-center">
                        <h1 className="text-xl font-bold text-center mb-3">{item.step}</h1>
                       
                        <div className="flex items-center pb-3 justify-center">
                            <Image src={item.Image} width={110} height={110} alt={item.title} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold text-center pb-3">{item.title}</h1>
                            <p className="text-center text-inherit text-base font-medium w-44 md:w-48">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            
        </section>
    );
}

export default Grid;