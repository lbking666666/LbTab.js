/*****
 LbTab tab切换插件 2017.06.28  吕彬 Q：286504720
 参数
 id：容器id，
 event：相应事件类型
 active： 切换样式名称
*****/
function LbTab(id, event, active) {
    this.id = id;
    this.event = event || 'click';
    this.active = active || 'active';
    this.tabBox = document.getElementById(this.id);
    this.removeSpace(this.tabBox);//删除空节点
    this.tabList = this.tabBox.firstChild;//找到第一个子节点切换的头部
    this.removeSpace(this.tabList);//删除空节点
    this.tabli = this.tabList.childNodes;
    this.tabContent = this.tabList.nextSibling;//找到切换内容的外容器
    this.removeSpace(this.tabContent);//删除空节点
    this.tabCon = this.tabContent.childNodes;//切换内容容器
    let self = this;
    this.events(this.tabli[0], 0);//初始化
    for( let i = 0; i < this.tabli.length; i++ ) {
        this.tabli[i].addEventListener(this.event, function(){
            self.events(this, i);//执行事件
        });
    }
}
//删除节点中的空格，ie和其他游览器兼容问题
LbTab.prototype.removeSpace = function(elem) {
    let nodes = elem.childNodes;//找到所以子节点
    for(let i = 0; i < nodes.length; i++) {//循环子节点
        if(nodes[i].nodeName == '#text' &&  !/\s/.test(nodes.nodeValue)) {//如果子节点的名称为“#text” 或者正则验证内容为空格
            elem.removeChild(nodes[i]);//删除这个带空格节点
        }
    }
}

LbTab.prototype.events = function(ele, n) {
   for( let i = 0; i < this.tabli.length; i++) {// 循环去除样式 控制隐藏
     this.tabli[i].className = '';
     this.tabCon[i].style.display = 'none';
   }
   ele.className = this.active;//当前项添加样式
   this.tabCon[n].style.display = 'block';//对应显示
};