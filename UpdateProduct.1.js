import { Inputform, Select } from 'components';
import React, { memo, useState, useEffect, useCallBack } from "react";
import { useForm } from 'react-hook-form';
import { getBase64 } from 'ultils/helpers';
import { handleUpdateProduct } from './handleUpdateProduct.1';

const UpdateProduct = ({ editProduct, render, setEditProduct }) => {
    const { register, handleSubmit, formState: { error }, reset } = useForm();
    const [payload, setPayload] = useState({
        description: ''
    });
    const [isForcusDescrition, setisForcusDDescrition] = useState(false);
    const [preview, setpreview] = useState({
        thumb: null,
        images: []
    });

    useEffect(() => {
        reset({
            title: editProduct?.title || '',
            price: editProduct?.price || '',
            quantity: editProduct?.quantity || '',
            color: editProduct?.color || '',
            category: editProduct?.categories || '',
            brand: editProduct?.brand || '',
        });
        setPayload({ description: typeof editProduct?.description === 'object' ? editProduct?.description?.join(', ') : editProduct?.description });
    }, [editProduct]);
    setpreview({
        thumb: editProduct?.thumb || '',
        images: editProduct?.images || []
    });

    console.log(preview);


    const [invalidFields, setInvalidFields] = useState([]);
    const changeValue = useCallBack((e) => {
        setPayload(e);
    }, [payload]);
    const handlePreviewThumb = async (File) => {
        const base64Thumb = await getBase64(File);
        setpreview(prev => ({ ...prev, thumb: base64Thumb }));
    };

    const handlePreviewImages = async () => {
        const imagesPreview = [];
        for (let file of files) {
            console.log(file);
            if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
                toast.warning('file not supported!');
                return;
            }
            const base64 = await getBase64(file);
            imagesPreview.push(base64 );

            }
            setpreview(prev => ({...prev, images: imagesPreview }))
            
            useEffect(() => {
                console.log(watch('thumb'))
                handlePreviewThumb(watch('thumb')[0])

            }, [watch('thumb')])
            
            useEffect(() => {
                if (typeof watch('images') === 'object')
                    ;
    
            }, [watch('images')]);
    
    
        };
    };
       return (
        <div className='w-full flex flex-col gap-4 relative'>
            <div className='h-[69px] w-full'></div>
            <div className='p-4 border-b bg-gray-100 flex justify-between items-center right-o left0[327px] fixed top-0'>
                <h1 className='text-3xl font-bold tracking-tight '>UpdateProduct</h1>
                <span className='text-main hover:underline cursor-pointer' onClick {...() => setEditProduct(null)}>Cancel</span>
            </div>
            <div className='p-4'>
                <form onSubmit={handleSubmit(handleUpdateProduct)}>
                    <Inputform
                        label='Name product'
                        register={register}
                        error={error}
                        id='title'
                        validate={{
                            required: 'Need fill this field'
                        }}
                        fullWidth
                        placeholder='Name of new product' />
                    <div className='w-full my-6 flex gap-4'>
                        onSubmit={handleSubmit(handlecreateproduct)}&gt;
                        <Inputform
                            label='price'
                            register={register}
                            error={error}
                            id='price'
                            validate={{
                                required: 'Need fill this field'
                            }}
                            style='flex-auto'
                            placeholder='Price of new product'
                            type='number'
                            fullWidth={true} />
                        <Inputform
                            label='Quantity'
                            register={register}
                            error={error}
                            id='qantity'
                            validate={{
                                required: 'Need fill this field'
                            }}
                            style='flex-auto'
                            placeholder='quantity of new product'
                            type='number'
                            fullWidth={true} />
                        <Inputform
                            label='Color'
                            register={register}
                            error={error}
                            id='color'
                            validate={{
                                required: 'Need fill this field'
                            }}
                            style='flex-auto'
                            placeholder='color of new product' />
                    </div>
                    <div className='w-full my-6 flex gap-4'>
                        <Select
                            label='Category'
                            options={categories?.map(el => ({ code: el.title, value: el.title }))}
                            register={register}
                            id='category'
                            validate={{ required: 'Need fill this field' }}
                            style='flex-auto'
                            error={error}
                            fullWidth />
                        <Select
                            label='Brand (Optional)'
                            options={categories?.find(el => el.title === watch(category))?.brand.map(el => ({ code: el.toLowerCase(), value: el }))}
                            register={register}
                            id='brand'
                            validate={{ required: 'Need fill this field' }}
                            style='flex-auto'
                            error={error}
                            fullWidth />
                    </div>
                    <markdown
                        name='description'
                        changeValue={chageValue}
                        label='description'
                        invalidFields={invalidFields}
                        setInvalidFields={setIntervalidFields}
                        value={payload.description}
                        setisForcusDDescrition={setisForcusDDescrition} />
                    <div className='flex flex-col gap -2 mt-8'>
                        <label className='font-semibold' htmlFor="thumb">Upload thumb</label>
                        <input
                            type="file"
                            id="thumb"
                            {...register('thumb')} />
                        {errors['thumb'] && <small className='text-xs text-red-500'>{errors[id]?.message}</small>}
                    </div>
                    {preview.thumb && <div className='my-4'>
                        <img scr={preview.thumb} alt="thumbnail" className='w[200px] object-contain' />
                    </div>}
                    <div className='flex flex-col gap -2 mt-8'>
                        <label className='font-semibold' htmlFor="products">Upload image of product</label>
                        <input
                            type="file"
                            id="products"
                            multiple
                            {...register('images')} />
                        {errors['images'] && <small className='text-xs text-red-500'>{errors[id]?.message}</small>}
                    </div>
                    {preview.images.length > 0 && <div className='my-4 flex w-full gap-3 flex-wrap'>
                        {preview.images?.map((el, idx) => (
                            <div
                                key={idx}
                                className='w-fit relative'
                            >
                                <img scr={el} alt="product" className='w[200px] object-contain' />
                                {hoverElm === el.name && <div
                                    className='absolute cursor-pointer inset-0 bg-overlay flex ic items-center justify-center'
                                    onClick={() => handleRemoveImages(el.name)}
                                >
                                    <RiDeleteBin2Fil size={24} color='white' />
                                </div>}
                            </div>
                        ))}
                    </div>}
                    <div className='mt-6'><button type='submit'>Update new product</button></div>
                </form>
            </div>
        </div>
    );


    export default memo(UpdateProduct);

