import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ListPage from './pages/ListPage';
import ShowDetails from './pages/ShowDetails';
import { WatchListProvider } from './context/WatchListContext';
import Navbar from './components/Navbar';
import SearchList from './components/SearchList';
import { useState } from 'react';

function App() {

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
    };

  return (
    <>
<WatchListProvider>
    <Router>
    <Navbar onSearchClick={toggleSearch}/>
    {isSearchOpen && <SearchList onClose={toggleSearch} />}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListPage" element={<ListPage />} />
        <Route path="/show/:id" element={<ShowDetails/>} />
      </Routes>
      </Router>
      </WatchListProvider>
    </>
  )
}

export default App
