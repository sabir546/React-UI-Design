import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from 'framer-motion';


function Card({data,reference }) {
  return (
    < motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}}  dragElastic={0.1} dragTransition={{bounceDamping:50,bounceStiffness:100}} className= 'flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90  text-white py-10 px-8 overflow-hidden' > 
    <FaFileAlt/>
    <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
    <div className='footer absolute bottom-0   w-full  left-0   '>
    <div className='flex items-center  justify-between  px-8 py-3 mb-3' >
        <h5>{data.filesize}</h5>
        <span className='w-7 h-7 bg-zinc-800 rounded-full flex items-center justify-center'>
          { data.close? <IoCloseOutline/> : <MdOutlineFileDownload size='.8em' color='#fff'/>}

        </span>
    </div>
    { data.tag.isOpen && (
<div className={`tag w-full p-3 buttom-0 ${data.tag.tagColor=== "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center `}>
<h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
    </div>
      )}
    
    </div>
     </motion.div>

  );
}

export default Card