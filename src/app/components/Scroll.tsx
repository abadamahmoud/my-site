"use client"
import { motion } from 'framer-motion';
import { MdKeyboardArrowDown } from 'react-icons/md';


const FallingArrow = () => {
   
   return (
    <motion.div>
        <div className='border-b-4 border-r-4  rotate-45 border-emerald-400 w-5 p-2 '/>
        <div className='border-b-4 border-r-4  rotate-45 border-emerald-400 w-5 p-2 mt-[-8px]'/>
        <div className='border-b-4 border-r-4  rotate-45 border-emerald-400 w-5 p-2 mt-[-8px]'/>
    </motion.div>
   )
};

export default FallingArrow;