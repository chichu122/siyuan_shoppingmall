// search组件的小仓库
import { reqGetSearchInfo } from "@/api";

const state = {};
const mutations = {};
const actions = {
    async getSearchList({commit},params){
        // 当前这个re'q
        await reqGetSearchInfo(params);
        if(result.code)
    }
};
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}