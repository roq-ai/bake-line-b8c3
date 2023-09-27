import queryString from 'query-string';
import { BakeryInterface, BakeryGetQueryInterface } from 'interfaces/bakery';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBakeries = async (query?: BakeryGetQueryInterface): Promise<PaginatedInterface<BakeryInterface>> => {
  return fetcher('/api/bakeries', {}, query);
};

export const createBakery = async (bakery: BakeryInterface) => {
  return fetcher('/api/bakeries', { method: 'POST', body: JSON.stringify(bakery) });
};

export const updateBakeryById = async (id: string, bakery: BakeryInterface) => {
  return fetcher(`/api/bakeries/${id}`, { method: 'PUT', body: JSON.stringify(bakery) });
};

export const getBakeryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/bakeries/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBakeryById = async (id: string) => {
  return fetcher(`/api/bakeries/${id}`, { method: 'DELETE' });
};
