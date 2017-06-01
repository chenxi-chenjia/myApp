import React from 'react';

export default class index extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		this.props.history.push('/home')
	}
	render(){
		return <div></div>
	}
}