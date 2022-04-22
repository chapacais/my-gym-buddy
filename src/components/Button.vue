<template>
  <button class="btn" @click="btnClicked()" :style="{ backgroundColor: color, color: textColor }">{{ title }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
    color: String,
    textColor: String
  },
  methods: {
    btnClicked() {
      this.$emit('btn-clicked');
    }
  }
}
</script>

<style scoped>

</style>