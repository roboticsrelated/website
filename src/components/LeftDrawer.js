import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import styles from './styles/LeftDrawer.jss'

class LeftDrawer extends React.Component {

  createHeader = (headerData) => {
    const headerTitle = 'Topics'
    return (
    <>
    <List>
      <ListItem button key={headerTitle}>
        <ListItemText primary={headerTitle} />
      </ListItem>
      {headerData.map((text, index) => (
        <ListItem button key={text}>
          <ListItemText secondary={text} />
        </ListItem>
      ))}
    </List>
    <Divider/>
    </>
    )
  }

  createBody = (bodyData) => {
    return (
      <>
        <List>
          {bodyData.map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider/>
      </>
    )
  }

  createFooter = (footerData) => {
    return (
      <>
      <List>
        {footerData.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      </>
    )
  }

  render () {
    const { classes, open, header, body, footer } = this.props;
    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          { (header.length > 0) ?
            this.createHeader(header) : null}
          { (body.length > 0) ?
            this.createBody(body) : null}
          { (footer.length > 0) ?
            this.createFooter(footer) : null}
        </Drawer>
      </div>
    )
  }
}


LeftDrawer.propTypes = {
  classes : PropTypes.object.isRequired,
  open : PropTypes.bool,
  header : PropTypes.array,
  body : PropTypes.array,
  footer : PropTypes.array,
};

export default withStyles(styles)(LeftDrawer);
