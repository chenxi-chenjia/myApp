import React from 'react'
import './content.css'
import {chose_data} from 'assets/chose_data.js'


export default class Content extends React.Component{
	constructor(props){
		super(props);
		this.data={

		}
		this.backpage=this.backpage.bind(this);
	}
	componentWillMount(){
		var name=this.props.match.params.name;
		var id=this.props.match.params.id;
		var content=chose_data(name)[id].content;
		var content_arr=content.split('\n');
		this.setState({
			data:chose_data(name)[id],
			title:chose_data(name)[id].title,
			content:content_arr
		})
	}
	backpage(){
		this.props.history.goBack();
	}
	render(){
		var el=this.state.content.map((v,i)=>{
			return(
				<p key={i}>
					{v}
				</p>
			)
		})
		return(
			<div className="content">
				<header>
					<div className="iconfont icon-fanhui"
					onTouchEnd={this.backpage}
					></div>
				</header>
				<div className="container-fluid">
					<div className="content">
						<div className="page-header">
							<h3 className='text-center'>
								{this.state.data.title}
							</h3>
						</div>
						<div className="page">
							{el}
						</div>
					</div>
				</div>
			</div>
		)
	}
}