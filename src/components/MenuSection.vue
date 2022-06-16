<template>
    <form class="animate__animated animate__bounceIn menuSection" @submit.prevent="handleSubmit">
        <div class="menuEllipse" v-tooltip="menuName">
            <img :src="getStaticAssets()" alt="menu">
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
export default {
    props: {
        menuInfo: Object,
        menuExtras: Array,
        menuType: String,
    },
    data() {
        return {
            key: this.$route.params,
            extras: [],
            qty: 0,
            menuName: this.menuInfo.menuName,
            extrasList: this.menuExtras,
            menuOption: this.$route.params.menuType,
        }
    },
    methods: {
        getStaticAssets() {
            return require(`../assets/${this.menuInfo.img}`)
        },
        handleSubmit() {
            let menuType = parseInt(this.$route.params.menuType);
            const orderForm = {
                menuType: menuType,
                menuName: this.menuInfo.menuName,
                menuExtras: this.extras,
                qty: this.qty
            }
            if( this.qty === 0 ){
                console.log("Cannot add");
            }else{
                this.$store.dispatch('pushLineToOrderArray', orderForm);
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
            if (this.extras.includes(extraItemName)) {
                let extraIndex = this.extras.indexOf(extraItemName);
                this.extras.splice(extraIndex)
                e.target.className = ''
            } else {
                this.extras.push(extraItemName);
                e.target.className = 'eventClick'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.a {
    color: black;
}

.eventClick {
    @include hoverListItem($li-bg-color-selected, $li-font-color-selected);
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
    margin-top: 1.5rem;
    width: 80%;
    height: 35%;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        transform: scale();
        // -webkit-transform: scale(0.6);
    }
}

.menuList {
    margin-top: 1rem;
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
            height: 32%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin: 0.5rem;

            &:hover {
                @include hoverListItem($li-bg-color-selected, $li-font-color-selected);
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