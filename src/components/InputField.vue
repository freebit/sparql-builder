<template>
  <div class="input__field">
    <input type="text" v-bind:value="value" @input="$emit('input', $event.target.value)" ref="field">
    <div v-if="!simple" class="input__field--controls">
      <div class="control control-checkbox">
        <input type="checkbox" placeholder="dsfgsd" @change="onChange($event)" :disabled="!value.length" ref="checkbox">
        <div class="skin"></div>
      </div>
      <div class="control control-button">
        <button @click="addAction" :disabled="!value.length">+</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Stream } from "stream";
export default Vue.extend({
  props: {
    value: String,
    placeHolder: String,
    simple: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(val) {
      if (!val.length) {
        (this.$refs["checkbox"] as HTMLInputElement).checked = false;
      }
    }
  },
  methods: {
    onChange(evt: any) {
      this.$emit("change", { checked: evt.target.checked, value: this.value });
      (this.$refs["field"] as HTMLInputElement).readOnly = evt.target.checked;
    },
    addAction() {
      if (this.value.length) {
        this.$emit("click", this.value);
      }
    }
  }
});
</script>

<style lang="stylus" scoped>
    @import "../styles/index.styl";
    .input__field
      $base-height = $base-row-height
      position relative
      display flex
      flex-direction row
      flex-grow 1
      min-height $base-height

      input
        position relative
        flex-grow 1
        font-size 1rem
        padding-x 1rem

        
      &--controls
        position relative
        display  flex
        flex-direction row
        flex-grow 0
</style>
