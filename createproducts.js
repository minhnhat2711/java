import React, { useCallback, useState } from 'react';
import { Inputform, Select , button, markdown, loading} from 'components';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { validate, getBase64 } from 'ultils/helpers';
import { toast } from 'react-toanstify';
import {apiCreateProduct } from "apis";
import { showModel } from 'store/app/appSlice';





export const createproducts = () => {

    const { categories } = useSelector(state => state.app);
    const dispatch = useDispatch
    const { register, FormState: { error }, reset, handleSubmit, watch } = useForm();

    const [payload, setPayload] = useState({
        description: ''
    });
    const [preview, setpreview] = useState({
        thumb: null,
        images: []
    });
    const [invalidFields, setIntervalidFields] = useState([]);
    const changeValue = useCallback((e) => {
        setPayload(e);
    }, [payload]);
    const [hoverElm, sethoverElm] = useState(null);
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
            imagesPreview.push({ name: file.name, path: base64 });
        }
        setpreview(prev => ({ ...prev, imagesPreview }));

    };
    useEffect(() => {
        handlePreview(watch('thumb')[0]);
    }, [watch('thumb')],
        useEffect(() => {
            handlePreview(watch('images'));
        }, [watch('images')]),


        console.log(preview));

    const handlecreateproduct = async (data) => {
        const invalids = validate(payload, setIntervalidFields);
        if (invalids === 0) {
            if (data.category) data.category = categories?.find(el => el._id === data.category)?.title;
            const finalPayload = { ...data, ...payload };
            const formData = new FormData();
            for (let i of Object.entries(finalPayload)) formData.append(i[0], i[1]);
            if (finalPayload.thumb) formData.append('thumb, finalPayload.thumb[0]')
            if (finalPayload.images) {
                for (let image of finalPayload.images) formData.append('images, image')
            }
        dispatch(showModel({issShowModal: true, modalChildren: <loading />}))
           const response = await apiCreateProduct(formData)
        dispatch(showModel({issShowModal: true, modalChildren: null }))
           if (response.success) {
            toast.success(response.mes)
            reset()
            setPayload({
                thumb:'',
                image: []
            })
           } else toast.error(response.mes)

        }
    }

    return (
        <div className='w-full'>
            <h1> className='h-[75px] flex justify-between items-center text-3xl font-bold px-4 border-b'{'>'}
                <span>Creat New Product</span>
            </h1>
            <div className='p-4'>
                <form onSubmit={handleSubmit(handlecreateproduct)}>
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
                            options={categories?.map(el => ({ code: el._id, value: el.title }))}
                            register={register}
                            id='category'
                            validate={{ required: 'Need fill this field' }}
                            style='flex-auto'
                            error={error}
                            fullWidth />
                        <Select
                            label='Brand (Optional)'
                            options={categories?.find(el => el._id === watch(category))?.brand.map(el => ({ code: el, value: el }))}
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
                        setInvalidFields={setIntervalidFields} />
                    <div className='flex flex-col gap -2 mt-8'>
                        <label className='font-semibold' htmlFor="thumb">Upload thumb</label>
                        <input
                            type="file"
                            id="thumb"
                            {...register('thumb', { required: 'need fill' })} />
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
                            {...register('images', { required: 'need fill' })} />
                        {errors['images'] && <small className='text-xs text-red-500'>{errors[id]?.message}</small>}
                    </div>
                    {preview.images.length > 0 && <div className='my-4 flex w-full gap-3 flex-wrap'>
                        {preview.images?.map((el, idx) => (
                            <div
                                onMouseEnter={() => sethoverElm(el.name)}
                                key={idx}
                                className='w-fit relative'
                                onMouseLeave={() => sethoverElm(null)}
                            >
                                <img scr={el.path} alt="product" className='w[200px] object-contain' />
                                {hoverElm === el.name && <div
                                    className='absolute cursor-pointer inset-0 bg-overlay flex ic items-center justify-center'
                                    onClick={() => handleRemoveImages(el.name)}
                                >
                                    <RiDeleteBin2Fil size={24} color='white' />
                                </div>}
                            </div>
                        ))}
                    </div>}
                    <div className='mt-6'><button type='submit'>Creat new product</button></div>
                </form>
            </div>
        </div>
    );
};
