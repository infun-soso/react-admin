export const menu = [
	{
		name: '我的面板',
		url: 'dashboard',
		icon: 'home'
	},
	{
		name: '文章管理',
		url: 'article',
		icon: 'desktop',
		children: [
			{ name: '发表文章', url: 'addarticle' },
			// { name: '修改文章', url: 'updatearticle' },
			{ name: '文章列表', url: 'articlelist' },
		]
	},
	{
		name: '小工具',
		url: 'tools',
		icon: 'desktop',
		children: [
			{ name: 'todolist', url: 'todolist' },
		]
	}
]