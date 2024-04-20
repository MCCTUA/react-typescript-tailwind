/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import BaseService from '../../services/base.service';
import { Product } from '../../models/Product';

const Dashboard = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    BaseService.getAll<Product[]>('products').then((res) => {
      console.log('res products :', res);
      setProduct(res);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {product.map((prd) => (
            <tr key={prd.id}>
              <td>{prd.id}</td>
              <td>{prd.attributes.title}</td>
              <td>{prd.attributes.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
