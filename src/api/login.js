import request from '../request/http'
import qs from 'qs'
// 登录接口
export function login(username,password){
    const data = qs.stringify({
        username:username,
        password:password
    })
    return request({
        url:'/login',
        method:'post',
        data:data
    })
}
