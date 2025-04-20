import React from "react";
import RecentBlogs from "../components/RecentBlogs";
import Newsletter from "../components/Newsletter";
import Tips from "../components/Tips";
import TrendingTopics from "../components/TrendingTopics";

const HomePage = () => {
  return (
    <div>
      <RecentBlogs></RecentBlogs>
      <TrendingTopics></TrendingTopics>
      <Tips></Tips>
      <Newsletter></Newsletter>
    </div>
  );
};

export default HomePage;
