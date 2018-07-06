<template>
  <div class='tree__block'>
    <div class='inner-container box'>
      <h1>Tree builder</h1>
      <div class='controls'>
        <InputFieldVue v-model.trim='newValue' mode='simple' placeholder='Node value'></InputFieldVue>
        <button @click='addNode'>Добавить узел</button>
      </div>
    </div>
    <div class='tree__block'>
      <div class='inner-container'>
        <div class='tree'>
          <transition name='fade'>
            <BeeTreeNodeVue v-if='treeData' :node='treeData'></BeeTreeNodeVue>
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
export default Vue.extend({
  name: "Tree",
  components: {
    BeeTreeNodeVue,
    InputFieldVue
  },
  data() {
    return {
      tree: new BeeTree(null),
      newValue: ""
      // treeData: {
      //   root: 10,
      //   leftLeaf: {
      //     root: 7
      //   },
      //   rightLeaf: {
      //     root: 12
      //   }
      // }
    };
  },
  computed: {
    treeData(): any {
      return this.tree._head;
    }
  },
  methods: {
    addNode() {
      const newNode = new BeeTreeNode(this.newValue);
      this.tree.add(newNode);
      this.newValue = "0";
      // console.log("tree :", this.tree);
    }
  },

  mounted() {
    // const startNode = new BeeTreeNode(3);
    // this.tree = new BeeTree(startNode);
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

    button
      clear-button-defaults()
      margin-left 15px
      border 1px solid
      padding-x 3rem
      padding-y 1rem
      font-size 1rem
</style>
