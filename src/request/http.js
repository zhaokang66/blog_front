import axios from 'axios'

// 设置默认的content-type
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
//创建axios实例
const service = axios.create({
    //URL公共部分
    baseURL:'http://43.139.145.221:8888',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
export default service
