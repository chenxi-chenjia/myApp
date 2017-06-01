export const react_data=[
	{
		title:'componentWillMount',
		content:'生命周期函数，在render之前执行，用此方法可以先更新data值，然后再在render中渲染；\n\
		切记：ajax时异步函数，在componentWillMount 中执行ajax，this.setState时，组件data并不会直接改变，而是会在ajax获取会数据后再进行改变data，所以如果render前没有定义data的值时，render时会报错，data undefined ，所以在使用ajax前需要给data定义。'
	},
	{
		title:'componentDidMount',
		content:'生命周期函数，在render之后执行，可以用于render之后的data的改变；componentWillmount方法与componentWillMount方法在不同需要时进行自行使用，但切记data的赋值问题。'
	},{
		title:'componentWillReceiveProps (nextProps)',
		content:'生命周期函数，当组件的props改变时执行，在本app中，路由调用同一个组件，当跳转路由时依然是当前页面，componentWillMount与componentDidMount都不会执行，那么页面就不会重新渲染，所以给人的感觉则是没有跳转页面；用此方法，则会在改变props的同时（location地址栏也在props中），重新改变data，使得页面重新渲染。此方法也可用于传值时执行。当父级组件改变传入组件的data改变时，执行此方法重新渲染。'
	},{
		title:'shouldComponentUpdate (nextProps,nextState)',
		content:'生命周期函数，此方法一般情况不需要执行，主要用于可以明显可以改观app性能时使用；在函数内return true 时此方法执行，return false 时此方法不执行；同时render也不执行；'
	},{
		title:'componentWillUpdate (nextProps,nextState)',
		content:'生命周期函数，在render之前执行，组件初始化时不会执行，一般与componentDidUpdate相配合，执行一些需要清除的函数；可执行一些动画，例如一些开场动画。'
	},{
		title:'componentDidUpdate (object prevProps, object prevState)',
		content:'生命周期函数，在render之后执行，组件初始化时不会执行，一般与componentWillUpdate相配合，执行一些需要清除的函数；可执行一些动画，例如一些开场动画。'
	},{
		title:'export',
		content:'在一个js中声明一个模块'
	},{
		title:'react+swiper',
		content:'在react中使用swiper时，需要将swiper配置放在ajax 中success方法中，否则会由于开始时无法找到图片而使swiper失败。'
	},{
		title:'reqwest',
		content:'ajax请求函数库，与jquery用法基本相同'
	},{
		title:"e.currentTarget 与 e.target",
		content:'e.currentTarget 是添加事件的dom元素， e.target 是操作到的元素'
	},{
		title:'react-router 4.0',
		content:'react-router 4.0 与之前版本相比，做了巨大的改动。4.0中，router作为一个组件，提供了不同的使用体验。\n\
		4.0中，我们可以直接使用 react-router-dom ，从中 import BrowserRouter ，作为一个父组件。也可以 import {BrowserRouter as Router } 然后直接使用 Router 作为父组件 。4.0 中 主要使用了 h5 中的 history 作为url的改变。\n\
		使用时一定要将route 包裹在router中。'
	}
]

react_data.forEach(function(v,i){
	v.id=i;
})
