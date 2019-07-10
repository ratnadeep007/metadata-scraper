import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ErrorIcon from '@material-ui/icons/Error';
import MetadataCard from './MetadataCard';
import axiosInstance from '../config/interceptor';

class Scraping extends React.Component {

  state = {
    isLoading: false,
    url: '',
    error: false,
    errorText: '',
    resultData: []
  }

  submit = () => {
    if (!this.state.url) {
      this.setState({ error: true, errorText: 'Please enter a valid url' });
      return;
    }
    this.setState({ isLoading: true, error: false });
    const localStorageScrapeData = this.getItemFromLocalStorage(this.state.url);
    
    /**
     * Getting data from localstorage if present no need to call api 
     */
    if (localStorageScrapeData['url'] || localStorageScrapeData['canonicalUrl']) {
      this.setState({
        resultData: [localStorageScrapeData]
      });
      return;
    }

    axiosInstance
      .post(`scrape?url=${this.state.url}`)
      .then(res => {
        console.log('response', res);
        this.setState({
          isLoading: false,
          resultData: res.data
        });
        this.setItemInLocalStorage(this.state.url, res.data);
        console.log(this.state);
      })
      .catch(err => {
        console.log('error', err);
        this.setState({
          isLoading: false,
          error: true,
          errorText: 'Some error occured will fix it soon'
        })
      });
  }

  /**
   * Setting data for offline
   */
  setItemInLocalStorage = (url: string, data: {}) => {
    localStorage.setItem(url + '-emcode-metascraper', JSON.stringify(data));
  }

  /**
   * Getiing data according to url
   */
  getItemFromLocalStorage = (url: string) => {
    return JSON.parse(localStorage.getItem(url + '-emcode-metascraper') || `{}`)
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
              onChange={(event) => this.setState({ url: event.target.value })}
            />
          </Grid>
          <Grid item xs={2}>
            <Button 
              style={{ padding: 15, color: 'white' }} 
              variant="contained"
              disabled={ this.state.isLoading ? true : false }
              color="primary"
              onClick={() => this.submit()}
              fullWidth
            >
              Post
            </Button>
          </Grid>
          <Grid container>
            {
              this.state.error
              ? <Chip
                  avatar={
                    <Avatar><ErrorIcon /></Avatar>
                  }
                  label={this.state.errorText}
                  color="secondary"
                  style={{ marginBottom: 10 }}
                  onDelete={() => { this.setState({ error: false }) }}
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
          {
            !this.state.isLoading && this.state.resultData.length
            ? <MetadataCard metadata={this.state.resultData[0]} />
            : null
          }
        </Grid>
      </div>
    );
  }
}

export default Scraping;