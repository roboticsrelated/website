import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles/TopAppBar.jss'


function TopAppBar(props) {
  const { classes, title, toggle } = props;

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        className={classes.TopAppBar}>
        <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={toggle}
        >
        <MenuIcon/>
        </IconButton>
          <Link to="/">
            <Typography variant="h6" color="inherit">
              {title}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  toggle: PropTypes.function,
};

export default withStyles(styles)(TopAppBar);
