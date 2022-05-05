import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ExerciseDetails() {
  const params = useParams()
  const [exerciseDetails, setExerciseDetails] = useState({});

  const handleSave = () => {
    if(localStorage.getItem('userExercises')){
      let userExercises = JSON.parse(localStorage.getItem('userExercises'))
      userExercises.push(exerciseDetails)
      localStorage.setItem('userExercises', JSON.stringify(userExercises))
    }
    else {
      let userExercises = []
      userExercises.push(exerciseDetails)
      localStorage.setItem('userExercises', JSON.stringify(userExercises))
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3000/exercises/${params.id}`)
    .then(res => res.json())
    .then(data => setExerciseDetails(data))
    .catch(error => console.error(error))
  },[])

  return (
    <>
    <img src={exerciseDetails.image} alt={`Woman doing ${exerciseDetails.exercise}`}/>
    <h1>{exerciseDetails.exercise}</h1>
    <h2>{exerciseDetails.bodyPart}</h2>
    <h3>{exerciseDetails.description}</h3>
    <button onClick={handleSave}>Save Workout</button>
    </>
  )
  
}
