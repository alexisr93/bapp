<template>
  <div class="dashboard-container">
    <div class="dashboard-text">Name:{{ name }}</div>
    <div class="dashboard-text">Roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
    <div class="dashboard-text">Completed:{{ name }}</div>
    <div class="dashboard-text">Pending:{{ name }}</div>
    <div class="dashboard-text">Deleted:{{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
