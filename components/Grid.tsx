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
        <section className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {gridData.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center">
                            <Image src={item.Image} width={80} height={80} alt={item.title} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold text-center">{item.step}</h1>
                            <h1 className="text-2xl font-bold text-center">{item.title}</h1>
                            <p className="text-center">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            
        </section>
    );
}

export default Grid;