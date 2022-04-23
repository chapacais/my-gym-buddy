<template>
  <h3>Your Gym Schedule</h3>
    <p class="no-days-added" v-show="daysArray.length == 0">No Workouts Added</p>
    <div class="grid-container">
      <div v-for="day of daysArray.sort((a, b) => a.weekDayID - b.weekDayID)" :key="day._id">
        <Day @edit-day="$emit('edit-day', day._id)" @delete-day="$emit('delete-day', day._id)" :day="day" />
      </div>
    </div>
</template>

<script>
import Day from './Day.vue'

export default {
  name: 'Days',
  components: {
    Day
  },
  props: {
    daysArray: Array
  },
  emits: ['delete-day', 'edit-day']
}
</script>

<style scoped>
h3 {
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding-top: 10px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin: 20px 0;
}

.no-days-added {
  margin-top: 20px;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>