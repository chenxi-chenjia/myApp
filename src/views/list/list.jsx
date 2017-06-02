import React from 'react'
import './list.css'
import {Link} from 'react-router-dom'
import {search} from 'assets/search.js'



import {chose_data} from 'assets/chose_data.js'



export default class list extends React.Component{
	constructor(props){
		super(props);
		this.serchCode=this.serchCode.bind(this);
		this.prevent=this.prevent.bind(this);
		this.stopprevent=this.stopprevent.bind(this);
	}
	componentWillMount(){
		var name=this.props.match.params.name;
		var data=chose_data(name);
		this.setState({
			data:data,
			showdata:data,
			name:name,
			mask_flag:false
		})
	}
	serchCode(e){
		var reg=new RegExp(e.target.value);
		var data=this.state.data;
		this.setState({
			showdata:search(data,reg)
		}) 
	}
	prevent(e){
		this.setState({
			mask_flag:true
		})
	}
	stopprevent(){
		this.setState({
			mask_flag:false
		})
	}

	render(){
		var self=this;
		if(this.state.showdata.length>0){
			var el=self.state.showdata.map((v,i)=>{
				var content=v.content.replace(/\n/g,'');
				var t=self.state.name+'/'+v.id;
				return(
					<Link className="list-group-item"
					to={t}
					data={v} 
					key={v.id}>
						<h4 className="list-group-item-heading">{v.title}</h4>
						<p className="list-group-item-text .text-overflow">{content}</p>
					</Link>
				)
			})
		}else{
			var el=<h3 className='ts text-center'>Sorry,I search nothing.</h3>
		}
		if(this.state.mask_flag){
			var mask=<div className="mask"></div>
		}else{
			var mask=null;
		}
		return(
			<div className="list" >
				<header className='text-center middle-group'>
					<input type="text"
					placeholder="Please enter your looking for..."
					className='serch-input middle-inline_block'
					onFocus={this.prevent}
					onBlur={this.stopprevent}
					onChange={this.serchCode} />
				</header>
				<div className="list-group container-fluid">
					{el}
					{mask}
				</div>
			</div>
		)
	}
}