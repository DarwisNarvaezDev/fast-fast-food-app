<template>
    <div class="shopViewWrapper">
        <section class="shopViewContainer">
            <div class="pickMenu">
                <OrderPellet :orderInfo="$store.state.sessionTransactionObject" />
                <MenuSection 
                v-for="menu in menuData.menus" 
                :menuInfo="menu" 
                :menuExtras="menuData.extras"
                :key="menu"
                />
            </div>>
        </section>
    </div>
</template>

<script>
import MenuSection from '@/components/MenuSection.vue';
import OrderPellet from '@/components/OrderPellet.vue';

export default {
    components: {
        MenuSection,
        OrderPellet
    },
    data() {
        return {
            menuData: this.$store.state.renderingMenuOption,
        }
    },
    methods: {
        callForMenuOptions() {
            if (!this.$store.state.renderingMenuOption.menus) {
                const { menuType } = this.$route.params
                this.$store.dispatch('getToMenuViewWithType', parseInt(menuType));
                this.menuData = this.$store.state.renderingMenuOption;
                this.viewData = true;
            }
        }
    },
    beforeMount() {
        this.callForMenuOptions();
    },
    beforeRouteLeave(to, from, next) {
        const answer = window.confirm('All your order items will be lost, proceed?')
        if (answer) {
            next();
        } else {
            console.log("We stay!");
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Thasadith:wght@700&display=swap');

.shopViewWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    font-family: 'Thasadith', sans-serif;
}

.shopViewContainer {
    @include prepareCentralPanel;
}

.pickMenu {
    @include prepareApp($user-box-color);
}
</style>
