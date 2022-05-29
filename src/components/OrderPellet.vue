<template>
    <i class="confirm animate__animated animate__tada" v-if="render" v-tooltip.top="'Proceed to checkout!'">
        <fa icon="cart-arrow-down" color="#ffffff" size="2x" />
    </i>
</template>

<script>
import { checkSessionObject } from '../helpers/SessionService'

export default {
    props: ['orderInfo'],
    data() {
        return {
            render: false,
        }
    },
    beforeMount() {
        const flag = checkSessionObject()
        if (flag) this.render = flag
    },
    updated() {
        const flag = checkSessionObject()
        if (flag) this.render = flag
    }
}
</script>


<style lang="scss" scoped>
.confirm {
    box-shadow: 0 0 15px 5px #1f1f1f;
    position: absolute;
    left: 958px;
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
}
</style>