import React from 'react'
import {product_data} from 'assets/data/product_data'
import './Product.css'

export default class Product extends React.Component{
	constructor(props){
		super(props);
		this.backPage=this.backPage.bind(this);
	}
	componentWillMount(){
		this.setState({
			data:product_data
		})
	}
	backPage(){
		this.props.history.goBack();
	}
	render(){
		var el=this.state.data.map((v,i)=>(
				<li className='clearfix' key={v.id} >
					<h4>{v.val} </h4>
					<p><a href={v.to}>{v.to} </a></p>
				</li>
			))
		return(
			<div className="container-fluid product">
				<header className='middle-group'><i className="iconfont icon-fanhui inline-block_middle" 
				onTouchEnd={this.backPage}
				></i></header>
				<ul>
					{el}
				</ul>
			</div>
		)
	}
}