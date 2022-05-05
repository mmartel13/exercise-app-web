import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ExerciseCard({id, name, image, sets, reps, bodyPart}) {
  return (
    <Card sx={{ width: 400 }} key={name}>
      <CardMedia
        component="img"
        alt={`Woman doing ${name}}`}
        height="400"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          {bodyPart}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sets: {sets}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Reps: {reps}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/exercise-details/${id}`}>
            <Button size="small">Details</Button>
          </Link>
      </CardActions>
    </Card>
  );
}
