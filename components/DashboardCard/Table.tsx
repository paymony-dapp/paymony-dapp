import React from 'react';
import { products } from '../../utils/data';

const Table = () => {
  return (
    <div className='bg  rounded-xl p-1'>
      <div className='overflow-x-auto rounded-lg'>
        <table className='min-w-full text-sm border border-gray-700 divide-y-2 divide-gray-700 rounded-xl text-white'>
          <thead>
            <tr className='divide-x divide-gray-700 text-white'>
              <th className='px-4 py-2 font-medium text-left text-gray-300 whitespace-nowrap'>
                S/N
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-300 whitespace-nowrap'>
                TITLE
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-300 whitespace-nowrap'>
                HEX
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-300 whitespace-nowrap'>
                Date
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-300 whitespace-nowrap'>
                Status
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-700 '>
            {products.map((product) => (
              <tr className='divide-x divide-gray-700'>
                <td className='px-4 py-2 font-medium text-gray-400 whitespace-nowrap'>
                  {product.id}
                </td>
                <td className='px-4 py-2 text-gray-400 whitespace-nowrap'>
                  {product.title}
                </td>
                <td className='px-4 py-2 text-gray-400 whitespace-nowrap'>
                  {product.hex}
                </td>
                <td className='px-4 py-2 text-gray-400 whitespace-nowrap'>
                  {product.date}
                </td>
                <td className='px-4 py-2 text-red-400 whitespace-nowrap'>
                  {product.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
