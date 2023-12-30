import React, { useState } from "react";
import pdfFile from "../../assets/QEGO.pdf";

const DropDown = ({ title, options }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onPointerOver={() => {
        setIsHovered(true);
      }}
      onPointerOut={() => setIsHovered(false)}
      className='relative '
    >
      <div className='p-5 transition-all rounded duration-300 cursor-pointer hover:bg-black hover:text-orange-500'>
        <span className='text-xl   '>{title}</span>
      </div>
      {isHovered && (
        <div
          onPointerOver={() => {
            setIsHovered(true);
          }}
          onPointerOut={() => setIsHovered(false)}
          className='absolute top-16 shadow-lg rounded  flex flex-col gap-y-2 text-lg'
        >
          {options.map((option) => (
            <span className='hover:bg-slate-300 py-5 px-4 cursor-pointer'>
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
export default function PDFSection() {
  return (
    <div className='h-screen w-full flex px-10 py-20 bg-yellow-500'>
      <div className='w-2/4'>
        <a href={pdfFile} target='_blank' rel='noopener noreferrer'>
          <object
            data={pdfFile}
            type='application/pdf'
            width='100%'
            height='600px'
          >
            <p>
              It appears you don't have a PDF plugin for this browser. No
              biggie... you can{" "}
              <a href={pdfFile}>click here to download the PDF file.</a>
            </p>
          </object>
        </a>
      </div>
      <div className='flex justify-center w-2/4  '>
        <div className=' flex flex-col items-start px-10'>
          <span className='text-[3rem] font-bold text-[#0e4753]'>
            Prespective Piece
          </span>
          <span className='w-3/4 text-4xl font-bold mt-10 text-black  text-left'>
            {" "}
            A Journey of Intellectual Discovery: Delve into the Ideas and Thesis
            Papers In various categories
          </span>
          <div className='flex border-l-2 py-2 px-10 border-t-2 mt-20 gap-x-10 border-black'>
            <DropDown title='Quantum' options={["Category 1", "Category 2"]} />
            <DropDown title='Energy' options={["Category 1", "Category 2"]} />
            <DropDown title='Machine' options={["Category 1", "Category 2"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
