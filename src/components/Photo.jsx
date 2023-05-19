import React, { useEffect, useState } from "react";

const Photo = () => {
  const [photo, setPhoto] = useState([]);
  const [num, setNum] = useState(100);
  const photourl = "https://jsonplaceholder.typicode.com/photos";

  const fetchphoto = () => {
    return fetch(photourl)
      .then((res) => res.json())
      .then((d) => setPhoto(d));
  };
  const Handlechange = () => {
    let sum = num + 100;
    setNum(sum);
  };

  useEffect(() => {
    fetchphoto();
  }, []);
  
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="container mx-auto py-28 px-2">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {photo &&
            photo.slice(0, num).map((record) => (
              <div
                className="flex flex-col gap-4 bg-[#191A1E] text-white hover:text-[#1c1c1c] hover:bg-white rounded-2xl p-6"
                key={record.id}
              >
                <img
                  src={record.url}
                  alt="photos"
                  className="w-full h-full  object-cover rounded-[30px]"
                />
                <h1 className="font-bold text-[20px]  capitalize h-[50px]">
                  {record.title}
                </h1>
              </div>
            ))}
        </div>
      </div>
      <button
        onClick={() => Handlechange()}
        className="bg-white rounded-[30px] sm:w-[300px] w-[180px] sm:h-[100px] h-[80px] text-[24px] text-[#1c1c1c] font-semibold"
      >
        Load More
      </button>
    </div>
  );
};

export default Photo;
