import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import ListPage from './pages/ListPage';
import ShowDetails from './pages/ShowDetails';
import { WatchListProvider } from './context/WatchListContext';
import Navbar from './components/Navbar';
import SearchList from './components/SearchList';
import { useState } from 'react';
import Footer from './components/Footer';

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
         {/* Catch-all route for 404 pages */}
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Router>
      <Footer/>
      </WatchListProvider>
    </>
  )
}

export default App
