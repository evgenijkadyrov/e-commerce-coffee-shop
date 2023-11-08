export interface IProduct{
    id: number,
    name: string,
    description: string,
    price:number,
    slug:string,
    reviews:string[],
    rating:number,
    images: string[]

}
export interface IProductDetails{
    product: IProduct
}