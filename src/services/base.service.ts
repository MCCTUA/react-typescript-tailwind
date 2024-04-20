import axios from 'axios';
import { Product } from '../models/Product';

export default class BaseService {
  private static baseURL: string = 'http://localhost:1337/api/';

  public static async getAll<T>(url: string): Promise<Product[]> {
    const response = await axios.get(`${this.baseURL}${url}`);
    return response.data.data as Product[]; // ทำให้แน่ใจว่าข้อมูลถูกแปลงประเภทอย่างถูกต้อง
  }
    
    // Get Product By ID

    // Post new Product

    // Edit Product

    // Delete Porject
}


// interface ApiResponse<T> {
//     data: T;
//     meta?: {
//         pagination: {
//             page: number;
//             pageSize: number;
//             pageCount: number;
//             total: number;
//         }
//     }
// }

// export default class BaseService {

//     private static baseURL: string = 'http://localhost:1337/api/'

//     // Get All Product
//     public static async getAll<T>(url: string): Promise<ApiResponse<T>> {

//          try {
//             const response = await axios.get<ApiResponse<T>>(this.baseURL + url);
//             return response.data; // ส่งกลับข้อมูลในรูปแบบที่ต้องการ
//         } catch (error) {
//             throw error;
//         }
//     }
// }