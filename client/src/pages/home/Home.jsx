import React from "react";
import FeaturedProducts from "../../components/featuredproducts/FeaturedProducts";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;
