<template>
  <div class="input__field">
    <input type="text" v-bind:value="value" @input="$emit('input', $event.target.value)"
    >
    <div class="input__field--controls">
        
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value: String
  }
});
</script>

<style lang="stylus" scoped>
    .input__field
        position relative
        display flex
        flex-direction row

        input
            position relative

        
        $--controls
            position relative
            flex-grow 1
            max-width 50px
            background-color orange

            

</style>
