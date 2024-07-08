/* 商品数据 */
type Goods={
    id:string,
    name:string,
    desc:string,
    price:string,
    picture:string,
    discount:string,
    orderNumber:string
}
/* 分类数据 */
type CategoryItem = {
    id:string,
    name:string,
    picture:string,
    children:CategoryItem,
    goods:Goods
}
/** 导航分类响应结果 */
export type NavCategoryResponseData = ApiResponseData<CategoryItem>;
/** 导航分类信息 */
export type NavCategoryData = CategoryItem;
  