<template></template>

<script setup></script>

<style lang="sass">
@use "./mixins"
@use "./vars"

*
  margin: 0
  padding: 0
  box-sizing: border-box

#app
  font-family: "Inter"
  min-height: 100vh
  @include mixins.flex-center
</style>
