<template>
  <div class='node-tree'>
    <div class='root'>
      <div class='node_head'>{{ node.root }}</div>
    </div>
    <div class='leaves'>
      <transition name='fade'>
        <node v-if='node.leftLeaf' :node='node.leftLeaf' class='leaf leaf-left'></node>
      </transition>
      <transition name='fade'>
        <node v-if='node.rightLeaf' :node='node.rightLeaf' class='leaf leaf-right'></node>
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
    size(70px)
    border-radius 50%
    background-color red
    color #fff
    font-size 24px

    // &:after
    //     display block
    //     position absolute
    //     content ""
    //     width 98px
    //     height 2px
    //     left 100%
    //     top 40%

    .leaf-left > .root &
      background-color blue
      &:after
        background-color blue
        transform-origin left
        transform rotate(-25deg)
    .leaf-right > .root &
      background-color green
      &:after
        left auto
        right 100%
        background-color green
        transform-origin right
        transform rotate(25deg)
  
  .tree > .node-tree > .root .node_head
    border 2px solid $black
    size(100px)
    background-color orange
    color $black

    &:after
      display none
</style>
