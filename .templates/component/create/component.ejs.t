<% element = locals.element || 'div' -%>
<% cssClass = 'component-' + h.cssSelector(name) -%>
<template>
  <<%= element %> class="component <%= cssClass %>">
    <%= h.componentName(name) %>
  </<%= element %>>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Component<%= h.componentName(name) %> extends Vue {

}
</script>

<style lang="scss" scoped>
  <%= element %>.<%= cssClass %> {

  }
</style>
