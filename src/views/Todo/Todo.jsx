import React from 'react'
import './todo.css'
import {ls} from 'assets/localstore.js';
import {search} from 'assets/search.js'

export default class Todo extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
		this.serchCode=this.serchCode.bind(this);
		this.remove=this.remove.bind(this);
		this.removeBegin=this.removeBegin.bind(this);
		this.removeEnd=this.removeEnd.bind(this);
		this.back_page=this.back_page.bind(this);
		this.to_edit=this.to_edit.bind(this);
		this.prevent=this.prevent.bind(this);
		this.stopprevent=this.stopprevent.bind(this);
	}
	
	//读取本地存储
	componentWillMount(){
		var data=ls();
		this.setState({
			data:data,
			showdata:data,
			reg:new RegExp(),
			mask_flag:false
		})
	}


	//查询功能
	serchCode(e){
		var reg=new RegExp(e.target.value);
		var data=this.state.data;
		this.setState({
			showdata:search(data,reg),
			reg:reg
		})
			
	}


	//删除
	removeBegin(e){
		//获取当前元素的index值
		var pageX=e.touches?e.touches[0].pageX:e.pageX;
		var index=e.currentTarget.getAttribute("data-index");
		this.setState({
			beginX:pageX,
			index:parseInt(index)
		})
		this.mx=0;
	}
	remove(e){
		var s=e.currentTarget.style
		var self=this;
		var bx=this.state.beginX;
		var ex=e.touches?e.touches[0].pageX:e.pageX;;
		var mx=bx-ex;
		mx=mx>0?mx:0;
		s.transform='translateX('+-mx+'px)';
		s.transition=null;
		this.mx=mx;
	}
	removeEnd(e){
		var obj=e.currentTarget;
		var mx=this.mx;
		var self=this;
		if(mx<100){
			obj.style.transform='translate(0px)';
			obj.style.transition="all .25s ease-in-out";
		}else{
			obj.style.transform='translate(-100%)';
			obj.style.transition="all .25s ease-in-out";
			this.setState({
				rmindex:this.state.index
			})
			
			//删除
			function rm(){
				obj.style.transform=null;
				obj.style.transition=null;
				var arr=ls(self.state.index);
				var reg=self.state.reg;
				var showdata=search(arr,reg);
				self.setState({
					rmindex:undefined,
					data:arr,
					showdata:showdata
				})
			}
			setTimeout(rm,500);
		}
	}

	//返回页面
	back_page(e){
		this.props.history.goBack();
	}
	//进入编辑页面
	to_edit(e){
		this.props.history.push('todo/edit');
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
		var data=this.state.showdata;
		var self=this;
		if(data.length>0){
			var el=data.map((v,i)=>{
				var style=new Object;
				if(self.state.rmindex!=undefined){
					if(i>self.state.rmindex){
						style={transform:'translateY(-64px)',transition:'transform .25s ease-in-out .25s'}
					}
				}
				var t='/article/note/:'+v.id;
				return(
					<div className="list-group-item"
					onTouchStart={self.removeBegin}
					onTouchMove={self.remove}
					onTouchEnd={self.removeEnd}
					data={v} 
					key={i} 
					style={style}
					data-index={v.id}>
						<h4 className="list-group-item-heading clearfix">{v.title} 
							<span className="badge pull-right">{v.time}</span>
						</h4>
						<p className="list-group-item-text .text-overflow">{v.content}</p>
					</div>
				)
			})
		}else{
			var el=<h3 className='ts text-center'>Sorry,you have nothing in this.</h3>
		}
		if(this.state.mask_flag){
			var mask=<div className="mask"></div>
		}else{
			var mask=false;
		}
		return(
			<div className='todo'>
				<header>
					<span className="iconfont icon-fanhui"
					onTouchEnd={this.back_page}
					></span>
					<div className="serch-input-box">
						<input type="text"
						placeholder="Please enter your looking for..."
						className='serch-input'
						onBlur={this.stopprevent}
						onFocus={this.prevent}
						onChange={this.serchCode}
						/>
					</div>
					<span className="iconfont icon-bianji"
					onTouchEnd={this.to_edit}
					></span>
				</header>
				<div className="list-group container-fluid">
					{el}
					{mask}
				</div>
			</div>
		)
	}

}