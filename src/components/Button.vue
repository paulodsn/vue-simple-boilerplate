<template>
  <button>
      <slot /> 
  </button>
</template>

<script>
export default {
    name: 'Button',
}
</script>

<style lang="scss" scoped>
    button {
        background: #41b883;
        border-color: #41b883;
        padding: 30px;
        border-radius: 15px;
        color: #fff;
        font-size: 18px;
    }
</style>