<template>
  <div id="the-component">works</div>
</template>

<script setup>
import { ref } from "vue";
import { storeTest } from "./../stores/storeTest.js";

const test = storeTest();
</script>

<style scoped lang="sass">
@use "./../vars"
@use "./../mixins"

#the-component
</style>
