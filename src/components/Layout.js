import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopAppBar from './TopAppBar'
import LeftDrawer from './LeftDrawer'
import styles from './styles/Layout.jss'


class Layout extends React.Component {
  state = {
    sideBarOpen: false,
  };

  toggleSideBar = () => {
    this.setState(function(prevState, props){
      return {sideBarOpen: !prevState.sideBarOpen}
   });
  }

  render() {
    const { children, classes, leftDrawerAttributes } = this.props
    const { open } = this.state

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: 'Home for articles, tutorials, and demonstrations ' +
                           'on anything related to robotics.'
                },
                {
                  name: 'keywords',
                  content: 'robotics, tutorials, articles, videos, robots, ' +
                           'computer vision, SLAM, artifical intelligence'
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <CssBaseline />
            <LeftDrawer
              open={this.state.sideBarOpen}
              header={leftDrawerAttributes.header}
              body={leftDrawerAttributes.body}
              footer={leftDrawerAttributes.footer}
            />
            <TopAppBar
              title={data.site.siteMetadata.title}
              toggle={this.toggleSideBar}
            />
            <main className={classes.content}>
              {children}
            </main>
          </div>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  leftDrawerAttributes : PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout);
