<template>
    <div class="shopViewWrapper">
        <NavBar :renderOption="2" />
        <section class="shopViewContainer">
            <div class="shopPanel">
                <div class="burgerDiv">
                    <!-- Burguer div -->
                    <img src="../assets/burger.jpeg" alt="Burger">
                </div>
                <div class="saladDiv">
                    <!-- Salad div -->
                    <img src="../assets/salad.jpeg" alt="Salad">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
    components: {
        NavBar
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.shopViewWrapper {
    display: flex;
}

.shopViewContainer {
    @include prepareCentralPanel;
}

.shopPanel {
    @include prepareApp($main-box-color);
}

.burgerDiv {
    @include shopImageDiv;
    border-radius: $main-border-radius 0 0 $main-border-radius;

    img {
        scale: 1.3;
        filter: blur(2px);
        transition: scale 0.5s;
        &:hover {
            scale: 1.2;
            filter: blur(0px)
        }
    }
}

.saladDiv {
    @include shopImageDiv;
    border-radius: 0 $main-border-radius $main-border-radius 0;

    img {
        scale: 1.5;
        transition: scale 0.5s;
        filter: blur(2px);
        &:hover {
        scale: 1.4;
        filter: blur(0px)
    }
    }
}
</style>
