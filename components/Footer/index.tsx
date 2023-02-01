import Image from "next/image";

import { RxDoubleArrowUp } from 'react-icons/rx'

import { CTA } from "../CTA";

const Footer = () => {
    return (
         <footer className="bg-black w-full relative px-2 md:bg-[#222222]/60">
            {/* fix the above cta issue */}
             <div className="max-w-7xl flex justify-between items-center mx-auto py-10 px-2 overflow-hidden sm:px-6 lg:px-8">
                <div>
                    <Image
                    src="/images/img.png"
                    alt="Picture of a girl working out"
                    width={500}
                    height={500}
                    />

                     </div>

                     <CTA />


                
                </div>
                <div className=" w-14 absolute bottom-0 right-0 h-fit py-3 animate-bounce bg-primaryRed">
<div className="w-full flex flex-col justify-center items-center">

         {/* create two rigth angle icon  face up with color primaryRed when hovered it turns white and position it center */}
<RxDoubleArrowUp  color="#fff" size={25}/>
<p className="text-white">Top</p>

</div>
                
                            


                </div>

                </footer>      
                
    );
}

export default Footer;