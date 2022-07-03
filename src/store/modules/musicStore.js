import { getList } from '@/service/musicService.js'

export default {
    state: () => ({
        resultData: null,
        isLoading: false,
        isLoadingLoadMore: false,
        totalData: 0,
        page: 1,
    }),
    getters: {},
    mutations: {
        setLoading(state, value) {
            state.isLoading = value
        },
        setLoadingLoadMore(state, value) {
            state.isLoadingLoadMore = value
        },
        setData(state, value) {
            state.resultData = value
        },
        setDataLoadMore(state, value) {
            state.resultData?.data?.results.concat(value)
        },
    },
    actions: {
        laodMore: async ({ commit, state }, { search = '' }) => {
            // console.log('store search', search)
            commit('isLoadingLoadMore', true)
            const response = await getList({ search, page: state.page + 1 })
            commit('setDataLoadMore', response?.data?.results)
            commit('isLoadingLoadMore', false)
        },
        fetchMusicBySearch: async ({ commit, state }, search = '') => {
            // console.log('store search', search)
            commit('setLoading', true)
            const response = await getList({ search })
            commit('setData', response)
            commit('setLoading', false)
        },
    },
}
