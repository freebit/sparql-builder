<template>
  <div class="tripl__block">
    <div class="tripl__block--items">
      <InputFieldVue></InputFieldVue>
      <InputFieldVue></InputFieldVue>
      <InputFieldVue></InputFieldVue>
    </div>
    <div class="tripl__block--controls">

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InputFieldVue from "@/components/InputField.vue";
export default Vue.extend({
  name: "Tripl",
  components: {
    InputFieldVue
  },
  props: {
    extData: Object
  }
});
</script>

<style lang="stylus" scoped>
  .tripl__block
    position relative
    display flex
    flex-direction row

    &--items
      position relative
      display flex
      flex-direction row
      width auto
      flex-shrink 1

    &--controls
      position relative
      display flex
      flex-direction row
      // max-width 30px
      width 81px
      height 21px 
      background-color orange

</style>
