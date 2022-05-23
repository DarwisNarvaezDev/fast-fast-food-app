<template>
    <div class="mainDiv">
        <TestHeadingVue headingContent="Hello world" />
    </div>
</template>

<script>
import TestHeadingVue from "@/components/TestHeading.vue"

export default {
    components: {
        TestHeadingVue
    },
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.mainDiv {
    background-color: $main-ssfa-color;
}
</style>
