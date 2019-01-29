import request from '@/utils/request';

export async function getArticleList() {
  return request('/admin/index');
}

export async function addArticle(data) {
  return request.post('/admin/addArticle', {
    method: 'POST',
    data,
    requestType: 'formData',
  });
}
