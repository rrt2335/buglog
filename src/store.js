import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

let _sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/ryan',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    notes: [],
    activeBug: {}
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    setActiveBug(state, data) {
      state.activeBug = data
    },
    setNotes(state, data) {
      state.notes = data
    }
  },
  actions: {
    getBugs({ commit, dispatch }) {
      _sandboxApi.get('bugs')
        .then(res => {
          commit('setBugs', res.data.results)
        })
    },
    getBug({ commit, dispatch }, payload) {
      _sandboxApi.get('bugs/' + payload)
        .then(res => {
          commit('setActiveBug', res.data)
        })
    },
    // addBug({ commit, dispatch }, payload) {
    //   _sandboxApi.post('bugs', payload)
    //     .then(res => {
    //       dispatch('getBugs')
    //       router.push({ name: 'Info', params: { id: res.data.data._id } })
    //     })
    // },
    addBug({ commit, dispatch }, payload) {
      _sandboxApi.post('bugs', payload)
        .then(res => {
          dispatch('initialize')
        })
    },
    editBug({ commit, dispatch }, payload) {
      _sandboxApi.put('bugs/' + payload._id, payload)
        .then(res => {
          dispatch('getBugs')
        })
    },
    deleteBug({ commit, dispatch }, payload) {
      _sandboxApi.delete('bugs/' + payload._id)
        .then(res => {
          dispatch('getBugs')
        })
    }
  }
})
