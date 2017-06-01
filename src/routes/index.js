import Home from 'views/home/Home'
import Toplevel from 'views/Toplevel/Toplevel'
import index from 'views/index'
import { Route ,Switch } from 'react-router-dom'
import List from 'views/list/List'
import Content from 'views/content/content'
import React from 'react'
import Todo from 'views/Todo/Todo'
import Product from 'views/Product/Product'
import Calculate from 'views/calculate/Calculate'
import Introduction from 'views/Introduction/Introduction'
import {Todo_edit} from 'views/Todo/Todo_edit/Todo_edit.jsx'


export class RouterView extends React.Component{
	render(){
		return(
			<div className='router-view'>
				<Switch>
					<Route path='/' exact component={index} ></Route>
					<Route path='/home' exact component={Home}></Route>
					<Route path='/home/todo' exact component={Todo} />
					<Route path='/home/todo/edit' exact component={Todo_edit} />
					<Route path='/home/product' exact component={Product} />
					<Route path='/home/calculate' exact component={Calculate} />
					<Route path='/home/introduction' exact component={Introduction} />
					<Route path='/:name' component={Toplevel} exact />
					<Route path='/:name/:name' exact component={List} />
					<Route path='/:name/:name/:id' exact component={Content} />
				</Switch>
			</div>
		)
	}
}

	