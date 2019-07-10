import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ErrorIcon from '@material-ui/icons/Error';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, Paper, ButtonBase } from '@material-ui/core';

class Scraping extends React.Component {

  state = {
    isLoading: false,
    url: '',
    errorInUrl: false
  }

  submit = () => {
    if (!this.state.url || !this.checkValidUrlOrNot(this.state.url)) {
      this.setState({ errorInUrl: true });
      return;
    }
    this.setState({ isLoading: true, errorInUrl: false })
  }

  checkValidUrlOrNot(urlString: string) {
    // eslint-disable-next-line
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (String(urlString).match(regex)) {
      return true;
    } else {
      return false;
    }
  }

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
              onChange={(text) => this.setState({ url: text })}
            />
          </Grid>
          <Grid item xs={2}>
            <Button 
              style={{ padding: 15, color: 'white' }} 
              variant="contained"
              disabled={ this.state.isLoading ? true : false }
              color="primary"
              onClick={() => this.submit()}
            >
              Post
            </Button>
          </Grid>
          <Grid container>
            {
              this.state.errorInUrl
              ? <Chip
                  avatar={
                    <Avatar><ErrorIcon /></Avatar>
                  }
                  label="Please check URL you entered"
                  color="secondary"
                  style={{ marginBottom: 10 }}
                  onDelete={() => { this.setState({ errorInUrl: false }) }}
                />
              : null
            }
          </Grid>
          {
            this.state.isLoading
            ? <Grid
                container
                justify="center"
                alignItems="center"
              >
                <CircularProgress />
              </Grid>
            : null
          }
          <Grid 
            container 
            justify="center"
            alignItems="center"
            style={{ flexGrow: 1 }}>
            <Paper>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase style={{ width: 128, height: 128, backgroundImage: "url('https://assets.justinmind.com/blog/wp-content/uploads/2018/08/pen-tool-illustration-768x245.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* <img
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover'
                      }}
                      alt="complex" 
                      src="https://assets.justinmind.com/blog/wp-content/uploads/2018/08/pen-tool-illustration-768x245.png" 
                    /> */}
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Standard license
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Full resolution 1920x1080 • JPEG
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        Remove
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Scraping;