<% element = locals.element || 'div' -%>
<% htmlId = 'page-' + h.cssSelector(name) -%>
<template>
  <<%= element %> id="<%= htmlId %>" class="page <%= htmlId %>">
    <%= h.componentName(name) %>
  </<%= element %>>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Page<%= h.componentName(name) %> extends Vue {

}
</script>

<style lang="scss" scoped>
  <%= element %>#<%= htmlId %> {

  }
</style>
