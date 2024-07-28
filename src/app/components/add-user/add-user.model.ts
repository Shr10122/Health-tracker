export const workoutOptions = [
  { value: 'Yoga', viewValue: 'Yoga' },
  { value: 'Cycling', viewValue: 'Cycling' },
  { value: 'Swimming', viewValue: 'Swimming' },
  { value: 'Running', viewValue: 'Running' },
  { value: 'Gym', viewValue: 'Gym' },
];

export interface Workout {
  type: string | null;
  minutes: number;
}
