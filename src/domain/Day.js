export class Day {
    constructor(weekDay, dayName, exercises) {
        this.weekDay = weekDay;
        this.dayName = dayName;
        this.exercises = exercises;
        this.weekDayID;
        this.possibleDays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]

        const uid = function() {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
        };
        this._id = uid();
    }

    weekDayIDGenerator(possibleDays, weekDay) {
        possibleDays.forEach((day, index) => {
            if(weekDay == day) {
                this.weekDayID = index;
            }
        });
    };
}

// days: [
//     {
//       dayName: 'Chest and Triceps', 
//       exercises: [
//         {
//           exerciseName: 'Bench Press',
//           sets: [
//             {
//               setIndex: 1,
//               reps: 12
//             }
//           ]
//         }
//       ]  
//     }
//   ]