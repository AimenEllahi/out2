import React, { useState } from "react";
import pdfFile from "../../assets/QEGO.pdf";

const DropDown = ({ title, options }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative">
      <div
        className="p-5 transition-all rounded duration-300 cursor-pointer hover:bg-black hover:text-orange-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="text-xl">{title}</span>
      </div>
      {isHovered && (
        <div className="absolute top-16 md:top-12 left-0 right-0 shadow-lg rounded bg-white text-lg z-50">
          {options.map((option) => (
            <span
              className="hover:bg-slate-300 py-5 px-4 cursor-pointer block"
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
    <div className="md:h-screen h-auto w-screen flex gap-x-10 md:flex-row flex-col px-5 md:px-10 py-10 md:py-20 bg-yellow-500">
      <div className="w-full md:w-2/4">
        <a href={pdfFile} target="_blank" rel="noopener noreferrer">
          <object
            data={pdfFile}
            type="application/pdf"
            className="w-full h-96 md:h-600"
          >
            <p>
              It appears you don't have a PDF plugin for this browser. No
              biggie... you can{" "}
              <a href={pdfFile}>click here to download the PDF file.</a>
            </p>
          </object>
        </a>
      </div>
      <div className="flex flex-col items-start w-full md:w-2/4 mt-5">
        <span className="text-2xl md:text-6xl font-bold text-[#0e4753]">
          Prespective Piece
        </span>
        <span className="w-full text-lg md:text-6xl text-left font-bold mt-5 text-black">
          A Journey of Intellectual Discovery: Delve into the Ideas and Thesis
          Papers In various categories
        </span>
        <div className="flex flex-row items-start md:items-center justify-start md:justify-between border-t-2 border-l-2 mt-10 border-black">
          <DropDown title="Quantum" options={["Category 1", "Category 2"]} />
          <DropDown title="Energy" options={["Category 1", "Category 2"]} />
          <DropDown title="Machine" options={["Category 1", "Category 2"]} />
        </div>
      </div>
    </div>
  );
}
