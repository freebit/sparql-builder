<template>
  <div class="triple__block">
    <div class="triple__block--items">
      <InputFieldVue v-model="triple._subject" @click="addTriple" @change="selectField" placeholder="subject"></InputFieldVue>
      <InputFieldVue v-model="triple._predicat" @click="addTriple" @change="selectField" placeholder="predicat"></InputFieldVue>
      <InputFieldVue v-model="triple._object" @click="addTriple" @change="selectField" placeholder="object"></InputFieldVue>
    </div>
    <div class="control control-button">
      <button @click="removeTriple(index)" :disabled="triples.length === 1">&times;</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RdfTriple from "../types/RdfTriple";
import InputFieldVue from "@/components/InputField.vue";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  name: "Triple",
  components: {
    InputFieldVue
  },
  props: {
    triple: Object,
    index: Number
  },
  computed: {
    ...mapState("qlModule", ["triples"])
  },
  methods: {
    ...mapActions("qlModule", ["addTriple", "removeTriple"]),
    selectField(data: any) {
      const { checked, value } = data;
      if (checked) {
        this.triple.selected.push(value);
      } else {
        this.triple.selected = this.triple.selected.filter(
          (val: string) => value !== val
        );
      }
    }
  }
});
</script>

<style lang="stylus" scoped>
  .triple__block
    position relative
    display flex
    width 100%

    + .triple__block
      margin-top 1.2rem

    &--items
      position relative
      display flex
      flex-direction row
      width auto
      flex-grow 1
      justify-content space-between

    
    .input__field
      max-width 30%
      // margin-right 16px

    .control
      max-width 50px
      margin-left 1rem


</style>
