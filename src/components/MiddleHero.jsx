import styled from 'styled-components';
import SeriesHero from '../assets/SeriesHero.jpg'

const MiddleHero = () => {
  return (
    <HeroSection>
      <HeroContent>
        {/* <HeroText>Make a Watchlist!</HeroText> */}
      </HeroContent>
    </HeroSection>
  );
};

export default MiddleHero;

// Hero Section styled component
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 70vh; /* Full screen height */
  background:
    /* Top Fade */
    linear-gradient(to bottom, rgba(27, 26, 26, 1) 0%, rgba(0, 0, 0, 0) 20%),
    /* Bottom Fade */
    linear-gradient(to top, rgba(27, 26, 26, 1) 0%, rgba(0, 0, 0, 0) 20%),
    /* Background Image */
    url(${SeriesHero});
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
    height: 40vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
`;

// Centered content
const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
`;

// Hero text styling
// const HeroText = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   text-transform: uppercase;
//   letter-spacing: 2px;
//   color: #ff0ada;
//   border: 5px solid white;
//   text-shadow:
//     2px 2px 0px black,
//     -2px 2px 0px black,
//     2px -2px 0px black,
//     -2px -2px 0px black;

//   @media (max-width: 768px) {
//     font-size: 3rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 2rem;
//   }
// `;
