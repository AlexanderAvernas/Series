import styled from 'styled-components';
import HeroImage from '../assets/HeroImage.jpg';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroText>Make a Watchlist!</HeroText>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

// Hero Section styled component
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh; /* Full screen height */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgb(27, 26, 26) 100%),
              url(${HeroImage}); /* Combine gradient with hero image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  /* Media queries for responsiveness */
  @media (max-width: 768px) {
    height: 80vh;
  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;

// Centered content
const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
`;

// Hero text styling
const HeroText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #f01184;
  border: 5px solid white;
  text-shadow:
    2px 2px 0px black,
    -2px 2px 0px black,
    2px -2px 0px black,
    -2px -2px 0px black;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
