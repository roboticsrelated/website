import React from 'react';
import { navigate } from 'gatsby'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SmallCard(props) {
  const { classes, data } = props;
  console.log(data);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="title">
          {data.title}
        </Typography>
        <Typography variant="subtitle1">
          {data.author}
        </Typography>
        <Typography variant="subtitle2">
          {data.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(data.path)}>
          <Typography variant="subtitle2">
            Read More
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

SmallCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(SmallCard);
