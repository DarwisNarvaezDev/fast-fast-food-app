<template>
    <div class="userViewWrapper">
        <NavBar :renderOption="1" />
        <section class="userViewContainer">
            <div class="userPanel">
                
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

.userViewWrapper {
    display: flex;
}

.userViewContainer {
    @include prepareCentralPanel;
}

.userPanel {
    @include prepareApp($user-box-color);
}
</style>
