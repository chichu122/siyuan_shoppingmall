// 登录与注册的模块
import {reqGetCode} from "@/api";
const state = {};
const mutations = {};
const actions = {
    async getCode(){
        let result = reqGetCode(phone);
        if(result.code==200){
            commit('GETCODE',result)
        }
    }
};
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}