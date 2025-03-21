import React from "react";
import styled from "styled-components";
import heroImage from "../assets/eyewear.png"; // Replace with your image

const Home = () => {
  return (
    <HeroSection>
      <TextContent>
        <h1>Upgrade Your Look with Stylish Eyewear!</h1>
        <p>
          Discover the perfect eyewear that suits your style. Choose from a wide
          range of shades, specs, and lenses.
        </p>
        <Button>Explore Now</Button>
      </TextContent>
      <HeroImage src={heroImage} alt="Eyewear Banner" />
    </HeroSection>
  );
};

export default Home;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background: linear-gradient(to right, #ffecd2, #fcb69f);
`;

const TextContent = styled.div`
  max-width: 50%;
  h1 {
    font-size: 2.5rem;
  }
  p {
    margin: 10px 0;
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background: #ff4d00;
  color: white;
  border: none;
  cursor: pointer;
`;

const HeroImage = styled.img`
  width: 50%;
`;
