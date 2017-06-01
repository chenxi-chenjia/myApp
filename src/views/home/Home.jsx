import React from 'react'
import LinkButton from '../../components/link-button.jsx'
import './Home.css'

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            button_list:[
                {
                    to:'/home/todo',
                    icl:'icon-todo',
                    val:'Todo'
                },{
                    to:'/home/calculate',
                    icl:'icon-jisuanqi',
                    val:'calculate'
                },{
                    to:'/home/product',
                    icl:'icon-xiangmu',
                    val:'我的项目'
                },{
                    to:'/home/introduction',
                    icl:'icon-gerenjieshao',
                    val:'个人介绍'
                }
            ]
        }
    }
    render(){
        var el=this.state.button_list.map((v,i)=>(
                <div className="col-6" key={i} >
                    <LinkButton data={v} />
                </div>
            ))
        return(
            <div className="home">
                <div className="avater-box">
                    <div className="avater"></div>
                </div>
                <h2>Welcome to my APP</h2>
                <h5>https://chenxi-chenjia.github.io</h5>
                <div className="container-fluid">
                    <div className="row">
                        {el}
                    </div>
                </div>
            </div>
               
        )
    }
}
