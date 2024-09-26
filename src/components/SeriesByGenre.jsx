import { Link } from "react-router-dom";
import { useWatchList } from "../context/WatchListContext";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

/* eslint-disable react/prop-types */
  const SeriesByGenre = ({ title, series, loading }) => {
  const { dispatch } = useWatchList();

  const addToWatchList = (show) => {
    dispatch({ type: 'ADD_TO_LIST', payload: show });
  };

  return (
    <div>
      <Header>{title}</Header>
      <Container>
        {loading
          ? [1, 2, 3, 4].map((key) => (
              <InnerContainer key={key}>
                <Skeleton height={300} width={200} />
                <Skeleton height={20} width={150} style={{ margin: '10px 0' }} />
                <Skeleton height={30} width={100} />
              </InnerContainer>
            ))
          : series.map((show) => (
              <InnerContainer key={show.id}>
                <Link to={`/show/${show.id}`}>
                  <img src={show.image?.medium} alt={show.name} />
                  <p>Actors: {show.actors?.join(', ') || 'N/A'}</p>
                  <button onClick={() => addToWatchList(show)}>Add To List</button>
                </Link>
              </InnerContainer>
            ))}
      </Container>
    </div>
  );
};

const Header = styled.h1 `
color: blue;
`
const Container = styled.div `
display: flex;
overflow-x: scroll;
`
const InnerContainer = styled.div `
margin: 0rem 0.5rem;
`

export default SeriesByGenre;
