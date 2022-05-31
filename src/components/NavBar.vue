<template>
    <nav class="mainNav">
        <ul>
            <li v-if="home">
                <router-link to="/">
                    <div class="iconWrapper">
                        <fa icon="house" :color="color" size="3x" />
                    </div>
                </router-link>
                <span>.</span>
            </li>
            <li v-if="food">
                <router-link to="/menu/1">
                    <div class="iconWrapper foodWrapper" @click="handleRouterPush(1)" v-if="food">
                        <Pellet v-if="burgerItems > 0" :itemsOnCart="burgerItems" :key="burgerItems" />
                        <fa icon="burger" :color="color" size="3x" />
                    </div>
                </router-link>
                <span>.</span>
            </li>
            <li v-if="food">
                <router-link to="/menu/2">
                    <div class="iconWrapper foodWrapper" @click="handleRouterPush(2)" v-if="food">
                        <Pellet v-if="saladItems > 0" :itemsOnCart="saladItems" :key="saladItems" />
                        <fa icon="leaf" :color="color" size="3x" />
                    </div>
                </router-link>
                <span>.</span>
            </li>
            <li v-if="drinks">
                <router-link to="/menu/3">
                    <div class="iconWrapper foodWrapper" @click="handleRouterPush(3)" v-if="drinks">
                        <Pellet v-if="drinkItems > 0" :itemsOnCart="drinkItems" :key="drinkItems" />
                        <fa icon="beer" :color="color" size="3x" />
                    </div>
                </router-link>
                <span>.</span>
            </li>
            <li v-if="proceedCheckout">
                <router-link to="/checkout">
                    <div class="iconWrapper foodWrapper animate__animated animate__tada">
                        <fa icon="cart-arrow-down" color="#5277bf" size="3x" />
                    </div>
                </router-link>
                <span>.</span>
            </li>
        </ul>
        <div class="userNavContainer">
            <router-link to="/">
                <div class="iconWrapper">
                    <fa icon="user" :color="color" size="3x" />
                </div>
            </router-link>
            <span>.</span>
        </div>
    </nav>
    <router-view />
</template>

<script>
import Pellet from './Pellet.vue'
import { callSessionObject, createSessionObject } from '../helpers/SessionService';

export default {
    components: {
        Pellet
    },
    props: {
        renderOption: Number,
        sessionTransactionObject: String,
    },
    data() {
        return {
            home: true,
            food: true,
            drinks: false,
            proceedCheckout: false,
            color: "#b0b0b0",
            burgerItems: 0,
            saladItems: 0,
            drinkItems: 0,
        }
    },
    methods: {
        handleRouterPush(destination) {
            window.location.replace(`${window.location.origin}/menu/${destination}`);
        },
        renderNavComponents() {
            const renderMode = this.renderOption
            switch (renderMode) {
                case 0:
                    this.home = false
                    this.food = false
                    this.drinks = false
                    this.proceedCheckout = false
                    break;
                    break;
                case 1:
                    this.home = false
                    this.food = false
                    this.drinks = true
                    this.proceedCheckout = false
                    break;
                case 2:
                    this.home = true
                    this.food = false
                    this.drinks = true
                    this.proceedCheckout = false
                    break;
                case 3:
                    this.home = true
                    this.food = true
                    break;
                case 4:
                    this.home = true
                    this.food = true
                    this.drinks = true
                    this.proceedCheckout = true
                    break;
            }
        },
        distributePellets() {
            const sessionObject = callSessionObject();
            const obj = JSON.parse(sessionObject);
            if (obj.burgers || obj.salads || obj.drinks) {
                const jsonObj = JSON.parse(sessionObject)
                const { burgers, salads, drinks } = jsonObj;
                this.burgerItems = this.populateQuantities(burgers);
                this.saladItems = this.populateQuantities(salads);
                this.drinkItems = this.populateQuantities(drinks);
            }
        },
        populateQuantities(array) {
            let qty = 0;
            array.forEach(order => {
                if (!order.qty) {
                    throw new Error("Not a valid array");
                } else {
                    qty += order.qty
                }
            })
            return qty;
        }
    },
    mounted() {
        this.renderNavComponents(this.renderOption)
        this.distributePellets()
    },
    updated() {
        this.renderNavComponents(this.renderOption)
        this.distributePellets()
    },
    created() {
        this.distributePellets()
    }
}
</script>


<style lang="scss">
@import '../styles/variables.scss';

.foodWrapper {
    cursor: pointer;
}

.iconWrapper {
    position: relative;
}

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
