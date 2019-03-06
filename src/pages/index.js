import React from 'react'
import { graphql, Link } from 'gatsby'
import withRoot from '../withRoot';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ArticleCard from '../components/ArticleCard'
import Layout from '../components/Layout'
import Grid from '@material-ui/core/Grid'
import styles from './styles/index.jss'

const leftDrawerAttributes = {
  header : ['Intelligence', 'Perception', 'Form', 'Energy'],
  body : [],
  footer : ['Copyright Robotics Related 2019'],
}

const IndexPage = ({data}) => (
  <Layout
    leftDrawerAttributes={leftDrawerAttributes}
  >
    <Typography variant="h1" gutterBottom>
      Robotics Related
    </Typography>
    <Typography variant="h4" gutterBottom>
      Welcome to Robotics Related!
    </Typography>
    <Grid container spacing={24}>
      {data.allMarkdownRemark.edges.map(post => (
        <Grid item>
          <div key={post.node.id}>
            <ArticleCard
              title={post.node.frontmatter.title}
              author={post.node.frontmatter.author}
              date={post.node.frontmatter.date}
              path={post.node.frontmatter.path}
            />
          </div>
        </Grid>
      ))}
    </Grid>
  </Layout>
)

export const pageQuery = graphql`
  query postIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default withRoot(withStyles(styles)(IndexPage));
