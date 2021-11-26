import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  // 如果执行 npm run dev  值为 /api 正确  /api 这个代理只是给开发环境配置的代理
  // 如果执行 npm run build 值为 /prod-api  没关系  运维应该在上线的时候 给你配置上 /prod-api的代理
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  timeout: 5 * 1000 // 定义5秒超时
}) // 创建一个axios的实例
service.interceptors.request.use()
service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  // 根据success的值决定下边的操作
  if (success) {

  } else {
    // 业务错误，进catch
    Message.error(message)
    return Promise.reject(new Error(message))
  }
  console.log(success, message, data)
}, error => {
  Message.error(error.message) // 错误提示信息
  return Promise.reject(error)
})
export default service
