import axios from 'axios'

export default {
  methods: {
    getColumns () {
      axios.get('http://localhost:3000/column').then((res) => {
        this.columns = res.data
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
    }
  }
}
