import React , {Component} from 'react'
import './Introduction.css'

export default class Introduction extends Component{
	constructor(props){
		super(props);
		this.backPage=this.backPage.bind(this);
	}
	componentWillMount(){
		var base_data=[
			{
				t:'年龄：',
				b:'25'
			},{
				t:'性别：',
				b:'男'
			},{
				t:'学历：',
				b:'大学本科'
			}
		];
		this.setState({
			base_data:base_data
		})
	}
	backPage(){
		this.props.history.goBack();
	}
	render(){
		var base_el=this.state.base_data.map((v,i)=>(
				<div className="col-4 text-center" key={i} >
					<span>{v.t} </span>
					<span>{v.b} </span>
				</div>
			))
		return(
			<div className="introduction">
				<header className='middle-group'><i className="iconfont icon-fanhui inline-block_middle" 
				onTouchEnd={this.backPage}
				></i></header>
				<h3 className='text-center'>闫晨嘉的个人介绍</h3>
				<div className="container-fluid">
					<div className="clearfix">
						{base_el}
					</div>
					<div className="text-center">
						<h5>
							<span>手机：</span>
							<a href='tel:15135121529'>151-3512-1529</a>
						</h5>
						<h5>
							<span>邮箱：</span>
							<a href='javascript:;'>709207209@qq.ocm</a>
						</h5>
					</div>

				</div>
			</div>
				
		)
	}
}