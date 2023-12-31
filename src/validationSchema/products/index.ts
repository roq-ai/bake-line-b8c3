import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  price: yup.number().integer().required(),
  bakery_id: yup.string().nullable().required(),
});
