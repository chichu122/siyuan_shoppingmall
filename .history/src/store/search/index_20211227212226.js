// search组件的小仓库
import { reqGetSearchInfo } from "@/api";

const state = {};
const mutations = {};
const actions = {
    async getSearchList({commit},params){
        await reqGetSearchInfo(params);
        if(XPathResult.conde)
    }
};
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}