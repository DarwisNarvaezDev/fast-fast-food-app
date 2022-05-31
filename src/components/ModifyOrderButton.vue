<template>
    <button type="button" class="modifyButton">
        M
        <div class="formArrow">
            <form @submit.prevent="handleUpdate">
                <ul>
                    <li>
                        <p>Menu name:</p>
                        <div class="divTest">
                            <v-select v-model="menuSelected" :options="menuSources"></v-select>
                        </div>
                    </li>
                    <li>
                        <p>Quantity:</p>
                        <div class="divTest">
                            <input type="number" />
                        </div>
                    </li>
                    <li>
                        <p>Extras:</p>
                        <div class="divTest">
                            <v-select v-model="extraSelected" multiple :options="extrasSources"></v-select>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    </button>
</template>

<script>

export default {
    components: {
    },
    methods: {
        handleUpdate() {
        }
    },
    data() {
        return {
            menuSources: ['Cheeseburges', 'Double-cheeseburger', 'Veggie Burger'],
            extrasSources: ['Pickles', 'Cheese', 'Onions'],
            saladSources: ['Ceasars Salad', 'Caprese Salad', 'Pasta Salad'],
            drinkSources: ['Coca-cola', 'Orange Juice', 'Water'],
            menuSelected: [],
            saladSelected: [],
            extraSelected: [],
            drinkSelected: [],
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/variables.scss';

.formArrow {
    width: 0;
    height: 0;
    top: 48px;
    right: 15px;

    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid $main-bg-color;
    position: absolute;

    form {
        z-index: 1000;
        position: absolute;
        top: 10px;
        right: -20px;
        width: 550px;
        height: 250px;
        border-radius: 10px;
        border: 1px solid $main-bg-color;
        background-color: whitesmoke;
        box-shadow: 10px 15px 20px 1px rgba($color: #000000, $alpha: 0.2);

        ul {
            display: block;
            width: 80%;
            height: 50%;
            justify-content: space-between;
            margin-left: 2rem;
            color: black !important;

            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1rem;
                margin-bottom: 2rem;
                width: 100%;

                select,
                input {
                    font-size: large;
                    text-align: center;
                    border-radius: 4px;
                    padding: 8px 30px 5px 0;
                    border: 0.5px solid rgb(186, 186, 186);
                    background-color: whitesmoke;
                    width: 90%;
                }

            }
        }
    }
}

.divTest {
    width: 68%;
}

.modifyButton {
    background: #5277bf;
    border: none;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    color: whitesmoke;
    font-size: x-large;
    cursor: pointer;
    position: relative;
}
</style>