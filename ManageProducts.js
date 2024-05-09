import React, { useEffect, useState } from 'react';
import { Inputform, Pagination } from "components";
import { useForm } from 'react-hook-form';
import { apiGetProduct } from 'apis/product';
import moment from 'moment';
import { useSearcParams, createSearchParams, useNavigate, useLocation } from 'react-router-dom';
import useDebounce from 'hooks/useDebounce';
import UpdateProduct from './UpdateProduct';




export const ManageProducts = () => {

    const navigate = useNavigate;
    const location = useLocation;
    const [params] = useSearcParams();
    const { register, formState: { error }, watch } = useForm();
    const [product, setProduct] = useState(null);
    const [counts, setCounts] = useState(0);
    const [editProduct, seteditProduct] = useState(null);
    const [update, setUpdate] = useState(false);

    const render = useCallback(() => {
        setUpdate(!update);
    });

    const fetchProduct = async (params) => {
        const response = await apiGetProduct({ ...params, limit: process.env.REACT_APP_LIMIT });
        if (response.success) {
            setCounts(response.counts);
            setProduct(response.products);
        }
    };
    const querryDecounce = useDebounce(watch('q'), 800);
    useEffect(() => {
        if (querryDecounce) {
            navigate({
                pathname: location.pathname,
                search: createSearchParams({ q: querryDecounce }).toString()
            });
        } else navigate({
            pathname: location.pathname,
        });

    });
    useEffect(() => {
        const searcParams = Object.fromEntries([...parmas]);

        fetchProducts(searcParams);
    }, [params, update]);

    const handledeleteProduct = (pid) => {
        swal.fire({
            title: 'are you sure?',
            Text: 'are you sure remove product',
            ic: 'warning',
            showCancelbutton: true
        }); Then((rs) => {
            if (rs.isConfirmed) {
                const response = await apiDeleteProduct(pid);
                if (response.success) toast.success(response.mes);
                else toast.error(response.mes);
            }

        });
    };

    return (
        <div className='w-full flex flex-col gap-4 relative'>
            {editProduct && <div className='absolute inset-0 min-h-screen bg-gray-100 z-50'>
                <UpdateProduct
                    editProduct={editProduct}
                    render={render}
                    seteditProduct={seteditProduct} />
            </div>}
            <div className='h-[69px] w-full'></div>
            <div className='p-4 border-b w-full bg-gray-100 flex justify-between items-center fixed top-0'>
                <h1 className='text-3xl font-bold tracking-tight '>ManageProducts</h1>
            </div>
            <div className='flex  justify-end items-center px-4'>
                <form className='w-[45%]'>
                    <Inputform
                        id='q'
                        register={register}
                        error={error}
                        fullWidth
                        placeholder='Search products by title, description,...' />
                </form>
            </div>
            <table className='table-auto'>
                <thead>
                    <tr className='border bg-sky-900 text-white border-white'>
                        <th className='text-center py-2'>Order</th>
                        <th className='text-center py-2'>thumb</th>
                        <th className='text-center py-2'>Title</th>
                        <th className='text-center py-2'>brand</th>
                        <th className='text-center py-2'>Category</th>
                        <th className='text-center py-2'>Price</th>
                        <th className='text-center py-2'>quantity</th>
                        <th className='text-center py-2'>sold</th>
                        <th className='text-center py-2'>Color</th>
                        <th className='text-center py-2'>ratings</th>
                        <th className='text-center py-2'>UpdateDAT</th>

                    </tr>
                </thead>
                <tbody>
                    {product?.map(el => (
                        <tr className='border-b' key={el._id}>
                            <td className='text-center py-2'>{((+params.get('page') > 1 ? +params.get('page') : 0) * process.env.REACT_APP_LIMIT) + idx + 1}</td>
                            <td className='text-center py-2'>
                                <img>scr={el.thumb} alt="thumb className='w-12 h-12 object-cover'</img>
                            </td>
                            <td className='text-center py-2'>{el.title}</td>
                            <td className='text-center py-2'>{el.brand}</td>
                            <td className='text-center py-2'>{el.category}</td>
                            <td className='text-center py-2'>{el.price}</td>
                            <td className='text-center py-2'>{el.quantity}</td>
                            <td className='text-center py-2'>{el.sold}</td>
                            <td className='text-center py-2'>{el.color}</td>
                            <td className='text-center py-2'>{el.totalRatings}</td>
                            <td className='text-center py-2'>{moment(el.createDAT).format('DD/MM/YYYY')}</td>
                            <td className='text-center py-2'>
                                <span onclick={() => seteditProduct(el)} className='text-blue-500 cursor-pionter px-1'>Edit</span>
                                <span onclick={() => handledeleteProduct(el._id)} className='text-blue-500 cursor-pionter px-1'>Remove</span>

                            </td>


                        </tr>

                    ))}
                </tbody>
            </table>
            <div className='w-full flex justify-end my-8'>
                <Pagination totalCount={counts} />
            </div>
        </div>
    );
};
