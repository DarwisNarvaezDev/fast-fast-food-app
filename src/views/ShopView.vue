<template>
    <div class="shopViewWrapper">
        <section class="shopViewContainer">
            <FoodMenu  />
        </section>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FoodMenu from '../components/FoodMenu.vue'

export default {
    components: {
        FoodMenu
    },
    data() {
        return {
        }
    },
    methods: {
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
