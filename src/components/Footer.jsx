import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
      <FooterSection>
          <h4>About</h4>
          <p>Make a watchlist</p>
        </FooterSection>
        <FooterSection>
          <h4>Contact</h4>
          <p>Email: info@watchlist.com</p>
          <p>Phone: +123456789</p>
        </FooterSection>
        <FooterSection>
          <h4>Follow Us</h4>
          <p>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </p>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  color: #cb2eb3;
  padding: 20px 0;
  text-align: center;
  background-color: black;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 15px;

  h4 {
    margin-bottom: 10px;
    font-size: 18px;
    text-transform: uppercase;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    color: #ddd;
  }

  a {
    color: #ddd;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 20px;
  padding-top: 10px;
`;
