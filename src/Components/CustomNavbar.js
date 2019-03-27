import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';

const styles = () => ( {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  HomeButton: {
    marginLeft: 20,
    marginRight: -12,
  },
  title: {
    flexGrow: 1,
  }
});

class CustomNavbar extends Component {
  render() {
    const { title, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              {title}
          </Typography>
          <IconButton className={classes.HomeButton} color="inherit" aria-label="Open drawer">
              <HomeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(CustomNavbar);