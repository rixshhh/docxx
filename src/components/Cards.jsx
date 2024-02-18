import React from "react";
import { TbFileTypeDocx } from "react-icons/tb";
import { RiFileDownloadFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        className="relative flex-shrink-0 w-60 h-72  rounded-[40px] bg-zinc-900/90 text-white px-6 py-10 overflow-hidden"
      >
        <TbFileTypeDocx />
        <p className="text-sm mt-5 leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full  left-0">
          <div className="flex items-center justify-between mb-3 py-3 px-6">
            <h5>{data.filesize}</h5>
            <span className="w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoCloseOutline />
              ) : (
                <RiFileDownloadFill size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen ? (
            <div
              className={`tag py-4 w-full bg-${data.tag.tagColor}-600 w-full h-10 flex items-center justify-center`}
            >
              <h3 className="text-sm">{data.tag.tagTitle}</h3>
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
}

export default Cards;
