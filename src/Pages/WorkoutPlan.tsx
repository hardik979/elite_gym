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
    "Chest Workout": [
      {
        name: "Push-Ups",
        videoUrl: "/pushups.mp4",
        reps: "8-12",
        sets: "3",
      },
      {
        name: "Incline Barbell Press",
        videoUrl: "/incline.mp4",
        reps: "8-12",
        sets: "3",
      },
      {
        name: "Flat Barbell Press",
        videoUrl: "/barbellchest.mp4",
        reps: "8-12",
        sets: "3",
      },
      {
        name: "Decline Barbell Press",
        videoUrl: "/decline.mp4",
        reps: "8-12",
        sets: "3",
      },
      {
        name: "Pec Dec Fly",
        videoUrl: "/pec.mp4",
        reps: "12-15",
        sets: "3",
      },
    ],
    "Triceps Workout": [
      {
        name: "Tricep Pushdown",
        videoUrl: "/tripush.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Bench Dips",
        videoUrl: "/dips.mp4",
        reps: "8-12",
        sets: "3",
      },
      {
        name: "Skull Crushers",
        videoUrl: "/skull.mp4",
        reps: "8-10",
        sets: "3",
      },
      {
        name: "Overhead Tricep Extension",
        videoUrl: "/overhtri.mp4",
        reps: "10-12",
        sets: "3",
      },
    ],
    "Back Workout": [
      {
        name: "Close Grip Lat PullDown",
        videoUrl: "/closelat.mp4",
        reps: "3 sets",
        sets: "8 reps",
      },
      {
        name: "Wide Grip Lat Pulldown",
        videoUrl: "/widelat.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Seated Row",
        videoUrl: "/videos/seated_row.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "T-Bar Row",
        videoUrl: "/videos/tbar_row.mp4",
        reps: "8-12",
        sets: "3",
      },

      {
        name: "Bent Over Row",
        videoUrl: "/bentover.mp4",
        reps: "8-12",
        sets: "3",
      },
    ],
    "Biceps Workout": [
      {
        name: "Barbell Curl",
        videoUrl: "/videos/barbell_curl.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Hammer Curl",
        videoUrl: "/videos/hammer_curl.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Preacher Curl",
        videoUrl: "/videos/preacher_curl.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Concentration Curl",
        videoUrl: "/videos/concentration_curl.mp4",
        reps: "10-12",
        sets: "3",
      },
    ],
    "Legs Workout": [
      {
        name: "Leg Press",
        videoUrl: "/videos/leg_press.mp4",
        reps: "12-15",
        sets: "3",
      },
      {
        name: "Squats",
        videoUrl: "/videos/squats.mp4",
        reps: "8-12",
        sets: "3",
      },
      {
        name: "Sumo Squats",
        videoUrl: "/videos/sumo_squat.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Lunges",
        videoUrl: "/videos/lunges.mp4",
        reps: "12-15",
        sets: "3",
      },
      {
        name: "Romanian Deadlifts (RDLs)",
        videoUrl: "/videos/rdls.mp4",
        reps: "8-12",
        sets: "3",
      },
      {
        name: "Leg Extensions",
        videoUrl: "/videos/leg_extension.mp4",
        reps: "12-15",
        sets: "3",
      },
      {
        name: "Leg Curls",
        videoUrl: "/videos/leg_curl.mp4",
        reps: "12-15",
        sets: "3",
      },
    ],
    "Shoulder Workout": [
      {
        name: "Shoulder Press",
        videoUrl: "/videos/shoulder_press.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Face Pulls",
        videoUrl: "/videos/face_pull.mp4",
        reps: "12-15",
        sets: "3",
      },
      {
        name: "Lateral Raises",
        videoUrl: "/videos/lateral_raise.mp4",
        reps: "12-15",
        sets: "3",
      },
      {
        name: "Front Raises",
        videoUrl: "/videos/front_raise.mp4",
        reps: "12-15",
        sets: "3",
      },
      {
        name: "Shrugs",
        videoUrl: "/videos/shrugs.mp4",
        reps: "15-20",
        sets: "3",
      },
    ],
    "Abs Workout": [
      {
        name: "Crunches",
        videoUrl: "/videos/crunches.mp4",
        reps: "15-20",
        sets: "3",
      },
      {
        name: "Knee Raises",
        videoUrl: "/videos/knee_raises.mp4",
        reps: "12-15",
        sets: "3",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleExerciseClick = (exerciseName: string) => {
    setSelectedExercise(
      selectedExercise === exerciseName ? null : exerciseName
    );
  };

  return (
    <div className="container font-montesrrat mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Workout Plan</h1>

      <div className="space-y-6">
        {Object.keys(workoutPlan).map((category) => (
          <div key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              className="w-full text-left text-2xl font-semibold py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500"
            >
              {category}
            </button>

            {selectedCategory === category && (
              <div className="mt-4 space-y-4">
                {workoutPlan[category].map((exercise, index) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-2 p-2 bg-gray-100 rounded-md shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xl">{exercise.name}</span>
                      <button
                        onClick={() => handleExerciseClick(exercise.name)}
                        className="text-blue-600 hover:underline"
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
