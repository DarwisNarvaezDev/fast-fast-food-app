<template>
    <form class="animate__animated animate__bounceIn menuSection" @submit.prevent="handleSubmit">
        <div class="menuEllipse" v-tooltip="menuName">
            <img :src="getStaticAssets()" alt="menuBurger">
        </div>
        <div class="menuList" v-tooltip.left="'Extras'">
            <ul>
                <li v-for="extra in extrasList" :key="extra" @click="handleExtras($event)">{{ extra }}</li>
            </ul>
        </div>
        <div class="counterWrapper">
            <input type="text" :value="qty" v-tooltip.left="'Edit your qty.'">
            <div class="counterButtons">
                <div class="increment" v-tooltip.right="'More'" @click="handleIncrement"></div>
                <div class="decrement" v-tooltip.right="'Less'" @click="handleDecrement"></div>
            </div>
        </div>
        <div class="menuButtonWrapper">
            <button type="submit" v-tooltip.right="'Add menu!'">
                <fa icon="plus" color="white" size="3x" />
            </button>
        </div>
    </form>
</template>

<script>
import {
    EXTRA_BACON,
    EXTRA_CHEESE,
    EXTRA_PICKLES,
    EXTRA_CROUTONS,
    EXTRA_RANCH,
    EXTRA_OLIVES,

} from '../helpers/Constants';

export default {
    props: {
        menuInfo: Object,
        menuExtras: Array,
    },
    data() {
        return {
            extraPickles: false,
            extraBacon: false,
            extraCheese: false,
            extraOlives: false,
            extraRanch: false,
            extraCroutons: false,
            qty: 0,
            menuName: this.menuInfo.menuName,
            extrasList: this.menuExtras,
            menuOption: this.$route.params.menuType
        }
    },
    methods: {
        getStaticAssets() {
            return require(`../assets/${this.menuInfo.img}`)
        },
        handleSubmit() {
            if (parseInt(this.menuOption) === 2) {
                const orderForm_s = {
                    menuName: this.menuInfo.menuName,
                    extraOlives: this.extraOlives,
                    extraRanch: this.extraRanch,
                    extraCroutons: this.extraCroutons,
                    qty: this.qty
                }
                this.$store.dispatch('pushLineToOrderArray', orderForm_s);
            } else {
                const orderForm_b = {
                    menuName: this.menuInfo.menuName,
                    extraPickles: this.extraPickles,
                    extraBacon: this.extraBacon,
                    extraCheese: this.extraCheese,
                    qty: this.qty
                }
                this.$store.dispatch('pushLineToOrderArray', orderForm_b);
            }

        },
        handleIncrement() {
            this.qty++
        },
        handleDecrement() {
            if (this.qty === 0) {
                console.warn("cannot decrement");
                return
            } else {
                this.qty--
            }
        },
        handleExtras(e) {
            let extraItemName = e.target.textContent;

            if (EXTRA_PICKLES === extraItemName) {
                if (this.extraPickles) {
                    this.extraPickles = !this.extraPickles;
                    e.target.className = '';
                } else {
                    this.extraPickles = !this.extraPickles;
                    e.target.className = 'eventClickLiTop';
                }
            } else if (EXTRA_BACON === extraItemName) {
                if (this.extraBacon) {
                    this.extraBacon = !this.extraBacon;
                    e.target.className = '';
                } else {
                    this.extraBacon = !this.extraBacon;
                    e.target.className = 'eventClickLiMiddle';
                }
            } else if (EXTRA_CHEESE === extraItemName) {
                if (this.extraCheese) {
                    this.extraCheese = !this.extraCheese;
                    e.target.className = '';
                } else {
                    this.extraCheese = !this.extraCheese;
                    e.target.className = 'eventClickLiBottom';
                }
            }

            if (EXTRA_OLIVES === extraItemName) {
                if (this.extraOlives) {
                    this.extraOlives = !this.extraOlives;
                    e.target.className = '';
                } else {
                    this.extraOlives = !this.extraOlives;
                    e.target.className = 'eventClickLiTop';
                }
            } else if (EXTRA_CROUTONS === extraItemName) {
                if (this.extraCroutons) {
                    this.extraCroutons = !this.extraCroutons;
                    e.target.className = '';
                } else {
                    this.extraCroutons = !this.extraCroutons;
                    e.target.className = 'eventClickLiMiddle';
                }
            } else if (EXTRA_RANCH === extraItemName) {
                if (this.extraRanch) {
                    this.extraRanch = !this.extraRanch;
                    e.target.className = '';
                } else {
                    this.extraRanch = !this.extraRanch;
                    e.target.className = 'eventClickLiBottom';
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Thasadith:wght@700&display=swap');

.a {
    color: black;
}

.eventClickLiTop {
    border-radius: 15px 15px 0 0;
    background-color: green;
    color: white;
}

.eventClickLiMiddle {
    background-color: green;
    color: white;
}

.eventClickLiBottom {
    border-radius: 0 0 15px 15px;
    background-color: green;
    color: white;
}

.menuSection {
    height: 100%;
    width: 32%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.menuEllipse {
    width: 80%;
    height: 40%;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        scale: 1.2;
        -webkit-transform: scale(0.6);
    }
}

.menuList {
    width: 80%;
    height: 23%;
    background-color: rgba($color: #f6f0f0, $alpha: 0.8);
    border-radius: $main-border-radius;
    border: 0.5px solid black;
    font-size: large;

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-around;

        li {
            height: 33.20%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &:nth-child(1):hover {
                border-radius: $main-border-radius $main-border-radius 0 0;
                background-color: $menu-listItem-hover-background-color;
                color: $menu-listItem-hover-font-color;
            }

            &:nth-child(2):hover {
                background-color: $menu-listItem-hover-background-color;
                color: $menu-listItem-hover-font-color;
            }

            &:nth-child(3):hover {
                border-radius: 0 0 $main-border-radius $main-border-radius;
                background-color: $menu-listItem-hover-background-color;
                color: $menu-listItem-hover-font-color;
            }

            &:nth-child(1),
            &:nth-child(2) {
                border-bottom: 0.5px solid black;
            }
        }

    }
}

.counterWrapper {
    width: 60%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    input {
        background-color: rgba($color: #f6f0f0, $alpha: 0.9);
        border-radius: 15px;
        font-size: large;
        width: 15%;
        height: 60%;
        padding-left: 1.1rem;
        border: 0.5px solid black;
    }
}

.counterButtons {
    height: 80%;
    width: 30%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.increment {
    height: 0;
    width: 0;
    margin-bottom: 0.5rem;

    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 30px solid grey;

    &:hover {
        border-bottom: 30px solid whitesmoke;
    }
}

.decrement {
    height: 0;
    width: 0;

    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid grey;

    &:hover {
        border-top: 30px solid whitesmoke;
    }
}

.menuButtonWrapper {
    width: 300px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        width: 30%;
        height: 70%;
        border-radius: 50%;
        background-color: green;
        border: none;
        cursor: pointer;
    }
}
</style>