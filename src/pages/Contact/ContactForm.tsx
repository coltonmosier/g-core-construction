// Contact.tsx
import React from 'react';
import { Grid, Typography, Box, Button, Link } from '@mui/material';

const Contact = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        CONTACT US
      </Typography>
      <Typography variant="body1" paragraph>
        Ready for the home you’ve always wanted? Please contact us for more 
        information or a private tour of one of our models or lots. Your 
        Pseudo Home representative will contact you right away and schedule 
        a meeting that same day.
      </Typography>
      <Typography variant="body1" paragraph>
        We can’t wait to show you the possibilities!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Call Us Today! (123) 456-7890
      </Typography>
      <Typography variant="body1">
        1234 Pseudo Street, Suite 101, Pseudo City, PS 12345
      </Typography>
      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="outlined" color="primary">
              Gallery 1
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Gallery 2
            </Button>
          </Grid>
          {/* add more gallery items as needed */}
        </Grid>
      </Box>
      <Box mt={4}>
        <Typography variant="body1">
          1234 Pseudo Street, Suite 101, Pseudo City, PS 12345 | Phone: (123) 456-7890
        </Typography>
        <Typography variant="body1">
          © Copyright 2023 Pseudo Homes | All Rights Reserved
        </Typography>
      </Box>
      <Box mt={2}>
        <Link href="#" color="inherit">
          Facebook
        </Link>
        {' | '}
        <Link href="#" color="inherit">
          YouTube
        </Link>
        {' | '}
        <Link href="#" color="inherit">
          Instagram
        </Link>
        {' | '}
        <Link href="#" color="inherit">
          Houzz
        </Link>
        {' | '}
        <Link href="#" color="inherit">
          Houzz
        </Link>
      </Box>
    </Box>
  );
};

export default Contact;
