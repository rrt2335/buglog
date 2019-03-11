import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

let _sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/ryan/bugs',
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
    getNotes({ commit, dispatch }) {
      let id = this.state.activeBug._id
      _sandboxApi.get(`${id}/notes`)
        .then(res => {
          commit('setNotes', res.data.results)
        })
    },
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
      let id = this.state.activeBug._id
      _sandboxApi.post(`${id}/notes`, payload)
        .then(res => {
          this.dispatch('getNotes')
          // router.push({ name: 'Info', params: { id: res.data.data._id } })
        })
    },
    editBug({ commit, dispatch }, payload) {
      _sandboxApi.put('bugs/' + payload._id, payload)
        .then(res => {
          dispatch('getBugs')
        })
    },
    closeBug({ commit, dispatch }, payload) {
      _sandboxApi.delete(payload._id)
        .then(res => {
          dispatch('getBugs')
        })
    },
    deleteNote({ commit, dispatch }, payload) {
      let id = this.state.activeBug._id
      _sandboxApi.delete(`${id}/notes/${payload._id}`)
        .then(res => {
          dispatch('getNotes')
        })
    }
  }
})