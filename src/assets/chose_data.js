import {react_data} from 'assets/data/framework/react_data.js'
import {vue_data} from 'assets/data/framework/vue_data.js'
import {chenxi_data} from 'assets/data/framework/chenxi_data.js'
import {bootstrap_data} from 'assets/data/framework/bootstrap_data.js'
import {js_data} from 'assets/data/language/js_data.js'
import {html_data} from 'assets/data/layout/html_data.js'
import {css_data} from 'assets/data/layout/css_data.js'
import {git_data} from 'assets/data/language/git_data.js'
import {node_data} from 'assets/data/language/node_data.js'

export const chose_data = function  (path){
	var data=[];
	switch(path){
		case 'react':
		data=react_data;
		break;
		case 'vue':
		data=vue_data;
		break ;
		case 'chenxi':
		data=chenxi_data;
		break ;
		case 'bootstrap':
		data=bootstrap_data;
		break ;
		case 'js':
		data=js_data;
		break ;
		case 'html':
		data=html_data;
		break ;
		case 'css':
		data=css_data;
		break ;
		case 'git':
		data=git_data;
		break;
		case 'node':
		data=node_data;
		break;
	}
	return data;
}