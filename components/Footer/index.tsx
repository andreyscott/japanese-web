import Image from "next/image";

import { RxDoubleArrowUp } from 'react-icons/rx'

import { CTA } from "../CTA";
import { motion } from "framer-motion";

const Footer = () => {
    return (
         <footer className="bg-black w-full relative px-2 md:bg-[#222222]/60">
            {/* fix the above cta issue */}
             <motion.div

             initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}

             className="max-w-7xl flex flex-col md:flex-row justify-between items-center mx-auto py-10 px-2 overflow-hidden sm:px-6 lg:px-8">
                
                    <Image
                    src="/images/img.png"
                    alt="Picture of a girl working out"
                    width={600}
                    height={800}
                    />


                     <CTA />


                
                </motion.div>
                <div className=" w-14 absolute bottom-1 right-2 h-fit py-3 animate-bounce bg-primaryRed">
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