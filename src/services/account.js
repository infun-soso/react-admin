import request from '@/utils/request';

export async function fetchAccounts() {
  return request('/api/getAccountList');
}
