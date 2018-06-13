import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const state = {
  tickets: {},
  isVisible: false,
  focusTicket: null
}

const mutations = {
  updateTickets (state, tickets) {
    state.tickets = tickets
  }
}

const actions = {
  updateTickets (context) {
    axios.get('http://localhost:3000/tickets').then((res) => {
      context.commit('updateTickets', res.data)
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
  }
  // editTickets (context, newTicket) {
  //   axios.put('http://localhost:3000/tickets/' + newTicket.id).then((res) => {
  //     context.commit('updateTickets', res.data)
  //   }).catch((err) => {
  //     // eslint-disable-next-line no-console
  //     console.error(err)
  //   })
  // }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
