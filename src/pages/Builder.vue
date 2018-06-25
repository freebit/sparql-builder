<template>
  <div class="home">
    <h1>builder page</h1>
    <TriplVue
      v-for="triple in triples"
      :key="triple.id"
    ></TriplVue>
    <button @click="addTriple"></button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import InputFieldVue from "@/components/InputField.vue";
import TriplVue from "@/components/Tripl.vue";
export default Vue.extend({
  name: "Builder",
  components: {
    InputFieldVue,
    TriplVue
  },
  computed: {
    ...mapState("qlModule", ["triples"])
  },
  methods: {
    ...mapActions("qlModule", ["addTriple"])
  },

  mounted() {
    /* eslint-disable no-console*/
    console.log("this.triples :", this.triples);
    /* eslint-enable no-console*/
  }
});
</script>
