import request from '@/utils/request';

const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '';

export async function query() {
  return request(`${baseURL}/admin/users`);
}
// 后台

export async function queryAccountUser() {
  return request(`${baseURL}/admin/account-center/currentUser`);
}

export async function queryNotices() {
  return request(`${baseURL}/admin/notices`);
}

export async function fakeAccountLogin(params) {
  return request(`${baseURL}/admin/login`, {
    method: 'POST',
    data: params,
  });
}

export async function queryCurrent() {
  return request(`${baseURL}/admin/currentUser`);
}

export async function fetchUsers() {
  return request(`${baseURL}/admin/getUsers`);
}

export async function delUser(id) {
  return request.get(`${baseURL}/admin/delUser`, {
    params: {
      id,
    },
  });
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/admin/userlogin/captcha?mobile=${mobile}`);
}
