<template>
    <div class="shopViewWrapper">
        <section class="shopViewContainer">
            <FoodMenu  />
        </section>
    </div>
</template>

<script>
import FoodMenu from '../components/FoodMenu.vue'
import { 
  SESSION_TRANSACTIONAL_OBJECT,
  SESSION_TRANSACTIONAL_SKELETON } from '../helpers/Constants'

export default {
    components: {
        FoodMenu
    },
    mounted(){
        const sessionTransactionalObject = JSON.parse(sessionStorage.getItem('transaction'));
        if ( !sessionTransactionalObject ){
            sessionStorage.setItem(SESSION_TRANSACTIONAL_OBJECT, JSON.stringify(SESSION_TRANSACTIONAL_SKELETON))
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.shopViewWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}

.shopViewContainer {
    @include prepareCentralPanel;
}
</style>
