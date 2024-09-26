/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import ImageWithSkeleton from "./skeleton/ImageWithSkeleton";

const EpisodeList = ({ episodes, loading }) => {
  return (
    <div>
      <h2>Episodes</h2>
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
              <p>{episode.summary}</p>
            </EpisodeItem>
          ))}
        </StyledEpisodeList>
      )}
    </div>
  );
};

export default EpisodeList;

const StyledEpisodeList = styled.div`
  margin-top: 1rem;
`;

const EpisodeItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;
