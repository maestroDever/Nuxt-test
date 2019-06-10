import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { configure } from '@storybook/vue'

import '../assets/scss/app.scss'

Vue.use(BootstrapVue)

const req = require.context('./stories', true, /.stor(y|ies).tsx?$/)

const loadStories = () => {
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
