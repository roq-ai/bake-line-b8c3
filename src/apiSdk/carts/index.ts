import queryString from 'query-string';
import { CartInterface, CartGetQueryInterface } from 'interfaces/cart';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCarts = async (query?: CartGetQueryInterface): Promise<PaginatedInterface<CartInterface>> => {
  return fetcher('/api/carts', {}, query);
};

export const createCart = async (cart: CartInterface) => {
  return fetcher('/api/carts', { method: 'POST', body: JSON.stringify(cart) });
};

export const updateCartById = async (id: string, cart: CartInterface) => {
  return fetcher(`/api/carts/${id}`, { method: 'PUT', body: JSON.stringify(cart) });
};

export const getCartById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/carts/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCartById = async (id: string) => {
  return fetcher(`/api/carts/${id}`, { method: 'DELETE' });
};
