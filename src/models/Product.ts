// Models/Product.ts
export interface ProductAttributes {
  title: string;
  description: string;
  price: number;
  qty: number;
  is_featured: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export type Products = Product[];


// export default class Products {

//   id?: number;
//   title: string;
//   slug: string;
//   description: string;
//   price: number;
//   qty: number;
//   image: object;
//   is_featured: boolean;
//   category: object;
//   users: object;
//   created_by: string;
//   updated_by: string;

//   constructor(

//     title: string, 
//     slug: string, 
//     description: string, 
//     price: number, 
//     qty: number,
//     image:object, 
//     is_featured:boolean, 
//     category: object, 
//     users: object, 
//     created_by: string, 
//     updated_by: string

// ){

//       this.title = title;
//       this.slug = slug;
//       this.description = description;
//       this.price = price;
//       this.slug = slug;
//       this.qty = qty;
//       this.image = image;
//       this.is_featured = is_featured;
//       this.category = category;
//       this.users = users;
//       this.created_by = created_by;
//       this.updated_by = updated_by;      
//   }

// }
