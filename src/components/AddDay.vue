<template>
  <div class="add-day-wrapper">
    <div class="add-day-wrapper__header">
      <h3 class="add-day-wrapper__title">Add Your Workout</h3>
      <Button @click="$emit('close-add-day')" title="Close" color="red" />
    </div>
    <div class="add-day">
      <div class="add-day__container">

        <form class="add-day__form">
          <div class="form-control">
            <label>Workout:</label>
            <input type="text" v-model="day.dayName" name="dayName" placeholder="Chest and Triceps" required autocomplete="off">
          </div>
          <div class="form-control">
            <label>Weekday:</label>
            <select name="weekDay" v-model.lazy="day.weekDay" placeholder>
              <option v-for="(weekday, index) of this.day.possibleDays" :key="index" :value="weekday">{{ weekday }}</option>
            </select>
            <!-- <input type="text" v-model.lazy="day.weekDay" name="weekDay" placeholder="Monday" required> -->
          </div>
        </form>

        <div v-show="day.weekDay && day.dayName" class="add-day__preview">
          <p>Preview:</p>
          <div class="add-day__preview__container">
            <h3>{{ day.weekDay }}</h3>
            <h4>{{ day.dayName }}</h4>
            <p>{{ this.exercises.length }} exercises:</p>
            <ul>
              <li v-for="(exercise, index) of exercises" :key="index">
                - {{ exercise.exerciseName }}, {{ exercise.sets.length }} sets;
              </li>
            </ul>
          </div>
          <div class="center">
            <Button class="btn-block" v-show="exercises.length > 0" @click="onSubmit" title="Add Day" color="black" textColor="white" />
          </div>
        </div>

      </div>

      <div v-show="day.weekDay && day.dayName" class="add-exercises">
        <div class="add-exercises__form">
          <form>
            <h4>Add Exercise</h4>
            <div class="form-control">
              <label>Exercise:</label>
              <input type="text" v-model="exercise.exerciseName" name="exerciseName" placeholder="Squat" autocomplete="off">
            </div>
            <div class="form-control">
              <label>Sets:</label>
              <input type="text" v-model="setsNumber" name="setsNumber" placeholder="3" autocomplete="off">
            </div>
            <div v-for="index of Number(setsNumber)" :key="index" class="form-control">
              <label>Reps on set {{ index }}:</label>
              <input type="text" v-model="reps[index]" name="reps" placeholder="6 - 12" autocomplete="off">
            </div>
          </form>
          <div class="center">
            <Button v-show="reps.length === Number(setsNumber) + 1" @click="onAdd" title="Add Exercise" color="grey"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Day } from '../domain/Day';
import { Exercise } from '../domain/Exercise';
import { Set } from '../domain/Set';
import Button from '../components/Button.vue'

export default {
  name: 'AddDay',
  components: {
    Button
  },
  data() {
    return {
      day: new Day(),
      exercise: new Exercise(),
      set: new Set(),
      exercises: [],
      sets: [],
      reps: [],
      setsNumber: 0,
      setExercises: false
    }
  },
  methods: {
    onAdd() {
      this.reps.forEach((repRange, index) => {
        this.set.setIndex = index;
        this.set.reps = repRange;
        this.sets.push(this.set);
        this.set = new Set();
      })
      this.exercise.sets = this.sets;
      this.exercises = [...this.exercises, this.exercise];

      this.exercise = new Exercise();
      this.setsNumber = 0;
      this.reps = [];
      this.sets = [];
      console.log(this.exercises);
    },
    onSubmit() {
      this.day.exercises = this.exercises;
      this.day.weekDayIDGenerator(this.day.possibleDays, this.day.weekDay);
      this.$emit('add-day', this.day);
      this.day = new Day();
      this.exercises = [];
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin-left: 10px;
}

label {
  font-weight: bold;
}

input, select {
  border: none;
  border-radius: 5px;
  margin: 5px;
  height: 30px;
  padding-left: 10px;
  background: #e9e9e9;
}

option {
  font-family: 'Work Sans', sans-serif;
}

.add-day-wrapper {
  padding: 10px;
  margin: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.add-day-wrapper__header {
  display: flex;
  justify-content: space-between;
  margin: 0 10px 10px;
}

.add-day-wrapper__title {
  font-weight: 500;
  font-style: italic;
}

.add-day {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
}

.add-day__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.add-day__preview__container {
  background: #ebebeb;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
}

.add-exercises__preview p {
  margin-top: 10px;
}

.add-exercises__form {
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3)
}

.add-exercises__form form {
  margin-bottom: 10px;
}

.add-exercises__form input {
  width: 50%;
}

.form-control {
  margin: 3px 0;
}

@media screen and (max-width: 600px) {
  .add-day {
    flex-direction: column;
  }

  .add-day__container {
    margin-top: 20px;
  }

  .add-day__preview {
    margin: 15px 0;
  }
}

</style>