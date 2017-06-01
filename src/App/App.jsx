import React from 'react'
import routes from 'routes'
import './App.css'
import {Footer} from '../components/Footer.jsx'
import {RouterView} from '../routes/index.js'
import {BrowserRouter as Router } from 'react-router-dom'



export default  class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			foot_flag:true
		}
	}
	render(){
		return(
			<Router>
				<div>
					<RouterView></RouterView>
					<Footer></Footer>
				</div>
			</Router>
		)
	}
}
