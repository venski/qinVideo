(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{v0fz:function(e,t,a){"use strict";a.r(t);var n=a("fFZ8"),i=a.n(n),s=a("mrSG"),r=a("q1tI"),c=a.n(r),o=a("MuoO"),l=a("LLXN"),p=a("Gwa3"),d=a("nLTe"),m=a("TSYQ"),h=a.n(m),u=a("vOnD"),y=a("zqYd"),g=a("/88p");function v(){var e=i()(["\n  .tabs {\n    display: flex;\n\n    .tab {\n      height: 36px;\n      width: 50%;\n      border: solid 1px ",";\n      text-align: center;\n      line-height: 35px;\n\n      &:nth-child(1) {\n        border-radius: 100px 0 0 100px;\n      }\n\n      &:nth-child(2) {\n        border-radius: 0 100px 100px 0;\n      }\n\n      &.active {\n        color: white;\n        background-color: ",";\n      }\n    }\n  }\n  .like {\n    margin-top: 20px;\n  }\n"]);return v=function(){return e},e}var b=u["a"].div(v(),e=>e.color,e=>e.color),w=class extends r["Component"]{constructor(){super(...arguments),this.state={cate:"newAnimate",type:!0},this.initData=(e=>{var t=this.props.dispatch;t({type:"animate/queryList",payload:{query:{update:!0,size:100,page:1},addon:{type:e}}})}),this.initUserLike=(()=>{var e=this.props,t=e.dispatch,a=e.auth;a.status&&t({type:"user/getUserLike",payload:{query:{size:100,page:1,update:!0},params:{type:"animate"}},addon:"likeanimate"})}),this.typeToggle=(e=>()=>{this.setState({type:e})})}componentDidMount(){var e=this.state.cate;this.initData(e),this.initUserLike()}render(){var e=this.state,t=e.cate,a=e.type,n=this.props,i=n.animate,s=n.user.likeanimate,r=n.location.pathname;return c.a.createElement(b,{color:this.context},c.a.createElement(d["a"],{active:r}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"tabs"},c.a.createElement("div",{className:h()("tab",{active:a}),onClick:this.typeToggle(!0)},c.a.createElement("span",null,Object(l["formatMessage"])({id:"new.show.animate"}))),c.a.createElement("div",{className:h()("tab",{active:!a}),onClick:this.typeToggle(!1)},c.a.createElement("span",null,Object(l["formatMessage"])({id:"new.like.animate"})))),a&&c.a.createElement(y["a"],{list:i[t]?i[t].list:[],type:"animate"}),c.a.createElement("div",{className:"like"},!a&&c.a.createElement(g["b"],{list:s?s.list:[],type:"animate",wrapper:!0}))))}};w.contextType=p["a"],w=Object(s["a"])([Object(o["connect"])(e=>{var t=e.user,a=e.auth,n=e.animate,i=e.category,s=e.loading;return{user:t,auth:a,animate:n,category:i,loading:s.models.animate}})],w),t["default"]=w}}]);