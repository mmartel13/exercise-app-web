import ExerciseCard from '../components/ExerciseCard';

export default function Home({ exercises }) {
  return (
    <section>
      <div style={{display: "flex", flexFlow: "row wrap", gap: "30px", justifyContent: "center"}}>
        {exercises.map((exercise) => {
          return (
            <ExerciseCard
              key={exercise.exercise}
              id={exercise.id}
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
