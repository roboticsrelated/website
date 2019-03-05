import React from 'react'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styles from './styles/ArticleCard.jss'

function ArticleCard(props) {
  const { classes, title, author, date, path } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4">
          {title}
        </Typography>
        <Typography variant="h5">
          {author}
        </Typography>
        <Typography variant="h6">
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(path)}>
          <Typography variant="h6">
            Read More
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

ArticleCard.propTypes = {
  classes : PropTypes.object.isRequired,
  title : PropTypes.string.isRequired,
  author : PropTypes.string,
  date : PropTypes.string,
  path : PropTypes.string,
};

export default withStyles(styles)(ArticleCard);
