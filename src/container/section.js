import React from 'react'
import {
	Route,
	Redirect
} from 'react-router-dom';
import Index from '../pages/index'
import AddArticle from '../pages/article/addArticle'
import ArticleList from '../pages/article/articleList'

export default class Section extends React.Component {
	render() {
		return (
			<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
				<Route exact path="/" render={()=><Redirect to="/index"/>}/>
				<Route exact path="/index" component={Index}/>
				<Route exact path="/addarticle" component={AddArticle}/>
				<Route exact path="/articlelist" component={ArticleList}/>
			</div>	
		)
	}
}