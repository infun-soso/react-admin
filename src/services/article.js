import request from '@/utils/request';

export async function getArticleList() {
  return request('/api/post/index');
}

export async function addArticle(data) {
  return request('/api/post/addArticle', {
    method: 'POST',
    data,
    requestType: 'formData',
  });
}

export async function getArticle({ postId }) {
  return request('/api/post/post', {
    method: 'GET',
    params: {
      postId,
    },
  });
}

export async function editArticle(data) {
  return request('/api/post/updateArticle', {
    method: 'POST',
    data,
  });
}
