import request from '@/utils/request';

export async function query() {
  return request('/api/admin/users');
}
// 后台

export async function queryAccountUser() {
  return request('/api/admin/account-center/currentUser');
}

export async function queryNotices() {
  return request('/api/admin/notices');
}

export async function fakeAccountLogin(params) {
  return request('/api/admin/login', {
    method: 'POST',
    data: params,
  });
}

export async function queryCurrent() {
  return request('/api/admin/currentUser');
}

export async function fetchUsers() {
  return request('/api/admin/getUsers');
}

export async function delUser(id) {
  return request.get('/api/admin/delUser', {
    params: {
      id,
    },
  });
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/admin/userlogin/captcha?mobile=${mobile}`);
}
