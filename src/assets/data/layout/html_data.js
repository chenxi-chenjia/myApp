export const html_data=[
	{
		title:'设置web应用是否以全屏模式运行',
		content:'<meta name="apple-mobile-web-app-capable" content="yes">'
	},{
		title:'format-detection 启动或禁用自动识别页面中的电话号码',
		content:'<meta name="format-detection" content="telephone=no">'
	},{
		title:'上下拉动滚动条时卡顿、慢',
		content:'body {overflow-scrolling: touch;}'
	},{
		title:'禁止复制、选中文本',
		content:'Element {user-select: none;}'
	},{
		title:'长时间按住页面出现闪退',
		content:'element {-webkit-touch-callout: none;}'
	},{
		title:'iphone及ipad下输入框默认内阴影',
		content:'Element{-webkit-appearance: none; }'
	},{
		title:'ios和android下触摸元素时出现半透明灰色遮罩',
		content:'Element {-webkit-tap-highlight-color:rgba(255,255,255,0)}\n\
		设置alpha值为0就可以去除半透明灰色遮罩，备注：transparent的属性值在android下无效。'
	},{
		title:'active兼容处理 即 伪类 :active 失效',
		content:'方法一：body添加ontouchstart\n\
		<body ontouchstart="">\n\
		方法二：js给 document 绑定 touchstart 或 touchend 事件\n\
		document.addEventListener("touchstart",function(){},false);'
	},{
		title:'动画定义3D启用硬件加速',
		content:'Element {transform: translate3d(0, 0, 0);}'
	},{
		title:'transition闪屏',
		content:'/设置内嵌的元素在 3D 空间如何呈现：保留3D /\n\
		-webkit-transform-style: preserve-3d;\n\
		/ 设置进行转换的元素的背面在面对用户时是否可见：隐藏 /\n\
		-webkit-backface-visibility:hidden;'
	},{
		title:'圆角bug',
		content:'某些Android手机圆角失效\n\
		background-clip: padding-box;'
	},{
		title:'顶部状态栏背景色',
		content:'<meta name="apple-mobile-web-app-status-bar-style" content="black" />\n\
		除非你先使用apple-mobile-web-app-capable指定全屏模式，否则这个meta标签不会起任何作用\n\
		如果content设置为default，则状态栏正常显示。如果设置为blank，则状态栏会有一个黑色的背景。如果设置为blank-translucent，则状态栏显示为黑色半透明。如果设置为default或blank，则页面显示在状态栏的下方，即状态栏占据上方部分，页面占据下方部分，二者没有遮挡对方或被遮挡。如果设置为blank-translucent，则页面会充满屏幕，其中页面顶部会被状态栏遮盖住（会覆盖页面20px高度，而iphone4和itouch4的Retina屏幕为40px）。默认值是default。'
	},{
		title:'启动画面',
		content:'<link rel="apple-touch-startup-image" href="start.png"/>\n\
		iOS下页面启动加载时显示的画面图片，避免加载时的白屏。\n\
		可以通过madia来指定不同的大小：\n\
		<!--iPhone-->\n\
		<link href="apple-touch-startup-image-320x460.png" media="(device-width: 320px)" rel="apple-touch-startup-image" />\n\
 		\n\
		<!-- iPhone Retina -->\n\
		<link href="apple-touch-startup-image-640x920.png" media="(device-width: 320px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />\n\
		 \n\
		<!-- iPhone 5 -->\n\
		<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="apple-touch-startup-image-640x1096.png">\n\
		 \n\
		<!-- iPad portrait -->\n\
		<link href="apple-touch-startup-image-768x1004.png" media="(device-width: 768px) and (orientation: portrait)" rel="apple-touch-startup-image" />\n\
		 \n\
		<!-- iPad landscape -->\n\
		<link href="apple-touch-startup-image-748x1024.png" media="(device-width: 768px) and (orientation: landscape)" rel="apple-touch-startup-image" />\n\
		 \n\
		<!-- iPad Retina portrait -->\n\
		<link href="apple-touch-startup-image-1536x2008.png" media="(device-width: 1536px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />\n\
		 \n\
		<!-- iPad Retina landscape -->\n\
		<link href="apple-touch-startup-image-1496x2048.png"media="(device-width: 1536px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"rel="apple-touch-startup-image" />'
	},{
		title:'浏览器私有及其它meta',
		content:'QQ浏览器私有\n\
		全屏模式\n\
		<meta name="x5-fullscreen" content="true">\n\
		强制竖屏\n\
		<meta name="x5-orientation" content="portrait">\n\
		强制横屏\n\
		<meta name="x5-orientation" content="landscape">\n\
		应用模式\n\
		<meta name="x5-page-mode" content="app">\n\
		UC浏览器私有\n\
		全屏模式\n\
		<meta name="full-screen" content="yes">\n\
		强制竖屏\n\
		<meta name="screen-orientation" content="portrait">\n\
		强制横屏\n\
		<meta name="screen-orientation" content="landscape">\n\
		应用模式\n\
		<meta name="browsermode" content="application">\n\
		其它\n\
		针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓\n\
		<meta name="HandheldFriendly" content="true">\n\
		微软的老式浏览器\n\
		<meta name="MobileOptimized" content="320">\n\
		windows phone 点击无高光\n\
		<meta name="msapplication-tap-highlight" content="no">'
	},{
		title:'IOS中input键盘事件keyup、keydown、keypress支持不是很好',
		content:'问题是这样的，用input search做模糊搜索的时候，在键盘里面输入关键词，会通过ajax后台查询，然后返回数据，然后再对返回的数据进行关键词标红。用input监听键盘keyup事件，在安卓手机浏览器中是可以的，但是在ios手机浏览器中变红很慢，用输入法输入之后，并未立刻相应keyup事件，只有在通过删除之后才能相应！\n\
		可以用html5的oninput事件去代替keyup'
	},{
		title:'IOS键盘字母输入，默认首字母大写',
		content:'<input type="text" autocapitalize="off" />'
	},{
		title:'select 下拉选择设置右对齐',
		content:'select option {direction: rtl;}'
	},{
		title:'通过transform进行skew变形，rotate旋转会造成出现锯齿现象',
		content:'transform: rotate(-4deg) skew(10deg) translateZ(0);outline: 1px solid rgba(255,255,255,0)'
	},{
		title:'移动端点透问题',
		content:'<div id="haorooms">点头事件测试</div>\n\
		<a href="www.jb51.net">www.jb51.net</a>\n\
		div是绝对定位的蒙层,并且z-index高于a。而a标签是页面中的一个链接，我们给div绑定tap事件：\n\
		$("#haorooms").on("tap",function(){\n\
			$("#haorooms").hide();\n\
		});'
	},{
		title:'消除 IE10 里面的那个叉号',
		content:'input:-ms-clear{display:none;}'
	},{
		title:'关于 iOS 与 OS X 端字体的优化(横竖屏会出现字体加粗不一致等)',
		content:'iOS 浏览器横屏时会重置字体大小，设置 text-size-adjust 为 none 可以解决 iOS 上的问题，但桌面版 Safari 的字体缩放功能会失效，因此最佳方案是将 text-size-adjust 为 100% 。\n\
		-webkit-text-size-adjust: 100%;\n\
		-ms-text-size-adjust: 100%;\n\
		text-size-adjust: 100%;'
	},{
		title:'关于 iOS 系统中，中文输入法输入英文时，字母之间可能会出现一个六分之一空格',
		content:'可以通过正则去掉\n\
		this.value = this.value.replace(/\\u2006/g, "");'
	},{
		title:'移动端 HTML5 input date 不支持 placeholder 问题',
		content:'<input placeholder="Date" class="textbox-n" type="text" onfocus="(this.type="date")"  id="date">'
	},{
		title:'H5缓存',
		content:'1、需要在项目中新建一个后缀为 .appcache 的文件\n\
		2、文件中开头为固定格式 CACHE MANIFEST \n\
		#（版本号）\n\
		CACHE（需要保存的文件）\n\
		(文件，可以使用绝对路径和相对路径)\n\
		3、NETWORK(不需要保存的文件，可以使用*)\n\
		4、FALLBACK（如果无法建立网络连接替代的文件）\n\
		5、在html文件html标签内添加<html manifest="demo.appcache">\n\
		6、缓存大小一般不超过5M'
	},{
		title:'使用终端判断',
		content:'\n\
		var system ={ };\n\
		var p = navigator.platform;\n\
		system.win = p.indexOf("Win") == 0;\n\
		system.mac = p.indexOf("Mac") == 0;\n\
		system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);\n\
		if(!(system.win||system.mac||system.xll)){ \n\
			 window.location.href="./index.html";\n\
		}\n\
  	'
	}
]
html_data.forEach((v,i)=>{
	v.id=i;
})