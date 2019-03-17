import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import styles from './styles/Article.jss'


function Article(props) {
  const { classes, title, subtitle, author, date, children} = props;
  const leftDrawerAttributes = {
    header : ['Intelligence', 'Perception', 'Form', 'Energy'],
    body : [],
    footer : ['Copyright Robotics Related 2019'],
  }

  return (
    <>
      <Layout
        leftDrawerAttributes={leftDrawerAttributes}
      >
        <div className={classes.root}>
          <Grid container justify="center" spacing={8}>
            <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
              <div className={classes.titleSection}>
                <Typography variant="h1">
                  {title}
                </Typography>
                <Typography variant="h4">
                  {subtitle}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Posted by {author} on {date}
                </Typography>
              </div>
              <div className={classes.bodySection} >
                {children}
              </div>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </>
  );
}

Article.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
};

export default withStyles(styles)(Article);
