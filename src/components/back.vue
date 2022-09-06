<template>
    <div class="back flex">
        <RouterLink to="/">
            <svg width="100%" height="100%" viewBox="0 0 512 512">
                <path fill="#fff"
                    d="m70.5 265.4 59.6-59.4c2.6-2.6 6.1-4.1 9.9-4.1 3.7 0 7.3 1.4 9.9 4.1 2.6 2.6 4.1 6.1 4.1 9.9s-1.5 7.3-4.1 9.9l-.1.1-41.1 40.1H370c13.2 0 25.8-5.2 35.3-14.7 9.5-9.4 14.7-21.9 14.7-35.3v-48c0-7.7 6.3-14 14-14s14 6.3 14 14v48c0 20.8-8.1 40.3-22.9 55.1-14.8 14.8-34.3 22.9-55.1 22.9H108.3l39.6 40.2c2.6 2.6 4.1 6.1 4.1 9.9 0 3.7-1.4 7.3-4.1 9.9l-.1.1c-2.7 2.5-6.2 3.9-9.8 3.9-3.9 0-7.3-1.4-9.9-4.1l-57.6-57.4c-4.2-4.2-6.5-9.8-6.5-15.7 0-5.8 2.3-11.3 6.5-15.4z" />
            </svg>
        </RouterLink>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    components: {
        RouterLink, RouterView 
    }
}
</script>
<style>
.back {
    top: 10px;
    left: 10px;
    width: 25px;
    height: 20px;
    padding: 5px 15px;
    align-items: center;
    position: fixed;
    justify-content: center;
    background: #2b2c35;
    cursor: pointer;
    z-index: 9999999999;
    border-radius: 25px;
    box-shadow: inset -2px 4px 5px #39394d, inset 3px -3px 5px #0d0d14;
}
</style>