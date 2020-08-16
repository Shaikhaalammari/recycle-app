import React from "react";

// Styling
import {
  HomeBackground,
  TopStyling,
  Title,
  BottomStyling,
  ButtonStyled,
} from "./styles";

const Home = () => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-pink.png",
      }}
    >
      <TopStyling>
        <Title>Recycled Closet</Title>
      </TopStyling>
      <BottomStyling>
        <ButtonStyled onPress={() => alert("Take me to the list of Vendors")}>
          skip
        </ButtonStyled>
      </BottomStyling>
    </HomeBackground>
  );
};

export default Home;
