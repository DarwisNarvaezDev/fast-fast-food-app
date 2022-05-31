<template>
    <div class="currentTimeContainer">
        <p>{{currentDate}}</p>
    </div>
</template>

<script>
import {getCurrentDateAndTime} from '../helpers/CurrentDateAndTime'

export default {
    data(){
        return {
            currentDate: '',
        }
    },mounted(){
        window.setInterval(()=>{
            this.currentDate = getCurrentDateAndTime()
        }, 1000)
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/mixins.scss';
@import '../styles/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Thasadith:wght@700&display=swap');

.currentTimeContainer {
    font-family: 'Thasadith', sans-serif;
    position: absolute;
    width: 300px;
    height: 70px;
    top: -0px;
    right: 0%;
    background-color: black;
    border-radius: 0 0 0 15px;
    color: white;
    padding-left: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
</style>