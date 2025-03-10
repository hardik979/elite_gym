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

const WorkoutPage3: React.FC = () => {
  const beginnerWorkoutPlan: WorkoutPlan = {
    "Day 1 : Back ": [
      {
        name: "Wide Grip Lat Pulldown",
        videoUrl: "/widelat.mp4",
        reps: "10-12",
        sets: "3",
      },

      {
        name: "Seated Row",
        videoUrl: "/seatedrow.mp4",
        reps: "8-12",
        sets: "3",
      },
      {
        name: "dumbell Row",
        videoUrl: "/barbellbent.mp4",
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
    "Day 2 : Biceps ": [
      {
        name: "barbell Curl",
        videoUrl: "/barbellcurl.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Dumbbell Curl",
        videoUrl: "/dumbbelcurl.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Hammer Curl",
        videoUrl: "/hammer.mp4",
        reps: "10-12",
        sets: "3",
      },

      {
        name: "Preacher Curl",
        videoUrl: "/preacher.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Cable Curl",
        videoUrl: "/cablebic.mp4",
        reps: "10-12",
        sets: "3",
      },
    ],
    "Day 3 : Chest ": [
      {
        name: "Push-Ups",
        videoUrl: "/pushups.mp4",
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
        name: "Incline Barbell Press",
        videoUrl: "/incline.mp4",
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
        name: "Dumbbell Chest Press",
        videoUrl: "/dumbchest.mp4",
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

    "Day 4 : Triceps": [
      {
        name: "Bar Tricep Pushdown",
        videoUrl: "/tripush.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Rope Tricep Pushdown",
        videoUrl: "/ropetri.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Dumbbell Overhead Tricep Extension",
        videoUrl: "/dumbbeloverheadext.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Single Arm Tricep Extension",
        videoUrl: "/singletri.mp4",
        reps: "10-12",
        sets: "3",
      },
    ],
    "Day 5 : Shoulders": [
      {
        name: "Shoulder Press",
        videoUrl: "/shoulderpress.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Barbell Shoulder Press",
        videoUrl: "/barbellover.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Lateral Raises",
        videoUrl: "/lateralraise.mp4",
        reps: "12-15",
        sets: "3",
      },
      {
        name: "Rear Delt Fly",
        videoUrl: "/reardeltfly.mp4",
        reps: "12-15",
        sets: "3",
      },
      {
        name: "Upright Row",
        videoUrl: "/uprightrow.mp4",
        reps: "12-15",
        sets: "3",
      },
      {
        name: "Shrugs",
        videoUrl: "/shrugs.mp4",
        reps: "15-20",
        sets: "3",
      },
    ],

    "Day 6 : Legs": [
      {
        name: "Squats",
        videoUrl: "/squats.mp4",
        reps: "8-12",
        sets: "3",
      },
      {
        name: "Leg Press",
        videoUrl: "/legpress.mp4",
        reps: "12-15",
        sets: "3",
      },

      {
        name: "Leg Extensions",
        videoUrl: "/extension.mp4",
        reps: "10-12",
        sets: "3",
      },
      {
        name: "Hamstring Curl",
        videoUrl: "/hamstringcurl.mp4",
        reps: "12-15",
        sets: "3",
      },
    ],

    "Abs Workout ": [
      {
        name: "Situps",
        videoUrl: "/situps.mp4",
        reps: "15-20",
        sets: "3",
      },
      {
        name: "Lying Leg Raises",
        videoUrl: "/lyingleg.mp4",
        reps: "12-15",
        sets: "3",
      },
      {
        name: "Hanging Leg Raises",
        videoUrl: "/hangingleg.mp4",
        reps: "12-15",
        sets: "3",
      },
    ],
  };
  const advancedWorkoutPlan: WorkoutPlan = {
    "Advanced Chest Exercies": [
      {
        name: "Bar Dips",
        videoUrl: "/bardips.mp4",
        reps: "8-12",
        sets: "3",
      },
    ],
    "Advanced Triceps Workout": [
      {
        name: "Bench Dips",
        videoUrl: "/dips.mp4",
        reps: "8-12",
        sets: "3",
      },
    ],
    "Advanced Back Workout": [
      {
        name: "Pull Ups",
        videoUrl: "/pullps.mp4",
        reps: "8-12",
        sets: "3",
      },
      {
        name: "Lat Pull Over",
        videoUrl: "/lattpulover.mp4",
        reps: "10-12",
        sets: "3",
      },
    ],
    "Advanced Biceps Workout": [
      {
        name: "Spider Curl",
        videoUrl: "/spidercurl.mp4",
        reps: "8-12",
        sets: "3",
      },
    ],
    "Advanced Legs Workout": [
      {
        name: "Dead Lifts",
        videoUrl: "/deadlifts.mp4",
        reps: "8-12",
        sets: "3",
      },
    ],

    "Advanced Abs Workout": [
      {
        name: "Cable Crunches",
        videoUrl: "/kneelcable.mp4",
        reps: "8-12",
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
    <div className="container font-montserrat mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Workout Plan</h1>

      {/* Beginner Workouts Section */}
      <h2 className="text-3xl font-bold text-center mb-4">Beginner Workouts</h2>
      <div className="space-y-6">
        {Object.keys(beginnerWorkoutPlan).map((category) => (
          <div key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              className="w-full text-left text-2xl font-semibold py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500"
            >
              {category}
            </button>

            {selectedCategory === category && (
              <div className="mt-4 space-y-4">
                {beginnerWorkoutPlan[category].map((exercise, index) => (
                  <div
                    key={index}
                    className="p-2 bg-gray-100 rounded-md shadow-sm"
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

      {/* Advanced Workouts Section */}
      <h2 className="text-3xl font-bold text-center mt-8 mb-4">
        Advanced Workouts
      </h2>
      <p className="text-center text-gray-700 mb-4">
        *You can add these exercises after 2-3 months of consistent workout.*
      </p>
      <div className="space-y-6">
        {Object.keys(advancedWorkoutPlan).map((category) => (
          <div key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              className="w-full text-left text-2xl font-semibold py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-500"
            >
              {category}
            </button>

            {selectedCategory === category && (
              <div className="mt-4 space-y-4">
                {advancedWorkoutPlan[category].map((exercise, index) => (
                  <div
                    key={index}
                    className="p-2 bg-gray-100 rounded-md shadow-sm"
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

export default WorkoutPage3;
