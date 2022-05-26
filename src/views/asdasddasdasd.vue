<template>
    <div class="shopViewWrapper">
        <section class="shopViewContainer">
            <router-view></router-view>
            <FoodMenu :updateNavBarRenderingOption="updateNavBarRenderingOption" :showShopStep="showShopStep" />
        </section>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FoodMenu from '../components/FoodMenu.vue'

export default {
    components: {
        NavBar,
        FoodMenu,
    },
    data() {
        return {
            showFoodMenu: true,
            showSelectMenu: false,
            navBarOptionChoosen: 2,
        }
    },
    methods: {
        updateNavBarRenderingOption(value) {
            this.navBarOptionChoosen = value
        },
        showShopStep(step) {
            const stepNumber = step;

            switch (stepNumber) {
                case 1:
                    this.showFoodMenu = false
                    this.showSelectMenu = true
                    break;
                case 2:
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.shopViewWrapper {
    display: flex;
    max-width: 100%;
}

.shopViewContainer {
    @include prepareCentralPanel;
}

.selectMenu {
    @include prepareApp($main-box-color);
}

.oneThirds {
    background-color: salmon;
    width: 33.34%;
}
.twoThirds {
    background-color: pink;
    width: 33.34%;
}
.threeThirds{
    background-color: blueviolet;
    width: 33.34%;
}
</style>
