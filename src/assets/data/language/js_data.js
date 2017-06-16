export const js_data=[
	{
		title:'对使用终端的判断，是否为移动端',
		content:'var UA = window.navigator.userAgent;\n\
		var CLICK="click"\n\
		if(/ipad|iphone|android/.test(UA){\n\
			CLICK="tap"\n\
		}'
	}
]
js_data.forEach((v,i)=>{
	v.id=i;
})
