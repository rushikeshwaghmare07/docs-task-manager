import React, { useState } from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      desc: "This is a post for...",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full">
      {data.map((item, index) => (
        <Card data ={item}/>
      ))}
    </div>
  );
}

export default Foreground;
