import request from '@/utils/request';

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function queryProvince() {
  return request('/api/account-settings/province');
}

export async function queryCity(province) {
  return request(`/api/account-settings/city/${province}`);
}

export async function query() {
  return request('/api/account-settings/users');
}
