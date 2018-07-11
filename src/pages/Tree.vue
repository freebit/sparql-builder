<template>
  <div class='tree__block'>
    <div class='inner-container box'>
      <h1>Tree builder</h1>
      <div class='controls'>
        <span class='counter'>{{ getNodeCount() }}</span>
        <InputFieldVue v-model.trim='newValue' mode='simple' placeholder='Node value'></InputFieldVue>
        <button @click='addNode(newValue)' :disabled='!isValidNodeValue'>Добавить узел</button>
      </div>
    </div>
    <div class='tree__block'>
      <div class='inner-container'>
        <div class='tree'>
          <transition name='fade'>
            <BeeTreeNodeVue v-if='tree._head' :node='tree._head'></BeeTreeNodeVue>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BeeTree from "@/types/BeeTree";
import BeeTreeNode from "@/types/BeeTreeNode";
import BeeTreeNodeVue from "@/components/BeeTreeNode.vue";
import InputFieldVue from "@/components/InputField.vue";
import { mapState, mapActions, mapGetters } from "vuex";
export default Vue.extend({
  name: "Tree",
  components: {
    BeeTreeNodeVue,
    InputFieldVue
  },
  data() {
    return {
      newValue: ""
    };
  },
  computed: {
    ...mapState("treeModule", ["tree"]),
    ...mapGetters("treeModule", ["getNodeCount"]),
    isValidNodeValue(): boolean {
      return !Number.isNaN(parseInt(this.newValue, 10));
    }
  },
  methods: {
    ...mapActions("treeModule", ["addNode", "removeNode"])
  },

  created() {
    this.$bus.$on("remove-node", this.removeNode);
  },

  beforeDestroy() {
    this.$bus.$off("remove-node", this.removeNode);
  }
});
</script>

<style lang="stylus" scoped>
  @import "../styles/index.styl";
  .box
    position relative
    display flex
    justify-content space-between
    align-items center
    min-height 100px
  h1
    position relative
    font-size 2rem
    text-transform uppercase
    color $black
    // margin-y 1.5rem

  .controls
    position relative
    display flex
    max-height 44px
    align-items center

    .counter
      position relative
      margin-right 1rem

    button
      clear-button-defaults()
      margin-left 15px
      border 1px solid
      padding-x 3rem
      padding-y 1rem
      font-size 1rem
</style>
