// 当前这个模块：API接口统一管理
// 引入二次封装的axios（带有请求、响应的拦截器）
import requests from './request'
import mockRequests from './mockRequest';

// 三级联动接口
// /api/product/getBaseCategoryList，GET 无参数
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList',method:'get'});

export const reqGetBannerList = ()=>mockRequests({url:'/banner'})

export const reqGetFloorBanner = ()=>mockRequests({url:'/floor'})

// 获取搜索模块数据 地址：/api/list  请求方式：post  参数：需要带参数
/*
{
    "category3Id": "61",
    "categoryName": "手机",
    "keyword": "小米",
    "order": "1:desc",
    "pageNo": 1,
    "pageSize": 10,
    "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
    "trademark": "4:小米"
  }
*/
// 当前这个函数需不需要接受外部传递参数
// 当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数[至少是一个空对象]
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:'post',data:params})

// 获取产品详情信息的接口 URL：/api/item/{skuid} 请求方式：get
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'});

// 将产品添加到购物车中（获取更新某一个产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum }   POST
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/api/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

// 获取购物车列表数据接口
// URL：/api/cart/cartList  method:get
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'})

// 删除购物产品的接口
// URL：/api/cart/deleteCart/{skuId}  method:DELETE
export const reqDeleteCartById = (skuId)=>requests({url:'/cart/deleteCart/{skuId}',method:'delete'})
// 修改商品的选中状态
// URL：/api/cart/checkCart/{skuId}/{isChecked}    method:get
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/{isChecked}`})