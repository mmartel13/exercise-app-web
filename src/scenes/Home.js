import ExerciseCard from '../components/ExerciseCard';

export default function Home({ exercises }) {
  return (
    <section>
      <h1>Home</h1>
      <div style={{display: "flex", flexFlow: "row wrap", gap: "30px", justifyContent: "center"}}>
        {exercises.map((exercise) => {
          return (
            <ExerciseCard
              key={exercise.exercise}
              name={exercise.exercise}
              image={exercise.image}
              sets={exercise.sets}
              reps={exercise.reps}
              description={exercise.description}
              bodyPart={exercise.bodyPart}
            />
          );
        })}
      </div>
    </section>
  );
}
