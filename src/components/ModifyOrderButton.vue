<template>
    <button type="button" class="modifyButton" @mouseenter="showForm">
        M
        <div class="formArrow" v-if="enableForm" @mouseleave="hideForm">
            <form @submit.prevent="handleUpdate" v-if="enableForm">
                <ul>
                    <li>
                        <p>Menu name:</p>
                        <div class="inputDiv">
                            <v-select v-model="menuSelected" :options="menuSources"></v-select>
                        </div>
                    </li>
                    <li>
                        <p>Quantity:</p>
                        <div class="inputDiv">
                            <input v-model="inputValue" type="number" />
                        </div>
                    </li>
                    <li v-if="drinks">
                        <p>Extras:</p>
                        <div class="inputDiv">
                            <v-select v-model="extraSelected" multiple :options="extrasSources"></v-select>
                        </div>
                    </li>
                    <li>
                        <div class="buttonDiv">
                            <button type="submit">Modify</button>
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
    props: ['keyOfLine', 'line', 'hideForm'],
    methods: {
        handleUpdate() {
            const keyOfTheArray = this.keyOfLine;
            const menuName = this.menuSelected;
            const qty = this.inputValue;
            const newLine = { menuName: menuName, menuExtras: this.extraSelected, qty: qty };
            this.$store.dispatch('updateOrderObject', { key: keyOfTheArray, replaceObject: newLine })
        },
        showForm() {
            this.enableForm = true;
        },
        hideForm() {
            this.enableForm = false;
        }
    },
    data() {
        return {
            menuSources: [],
            menuSourcesBurgers: ['Cheeseburger', 'Double Cheeseburger', 'Veggie Cheeseburger'],
            menuSourcesSalads: ['Ceasar\'s Salad', 'Caprese Salad', 'Pasta Salad'],
            menuSourcesDrinks: ['Soda', 'Orange Juice', 'Water'],

            extrasSources: [],
            extrasSourcesBurger: ['Pickles', 'Cheese', 'Bacon'],
            extrasSourcesSalad: ['Olives', 'Croutons', 'Ranch'],
            extrasSourcesDrinks: ['Medium', 'Large', 'X-Large'],
            menuSelected: [],
            extraSelected: [],
            enableForm: false,
            inputValue: 0,
            drinks: true,
        }
    },
    mounted() {
        if (this.line.menuExtras.length === 0 && this.menuSourcesBurgers.includes(this.line.menuName)) this.extrasSources = this.extrasSourcesBurger;
        if (this.line.menuExtras.length === 0 && this.menuSourcesSalads.includes(this.line.menuName)) this.extrasSources = this.extrasSourcesSalad;
        if (this.line.menuExtras.length === 0 && this.menuSourcesDrinks.includes(this.line.menuName)) this.extrasSources = this.extrasSourcesDrinks;
        if (this.line.menuName) {
            this.menuSelected = this.line.menuName;
            if (this.menuSourcesBurgers.includes(this.line.menuName)) {
                this.menuSources = this.menuSourcesBurgers;
            }
            if (this.menuSourcesSalads.includes(this.line.menuName)) {
                this.menuSources = this.menuSourcesSalads;
            }
            if (this.menuSourcesDrinks.includes(this.line.menuName)) {
                this.menuSources = this.menuSourcesDrinks;
                this.drinks = false;
            }
        }
        if (this.line.qty) {
            this.inputValue = this.line.qty;
        }
        if (this.line.menuExtras) {
            let splited = [];
            if (this.line.menuExtras.includes(',')) {
                splited = this.line.menuExtras.split(',');
                this.extraSelected = splited;
                if (this.extrasSourcesBurger.includes(splited[0])) {
                    this.line.menuExtras = this.extrasSourcesBurger;
                }
                if (this.extrasSourcesSalad.includes(splited[0])) {
                    this.extrasSources = this.extrasSourcesSalad;
                }
                if (this.extrasSourcesDrinks.includes(splited[0])) {
                    this.drinks = false;
                }
            } else {
                this.extraSelected = this.line.menuExtras;
                if (this.extrasSourcesBurger.includes(this.line.menuExtras)) {
                    this.extrasSources = this.extrasSourcesBurger;
                }
                if (this.extrasSourcesSalad.includes(this.line.menuExtras)) {
                    this.extrasSources = this.extrasSourcesSalad;
                }
                if (this.extrasSourcesDrinks.includes(this.line.menuExtras)) {
                    this.extrasSources = this.extrasSourcesDrinks;
                    this.drinks = false;
                }
            }
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
        right: -40px;
        width: 670px;
        height: 300px;
        border-radius: 10px;
        border: 1px solid $main-bg-color;
        background-color: whitesmoke;
        box-shadow: 10px 15px 20px 1px rgba($color: #000000, $alpha: 0.2);
        cursor: auto !important;

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
                    padding: 15px 35px 5px 0;
                    border: 0.5px solid rgb(186, 186, 186);
                    background-color: whitesmoke;
                    width: 90%;
                }

            }
        }
    }
}

.inputDiv {
    width: 68%;
    cursor: pointer;
}

.buttonDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    button {
        border: none;
        background-color: $secondary-button-color;
        border-radius: 4px;
        padding: 0.5rem;
        width: 8rem;
        color: whitesmoke;
        font-weight: bold;
        cursor: pointer;
    }

}

.modifyButton {
    border: none;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    color: whitesmoke;
    font-size: x-large;
    cursor: pointer;
    position: relative;

    &:hover {
        background: $secondary-button-color;
    }

}
</style>