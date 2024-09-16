import { Box } from '@mui/material'

import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetails = () => {

  const {id}  = useParams()
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetails(data?.items[0]));

    fetchFromApi(`search?part=snippet&channelId=${id}&order=date`)
    .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(206,3,184,1) 35%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard marginTop='-110px' channelDetail={channelDetails} />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails
