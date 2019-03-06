import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/Layout'
import styles from './styles/about.jss'

const leftDrawerAttributes = {
  header : ['Intelligence', 'Perception', 'Form', 'Energy'],
  body : [],
  footer : ['Copyright Robotics Related 2019'],
}


const AboutPage = () => {
  return (
    <Layout
      leftDrawerAttributes={leftDrawerAttributes}
    >
      <Typography variant="h1">About Robotics Related</Typography>
      <Typography variant="body1">
        Robotics Related is the home for things related to robotics.
      </Typography>
    </Layout>
  )
}

export default withStyles(styles)(AboutPage);
