import React from 'react';
import { fetchAllProducts } from '../store/slices/products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const UserList = () => {

  const dispatch = useDispatch();

  const { list: products } = useSelector((state) => state.products)


  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [])

  return (
    <div className='flex flex-col items-center'>
      {
        products.map((product, index) => (
          <div key={index}  className='shadow-2xl w-1/2 flex flex-col items-center my-8 rounded-md border-2 border-slate-600 px-4 py-8'>
            <h3 className='font-semibold text-lg my-1'>{product.title}</h3>
            <h4 className='font-semibold my-1 rounded-md border-2 px-2 py-1 bg-slate-200'>{'$' + product.price}</h4>
            <h4 className='font-medium my-4 rounded-md border-2 px-2 py-1 bg-slate-200 '>{product.description}</h4>
            <img src={product.image} className="w-1/3 my-6"></img>
            <button className="my-2 bg-blue-500 text-white font-bold py-2 px-4 rounded border-2 border-black w-1/3">buy!</button>
          </div>
        ))
      }
    </div>
  )
}

export default UserList