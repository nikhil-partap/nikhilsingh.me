import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return (
    <>
      <h1 className="text-center text-4xl bg-gray-600 text-white p-6 ">
        hi there {id}{" "}
      </h1>
    </>
  );
}
