import * as yup from 'yup'

export const productSchema = yup.object({
  product_name: yup.string().required('Vui lòng nhập tên sản phẩm!'),
  thumbnail: yup.string().required('Vui lòng nhập link hình ảnh!'),
  category: yup.string().required('Vui lòng nhập tên danh mục!'),
  price: yup
    .mixed()
    .transform((value, originalValue) => (originalValue === '' ? undefined : Number(value)))
    .required('Vui lòng nhập giá tiền!')
    .test('is-number', 'Giá tiền phải là số', (value) => !isNaN(Number(value))),
  description: yup.string().required('Vui lòng nhập mô tả!')
})

export type ProductType = yup.InferType<typeof productSchema>
