/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import BaseService from '../../services/base.service';
import Products from '../../models/Product';

const Dashboard = () => {
  const [product, setProduct] = useState<Products[]>([]);

  useEffect(() => {
    BaseService.getAll<Products>('products').then((res) => {
      // console.log(res);
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
          <tr>
            <td> id 1</td>
            <td> tile 1</td>
            <td> 100 </td>
          </tr>
          {/* {product.map((prd) => (
            <tr key={prd.id}>
              <td>{prd.id}</td>
              <td>{prd.title}</td>
              <td>{prd.price}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
