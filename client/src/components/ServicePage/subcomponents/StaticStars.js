import React from "react";
// import React, { useRef }   from "react";

const goldStar = (
  <svg
    aria-hidden="true"
    className="w-4 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

const grayStar = (
  <svg
    aria-hidden="true"
    className="w-4 text-gray-300"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

const FiveStar = () => {
  return (
    <>
      {goldStar}
      {goldStar}
      {goldStar}
      {goldStar}
      {goldStar}
    </>
  );
};

const FourStar = () => {
  return (
    <>
      {goldStar}
      {goldStar}
      {goldStar}
      {goldStar}
      {grayStar}
    </>
  );
};

const ThreeStar = () => {
  return (
    <>
      {goldStar}
      {goldStar}
      {goldStar}
      {grayStar}
      {grayStar}
    </>
  );
};

const TwoStar = () => {
  return (
    <>
      {goldStar}
      {goldStar}
      {grayStar}
      {grayStar}
      {grayStar}
    </>
  );
};

const OneStar = () => {
  return (
    <>
      {goldStar}
      {grayStar}
      {grayStar}
      {grayStar}
      {grayStar}
    </>
  );
};

const ZeroStar = () => {
  return (
    <>
      {grayStar}
      {grayStar}
      {grayStar}
      {grayStar}
      {grayStar}
    </>
  );
};

export {
  FiveStar,
  FourStar,
  ThreeStar,
  TwoStar,
  OneStar,
  ZeroStar
}