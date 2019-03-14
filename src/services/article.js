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

export async function getArticle({ postId }) {
  return request('/admin/post', {
    method: 'GET',
    params: {
      postId,
    },
  });
}

export async function editArticle(data) {
  return request('/admin/updateArticle', {
    method: 'POST',
    data,
  });
}
