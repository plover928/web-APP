<template>
  <div id="app">
    <router-view/>
    <player></player>
  </div>
</template>

<script>
import Player from '@/components/player/player'

export default {
  name: 'App',
  components: {
    Player
  }
}
</script>
