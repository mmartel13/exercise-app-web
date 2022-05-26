import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

export default function ExerciseDetails() {
  const params = useParams();
  const [exerciseDetails, setExerciseDetails] = useState({});

  const handleSave = () => {
    if (localStorage.getItem('userExercises')) {
      let userExercises = JSON.parse(localStorage.getItem('userExercises'));
      userExercises.push(exerciseDetails);
      localStorage.setItem('userExercises', JSON.stringify(userExercises));
    } else {
      let userExercises = [];
      userExercises.push(exerciseDetails);
      localStorage.setItem('userExercises', JSON.stringify(userExercises));
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/exercises/${params.id}`)
      .then((res) => res.json())
      .then((data) => setExerciseDetails(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Container
        style={{ display: 'flex', flexDirection: 'column' }}
        maxWidth="sm"
      >
        <img
          style={{ display: 'block', margin: 'auto' }}
          src={exerciseDetails.image}
          alt={`Woman doing ${exerciseDetails.exercise}`}
        />
        <h1 style={{ textAlign: 'center' }}>{exerciseDetails.exercise}</h1>
        <h2 style={{ textAlign: 'center', fontSize: '24px' }}>
          {exerciseDetails.bodyPart}
        </h2>
        <h3 style={{ fontSize: '15px' }}>{exerciseDetails.description}</h3>
        <Button variant="contained" style={{ width: 'auto', margin: "0 auto",  }}>
          Save Workout
        </Button>
      </Container>
    </>
  );
}
