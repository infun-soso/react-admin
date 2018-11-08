import axios from 'axios'
import qs from 'qs'

const defaultOption = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded', // axios默认是 application/json , 更改为这个方式会使传入的数据为键值对形式，后台可以用x-www-form-urlencoded直接解析
	},
	withCredentials: false,
	timeout: 12000
}

axios.interceptors.request.use((config) => {
	console.log(config)
	console.log(config.data)
	if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
	return config
}, (error) => {
	console.log(error)
	return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
	if(res.data.errors){
    let errors = res.data.errors.map((data) => {
        return `${data.err_msg},${data.err_no}`
      }).join(',')
    if(errors.length > 0) {
      console.error(errors, res.config.url)
    }
  }
  if(res.status !== 200){
    console.error('status not 200', res.config.url)
    return Promise.reject(res);
  }
  return res.data;
}, (error) => {
	console.error(error)
  console.error(error.message, error.config.url)
  return Promise.reject(error.response);
}) 

export default {
	get(url, params, config = defaultOption) {
		return new Promise((resolve, reject) => {
			axios.get(url, {params, ...config})
				.then(res => {
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})
	},
	post(url, params, config = defaultOption) {
		return new Promise((resolve, reject) => {
			axios.post(url, params, config)
				.then(res => {
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})
	}
}