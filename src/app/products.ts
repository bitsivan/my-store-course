export interface Product{
  id: number,
  name: string,
  price: number,
  description: string
}


export const products: Product[]=[
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Great phone with one of the best screens.'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 750,
    description: 'Great phone with one of the best screens.'
  },
  {
    id: 3,
    name: 'Phone Standart',
    price: 600,
    description: ''
  },
  {
    id: 4,
    name: 'S23',
    price: 500,
    description: 'Great phone with Android'
  },
  {
    id: 5,
    name: 'S23 plus',
    price: 550,
    description: 'Great phone android with one of the best cameras.'
  },
  {
    id: 6,
    name: 'Oppo Find x5',
    price: 600,
    description: 'Great phone with one of the best screens android'
  },

]
