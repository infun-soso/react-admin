import React from 'react'
import {
	Route,
} from 'react-router-dom';
import Dashboard from '../pages/dashboard'
import AddArticle from '../pages/article/addArticle'
import ArticleList from '../pages/article/articleList'
import ToDoList from '../pages/tools/todolist'

export default class Section extends React.Component {
	render() {
		return (
			<div style={{ padding: 24, background: '#fff', minHeight: 360, position: "relative" }}>
				<Route exact path="/dashboard" component={Dashboard}/>
				<Route exact path="/addarticle" component={AddArticle}/>
				<Route exact path="/articlelist" component={ArticleList}/>
				<Route exact path="/todolist" component={ToDoList}/>
			</div>	
		)
	}
}