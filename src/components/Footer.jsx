import React from 'react'
import {BrowserRouter as Router , Route , NavLink} from 'react-router-dom'

class Nav extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){
		var data=this.props.mes;
		var cl="iconfont middle-inline_block "+data.cl
		return(
			<NavLink to={data.name} >
				<nav className="col-3">
					<div className="icon-box middle-group">
						<i className={cl} ></i>
					</div>
					<h6>{data.val}</h6>
				</nav>
			</NavLink>
		)
	}
}

export class Footer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			footer_list:[
				{
					name:'/home',
					val:'主页',
					cl:'icon-zhuye'
				},{
					name:'/framework',
					val:'框架',
					cl:'icon-kuangjia_frame'
				},{
					name:'/language',
					val:'编程语言',
					cl:'icon-yuyan'
				},{
					name:'/layout',
					val:'布局',
					cl:'icon-bujubuxian'
				}
			]
		}
	}
	render(){
		var el=this.state.footer_list.map((v,i)=>(
				<Nav mes={v} key={i}  ></Nav>
			))
		return(
			<footer>
				{el}
			</footer>
		)
	}
}