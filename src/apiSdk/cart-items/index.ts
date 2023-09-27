import queryString from 'query-string';
import { CartItemInterface, CartItemGetQueryInterface } from 'interfaces/cart-item';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCartItems = async (
  query?: CartItemGetQueryInterface,
): Promise<PaginatedInterface<CartItemInterface>> => {
  return fetcher('/api/cart-items', {}, query);
};

export const createCartItem = async (cartItem: CartItemInterface) => {
  return fetcher('/api/cart-items', { method: 'POST', body: JSON.stringify(cartItem) });
};

export const updateCartItemById = async (id: string, cartItem: CartItemInterface) => {
  return fetcher(`/api/cart-items/${id}`, { method: 'PUT', body: JSON.stringify(cartItem) });
};

export const getCartItemById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/cart-items/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCartItemById = async (id: string) => {
  return fetcher(`/api/cart-items/${id}`, { method: 'DELETE' });
};
