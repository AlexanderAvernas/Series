/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import ImageWithSkeleton from "./skeleton/ImageWithSkeleton";
import DOMPurify from "dompurify";  // Import DOMPurify for sanitizing HTML

const EpisodeList = ({ episodes, loading }) => {
  return (
    <div>
      <Header>Episodes</Header>
      {loading ? (
        <Skeleton height={20} count={5} />
      ) : (
        <StyledEpisodeList>
          {episodes.map((episode) => (
            <EpisodeItem key={episode.id}>
              <h3>{episode.name}</h3>
              <ImageWithSkeleton src={episode.image?.medium} alt={episode.name} />
              <p>
                Season {episode.season}, Episode {episode.number}
              </p>
              <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(episode.summary) }} /> {/* Sanitize summary */}
            </EpisodeItem>
          ))}
        </StyledEpisodeList>
      )}
    </div>
  );
};

export default EpisodeList;

const Header = styled.h2 `
padding-top: 2rem;
padding-left: 10px;
text-decoration: underline;
line-height: 1.3;
`

const StyledEpisodeList = styled.div`

`;

const EpisodeItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;
