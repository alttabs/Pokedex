import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Topbar extends Component {
  render() {
    const { classes, titulo, cor } = this.props;return (
      <div className={classes.root}>
        <AppBar position="fixed" color={cor}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {titulo}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Topbar);

