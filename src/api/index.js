import api from './request'

export default {
	getArticleList(params) {
		return api.get('/admin/index', params)
	},

	addArticle(params, config) {
		return api.post('/admin/addarticle', params, config)
	},

	login(params) {
		return api.post('/admin/login', params)
	}
}