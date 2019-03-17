import React from 'react'
import RehypeReact from 'rehype-react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Article from '../components/Article'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles/post.jss'


const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: (props) => <Typography variant='h1' {...props} />,
    h2: (props) => <Typography variant='h2' {...props} />,
    h3: (props) => <Typography variant='h3' {...props} />,
    h4: (props) => <Typography variant='h4' {...props} />,
    h5: (props) => <Typography variant='h5' {...props} />,
    h6: (props) => <Typography variant='h6' {...props} />,
    p : (props) => <Typography variant='body1' paragraph {...props} />,
  }
}).Compiler

function Template({data}) {
  const post = data.markdownRemark

  console.log(data)
  return (
    <div>
      <Article
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
      >
        {renderAst(post.htmlAst)}
      </Article>
    </div>
  )
}

export const postQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      htmlAst
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
