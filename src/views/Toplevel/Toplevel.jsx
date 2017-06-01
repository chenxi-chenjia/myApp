import React, { Component } from 'react'
import LinkButton from '../../components/link-button.jsx'
import './Toplevel.css'

function data_flag (path){
    var framework_data=[
        {
            to:'/framework/vue',
            icl:'icon-todo',
            val:'VUE'
        },{
            to:'/framework/react',
            icl:'icon-photo',
            val:'REACT'
        },{
            to:'/framework/bootstrap',
            icl:'icon-xiangmu',
            val:'BOOTSTRSP'
        },{
            to:'/framework/chenxi',
            icl:'icon-xiangmu',
            val:'CHENXI'
        }
    ];
    var language_data=[
        {
            to:'/language/js',
            icl:'icon-js1',
            val:'JS'
        },{
            to:'/language/git',
            icl:'icon-git',
            val:'GIT'
        },{
            to:'language/node',
            icl:'icon-nodejs',
            val:'NODE.JS'
        }
    ];
    var layout_data=[
        {
            to:'/layout/html',
            icl:'icon-h5',
            val:'HTML'
        },{
            to:'/layout/css',
            icl:'icon-css3',
            val:'CSS'
        }
    ]
    var data;
    switch(path){
        case 'framework':
        data=framework_data;
        break;
        case 'language':
        data=language_data;
        break;
        case 'layout':
        data=layout_data;
        break;
    }
    return data;
}

export default class Toplevel extends React.Component {
    constructor(props){
        super(props);
        this.state={
            path:''
        }
    }
    componentWillMount(){
        var a=this.props.match.params.name;
        var content;
        switch(a){
            case 'framework':
            content='Here are some of the mainstream frameworks and my own framework.';
            break;
            case 'language':
            content="Now I'm just learning JavaScript";
            break;
            case 'layout':
            content='Layout is an ability to continually improve';
            break;
        }
        this.setState({
            content:content,
            data:data_flag(a)
        })
    }
    componentWillReceiveProps (nextProps){
        var a=nextProps.match.params.name;
        var content='';
        switch(a){
            case 'framework':
            content='Here are some of the mainstream frameworks and my own framework.';
            break;
            case 'language':
            content="Now I'm just learning JavaScript";
            break;
            case 'layout':
            content='Layout is an ability to continually improve';
            break;
        }
        this.setState({
            content:content,
            data:data_flag(a)
        })
    }
    render(){
        var el=this.state.data.map((v,i)=>(
                <div className="col-6" key={i} >
                    <LinkButton data={v} />
                </div>
            ))
        return(
            <div className="framework container-fluid">
                <h3 className='text-center'>{this.state.content}</h3>
                <div className="row">
                    {el}
                </div>
            </div>
        )
    }
}
