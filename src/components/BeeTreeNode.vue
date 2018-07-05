<template>
  <div class="node-tree">
    <div class="root">
      <div class="node_head">{{ node.root }}</div>
    </div>
    <div class="leaves">
      <transition name="fade">
        <node v-if="node.leftLeaf" :node="node.leftLeaf" class="leaf leaf-left"></node>
      </transition>
      <transition name="fade">
        <node v-if="node.rightLeaf" :node="node.rightLeaf" class="leaf leaf-right"></node>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BeeTreeNode from "@/types/BeeTreeNode";
export default Vue.extend({
  name: "node",
  props: {
    node: BeeTreeNode
  }
});
</script>

<style lang="stylus" scoped>
  @import "../styles/index.styl";
  .node-tree
    position relative
    display flex
    flex-direction column
  .root
    position relative
    display flex
    width 100%
    justify-content center
    
  .leaves
    position relative
    display flex
    flex-direction row
    justify-content space-between

  .leaf
    position relative
    display flex
    flex-basis 50%

    &-left
      position relative
    &-right
      position relative
      margin-left auto

  .node_head
    display flex
    position relative
    justify-content center
    align-items center
    size(100px)
    border-radius 50%
    background-color red
    color #fff
    font-size 24px

    .leaf-left > .root &
      background-color blue
    .leaf-right > .root &
      background-color green
</style>
