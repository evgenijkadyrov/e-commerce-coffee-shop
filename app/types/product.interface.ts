export interface IProduct{
    id: number,
    name: string,
    description: string,
    price:number,
    slug:string,
    reviews:string[],
    rating:number,
    images: string[],
    category:categoryProduct[]

}
export interface IProductDetails{
    product: IProduct
}
export type categoryProduct= 'tea' | 'coffee'| 'juice'