<template>
  <div class="home">
    <Header></Header>
    <Tab></Tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/m-header/m-header'
import Tab from '@/components/tab/tab'
export default {
  components: {
    Header,
    Tab
  }
}
</script>
