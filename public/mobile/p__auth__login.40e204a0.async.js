(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"2U9O":function(e,t,a){"use strict";a.r(t);a("+L6B");var n=a("2/Rp"),r=(a("Pwec"),a("CtXQ")),o=(a("5NDa"),a("5rEg")),s=(a("y8nQ"),a("Vl3Y")),i=(a("miYZ"),a("tsqr")),l=a("fFZ8"),m=a.n(l),c=a("mrSG"),g=a("q1tI"),p=a.n(g),d=a("MuoO"),u=a("wY1l"),f=a.n(u),h=a("aCH8"),w=a.n(h),b=a("vOnD"),E=a("LLXN"),y=a("Gwa3"),v=a("3a4m"),x=a.n(v);function O(){var e=m()(["\n  width: 100%;\n  padding: 20px 40px;\n  margin-top: 60px;\n  box-sizing: border-box;\n  .logo {\n    text-align: center;\n    font-size: 5em;\n    margin-bottom: 60px;\n\n    img {\n      height: 40px;\n    }\n\n    @keyframes rotate {\n      from {\n        transform: rotate(0);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  }\n\n  .bottom {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"]);return O=function(){return e},e}var j=b["a"].div(O()),M=class extends g["Component"]{constructor(){super(...arguments),this.initData=(()=>{var e=localStorage.getItem("userInfo"),t=localStorage.getItem("token"),a=localStorage.getItem("refreshToken");e&&t&&a&&x.a.replace({pathname:"/user"})}),this.login=(e=>{e.preventDefault(),this.props.form.validateFields((e,t)=>{if(e)return i["a"].error(Object(E["formatMessage"])({id:"common.form.error"}));var a=this.props.dispatch,n=t.name,r=t.password,o=w()(r);a({type:"auth/login",payload:{data:{name:n,password:o}}}).then(e=>{e&&x.a.push("/user")})})})}componentDidMount(){this.initData()}render(){var e=this.props.loading,t=this.props.form.getFieldDecorator;return p.a.createElement(j,{color:this.context},p.a.createElement("div",{className:"logo"},window.config.logo?p.a.createElement("img",{src:window.config.logo,alt:""}):p.a.createElement("span",null,window.config.name)),p.a.createElement("div",{className:"form"},p.a.createElement(s["a"],{onSubmit:this.login,className:"login-form"},p.a.createElement(s["a"].Item,null,t("name",{rules:[{required:!0,message:Object(E["formatMessage"])({id:"auth.username.tips"})}]})(p.a.createElement(o["a"],{size:"large",prefix:p.a.createElement(r["a"],{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:Object(E["formatMessage"])({id:"auth.username"})}))),p.a.createElement(s["a"].Item,null,t("password",{rules:[{required:!0,message:Object(E["formatMessage"])({id:"auth.password.tips"})}]})(p.a.createElement(o["a"],{size:"large",prefix:p.a.createElement(r["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:Object(E["formatMessage"])({id:"auth.password"})}))),p.a.createElement(s["a"].Item,null,p.a.createElement(n["a"],{type:"primary",htmlType:"submit",className:"login-form-button",size:"large",style:{width:"100%"},loading:e},Object(E["formatMessage"])({id:"auth.login"}))))),p.a.createElement("div",{className:"bottom"},p.a.createElement(f.a,{to:"/auth/register"},Object(E["formatMessage"])({id:"auth.register"})),p.a.createElement(f.a,{to:"/auth/reset"},Object(E["formatMessage"])({id:"auth.reset"}))))}};M.contextType=y["a"],M=Object(c["a"])([Object(d["connect"])(e=>{var t=e.auth,a=e.loading;return{auth:t,loading:a.effects["auth/login"]}})],M),t["default"]=s["a"].create()(M)}}]);