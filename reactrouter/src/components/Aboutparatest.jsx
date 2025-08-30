import React from "react";
import { useParams } from "react-router-dom";

function Aboutparatest() {
  const params = useParams();
  return (
    <>
      <div className="h-[58vh] flex items-center justify-center">
          <div className="text-lg text-gray-700">hi, i'm <span className="text-green-800 font-bold text-xl">{params.username}</span></div>
      </div>
    </>
  );
}

export default Aboutparatest;
