import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Scraping extends React.Component {

  render() {
    return (
      <div style={{ flexGrow: 1, marginTop: 15 }}>
        <Grid
          container
          direction="row"
          spacing={3}
        >
          <Grid item xs={10}>
            <TextField
              label="URL"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <Button 
              style={{ padding: 15, color: 'white' }} 
              variant="contained" 
              color="primary"
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Scraping;