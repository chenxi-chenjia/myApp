export const git_data=[
	{
		title:'设置用户名密码',
		content:'git config --global user.name "nate-river"\n\
		git config --global user.email "mayanlong7@icloud.com"\n\
		git config --global push.default simple'
	},{
		title:'创建分支',
		content:'git branch gh-pages'
	},{
		title:'复制镜像',
		content:'git merge master git push --set-upstream origin gh-pages'
	},{
		title:'删除远程文件',
		content:'git rm -r --cached */<src>'
	},{
		title:'向分支上传文件',
		content:'git push origin <branch>'
	},{
		title:'强制添加文件',
		content:'-f'
	},{
		title:'删除分支',
		content:'git push origin --delete <branchName>'
	},{
		title:'查看分支',
		content:'git branch -a\n\
		git push origin :<branchName>'
	},{
		title:'删除tag',
		content:'git push origin --delete tag <tagname>\n\
		git tag -d <tagname> git push origin :refs/tags/<tagname>'
	},{
		title:'删除不存在对应远程分支的本地分支',
		content:'git fetch -p'
	},{
		title:'重命名远程分支',
		content:'$ git branch -av'
	}
]
git_data.forEach((v,i)=>{
	v.id=i;
})