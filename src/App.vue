<template lang="pug">
div
  form
    span.field(v-for='(value, key) in tags')
      input(type='checkbox', v-model='value.checked')
      label(:style="{ textDecoration: value.checked ? 'none' : 'line-through', color: value.color }")  {{ value.title }}
  column-component(
    v-for='(id, index) in orderedColumns',
    :tickets='ticketsByColumn[id]',
    :tags='tags',
    :key='id',
    @remove="remove"
  )
    div(slot="title") {{ columns[id].title }}
</template>

<script>
import db from './db.js'
import ColumnComponent from './components/ColumnComponent.vue'

export default {
  // Childs components
  components: {
    ColumnComponent
  },

  data () {
    return {
      columns: db.columns,
      tickets: db.tickets,
      // Use Reduce for add 'checked' key to tag for filter
      tags: Object.keys(db.tags).reduce((tags, key) => {
        tags[key] = { ...db.tags[key], checked: true }
        return tags
      }, {})
    }
  },

  watch: {
    // Launched when 'this.tickets' change
    tickets (newValue, oldValue) {
      console.log('tickets est modifié')
    }
  },

  computed: {
    orderedColumns () {
      return Object.keys(this.columns).sort((a, b) => this.columns[a].order - this.columns[b].order)
    },
    ticketsByColumn () {
      return Object.keys(this.columns).reduce((columns, key) => {
        columns[key] = Object.keys(this.tickets).filter(ticketId => {
          /* eslint-disable eqeqeq */
          let isInColumn = this.tickets[ticketId].column == key
          /* eslint-enable eqeqeq */
          let hasTags = this.tickets[ticketId].tags.length > 0
          let oneTagIsChecked = this.tickets[ticketId].tags.some(tag => this.tags[tag].checked)
          return isInColumn && (!hasTags || oneTagIsChecked)
        }).map(id => { return { ...this.tickets[id], id } })
        return columns
      }, {})
    }
  },

  methods: {
    remove (id) {
      this.$delete(this.tickets, id)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
