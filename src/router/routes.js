import React from 'react'
import {
	Route,
} from 'react-router-dom';
import Loadable from 'react-loadable';

const RouteWithSubRoutes = route => (
	<Route
		path={route.path}
		render={props => (
			<route.component {...props} routes={route.routes}	/>
		)}
	></Route>
)

const Loading = (props) => {
	return <div>Loading...</div>
}

const LazyLoad = loader => Loadable({
	loader,
	loading: Loading
})

const routeMap = [
	{
		path: '/dashboard',
		name: '首页',
		component: LazyLoad(() => import('../pages/dashboard'))
	},
	{
		path: '/addarticle',
		name: '添加文章',
		component: LazyLoad(() => import('../pages/article/addArticle'))
	},
	{
		path: '/updatearticle/:postId',
		name: '修改文章',
		component: LazyLoad(() => import('../pages/article/updateArticle'))
	},
	{
		path: '/articlelist',
		name: '文章列表',
		component: LazyLoad(() => import('../pages/article/articleList'))
	},
	{
		path: '/todolist',
		name: '小工具',
		component: LazyLoad(() => import('../pages/tools/todolist'))
	},
]

export default class Section extends React.Component {
	render() {
		return (
			<div style={{ padding: 24, background: '#fff', minHeight: 360, position: "relative" }}>
				{
					routeMap.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
				}
			</div>	
		)
	}
}
