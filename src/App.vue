<template>
  <!-- <UserView /> -->
  <ShopView />
</template>

<script>
import UserView from './views/UserView.vue'
import ShopView from './views/ShopView.vue'

export default {
  components: {
    UserView,
    ShopView
  },
}
</script>


<style lang="scss" scoped>
@import './styles/reset.css';
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
</style>
