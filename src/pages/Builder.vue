<template>
  <div class="home">
    <div class="inner-container">
      <h1>sparql builder</h1>
    </div>
    <div class="builder__block inner-container">
      <div class="builder__block--list">
        <transition-group name="fade">
          <TripleVue
            v-for="(triple, index) in triples"
            :key="index"
            :triple="triple"
            :index="index"
          ></TripleVue>
        </transition-group>
        <button class="builder__block--button" @click="addTriple()">Add triple</button>
      </div>
      <div class="builder__block--result">
        <textarea v-model="result" readonly></textarea>
        <br>
        <button class="builder__block--button" @click="generateQuery" :disabled="!triples.length">Build</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import InputFieldVue from "@/components/InputField.vue";
import TripleVue from "@/components/Triple.vue";
export default Vue.extend({
  name: "Builder",
  components: {
    InputFieldVue,
    TripleVue
  },
  computed: {
    ...mapState("qlModule", ["triples", "result"])
  },
  methods: {
    ...mapActions("qlModule", ["addTriple", "generateQuery"])
  },

  mounted() {
    this.addTriple();
  }
});
</script>

<style lang="stylus" scoped>
  @import "../styles/index.styl";
  
  h1
    position relative
    font-size 2rem
    text-transform uppercase
    color $black
    margin-y 1.5rem

  .builder__block
    position relative
    display flex
    flex-direction column

    // @media desktop-and-up
  
    &--list
      position relative

    &--result
      display flex
      position relative
      width 100%
      flex-direction row-reverse
      flex-wrap wrap

      button
        display flex
    
    &--result &--button
      align-items flex-end  
    
    &--button
      clear-button-defaults()
      border 1px solid
      padding-x 3rem
      padding-y 1rem
      margin-y 2rem
      font-size 1rem

      // @media desktop-and-up
      //   min-width 100%
      //   justify-content center
    
    textarea
      width 100%
      min-height 200px
      font-size 1rem
      line-height 1.5
      padding-x 1rem
      padding-y 1rem
      resize none

</style>
