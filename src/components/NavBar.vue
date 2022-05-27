<template>
    <nav class="mainNav">
        <ul>
            <li v-if="home">
                <router-link to="/">
                    <fa icon="house" :color="color" size="3x" />
                </router-link>
                <span>.</span>
            </li>
            <li v-if="food">
                <router-link to="/">
                    <fa icon="burger" :color="color" size="3x" />
                </router-link>
                <span>.</span>
            </li>
            <li v-if="food">
                <router-link to="/">
                    <fa icon="leaf" :color="color" size="3x" />
                </router-link>
                <span>.</span>
            </li>
        </ul>
        <div class="userNavContainer">
            <router-link to="/">
                <fa icon="user" :color="color" size="3x" />
            </router-link>
            <span>.</span>
        </div>
    </nav>
    <router-view />
</template>

<script>

export default {
    props: {
        renderOption: Number
    },
    data() {
        return {
            home: true,
            food: true,
            color: "#b0b0b0",
        }
    },
    methods: {
        renderNavComponents() {
            const renderMode = this.renderOption

            switch (renderMode){
                case 1:
                    this.home = false
                    this.food = false
                    break;
                case 2:
                    this.home = true
                    this.food = false
                    break;
                case 3:
                    this.home = true
                    this.food = true
                    break;
            }
        }
    },
    mounted() {
        this.renderNavComponents(this.renderOption)
    },
    updated(){
        this.renderNavComponents(this.renderOption)
    }
}
</script>


<style lang="scss">
@import '../styles/variables.scss';

.mainNav {
    background-color: $main-ssfa-color;
    width: $main-nav-width;
    height: 900px;
}

.mainNav ul {
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: center;

    height: 93%;
}

.mainNav li {
    margin-top: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: $main-ssfa-color;

    &:hover {
        color: white;
    }
}

.mainNav li span {
    margin-left: 10px;
    font-size: xx-large;
}

.userNavContainer {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-content: center;
    color: $main-ssfa-color;
    height: 5%;
    margin-right: 15px;

    &:hover {
        color: white;
    }
}

.userNavContainer span {
    font-size: xx-large;
    margin-left: 10px;
    margin-right: 8px;
}
</style>
