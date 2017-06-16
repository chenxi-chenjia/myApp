export const php_data=[
	{
		title:'PHP作用域',
		content:'函数外定义的变量作用于全局，函数内部无法访问；函数内部的变量作用于函数内部，函数外部无法访问；\n\
		函数内部 global 变量 可以在函数外部访问 ；\n\
		函数执行完之后，会删除所有变量，当不删除变量时，使用 static 声明变量'
	},{
		title:'php输出语句',
		content:'echo\n\
		print\n\
		var_dump() 会返回变量的类型和值'
	},{
		title:'PHP字符串函数',
		content:'strlen() 返回字符串长度\n\
		strpos() 检索字符串内指定的字符串或文本，第一个参数为检索的字符串，第二个参数为检索字符串。找到返回index，未找到返回false'
	},{
		title:'PHP常量',
		content:'常量是单个值的标识符（名称）。在脚本中无法改变该值。\n\
		有效的常量名以字符或下划线开头（常量名称前面没有 $ 符号）。\n\
		与变量不同，常量贯穿整个脚本是自动全局的。\n\
		如需设置常量，请使用 define() 函数 - 它使用三个参数：1.首个参数定义常量的名称 2.第二个参数定义常量的值 3.可选的第三个参数规定常量名是否对大小写敏感。默认是 false。'
	},{
		title:'字符串连接',
		content:'"."'
	},{
		title:'数组连接',
		content:'"+"'
	},{
		title:'数组遍历',
		content:'foreach( $数组 as $v ){}'
	},{
		title:'字符串长度',
		content:'strlen()'
	},{
		title:'数组长度',
		content:'count()'
	}
]
php_data.forEach((v,i)=>{
	v.id=i;
})
