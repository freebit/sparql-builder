<template>
  <div id='root'>
    <header>
      <div class='inner-container'>
        <nav>
          <ul>
            <li>
              <router-link to='/'>Sparql builder</router-link>
            </li>
            <li>
              <router-link to='/tree'>Tree builder</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import "./styles/index.styl";
  header
    position relative
    height 44px
    background-color #42b983
    .inner-container
      position relative
      height 100%
  nav
    position relative
    height 100%

  ul
    display flex
    align-items center
    height 100%

    li
      margin-right 15px

    a 
      display flex
      color inherit
      align-items center
      padding-bottom 3px
      border-bottom 1px solid transparent
      transition border-color .2s ease-out

      &.current
        border-color $black
        transition border-color .5s ease-out
</style>
