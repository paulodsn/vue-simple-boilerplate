<template>
    <LayoutDefault id="app">
        <router-view />
    </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';

export default {
    name: 'app',
    components: {
        LayoutDefault,
    },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
