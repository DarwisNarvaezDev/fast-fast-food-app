<template>
    <TimeTag />
    <div class="animate__animated animate__fadeIn shopPanel">
        <div @click="handleImageClick($event)" class="burgerDiv" v-tooltip="'Burgers'">
            <img src="../assets/burger1.jpeg" alt="Burger">
        </div>
        <div @click="handleImageClick($event)" class="saladDiv" v-tooltip="'Salads'">
            <img src="../assets/salad1.jpeg" alt="Salad">
        </div>
    </div>
</template>

<script>
import { MENU_TYPE_BURGER,
        MENU_TYPE_SALAD } from '../helpers/Constants'
import TimeTag from './TimeTag.vue';

export default {
    components: {
    TimeTag,
    TimeTag
},
    methods: {
        handleImageClick(e){
            const alt = e.target.alt;
            const burgerAlt = "Burger";
            if( burgerAlt === alt ){
                this.$store.dispatch('getToMenuViewWithType', MENU_TYPE_BURGER);
                this.$router.push('/menu/1')
            }else {
                this.$store.dispatch('getToMenuViewWithType', MENU_TYPE_SALAD);
                this.$router.push('/menu/2')
            }
        }
    },
    beforeMount(){
        this.$store.state.navRenderOption = 2
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/mixins.scss';
@import '../styles/variables.scss';

.shopPanel {
    @include prepareApp($main-box-color);
}

.burgerDiv {
    @include shopImageDiv;
    border-radius: $main-border-radius 0 0 $main-border-radius;

    img {
        scale: 1.4;
        filter: blur(2px);
        transition: scale 0.5s;
        object-fit: cover;

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
        scale: 1.6;
        transition: scale 0.5s;
        filter: blur(2px);

        &:hover {
            scale: 1.4;
            filter: blur(0px)
        }
    }
}
</style>