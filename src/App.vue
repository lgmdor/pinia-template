<template></template>

<script setup></script>

<style lang="sass">
@use "./sass/mixins"
@use "./sass/vars"
@use "./sass/themes"

*
  margin: 0
  padding: 0
  box-sizing: border-box

#app
  font-family: "Inter"
  min-height: 100vh
  @include mixins.flex-center
</style>
