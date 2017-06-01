import React from 'react'
import './Todo_edit.css'

import {ls} from 'assets/localstore.js';


export class Todo_edit extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:{
				title:'',
				content:''
			}
		}
		this.titleInput=this.titleInput.bind(this);
		this.contentInput=this.contentInput.bind(this);
		this.publish=this.publish.bind(this);
		this.back_page=this.back_page.bind(this);
	}

	//标题输入
	titleInput(e){
		var data=this.state.data;
		data.title=e.target.value;
		this.setState({
			data:data,
			prompt:false
		})
	}

	//内容输入
	contentInput(e){
		var data=this.state.data;
		data.content=e.target.value;
		this.setState({
			data:data
		})
	}
	//发表
	publish(e){
		var data = this.state.data;
		e.preventDefault();
		var self=this;
		if (data.content) {
			ls(data);
			this.setState({
				prompt:true,
				prompt_data:{
					type:'success',
					content:'发布成功'
				}
			})
			setTimeout(function(){
				self.setState({
					prompt:false
				})
				self.props.history.goBack();
			},2000);
		}else{
			this.setState({
				prompt:true,
				prompt_data:{
					type:'false',
					content:'请输入发布的内容'
				}
			})
			setTimeout(function(){
				self.setState({
					prompt:false
				})
			},2000);
		}
	}
	//返回上级页面
	back_page(){
		this.props.history.goBack();
	}

	render(){
		var el=this.state.prompt?<Prompt data={this.state.prompt_data}></Prompt>:null;
		return(
			<div className='Todo_edit'>
				<header>
					<div className="iconfont icon-fanhui"
					onTouchEnd={this.back_page}
					></div>
					<div className="iconfont icon-101"
					onTouchEnd={this.publish} ></div>
				</header>
				<h4><label htmlFor="Notepad_edit_title">title:</label><input type="text" id='Notepad_edit_title'
					onChange={this.titleInput} /></h4>

				<textarea  cols="30" rows="10"
				onChange={this.contentInput}></textarea>
				{el}
			</div>
		)
	}
}



class Prompt extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		var data=this.props.data;
		var iconfont=data.type=='success'?'icon-chenggong':'icon-cuowu';
		var ic=iconfont+' iconfont';
		return(
			<div className='text-center alert'>
				<div className={ic}></div>
				<p>{data.content}</p>
			</div>
		)
	}
}