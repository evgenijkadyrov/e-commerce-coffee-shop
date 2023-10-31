export const formatPrice=(price:number)=>{
  return new Intl.NumberFormat('ru-RU',{
        style:'currency',
        currency: 'USD'
    }).format(price)
}