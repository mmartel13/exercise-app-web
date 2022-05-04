import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './scenes/Home';
import ExerciseDetails from './scenes/ExerciseDetails';
import MyAccount from './scenes/MyAccount';
import Header from './components/Header';

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/exercises')
    .then(res => res.json())
    .then(data => setExercises(data))
    .catch(error => console.error(error))
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home exercises={exercises} />} />
        <Route path="/exercise-details/:id" element={<ExerciseDetails />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </>
  );
}

export default App;
