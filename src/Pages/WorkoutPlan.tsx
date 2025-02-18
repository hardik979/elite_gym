import React, { useState, Suspense } from "react";
import ReactPlayer from "react-player";

interface Exercise {
  name: string;
  videoUrl: string;
  reps: string; // e.g., "3 sets of 10 reps"
  sets: string; // e.g., "3 sets of 10 reps"
}

interface WorkoutPlan {
  [key: string]: Exercise[];
}

const WorkoutPage: React.FC = () => {
  const workoutPlan: WorkoutPlan = {
    "Day 1: Chest & Triceps": [
      {
        name: "Push Ups",
        videoUrl: "/pushups.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Chest Press",
        videoUrl: "/barbellchest.mp4",
        reps: "4 sets",
        sets: "8 reps",
      },
    ],
    "Day 2: Back & Biceps": [
      {
        name: "Pull Ups",
        videoUrl: "/videos/pull_ups.mp4",
        reps: "3 sets",
        sets: "8 reps",
      },
      {
        name: "Barbell Rows",
        videoUrl: "/videos/barbell_rows.mp4",
        reps: "4 sets",
        sets: "10 reps",
      },
    ],
    "Day 3: Legs & shoulder": [
      {
        name: "Pull Ups",
        videoUrl: "/videos/pull_ups.mp4",
        reps: "3 sets",
        sets: "8 reps",
      },
      {
        name: "Barbell Rows",
        videoUrl: "/videos/barbell_rows.mp4",
        reps: "4 sets",
        sets: "10 reps",
      },
    ],
    "Day 4: chest & Triceps": [
      {
        name: "Pull Ups",
        videoUrl: "/videos/pull_ups.mp4",
        reps: "3 sets",
        sets: "8 reps",
      },
      {
        name: "Barbell Rows",
        videoUrl: "/videos/barbell_rows.mp4",
        reps: "4 sets",
        sets: "10 reps",
      },
    ],
    "Day 5: Back & Biceps": [
      {
        name: "Pull Ups",
        videoUrl: "/videos/pull_ups.mp4",
        reps: "3 sets",
        sets: "8 reps",
      },
      {
        name: "Barbell Rows",
        videoUrl: "/videos/barbell_rows.mp4",
        reps: "4 sets",
        sets: "10 reps",
      },
    ],
    "Day 6: Legs & shoulder": [
      {
        name: "Pull Ups",
        videoUrl: "/videos/pull_ups.mp4",
        reps: "3 sets",
        sets: "8 reps",
      },
      {
        name: "Barbell Rows",
        videoUrl: "/videos/barbell_rows.mp4",
        reps: "4 sets",
        sets: "10 reps",
      },
    ],
    // Add other days with their respective exercises
  };

  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const handleDayClick = (day: string) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const handleExerciseClick = (exerciseName: string) => {
    setSelectedExercise(
      selectedExercise === exerciseName ? null : exerciseName
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Workout Plan</h1>

      <div className="space-y-6">
        {Object.keys(workoutPlan).map((day) => (
          <div key={day}>
            <button
              onClick={() => handleDayClick(day)}
              className="w-full text-left text-2xl font-semibold py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              {day}
            </button>

            {selectedDay === day && (
              <div className="mt-4 space-y-4">
                {workoutPlan[day].map((exercise, index) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-2 p-2 bg-gray-100 rounded-md shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xl">{exercise.name}</span>
                      <button
                        onClick={() => handleExerciseClick(exercise.name)}
                        className="text-purple-600 hover:underline"
                      >
                        {selectedExercise === exercise.name
                          ? "Close"
                          : "View Exercise"}
                      </button>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span>Reps: {exercise.reps}</span> |{" "}
                      <span>Sets: {exercise.sets}</span>
                    </div>

                    {selectedExercise === exercise.name && (
                      <div className="mt-4 p-4 bg-black rounded-md">
                        <Suspense fallback={<div>Loading video...</div>}>
                          <ReactPlayer
                            url={exercise.videoUrl}
                            playing
                            loop
                            controls
                            width="100%"
                            height="auto"
                          />
                        </Suspense>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPage;
