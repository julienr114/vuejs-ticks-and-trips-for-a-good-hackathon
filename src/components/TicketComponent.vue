<template lang="pug">
  li
    i(
      v-for="(tag, index) in ticket.tags",
      v-if="tags[tag].checked",
      :style="{ color: tags[tag].color }"
    ) {{ tags[tag].title }} -
    | {{ ticket.content }}
    button(@click="$emit('remove', ticket.id)") Delete
</template>

<script>

export default {
  props: ['ticket', 'tags'],

  created () {
    console.log('created')
  },

  methods: {
    remove () {
      console.log('delete')
    }
  }
}
</script>
