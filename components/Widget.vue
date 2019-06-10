<template>
  <div class="component component-widget">
    Widget Hello nuxt-test-assignment
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ComponentWidget extends Vue {
  @Prop()
  public name!: string
}
</script>

<style lang="scss" scoped>
  div.component-widget {
    color: red;
  }
</style>
