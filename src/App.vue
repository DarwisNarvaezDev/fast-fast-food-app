<template>
  <div class="mainApp">
    <NavBar 
    :renderOption="$store.state.navRenderOption"
    :sessionTransactionObject="$store.state.sessionTransactionObject"
    />
    <router-view name="home"></router-view>
    <router-view :key="$route.path" name="pick-menu"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import UserView from './views/UserView.vue'
import ShopView from './views/ShopView.vue'

export default {
  components: {
    UserView,
    ShopView,
    NavBar,
    NavBar
  },
}
</script>


<style lang="scss" scoped>
@import './styles/reset.css';
@import './styles/mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

.mainApp {
  display: flex;
  width: 100%;
}
</style>
