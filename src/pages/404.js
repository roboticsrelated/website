import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/Layout'
import styles from './styles/404.jss'

const leftDrawerAttributes = {
  header : ['Intelligence', 'Perception', 'Form', 'Energy'],
  body : [],
  footer : ['Copyright Robotics Related 2019'],
}

const NotFoundPage = () => (
  <Layout
    leftDrawerAttributes={leftDrawerAttributes}
  >
    <Typography variant="h1">NOT FOUND</Typography>
    <Typography variant="body1">
      The page you are looking for does not exist.
    </Typography>
  </Layout>
)

export default withStyles(styles)(NotFoundPage);
