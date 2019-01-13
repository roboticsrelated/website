import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  title: {

  },
  publishInfo: {

  },
  body: {

  },
  background: {

  },

});

function Template({data}) {
  const post = data.markdownRemark

  return (
    <div>
      <Layout>
        <Link to="/">Go Back</Link>
        <Typography variant="h1" color="inherit">
          {post.frontmatter.title}
        </Typography>
        <Typography variant="h6" color="inherit">
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
