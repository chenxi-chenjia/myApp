import React from 'react'
import {Link} from 'react-router-dom'

export default class LinkButton extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){
		var dt=this.props.data;
		return(
			<Link to={dt.to} className='link-button_box center-block btn' >
				<div className="icon-box">
					<i className={dt.icl+' iconfont'} ></i>
				</div>
				<h5>{dt.val}</h5>
			</Link>
		)
	}
}