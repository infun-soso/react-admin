import request from '@/utils/request';

const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '';

export async function getArticleList() {
  return request(`${baseURL}/post/index`);
}

export async function addArticle(data) {
  return request(`${baseURL}/post/addArticle`, {
    method: 'POST',
    data,
    requestType: 'formData',
  });
}

export async function getArticle({ postId }) {
  return request(`${baseURL}/post/post`, {
    method: 'GET',
    params: {
      postId,
    },
  });
}

export async function editArticle(data) {
  return request(`${baseURL}/post/updateArticle`, {
    method: 'POST',
    data,
  });
}
