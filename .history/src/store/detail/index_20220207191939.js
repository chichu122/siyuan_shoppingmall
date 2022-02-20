import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api";

const state = {
    goodInfo:{},
    游客临时身份
    uuid_token
};
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo;
    }
};
const actions = {
    //获取产品信息的action
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code===200){
            commit('GETGOODINFO',result.data)
        }
    }, 
    async addOrUpdateShopCart({commit},{skuId,skuNum}){//这么写在大括号里是解构赋值
        // 加入购物车返回的解构
        // 加入购物车以后（发请求），前台将参数带给服务器
        // 服务器写入数据成功，并没有返回其他的数据，只是返回code = 100，代表这次操作成功
        // 因为服务器没有返回其余数据，因此咱们不需要三连环存储数据
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        //代表服务器加入购物车成功
        if(result.code==200){
            return 'ok'
        }else{
            // 加入失败
            return Promise.reject(new Error('fail'));
        }
    }
};
// 为简化数据而生
const getters = {
    // 路径导航简化的数据
    categoryView(state){
        // 注意细节，state.goodInfo初始状态空对象，空对象的categoryView属性值undefined
        return state.goodInfo.categoryView || {};
    },
    // 简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    },
};
export default{
    state,
    actions,
    mutations,
    getters
}