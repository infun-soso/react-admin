import axios from 'axios'
import qs from 'qs'

const defaultOption = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
	},
	withCredentials: false,
	timeout: 12000
}

axios.interceptors.request.use((config) => {
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