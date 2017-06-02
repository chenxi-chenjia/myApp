export const css_data=[
	{
		title:'flex布局',
		content:'1、父元素中display:flex;\n\
		2、决定主轴的方向  flex-direction: row | row-reverse | column | column-reverse;\n\
		3、如果一条轴线排不下，如何换行  flex-wrap: nowrap | wrap | wrap-reverse;\n\
		4、flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrapn   flex-flow: <flex-direction> || <flex-wrap>;\n\
		5、项目在主轴上的对齐方式   justify-content: flex-start | flex-end | center | space-between | space-around\n\
		6、项目在交叉轴上如何对齐   align-items: flex-start | flex-end | center | baseline | stretch;\n\
		7、多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用  align-content: flex-start | flex-end | center | space-between | space-around | stretch;\n\
		8、项目的排列顺序。数值越小，排列越靠前，默认为0   order: <integer>;\n\
		9、项目的放大比例，默认为0，即如果存在剩余空间，也不放大  flex-grow: <number>;\n\
		10、flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小  flex-shrink: <number>; /* default 1 */\n\
		11、在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。   flex-basis: <length> | auto; /* default auto */ \n\
		12、flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。  flex: none | [ <“flex-grow"> <"flex-shrink">? || <"flex-basis"> ] \n\
		13、align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch  align-self: auto | flex-start | flex-end | center | baseline | stretch; '
	}
]
css_data.forEach((v,i)=>{
	v.id=i;
})