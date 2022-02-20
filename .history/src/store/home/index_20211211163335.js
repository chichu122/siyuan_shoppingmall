import { reqCategoryList } from "@/api";

// home组件的小仓库
const state = {
    // state中数据默认初始值别瞎写，根据接口的返回值进行初始化。服务器返回对象即为对象，返回数组即为数组
    categoryList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList..splice(16,1);
    }
};
const actions = {
    async categoryList({commit}){
        // 通过API里面的接口函数调用，向服务器发请求，获取服务器数据
        let result = await reqCategoryList();
        if(result.code == 200){
            commit('CATEGORYLIST',result.data);
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