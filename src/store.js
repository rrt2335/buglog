import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

let _sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/ryan/bugs',
  timeout: 3000
})

Vue.use(Vuex)
Vue.use(require('vue-moment'))

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
    setNotes(state, data) {
      state.notes = data
    },
    setActiveBug(state, data) {
      state.activeBug = data
    }
  },
  actions: {
    getBugs({ commit, dispatch }) {
      _sandboxApi.get('')
        .then(res => {
          commit('setBugs', res.data.results)
        })
    },
    // getNotes({ commit, dispatch }) {
    //   _sandboxApi.get('notes')
    //     .then(res => {
    //       commit('setNotes', res.data.results)
    //     })
    // },
    getBug({ commit, dispatch }, payload) {
      _sandboxApi.get('/:id' + payload)
        .then(res => {
          commit('setActiveBug', res.data)
        })
    },
    setActiveBug({ commit, dispatch }, payload) {
      commit('setActiveBug', payload)
    },
    addBug({ commit, dispatch }, payload) {
      _sandboxApi.post('', payload)
        .then(res => {
          dispatch('getBugs')
          router.push({ name: 'Info', params: { id: res.data.data._id } })
        })
    },
    addNote({ commit, dispatch }, payload) {
      _sandboxApi.post('notes', payload)
        .then(res => {
          dispatch('getNotes')
          router.push({ name: 'Info', params: { id: res.data.data._id } })
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