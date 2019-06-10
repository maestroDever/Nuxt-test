import Vuex from 'vuex'
import Example from './modules/example'

const createStore = () => {
  return new Vuex.Store({
    state: {},
    modules: {
      [Example.NAME]: Example
    }
  })
}

export default createStore
