import { Box } from '@mui/material';

const ImageBox = ({ src, alt, sx }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{ width: '100%', borderRadius: 2}} 
    />
  );
};

export default ImageBox;