export const menu = [
	{
		name: '我的面板',
		url: 'index',
		icon: 'home'
	},
	{
		name: '文章管理',
		url: 'article',
		icon: 'desktop',
		children: [
			{ name: '发表文章', url: 'addarticle' },
			{ name: '文章列表', url: 'articlelist' },
		]
	}
]