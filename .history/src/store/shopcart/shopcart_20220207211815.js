import { reqCartList } from "@/api";

const state = {};
const mutations = {};
const action = {
    async getCartList({commit}){
        let result = await reqCartList();
        if(result.code==200){
            commit('')
        }
    }
};
const getters = {};
export default{
    state,
    mutations,
    action,
    getters
}