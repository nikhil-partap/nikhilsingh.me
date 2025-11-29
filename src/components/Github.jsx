import React from "react";
import {useLoaderData} from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  return (
    <>
      <div className="text-center m-4 bg-black text-4xl rounded-2xl text-white p-4">
        GitHub followers: {data.followers}
        <img src={data.avatar_url} alt="GitHub avatar" width={300} />
      </div>
    </>
  );
}

// Loader function for React Router route
// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  // Use Vite proxy in dev, real API URL in production (Vercel)
  const apiBase = import.meta.env.PROD
    ? "https://api.github.com"
    : "/api/github";

  const response = await fetch(`${apiBase}/users/nikhil-partap`);

  if (!response.ok) {
    throw new Error(`GitHub API fetch failed: ${response.status}`);
  }

  return response.json();
};
