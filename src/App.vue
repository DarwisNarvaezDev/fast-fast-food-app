<template>
  <NavBar :renderOption="3" />
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  },
}
</script>


<style lang="scss">
  @import './styles/reset.css';
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
</style>
