import React from "react";
import Banner from "../Components/Banner";
import NewsContainer from "../Components/NewsContainer";
import FeaturedNews from "../Components/FeaturedNews";
import AllNews from "../Components/AllNews";

const News = () => {
  return (
    <div>
      <Banner />
      <NewsContainer />
      <FeaturedNews />
      <AllNews />
    </div>
  );
};

export default News;
