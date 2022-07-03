import { createStore } from 'vuex'
import utilityStore from './modules/utilityStore'
import musicStore from './modules/musicStore'

const store = createStore({
    modules: {
        utilityStore,
        musicStore,
    },
})

export default store
