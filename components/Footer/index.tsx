import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RxDoubleArrowUp } from 'react-icons/rx'


import { CTA } from "../CTA";
import { CTAF } from "../CTAf";

const Footer = () => {
    return (
         <footer className="bg-black w-full relative md:bg-[#222222]/60">
            {/* fix the above cta issue */}
             <motion.div
             initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}

             className="flex flex-col  h-full w-full md:flex-row items-center mx-auto pb-8 overflow-hidden sm:px-2">
                
                <div className="md:w-2/5 w-full">

                    <Image
                    src="/images/img.png"
                    alt="Picture of a girl working out"
                    width={500}
                    height={700}
                    className="w-full h-full"
                    />
                </div>



<div className="w-full md:w-3/5">
<CTAF />

</div>


                
                </motion.div>
                <Link href="#hero">

                <div className=" w-14 absolute top-0 md:bottom-2s right-2 h-fit py-3 animate-bounce bg-primaryRed">
<div className="w-full flex flex-col justify-center items-center">

         {/* create two rigth angle icon  face up with color primaryRed when hovered it turns white and position it center */}
<RxDoubleArrowUp  color="#fff" size={25}/>
<p className="text-white">Top</p>

</div>
                
                </div>
                </Link>

                </footer>      
                
    );
}

export default Footer;