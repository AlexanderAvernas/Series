import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useWatchList } from "../context/WatchListContext";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import DOMPurify from "dompurify";  // Import DOMPurify for sanitizing HTML
import styled from "styled-components";
import EpisodeList from "../components/EpisodeList";

const ShowDetails = () => {
    const {id} = useParams();
    const [show, setShow] = useState('');
    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingEpisodes, setLoadingEpisodes] = useState(true);
    const { dispatch } = useWatchList();

    const addToWatchList = (show) => {
        dispatch({ type: 'ADD_TO_LIST', payload: show });
      };

    useEffect(() => {
        window.scrollTo(0, 60); // This ensures the page scrolls to the top on load

        axios.get(`https://api.tvmaze.com/shows/${id}`) // Fetching specific show using the ID from the URL
        .then((response) => {
            setShow(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('error fetching show details', error);
            setLoading(false);
        });
         // Fetch episodes for the show
         axios.get(`https://api.tvmaze.com/shows/${id}/episodes`)
         .then((response) => {
             setEpisodes(response.data);
             setLoadingEpisodes(false);
             console.log(response.data);
         })
         .catch((error) => {
             console.error('Error fetching episodes', error);
             setLoadingEpisodes(false);
         });
    }, [id]);


    return (
        <div>
             {/* <p>Saved shows: {watchList.length}</p>
          <Link to="/ListPage">Link to saved shows</Link> */}
          {loading ? (
            <>
                <Container>
                <InnerContainer>
                <ImageContainer>
                <Skeleton height={400} width={250} /> {/* For the image */}
                <Skeleton height={20} width={300} /> {/* For the title */}
              </ImageContainer>
              <InfoContainer>
              <Skeleton height={20} count={3} /> {/* For the summary */}
              <Skeleton height={20} count={3} /> {/* For the summary */}
              <Skeleton height={20} width={200} count={2} /> {/* For the summary */}
              <Skeleton height={20} width={150} count={1} /> {/* For the summary */}
              <Skeleton height={30} width={100} style={{ marginTop: '10px' }} />
              </InfoContainer>
              </InnerContainer>
              </Container>
            </>
          ) : (
            <>
              {/* Show the actual content when not loading */}
              <Container>
                <InnerContainer>
                <ExitButton to="/">✖</ExitButton> {/* The button now overlays the image */}
                <ImageContainer>
              <Image src={show.image?.medium} alt={show.name} />
              <p>{show.rating.average} ⭐ </p>
              <p>First episode: {show.premiered}</p>
              <p>Last episode: {show.ended === null ? 'Still running' : show.ended}</p> {/* lägg till ternery om den är still running */}
              <AddButton onClick={() => addToWatchList(show)}>Add To List</AddButton>
              </ImageContainer>
              <InfoContainer>
              <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(show.summary) }} /> {/* Sanitize summary */}
              </InfoContainer>
              </InnerContainer>
              <EpisodeList episodes={episodes} loading={loadingEpisodes} />
              </Container>
            </>
          )}

        </div>
      );
    };
export default ShowDetails

const Container = styled.div `
display: flex;
flex-direction: column;
padding: 4rem 2rem;


@media (min-width: 1025px) {
    padding: 4rem 10rem;
}
`;

const InnerContainer = styled.div `


@media (min-width: 768px) {
    display: flex;
}
`;

const ImageContainer = styled.div`
  width: 100%; /* Ensure the container takes full width */
  margin-bottom: 20px; /* Add some spacing below the image */

  @media (min-width: 768px) {
    width: 40%;
    padding: 0rem 2rem;

}

@media (min-width: 1025px) {
    width: 30%;
}
`;

const InfoContainer = styled.div `

@media (min-width: 768px) {
    padding: 2rem;
    width: 60%;
}

`;

const ExitButton = styled(Link)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7); /* Add background to make it visible */
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; /* Change to absolute for positioning */
  top: 4.7rem;  /* Adjust position from the top */
  right: 2.8rem; /* Adjust position from the right */
  z-index: 10; /* Ensure it appears above the image */
  border: none;
  cursor: pointer;
  text-decoration: none; /* Remove underline for the link */
  font-size: 1.5rem;
  line-height: 1;
`;

const AddButton = styled.button `
background-color: #cb2eb3;
padding: 0.5rem 1rem;
font-size: 1rem;
color: white;
margin-top: 0.5rem;
cursor: pointer;
border: none;
border-radius: 5px;
transition: transform 0.2s ease, background-color 0.2s ease;
&:hover {
    background-color: #d4168d; /* Optional: a slight color change on hover */
    transform: scale(1.05);
  }
`

const Image = styled.img`
  width: 100%; /* Image takes up the full width */
  height: auto; /* Maintains aspect ratio */
  object-fit: contain; /* Ensure the image isn't cropped */
`;
