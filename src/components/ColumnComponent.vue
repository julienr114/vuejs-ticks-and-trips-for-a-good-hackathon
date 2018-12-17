<template lang="pug">
  div
    h2
      slot(name="title")
    ul
      ticket-component(
        v-for="(ticket, index) in tickets",
        :ticket="ticket",
        :tags="tags",
        :key="index",
        @remove="remove"
      )
</template>

<script>
import TicketComponent from '@/components/TicketComponent'

export default {
  props: ['tickets', 'tags'],

  components: {
    TicketComponent
  },

  methods: {
    remove (id) {
      this.$emit('remove', id)
    }
  }
}
</script>
