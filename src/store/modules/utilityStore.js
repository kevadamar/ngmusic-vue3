export default {
    state: () => ({
        showPopup: false,
    }),
    getters: {},
    mutations: {
        showingPopup(state, value) {
            state.showPopup = value
        },
    },
    actions: {},
}
