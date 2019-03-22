import request from '@/utils/request';

export async function getArticleList() {
  return request('/api/admin/index');
}

export async function addArticle(data) {
  return request.post('/api/admin/addArticle', {
    method: 'POST',
    data,
    requestType: 'formData',
  });
}

export async function getArticle({ postId }) {
  return request('/api/admin/post', {
    method: 'GET',
    params: {
      postId,
    },
  });
}

export async function editArticle(data) {
  return request('/api/admin/updateArticle', {
    method: 'POST',
    data,
  });
}
