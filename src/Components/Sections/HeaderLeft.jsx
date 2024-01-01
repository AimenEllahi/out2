import React from "react";

const TextWithIcon = ({ text = "" }) => {
  return (
    <div className="flex gap-x-2 ">
      <span className="mb-0.5">{text}</span>
      <span>▽</span>
    </div>
  );
};
export default function HeaderLeft() {
  return (
    <div className="md:w-2/4 w-full">
      <div className="font-bold">
        {" "}
        <h1>
          The interface
          <br />
          Between the
          <br />
          Present
          <br />
          and
          <br />
          Future
        </h1>
      </div>
      <div className="border-b border-l text-xl font-medium flex flex-col gap-y-16 px-6 pb-4 w-3/4 mt-5">
        <span>
          Here you drift through the blogs that guide you from mechanisms to
          machines. And our ideologies are the connections between the two
          terminals ofpresent and future, our Perspective Papers check the
          posabilities and our Objects makes them reality.
        </span>
        <span>Explore the world by upgrading yourself.</span>
      </div>
      <div className="flex flex-col text-xl w-3/4 items-end">
        <TextWithIcon />
        <TextWithIcon text={"Learn from blogs"} />
        <TextWithIcon text={"Precise your perception"} />
        <TextWithIcon text={"Explore the objects"} />
        <TextWithIcon text={"Be involved and updated"} />
      </div>
    </div>
  );
}
