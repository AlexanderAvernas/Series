import styled from 'styled-components';
import SeriesHero from '../assets/SeriesHero.jpg'

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
  background-image: url(${SeriesHero.jpg}); /* Replace with your image */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* Media queries for responsiveness */
  @media (max-width: 768px) {
    height: 80vh; /* Adjust the height on smaller screens */
  }

  @media (max-width: 480px) {
    height: 60vh; /* Adjust further for mobile */
  }
`;

// Centered content
const HeroContent = styled.div`
  position: relative;
  z-index: 2; /* Ensures content stays above the background image */
  color: white;
`;

// Hero text styling
const HeroText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;

  @media (max-width: 768px) {
    font-size: 3rem; /* Smaller font for tablets */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Even smaller for mobile devices */
  }
`;
