<template>
    <div>login</div>
    <button @click="handle()">login</button>
</template>

<script setup>
    function handle(){
        localStorage.setItem("token","xzy")
    }
</script>

<style scoped>

</style>