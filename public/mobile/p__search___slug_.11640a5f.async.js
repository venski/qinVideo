(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{UhD9:function(e,t,a){"use strict";a.r(t);a("IzEo");var r=a("bx4M"),n=a("p0pE"),s=a.n(n),i=a("fFZ8"),o=a.n(i),c=(a("5NDa"),a("5rEg")),l=(a("Znn+"),a("ZTPi")),m=a("mrSG"),p=a("q1tI"),y=a.n(p),u=a("MuoO"),d=a("vOnD"),h=a("LLXN"),g=a("YO1i"),q=a("WqWh"),b=a("/88p"),E=a("gmfD"),v=a("3a4m"),f=a.n(v);function w(){var e=o()(["\n  padding: 60px 15px 30px 15px;\n\n  .search {\n    width: 100%;\n    margin-top: 40px;\n    margin-bottom: 20px;\n  }\n"]);return w=function(){return e},e}var x=l["a"].TabPane,O=c["a"].Search,k=d["a"].div(w()),C=class extends p["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.props,t=e.dispatch,a=e.location.pathname,r=this.state,n=r.keyword,s=r.type,i=r.page,o=r.size,c=r.sortBy,l=r.sortOrder;n&&(f.a.push({pathname:a,query:{keyword:n,type:s}}),t({type:"search/queryList",payload:{query:{type:s,title:n,page:i,size:o,sortBy:c,sortOrder:l}}}))}),this.valueSync=(e=>{this.setState({keyword:e.target.value})}),this.indexSync=(e=>{this.setState({type:e,page:1,sortBy:"updatedAt"},this.initData)}),this.pageChange=(e=>{this.setState(s()({},e),this.initData)});var t=e.location;this.state={keyword:t.query&&t.query.keyword,type:t.query&&t.query.type||"queryAnimate",sortBy:"updatedAt",sortOrder:-1,size:18,page:1}}render(){var e=this.props,t=e.loading,a=e.search,n=this.state,s=n.keyword,i=n.type,o=n.page,c=n.size,m=a[i].total||0;return y.a.createElement(k,null,y.a.createElement(r["a"],{bordered:!1},y.a.createElement("div",{className:"search"},y.a.createElement(O,{placeholder:Object(h["formatMessage"])({id:"common.input.tips"}),size:"large",onSearch:this.initData,onChange:this.valueSync,value:s,enterButton:y.a.createElement(y.a.Fragment,null,y.a.createElement(g["a"],{type:"icon-sousuo"}),y.a.createElement("span",null,Object(h["formatMessage"])({id:"common.search"})))})),y.a.createElement(l["a"],{defaultActiveKey:i,onChange:this.indexSync},y.a.createElement(x,{tab:Object(h["formatMessage"])({id:"common.animate"}),key:"queryAnimate"},y.a.createElement(r["a"],{bordered:!1,style:{marginBottom:"20px"},loading:"queryAnimate"===i&&t&&0===a.queryAnimate.list.length},y.a.createElement(b["b"],{type:"animate",list:a.queryAnimate.list||[]}))),y.a.createElement(x,{tab:Object(h["formatMessage"])({id:"common.comic"}),key:"queryComic"},y.a.createElement(r["a"],{bordered:!1,style:{marginBottom:"20px"},loading:"queryComic"===i&&t&&0===a.queryComic.list.length},y.a.createElement(b["b"],{type:"comic",list:a.queryComic.list||[]}))),y.a.createElement(x,{tab:Object(h["formatMessage"])({id:"common.post"}),key:"queryPost"},y.a.createElement(r["a"],{bordered:!1,style:{marginBottom:"20px"},loading:"queryPost"===i&&t&&0===a.queryPost.list.length},y.a.createElement(E["a"],{list:a.queryPost.list||[]})))),y.a.createElement(q["a"],{value:{page:o,size:c,total:m},onChange:this.pageChange})))}};C=Object(m["a"])([Object(u["connect"])(e=>{var t=e.search,a=e.loading;return{search:t,loading:a.effects["search/queryList"]}})],C),t["default"]=C}}]);