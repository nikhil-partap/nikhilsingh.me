import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/nikhil-partap")
  //       .then((Response) => Response.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   });
  return (
    <>
      <div className=" text-center m-4 bg-black text-4xl rounded-2xl text-white p-4  ">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch('/api/github/users/nikhil-partap');
  return response.json();
};
