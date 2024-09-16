import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail'
import ChannelDetails from './components/ChannelDetails'
import SearchFeed from './components/SearchFeed';

const App = () => (
    <Router>
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/videos/:id' element={<VideoDetail />} />
                <Route path='/cahnnel/:id' element={<ChannelDetails />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    </Router>
)

export default App
