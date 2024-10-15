import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Skeleton from "react-loading-skeleton";

// eslint-disable-next-line react/prop-types
const SearchList = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
        setLoading(true); // Set loading to true when search starts
        try {
          const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
          const data = await response.json();
          setSearchResults(data);
        } catch (error) {
          console.error("Error fetching search results", error);
        } finally {
          setLoading(false); // Set loading to false after data is fetched
        }
      } else {
        setSearchResults([]);
        setLoading(false); // Reset loading when query is cleared or too short
      }
  };

  return (
    <Overlay>
      <SearchContainer>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for shows..."
        />

        {/* Show skeleton loading state or search results */}
        {loading ? (
          <ResultsContainer>
          {/* Hardcoded skeletons for 3 image placeholders */}
          <Result>
            <Skeleton height={170} width={120} /> {/* Image skeleton */}
          </Result>
          <Result>
            <Skeleton height={170} width={120} /> {/* Image skeleton */}
          </Result>
          <Result>
            <Skeleton height={170} width={120} /> {/* Image skeleton */}
          </Result>
        </ResultsContainer>
        ) : (
          <ResultsContainer>
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <Result key={result.show.id}>
                  <Link to={`/show/${result.show.id}`} onClick={onClose}>
                    {result.show.image && (
                      <ImageContainer>
                        <ShowImage src={result.show.image.medium} alt={result.show.name} />
                      </ImageContainer>
                    )}
                  </Link>
                </Result>
              ))
            ) : (
              <NoResults>No shows found</NoResults>
            )}
          </ResultsContainer>
        )}
      </SearchContainer>
    </Overlay>
  );
};

export default SearchList;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  background-color: rgb(27, 26, 26);
  padding: 1rem;
  width: 100%;
  max-width: 600px;
  height: 70%;
  overflow-y: scroll;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: 900;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

`;

const Result = styled.div`
  flex-basis: 100%; /* Default to full width on small screens */
  max-width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 576px) {
    flex-basis: calc(50% - 1rem); /* Two items per row on small screens */
  }

  @media (min-width: 768px) {
    flex-basis: calc(33.33% - 1rem); /* Three items per row on medium screens */
  }

  @media (min-width: 992px) {
    flex-basis: calc(25% - 1rem); /* Four items per row on large screens */
  }
`;

const ImageContainer = styled.div`
  display: flex; /* Ensures flexbox layout */
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically, if needed */
  width: 100%; /* Full width to keep the image centered */
`;

const ShowImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const NoResults = styled.p`
  color: white;
  text-align: center;
`;
