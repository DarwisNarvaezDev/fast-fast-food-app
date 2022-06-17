<template>

    <i class="confirm animate__animated animate__tada" v-if="render" v-tooltip="'Proceed to checkout'">
        <VDropdown>
            <fa icon="cart-arrow-down" color="#ffffff" size="2x" />
            <template #popper>
                <div class="dropdown">
                    Dow you want to add drinks?
                    <div class="buttonWrapper">
                        <button type="button" class="no" @click="pushToCheckout()">No</button>
                        <button type="button" class="drinks" @click="pushToDrinks(3)">Im Thirsty</button>
                    </div>
                </div>
            </template>
        </VDropdown>
    </i>

</template>

<script>
import { checkSessionObject } from '../helpers/SessionService'

export default {
    props: ['orderInfo'],
    methods: {
        pushToDrinks(destination) {
            window.location.replace(`${window.location.origin}/menu/${destination}`);
        },
        pushToCheckout() {
            window.location.replace(`${window.location.origin}/checkout`);
        }
    },
    data() {
        return {
            render: false,
        }
    },
    beforeMount() {
        const flag = checkSessionObject()
        const menuTypeFlag = parseInt(this.$route.params.menuType) !== 3;
        if (flag && menuTypeFlag) this.render = flag;
    },
    updated() {
        const flag = checkSessionObject()
        const menuTypeFlag = parseInt(this.$route.params.menuType) !== 3;
        if (flag && menuTypeFlag) this.render = flag;
    }
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Thasadith:wght@700&display=swap');
@import '../styles/variables.scss';

.dropdown {
    padding: 0.5rem;
    height: 5rem;
    font-family: 'Thasadith', sans-serif;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.buttonWrapper {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.drinks {
    background-color: #5277bf;
    padding: 0.5rem;
    border: none;
    border-radius: 15px;
    color: whitesmoke;
    cursor: pointer;
}

.no {
    background-color: $main-bg-color;
    padding: 0.5rem;
    border: none;
    border-radius: 15px;
    color: whitesmoke;
    cursor: pointer;
}

.confirm {
    box-shadow: 0 0 15px 5px #1f1f1f;
    position: absolute;
    left: 97%;
    top: -35px;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: #5277bf;
    color: black !important;
    font-family: 'Roboto Mono', monospace;
    font-weight: bolder;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>