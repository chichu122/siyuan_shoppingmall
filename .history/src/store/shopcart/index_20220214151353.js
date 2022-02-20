import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

const state = {
    cartList : [],
};
const mutations = {
    GETCARTLIST(state,cartList){//在这里的cartList是形参，是随便起的名字
        state.cartList = cartList;
    }
};
const actions = {
    // 获取购物车列表数据
    async getCartList({commit}){
        let result = await reqCartList();
        if(result.code==200){
            commit('GETCARTLIST',result.data)
        }
    },
    // 删除购物车某一个产品
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId);
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 修改购物车某一个产品的选中状态
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked);
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 删除全部选中的产品
    deleteAllCheckedCart({dispatch,getters}){
        // context:小仓库，包含commit[提交mutations修改state]   getters[计算属性]   dispatch[派发action]  state[当前仓库数据]
        // 获取购物车中全部的产品（是一个数组）
        getters.cartList.cartInfoList.forEach()
    }
};
const getters = {
    cartList(state){
        return state.cartList[0]||{}
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}