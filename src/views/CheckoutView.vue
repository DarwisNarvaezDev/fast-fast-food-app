<template>
    <div class="loader" v-if="showLoading">Creating your order</div>
    <section class="checkoutContainer">
        <div :class="{checkoutWrapper: true, 'screenOver': showLoading}">
            <TimeTag />
            <div class="checkoutPanel" @mouseleave="hideModal">
                <i class="back" v-tooltip="'Return to menu'" @click="handleBack">
                    <fa icon="backward" size="2x" color="#ffffff" />
                </i>
                <div class="orderListWrapper">
                    <ul>
                        <li v-for="(v, k) in $store.state.orderToRender" :key="v">
                            {{ k + 1 }}. {{ v.menuName }} ({{ v.qty }}) with extras: {{ v.menuExtras.toString() }}
                            <ModifyOrderButton :keyOfLine="k" :line="v" :hideForm="hideForm" />
                        </li>
                    </ul>
                </div>
        <div class="confirm">
            <form class="nameForm animate__animated animate__fadeIn" v-if="showModal"
                @submit.prevent="handleSubmit($event)">
                <div class="nameSection">
                    <label for="text">Client's Name</label>
                    <input id="text" type="text" value="Type here" @click="handleInput($event)">
                </div>
            </form>
            <div class="blank" v-else></div>
            <div class="iconSection">
                <i class="iconForm" @click="handleModal">
                    <fa icon="thumbs-up" size="2x" color="#ffffff" @click="handleModal" />
                </i>
            </div>
        </div>
            </div>
        </div>
    </section>
</template>

<script>
import TimeTag from '@/components/TimeTag.vue';
import ModifyOrderButton from '@/components/ModifyOrderButton.vue';
import { MENU_TYPE_BURGER } from '../helpers/Constants'

export default {
    components: { TimeTag, ModifyOrderButton },
    data() {
        return {
            showModal: false,
            showLoading: false
        }
    },
    methods: {
        handleBack() {
            const answer = window.confirm('All the changes will be lost, proceed?')
            if (answer) {
                this.$store.dispatch('getToMenuViewWithType', MENU_TYPE_BURGER);
                this.$router.push('/menu/1');
                next();
            } else {
                console.log("We stay!");
            }
        },
        handleModal() {
            this.showModal = true;
        },
        handleInput(e) {
            e.target.value = ''
        },
        handleSubmit(e) {
            console.log(e.target[0].value);
            this.showLoading = true;
        },
        hideModal() {
            this.showModal = false;
        }
    },
    mounted() {
        this.$store.dispatch('setOrderObjectToRender', true)
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/mixins.scss';
@import '../styles/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Thasadith:wght@700&display=swap');

.screenOver {
filter: blur(2px);
}

.confirm {

    width: 400px;
    position: absolute;
    z-index: 1000;
    height: 300px;
    top: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    font-family: 'Thasadith', sans-serif;
    font-size: x-large;

}

.nameForm {
    background-color: whitesmoke;
    width: 100%;
    height: 70%;
    border-radius: $main-border-radius;
    border: 1px solid black;
}

.blank {
    width: 100%;
    height: 70%;
}

.nameSection {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
        margin-bottom: 2rem;
    }

    input {
        height: 3rem;
        width: 16rem;
        font-size: large;
        text-align: center;
    }
}

.iconSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 100%;
}

.iconForm {
    background-color: $li-bg-color-selected;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    &:hover {
        box-shadow: 0 0 15px 5px #9d9d9d;
    }
}

.back {
    box-shadow: 0 0 15px 5px #1f1f1f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    z-index: 1000;
    width: 80px;
    height: 80px;
    top: -36px;
    left: -3%;
    border-radius: 50%;
    text-align: center;
    background-color: $secondary-button-color;
    position: absolute;
    cursor: pointer;
}

.orderListWrapper {
    width: 90%;
    height: 90%;
    font-family: 'Thasadith', sans-serif;
    overflow: scroll;

    ul {

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            font-size: xx-large;
            border-bottom: 1px solid black;
        }
    }

}

.checkoutContainer {
    @include prepareMainContainer;
}

.checkoutWrapper {
    @include prepareCentralPanel;
}

.checkoutPanel {
    @include prepareApp(whitesmoke);
}

.loader {
    color: black;
    font-size: larger;
    margin: 100px auto;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: absolute;
    text-indent: -9999em;
    -webkit-animation: load4 1.3s infinite linear;
    animation: load4 1.3s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 10000000;
    top: 380px;
    left: 52.1%;
    transform: scale(2);
}

@-webkit-keyframes load4 {

    0%,
    100% {
        box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }

    12.5% {
        box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }

    25% {
        box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }

    37.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }

    50% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }

    62.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }

    75% {
        box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }

    87.5% {
        box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
}

@keyframes load4 {

    0%,
    100% {
        box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }

    12.5% {
        box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }

    25% {
        box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }

    37.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }

    50% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }

    62.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }

    75% {
        box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }

    87.5% {
        box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
}
</style>