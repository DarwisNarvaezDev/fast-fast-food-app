<template>
    <div class="shopViewWrapper">
        <section class="shopViewContainer">
            <div class="pickMenu">
                
            </div>>
        </section>
    </div>
</template>

<script>

export default {
    components: {
    },
    data() {
    },
    methods: {
    },
    mounted(){
        this.$store.dispatch('updateNavRenderOptions', 2);
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

.pickMenu {
    @include prepareApp(salmon)
}
</style>
