<template>
    <section class="checkoutContainer">
        <i class="back" v-tooltip="'Return to menu'" @click="handleBack">
            <fa icon="backward" size="2x" color="#ffffff" />
        </i>
        <div class="checkoutWrapper" @mouseenter="hideModal">
            <TimeTag />
            <div class="checkoutPanel">
                <div class="orderListWrapper">
                    <ul>
                        <li v-for="(v, k) in $store.state.orderToRender" :key="v">
                            {{ k + 1 }}. {{ v.menuName }} ({{ v.qty }}) with extras: {{ v.menuExtras.toString() }}
                            <ModifyOrderButton :keyOfLine="k" :line="v" :hideForm="hideForm" />
                        </li>
                    </ul>
                </div>
            </div>
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
            <div class="iconSection" >
                <i class="iconForm" @click="handleModal">
                    <fa icon="thumbs-up" size="2x" color="#ffffff" @click="handleModal" />
                </i>
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
        },
        hideModal(){
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

.confirm {

    width: 400px;
    position: absolute;
    z-index: 1000;
    height: 300px;
    top: 500px;
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
    top: 90px;
    left: 13%;
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
    @include prepareMainContainer
}

.checkoutWrapper {
    @include prepareCentralPanel
}

.checkoutPanel {
    @include prepareApp(whitesmoke)
}
</style>