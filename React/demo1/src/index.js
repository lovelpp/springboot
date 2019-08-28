//1.两个导入必须这么写
import React from 'react' //创建组建、虚拟Dom 、生命周期 
import ReactDOM from 'react-dom' //把创建好的组建和虚拟DOM放到页面

/**
 * 2.创建元素Dom
 * 参数1.创建元素类型 字符串 表示元素的名称
 * 参数2.是一个对象或者null  表示当前DOM的属性
 * 参数3.子节点（包括 其他 虚拟dom 获取 文本子节点）
 * 参数n.其他子节点
 * 
 * 
 */
const myh1= React.createElement('h1',{id:'myh1',title:'this is a h1'},'这是我的第一个节点')

/**
 * 3.使用ReatDom 渲染到页面
 * 参数1. 要渲染的虚拟DOM
 * 参数2. 指定页面接受容器
*/
//ReactDOM.render(myh1,'#App')
//Uncaught Invariant Violation: Target container is not a DOM element.
ReactDOM.render(myh1,document.getElementById("App"))