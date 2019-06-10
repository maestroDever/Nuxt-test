<template>
  <div id="page-index" class="page page-index">
    <b-btn @click="moreWheels" class="mt-3">
      more wheels 
    </b-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import Example from '../store/modules/example'

@Component
export default class PageIndex extends Vue {
  ex = getModule(Example, this.$store)

  moreWheels() {
    return this.ex.incrWheels(2)
  }

  get axles() {
    return this.ex.axles
  }
}
</script>

<style lang="scss" scoped>
  div#page-index {

  }
</style>
