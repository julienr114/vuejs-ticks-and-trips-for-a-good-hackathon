<template>
  <div>
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand href="#">
        <img src="@/assets/logo.png" alt="Vuejs Ticks & trips for a good hackaton" width="28px">
      </b-navbar-brand>
    </b-navbar> 

    <modal>
    </modal>
      
    <!-- content -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-3" v-for="(column, index) in columns" :key="index">
          <h2>{{ column }}</h2>
          <div class="card" v-for="(ticketIndex, ticketColumnIndex) in orderedColumns[column]" :key="ticketColumnIndex">
            <div class="card-body">
              <p>{{ tickets[ticketIndex].content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import api from './api.js'

export default {
  name: 'app',

  mixins: [api],

  components: {
    Modal
  },

  computed: {  
    tickets () {
      return this.$store.state.tickets
    },
    todo: function () {
      return Object.keys(this.tickets).filter(key => this.tickets[key].column === 'todo')
    },
    doing: function () {
      return Object.keys(this.tickets).filter(key => this.tickets[key].column === 'doing')
    },
    review: function () {
      return Object.keys(this.tickets).filter(key => this.tickets[key].column === 'review')
    },
    done: function () {
      return Object.keys(this.tickets).filter(key => this.tickets[key].column === 'done')
    },
    orderedColumns () {
      return {
        todo: this.todo,
        doing: this.doing,
        review: this.review,
        done: this.done
      }
    }
  },

  data () {
    return {
      modalIsVisible: false,
      columns: {},
    }
  },

  created () {
    this.$store.dispatch('updateTickets')
    this.getColumns()
  }
}
</script>
