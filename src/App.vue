<template>
  <div class="container">
    <Header />
    <div v-show="!formVisible" class="center add-day-btn">
      <Button 
      @btn-clicked="toggleForm" 
      :color="formVisible ? 'red' : 'black'" 
      :title="formVisible ? 'Close' : 'Add New Workout Day'" />
    </div>
    <AddDay @close-add-day="toggleForm" @add-day="addDay" v-show="formVisible" :editingForm="editingDay" :dayEditingObject="dayEdit[0]"/>
    <Days @edit-day="editDay" @delete-day="deleteDay" :daysArray="days" />
  </div>
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Button from './components/Button.vue'
import Days from './components/Days.vue'
import AddDay from './components/AddDay.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Button,
    Days,
    AddDay,
    Footer
  },
  data() {
    return {
      days: [],
      formVisible: false,
      dayEdit: [],
      editingDay: false,
    }
  },
  methods: {
    toggleForm() {
      console.log('funciona!');
      this.formVisible = !this.formVisible;
    },
    addDay(day) {
      console.log('foi!');
      this.days = [...this.days, day];
      localStorage.setItem('days', JSON.stringify(this.days))
    },
    deleteDay(id) {
      if(confirm('Are you sure?')) {
        this.days = this.days.filter((day) => day._id !== id);
        localStorage.setItem('days', JSON.stringify(this.days));
      }
    },
    editDay(id) {
      this.dayEdit = this.days.filter((day) => day._id == id);
      this.editingDay = true;
    }
  },
  mounted() {
    const existingDays = localStorage.getItem('days');
    this.days = JSON.parse(existingDays) || [];
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Work Sans', sans-serif;
  background: #d1d1d1;
}

details {
  cursor: pointer;
}

.container {
  max-width: 750px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid #000;
  border-radius: 3px;
  padding: 20px;
  background: #fff;
}

.center {
  display: flex;
  justify-content: center;
}

.btn {
  padding: 8px;
  border: none;
  font-family: inherit;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
}

.btn-block {
  display: block;
  width: 100%;
}

.add-day-btn {
  margin-top: 15px;
  margin-bottom: 15px;
}

@media screen and (max-width: 750px) {
  .container {
    border: 1px 0 1px 0 solid #000;
    border-radius: 0;
  }
}
</style>
