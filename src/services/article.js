import request from '@/utils/request';

export async function getArticleList() {
  return request('/admin/index');
}

export async function addArticleList() {
  return request('/api/users');
}
