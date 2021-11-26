import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
// 状态
const state = {
  token: getToken() // 初始化vuex的时候，在缓存中读取token
}

const mutations = {
  // 设置修改token的方法
  setToken(state, token) {
    state.token = token // 将数据同步给vuex
    setToken(token) // 同步数据给缓存
  },
  removeToken(state) {
    state.token = null // 修改vuex的值
    removeToken() // 同步到本地缓存
  }
}

const actions = {
  async login(context, data) {
    const result = await login(data)
    console.log(result)
    if (result.data.success) {
      // true表示登陆成功
      context.commit('setToken', result.data.data)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
