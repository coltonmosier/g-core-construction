// ContactInformation.tsx
import React from 'react';
import { Typography, Box, Link, Divider, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';

const ContactInformation = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      <Divider style={{ width: '100%', marginBottom: '20px' }} />
      <Typography variant="h2" gutterBottom style={{ textAlign: 'center' }}>
        Ready for the home you’ve always wanted?
      </Typography>
      <Typography variant="body1" paragraph style={{ textAlign: 'center' }}>
        Please contact us for more information or a private tour of one of our models or lots. Your {' '}
        <Link href="https://paulallenhomes.com">Paul Allen Homes</Link> representative will contact you right away and schedule a meeting that same day.
      </Typography>
      <Typography variant="body1" paragraph style={{ textAlign: 'center' }}>
        We can’t wait to show you the possibilities!
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText>
            Call Us Today! <Link href="tel:210-493-3204">(210) 493-3204</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText>
            <Link href="https://www.google.com/maps/place/3010+Napier+Pk+Suite+101,+San+Antonio,+TX+78231,+USA/@29.5995294,-98.5439492,17z/data=!3m1!4b1!4m6!3m5!1s0x865c61648e5f81cf:0xac3e909d234fe543!8m2!3d29.5995248!4d-98.5413743!16s%2Fg%2F11tf42rkvs">
              3010 Napier Park, Suite 101, San Antonio, TX 78231
            </Link>
          </ListItemText>
        </ListItem>
      </List>
      <Divider style={{ width: '100%', marginTop: '20px' }} />
      <Box mt={2}>
        <iframe
          src="https://webforms.topbuildersolutions.net/PaulAllenHomes/PaulAllenHomesContactUs.aspx"
          scrolling="no"
          frameBorder="0"
          style={{ width: '100%', height: '520px', maxWidth: '650px', padding: '0px', margin: '0px' }}
        >
          <p>If you can read this message, your browser does not support iFrames. Please modify your browser options to support iFrames.</p>
        </iframe>
      </Box>
      <Divider style={{ width: '100%', marginTop: '50px', marginBottom: '50px' }} />
    </Box>
  );
};

export default ContactInformation;
