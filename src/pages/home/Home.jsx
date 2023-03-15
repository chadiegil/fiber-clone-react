import React from "react";
import CatCard from "../../components/catCard/CatCard";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards } from "../../data";
import "./Home.scss";

const Home = () => {
  return (
    <div style={{ fontWeigth: "700" }}>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
