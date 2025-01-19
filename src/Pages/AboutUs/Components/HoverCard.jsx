import { useEffect, useRef, useState } from "react";

const HoverCard = ({ leader }) => {
  const fixedContentRef = useRef(null);
  const [hoverWidth, setHoverWidth] = useState(0);

  useEffect(() => {
    if (fixedContentRef.current) {
      setHoverWidth(fixedContentRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="relative group w-full h-80 mx-auto overflow-hidden">
      <img
        src={leader.img}
        alt=""
        className="w-full h-full object-cover rounded-lg shadow-md"
      />

      <div
        ref={fixedContentRef}
        className="bg-accent px-6 py-2 flex items-center gap-8 justify-between absolute top-0 right-0 z-10"
      >
        <p className="text-white">{leader.name}</p>
        <p className="text-white text-xl">+</p>
      </div>

      <div
        className="absolute top-[44px] right-0 bg-red-600 bg-opacity-90 flex flex-col items-center justify-center text-white translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out p-4 z-0"
        style={{ width: hoverWidth }}
      >
        <p className="text-sm">
          BA High School Students learn, grow, play, and explore in a safe,
          bucolic environment in Baghmara, Rajshahi.
        </p>
      </div>
    </div>
  );
};

export default HoverCard;
