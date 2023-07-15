import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
      <AppBar className='mb-8 sticky' >
        <Toolbar>
            <Link className='mr-3 text-xl' to='/'>Home</Link>
            <Link className='ml-2 text-xl' to='/about'>About</Link>
          <Typography variant="h3"  sx={{ flexGrow: 1 }}>
            G Core Construction
          </Typography>
        </Toolbar>
      </AppBar>
  );
}