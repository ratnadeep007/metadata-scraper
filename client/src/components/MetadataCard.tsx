import React from 'react';
import {Grid, Paper, ButtonBase, Typography, Tooltip } from '@material-ui/core';

class MetadataCard extends React.Component<any, any> {
  state = {
    testString: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, laudantium deleniti, numquam eum sint harum delectus unde atque voluptatem recusandae quidem laboriosam dolorum eaque. Laboriosam harum ab nulla minima odio!'
  }

  constructor(props: any) {
    super(props);
    console.log(this.props.metadata);
  }

  openUrl = (url: string) => {
    console.log('url', url);
    window.open(url, "_blank");
  }

  render() {
    return (
      <Grid 
        container 
        justify="center"
        alignItems="center"
        style={{ flexGrow: 1 }}
      >
        <Tooltip title="Clicking on card will open new tab" onClick={() => this.openUrl(this.props.metadata.canonicalUrl)}>
          <Paper style={{ width: 'inherit'}}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase style={{ width: 128, height: 128, backgroundImage: `url('${this.props.metadata.image[0].url}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {this.props.metadata.headline}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {this.props.metadata.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Tooltip>
      </Grid>
    );
  }
}

export default MetadataCard;