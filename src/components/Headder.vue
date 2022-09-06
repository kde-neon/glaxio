<template>
    <div>
        <!-- Agency logo and name -->
        <div :class="[{ sudo: header }, none]" >
            <div class="app-icon flex">
                <img src="../asset/icon/logo.png" alt="Glaxio UI icon">
            </div>
            <h1>Glaxio</h1>
        </div>
    </div>
</template>
<script>
export default {
    props: ["header"],
}
</script>