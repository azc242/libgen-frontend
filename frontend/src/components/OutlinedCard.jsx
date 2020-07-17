import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
});

function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const year = props.year === "0" ? "" : props.year;
  const pages = ( props.pages === undefined || props.pages === 0 )? " " : (" | " + props.pages + " pages")
  const extension = props.extension === undefined ? "N/A" : props.extension;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {year}{pages}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.author}
        </Typography>
        <Typography variant="body2" component="p">
          Extension: {extension}
          <br />
        </Typography>
      </CardContent>
      <CardActions className="align-center">
        <a href={props.download} target="_blank">
        <Button size="small">Download</Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default OutlinedCard;