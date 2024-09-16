import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, direction = 'row' }) => {
  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent="flex-start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            flex: '1 1 300px',
            maxWidth: '300px',
            minWidth: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',  // Center items vertically
            height: '100%'  // Ensure each box takes up equal vertical space
          }}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
