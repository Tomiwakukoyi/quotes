import React from "react";
import FeaturedProducts from "../../components/featuredproducts/FeaturedProducts";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
