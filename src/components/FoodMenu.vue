<template>
    <div class="animate__animated animate__fadeIn shopPanel">
        <div @click="handleImageClick($event)" class="burgerDiv">
            <img src="../assets/burger1.jpeg" alt="Burger">
        </div>
        <div @click="handleImageClick($event)" class="saladDiv">
            <img src="../assets/salad1.jpeg" alt="Salad">
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        handleImageClick(e){
            const alt = e.target.alt;
            const burgerAlt = "Burger";
            if( burgerAlt === alt ){
                this.$store.dispatch('getToMenuViewWithType', 1);
                this.$router.push('/menu/1')
            }else {
                this.$store.dispatch('getToMenuViewWithType', 2);
                this.$router.push('/menu/2')
            }
        }
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