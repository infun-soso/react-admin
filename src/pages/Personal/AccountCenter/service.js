import request from '@/utils/request';

export async function query() {
  return request('/api/account-center/users');
}

export async function queryCurrent() {
  return request('/api/account-center/currentUser');
}
