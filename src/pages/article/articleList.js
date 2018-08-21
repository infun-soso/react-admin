import React from 'react'
import MyTable from '../../components/table'

export default class ArticleList extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="index">
				<MyTable />
			</div>
		)
	}
}