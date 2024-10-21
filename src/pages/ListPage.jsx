import { Link } from "react-router-dom";
import { useWatchList } from "../context/WatchListContext";
import styled from 'styled-components';
import Skeleton from "react-loading-skeleton";

const ListPage = () => {
  const { watchList, dispatch } = useWatchList(); // Get the saved shows and dispatch function

  const removeFromWatchList = (id) => {
    dispatch({ type: 'REMOVE_FROM_LIST', payload: id });
  };

  const isLoading = false; // Simulate a loading state if needed

  return (
    <Container>
      <h1>Must Watch List</h1>

      {watchList.length > 0 ? (
        <GridContainer>
          {isLoading ? (
            // Hardcoded skeletons
            <>
              <ShowCard>
                <Skeleton height={170} width={120} />
                <Skeleton height={20} width={100} style={{ margin: "10px 0" }} />
                <Skeleton height={30} width={80} />
              </ShowCard>
              <ShowCard>
                <Skeleton height={170} width={120} />
                <Skeleton height={20} width={100} style={{ margin: "10px 0" }} />
                <Skeleton height={30} width={80} />
              </ShowCard>
              <ShowCard>
                <Skeleton height={170} width={120} />
                <Skeleton height={20} width={100} style={{ margin: "10px 0" }} />
                <Skeleton height={30} width={80} />
              </ShowCard>
            </>
          ) : (
            watchList.map((show) => (
              <ShowCard key={show.id}>
                <Link to={`/show/${show.id}`}>
                {show.image ? (
                  <img src={show.image.medium} alt={show.name} />
                ) : (
                  <Skeleton height={170} width={120} />
                )}
                </Link>
                <RemoveButton onClick={() => removeFromWatchList(show.id)}>
                  Remove
                </RemoveButton>
              </ShowCard>
            ))
          )}
        </GridContainer>
      ) : (
        <p>No shows in your watch list</p>
      )}
    </Container>
  );
};

export default ListPage;

// Styled components for layout

const Container = styled.div`
  padding: 4rem 1rem;
  text-align: center;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ShowCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #312c2c;
  border-radius: 10px;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const RemoveButton = styled.button`
  background-color: #cb2eb3;
  color: white;
  padding: 0.2rem 0.6rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: transform 0.2s ease, background-color 0.2s ease;
  &:hover {
    background-color: #d4168d; /* Optional: a slight color change on hover */
    transform: scale(1.05);
  }
`;
