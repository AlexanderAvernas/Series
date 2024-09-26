import { useState, useEffect } from 'react';
import styled from 'styled-components'; // Import styled-components
import { Link } from 'react-router-dom';

// Navbar component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo>My Navbar</Logo>

        <Hamburger onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </Hamburger>

        <NavLinks isOpen={isOpen}>
          <li><StyledLink to="/">Home</StyledLink></li>
          <li><StyledLink to="/ListPage">List Page</StyledLink></li>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

// Styled Components for Navbar
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${({ scrolled }) => (scrolled ? 'black' : 'transparent')};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.h1`
  color: white;
`;

// Hamburger Menu
const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 4px;
    background-color: white;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

// NavLinks Styling
const NavLinks = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;

    li {
      margin: 20px 0;
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #f3a683;
  }
`;
