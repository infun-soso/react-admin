import api from './request'
console.log(api)

export default {
	getArticleList(params) {
		return api.get('/admin/index', params)
	},

	addArticle(params) {
		return api.post('/admin/addarticle', params)
	}
}