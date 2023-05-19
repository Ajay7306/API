import React from "react";
import First from "../assets/1.png";
import Second from "../assets/2.png";
import { Tab } from "@headlessui/react";
import { Posts } from "./Posts";
import Photo from "./Photo";

const Select = () => {
  return (
    <Tab.Group>
      <Tab.List className="flex sm:flex-row flex-col justify-between items-center w-full gap-5">
        <Tab className="w-80 sm:w-[50%] h-[300px] bg-[#191A1E] rounded-[40px] border hover:border-[20px] border-white sm:px-0 px-4">
          <div className="  flex justify-between items-center flex-row  sm:px-7 px-2">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-[22px] text-[#FAFAFC] text-left">
                POSTS
              </h1>
              <h1 className="font-medium sm:text-[16px] text-[14px] text-[#75777A] text-left">
                Fetching and showing all the 100 posts from the api.
              </h1>
            </div>
            <img
              src={First}
              className="sm:w-[80%] w-[150px] h-[250px] object-contain"
            />
            <button className="bg-white rounded-full w-[60px] h-[80px] flex justify-center items-center sm:px-0 px-2">
              <svg
                width="20"
                height="13"
                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1322 11.3816L17.5632 7.95063L17.8982 7.61566C18.3448 7.16903 18.3448 6.4449 17.8982 5.99827L14.1322 2.23231"
                  stroke="#1C1C1C"
                  stroke-width="2.74479"
                  stroke-linecap="round"
                />
                <path
                  d="M14.1322 6.80694L1.55191 6.80695"
                  stroke="#1C1C1C"
                  stroke-width="2.74479"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </Tab>
        <Tab className="w-80 sm:w-[50%] h-[300px] border border-white hover:border-[20px] bg-[#191A1E] rounded-[40px] sm:px-0 px-4 ">
          <div className="    flex justify-between items-center flex-row sm:px-7 px-2">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-[22px] text-[#FAFAFC] text-left">
                PHOTOS
              </h1>
              <h1 className="font-medium sm:text-[16px] text-[14px] text-[#75777A] text-left">
                Fetching and showing all the 5000 photos from the api.
              </h1>
            </div>
            <img
              src={Second}
              className="sm:w-[80%] w-[150px] h-[250px] object-contain"
            />
            <button className="bg-white rounded-full w-[60px] h-[80px] flex justify-center items-center sm:px-0 px-2">
              <svg
                width="20"
                height="13"
                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1322 11.3816L17.5632 7.95063L17.8982 7.61566C18.3448 7.16903 18.3448 6.4449 17.8982 5.99827L14.1322 2.23231"
                  stroke="#1C1C1C"
                  stroke-width="2.74479"
                  stroke-linecap="round"
                />
                <path
                  d="M14.1322 6.80694L1.55191 6.80695"
                  stroke="#1C1C1C"
                  stroke-width="2.74479"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Posts />
        </Tab.Panel>
        <Tab.Panel>
          <Photo />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Select;
