<template>
  <div>
    <h3>
      {{ day.weekDay }}
      <i @click="$emit('delete-day', day._id)" class="fas fa-times"></i>
    </h3>
    <h4>{{ day.dayName }}</h4>
    <p>{{ day.exercises.length }} exercises</p>
    <details>
      <summary>Exercises details</summary>
      <ul>
        <li class="exercise-details" v-for="(exercise, index) of day.exercises" :key="index">
          <p>{{ exercise.exerciseName }} - {{ exercise.sets.length }} sets</p>
          <details class="set-details">
            <summary></summary>
            <ul>
              <li v-for="set of exercise.sets" :key="set.setIndex">
                set {{ set.setIndex }}: {{ set.reps }} reps;
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </div>
</template>

<script>
export default {
  name: 'Day',
  props: {
    day: Object
  }
}
</script>

<style scoped>
div {
  background: #ebebeb;
  border-radius: 3px;
  padding: 5px 10px;
}

ul {
  list-style: none;
}

h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

i {
  color: #be0000;
  cursor: pointer;
}

.exercise-details {
  display: flex;
  gap: 5px;
}
</style>