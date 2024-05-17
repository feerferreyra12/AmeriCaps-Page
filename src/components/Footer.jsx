import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { pink } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
import '../styles/FooterStyle.css';

export const Footer = () => {
  return (
    <div className="footer">
      <h4>✨Nuestras redes Sociales✨</h4>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px'}} className='icon-redes'>
      <Tooltip title="Instagram">
    <Fab sx={{ color: pink[500], fontSize: { xs: 'small', md: 'medium' }, margin: '0 4px' }} aria-label="add" size="medium">
      <InstagramIcon />
    </Fab>
  </Tooltip>
  <Tooltip title="WhatsApp">
    <Fab color="success" aria-label="edit" size="medium" sx={{ margin: '0 4px' }}>
      <WhatsAppIcon/>
    </Fab>
  </Tooltip>
  <Tooltip title="Facebook">
    <Fab color="primary" aria-label="like" size="medium" sx={{ margin: '0 4px' }}>
      <FacebookIcon/>
    </Fab>
  </Tooltip>
  <Tooltip title="Tik-Tok">
    <Fab aria-label="like" size="medium" sx={{ margin: '0 4px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
    </svg>
    </Fab>
  </Tooltip>
      </Box>
    </div>
  );
};


