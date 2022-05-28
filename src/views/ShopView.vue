<template>
    <div class="shopViewWrapper">
        <section class="shopViewContainer">
            <FoodMenu  />
        </section>
    </div>
</template>

<script>
import FoodMenu from '../components/FoodMenu.vue';
import {createSessionObject} from '../helpers/SessionService';


export default {
    components: {
        FoodMenu
    },
    mounted(){
        const sessionTransactionalObject = JSON.parse(sessionStorage.getItem('transaction'));
        if ( !sessionTransactionalObject ){
            createSessionObject();
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
