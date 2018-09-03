import React from 'react'
import MyTable from '../../components/table'
import api from '../../api'

export default class ArticleList extends React.Component {
	constructor() {
		super()
		this.state = {
			asyncData: []
		}
	}

	componentDidMount() {
		api.getArticleList().then(res => {
			if (res.code === 0) {
				this.setState({
					asyncData: res.data
				})
			}
    })
	}

	render() {
		return (
			<div className="index">
				<MyTable data={this.state.asyncData} />
			</div>
		)
	}
}