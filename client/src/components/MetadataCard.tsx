import React from 'react';
import {Grid, Paper, ButtonBase, Typography, Tooltip } from '@material-ui/core';

class MetadataCard extends React.Component {
  state = {
    testString: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, laudantium deleniti, numquam eum sint harum delectus unde atque voluptatem recusandae quidem laboriosam dolorum eaque. Laboriosam harum ab nulla minima odio!'
  }

  openUrl = (url: string) => {
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
        <Tooltip title="Clicking on card will open new tab" onClick={() => this.openUrl('https://www.google.com')}>
          <Paper style={{ width: 'inherit'}}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase style={{ width: 128, height: 128, backgroundImage: "url('https://assets.justinmind.com/blog/wp-content/uploads/2018/08/pen-tool-illustration-768x245.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {this.state.testString.substring(0, 27)}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
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