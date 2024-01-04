import React, { useState } from "react";
import pdfFile from "../../assets/QEGO.pdf";

const DropDown = ({ title, options }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative">
      <div
        className="transition-all p-1 md:p-5 rounded duration-300 cursor-pointer "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className=" text-sm md:text-xl p-3 md:p-5 rounded hover:bg-black hover:text-orange-500">
          {title}
        </span>
      </div>
      {isHovered && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute top-16 left-0 right-0 text-sm shadow-lg rounded bg-white md:text-lg z-50"
        >
          {options.map((option) => (
            <span
              className="hover:bg-slate-300 py-5 px-2 cursor-pointer block"
              key={option}
            >
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
    <div
      id="pdf"
      className="md:h-screen h-full w-screen flex gap-x-10 md:flex-row flex-col-reverse gap-y-5 md:gap-y-0 px-5 md:px-10 py-10 md:py-20 bg-yellow-500"
    >
      <div className="w-full md:w-2/4 h-full">
        <a href={pdfFile} target="_blank" rel="noopener noreferrer">
          <object
            data={pdfFile}
            type="application/pdf"
            className="w-full h-96 md:h-full"
          >
            <p>
              It appears you don't have a PDF plugin for this browser. No
              biggie... you can{" "}
              <a href={pdfFile}>click here to download the PDF file.</a>
            </p>
          </object>
        </a>
      </div>
      <div className="flex flex-col items-start w-full gap-y-20 md:w-2/4 mt-5">
        <div className="flex flex-col gap-y-10 items-start">
          <span className="text-2xl md:text-6xl font-bold text-[#0e4753]">
            Prespective Piece
          </span>
          <span className="w-full text-lg md:text-3xl text-left font-bold mt-5 text-black">
            A Journey of Intellectual Discovery: Delve into the Ideas and Thesis
            Papers In various categories
          </span>
        </div>
        <div className="flex flex-row sm:flex-row items-start md:items-center  justify-start md:justify-between border-t-2 border-l-2 mt-10 border-black">
          <DropDown title="Quantum" options={["Category 1", "Category 2"]} />
          <DropDown title="Energy" options={["Category 1", "Category 2"]} />
          <DropDown title="Machine" options={["Category 1", "Category 2"]} />
        </div>
      </div>
    </div>
  );
}
