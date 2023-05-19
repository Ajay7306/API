import React, { useEffect, useState } from "react";

export const Posts = () => {
  const [post, setPost] = useState([]);

  const posturl = "https://jsonplaceholder.typicode.com/posts";
  const fetchpost = () => {
    return fetch(posturl)
      .then((res) => res.json())
      .then((d) => setPost(d));
  };

  useEffect(() => {
    fetchpost();
  }, []);
  
  return (
    <div className="container mx-auto md:py-28 py-16 px-2">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        {post &&
          post.slice(0, 100).map((record) => (
            <div
              className="flex flex-col gap-4 bg-[#191A1E] text-white hover:text-[#1c1c1c] hover:bg-white rounded-2xl md:p-6 p-3"
              key={record.id}
            >
              <h1 className="font-bold md:text-[24px] text-[20px]  capitalize">
                {record.title}
              </h1>
              <h1 className="font-medium text-[16px] text-[#75777A]">
                {record.body}
              </h1>{" "}
            </div>
          ))}
      </div>
    </div>
  );
};
