import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles/post.jss'


function Template({data}) {
  const post = data.markdownRemark
  const leftDrawerAttributes = {
    header : ['Intelligence', 'Perception', 'Form', 'Energy'],
    body : [],
    footer : ['Copyright Robotics Related 2019'],
  }

  return (
    <div>
      <Layout
        leftDrawerAttributes={leftDrawerAttributes}
      >
        <Link to="/">Go Back</Link>
        <Typography variant="h1">
          {post.frontmatter.title}
        </Typography>
        <Typography variant="h6">
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </Typography>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </Layout>
    </div>
  )
}

export const postQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default withStyles(styles)(Template);
