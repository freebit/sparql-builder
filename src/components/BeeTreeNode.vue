<template>
  <div class='node-tree'>
    <div class='root'>
      <div class='node_head'>{{ node.root }} <ins class='remover' @click.self='onNodeRemove(node)'>&times;</ins></div>
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
  },
  methods: {
    onNodeRemove(node: BeeTreeNode) {
      this.$bus.$emit("remove-node", node);
    }
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

    .root
      &:before
        display block
        position absolute
        content ""
        width 50%
        height 1px
        background-color $black


    &-left
      position relative

      > .root
          &:before
            right 0%
            top 0%
            transform-origin right
            transform rotate(-10deg)
    
    &-right
      position relative
      margin-left auto

      > .root
          &:before
            left 0
            top 0
            transform-origin left
            transform rotate(10deg)

  .node_head
    display flex
    position relative
    justify-content center
    align-items center
    size(70px)
    border-radius 50%
    background-color red
    color #fff
    font-size 1rem

    .remover
      position absolute
      display flex
      justify-content center
      align-items center
      top 0
      right 0
      width 20%
      height 20%
      border-radius 50%
      background-color red
      cursor pointer
      font-size .8rem
      line-height 1
      color $white
      opacity 0
      pointer-events none
      transition opacity .3s ease

    &:hover
      .remover
        opacity 1
        pointer-events auto
        transition opacity .3s ease


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
    font-size 1.5rem

    &:after
      display none
</style>
