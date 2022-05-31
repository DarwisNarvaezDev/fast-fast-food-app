<template>
    <section class="checkoutContainer">
        <div class="checkoutWrapper">
            <TimeTag />
            <div class="checkoutPanel">
                <div class="orderListWrapper">
                    <ul>
                        <li v-for="(v,k) in mapOfSessionObjectContent" key="k.id">
                        {{k+1}}. {{v.menuName}} ({{v.qty}}) with extras: {{v.menuExtras}}
                        <ModifyOrderButton />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TimeTag from '@/components/TimeTag.vue';
import { sessionObjectToArray } from '../helpers/SessionService'
import ModifyOrderButton from '@/components/ModifyOrderButton.vue';

export default {
    components: { TimeTag, ModifyOrderButton },
    data() {
        return {
            mapOfSessionObjectContent: [],
        }
    },
    methods: {
    },
    mounted(){
        this.mapOfSessionObjectContent = sessionObjectToArray();
        console.log(this.mapOfSessionObjectContent);
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/mixins.scss';
@import '../styles/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Thasadith:wght@700&display=swap');

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