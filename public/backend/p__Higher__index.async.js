(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"lI/t":function(e,t,a){e.exports={token:"antd-pro-pages-higher-index-token",top:"antd-pro-pages-higher-index-top",key:"antd-pro-pages-higher-index-key",main:"antd-pro-pages-higher-index-main",info:"antd-pro-pages-higher-index-info",auto:"antd-pro-pages-higher-index-auto",replace:"antd-pro-pages-higher-index-replace",update:"antd-pro-pages-higher-index-update",history:"antd-pro-pages-higher-index-history"}},oU7b:function(e,t,a){"use strict";a.r(t);a("IzEo");var r,n,i,o,l,s,c,m,h,u,d,p,g,f,b,y,E,M,O=a("bx4M"),j=(a("Znn+"),a("ZTPi")),v=a("2Taf"),k=a.n(v),w=a("vZ4D"),x=a.n(w),I=a("l4Ni"),C=a.n(I),S=a("ujKo"),q=a.n(S),D=a("MhPg"),N=a.n(D),Y=a("q1tI"),T=a.n(Y),A=a("MuoO"),H=a("LLXN"),P=a("v99g"),R=(a("+BJd"),a("mr32")),V=(a("+L6B"),a("2/Rp")),K=(a("5NDa"),a("5rEg")),U=a("d6i3"),L=a.n(U),z=a("1l/V"),F=a.n(z),B=a("wd/R"),J=a.n(B),Z=a("lI/t"),W=a.n(Z),Q=a("dCQc"),X=(r=Object(A["connect"])(function(e){var t=e.higher,a=e.loading;return{higher:t,loading:a.effects["higher/postHigher"]}}),r((i=function(e){function t(e){var a;return k()(this,t),a=C()(this,q()(t).call(this,e)),a.tokenSync=function(e){a.setState({token:e.target.value})},a.tokenAuth=F()(L.a.mark(function e(){var t,r;return L.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.state.token,e.next=3,Q["a"].higherAuthToken({data:{token:t}});case 3:r=e.sent,r&&a.setState({result:!0,expired:r.data.expired});case 5:case"end":return e.stop()}},e)})),a.tokenSubmit=F()(L.a.mark(function e(){var t,r;return L.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=a.state.token,r=a.props.dispatch,r({type:"higher/postHigher",payload:{data:{token:t}}});case 3:case"end":return e.stop()}},e)})),a.state={token:e.token||null,result:!1,expired:0},a}return N()(t,e),x()(t,[{key:"componentWillReceiveProps",value:function(e){e.token!==this.props.token&&this.setState({token:e.token})}},{key:"render",value:function(){var e=this.state,t=e.token,a=e.result,r=e.expired,n=this.props.loading;return T.a.createElement("div",{className:W.a.token},T.a.createElement("div",{className:W.a.top},T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.token.tips1"})),T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.token.tips2"}))),T.a.createElement("div",{className:W.a.key},T.a.createElement(K["a"],{value:t,onChange:this.tokenSync,placeholder:Object(H["formatMessage"])({id:"higher.token.tips"})}),T.a.createElement(V["a"],{onClick:this.tokenAuth},Object(H["formatMessage"])({id:"higher.token.auth"})),T.a.createElement(V["a"],{onClick:this.tokenSubmit,type:"primary",loading:n},Object(H["formatMessage"])({id:"higher.token.submit"}))),a&&T.a.createElement("div",{className:W.a.main},T.a.createElement("span",null,Object(H["formatMessage"])({id:"higher.token.expired"}),":"),T.a.createElement(R["a"],{color:r<10?"magenta":"cyan"},J()(J()().valueOf()+1e3*r).format("YYYY-MM-DD HH:mm:ss"))))}}]),t}(Y["Component"]),n=i))||n),G=X,$=(a("2qtc"),a("kLXV")),_=(a("g9YV"),a("wCAj")),ee=(a("14J3"),a("BMrR")),te=(a("jCWc"),a("kPKH")),ae=a("eHn4"),re=a.n(ae),ne=(a("miYZ"),a("tsqr")),ie=a("rlhR"),oe=a.n(ie),le=(a("BoS7"),a("Sdc0")),se=(a("y8nQ"),a("Vl3Y")),ce=a("jehZ"),me=a.n(ce),he=function(e){var t={labelCol:{span:4},wrapperCol:{span:18,offset:1}},a={xs:24,sm:24,md:24,lg:24,xl:12},r=e.info;return T.a.createElement("div",{className:W.a.info},T.a.createElement(ee["a"],{type:"flex",justify:"space-between",align:"top"},T.a.createElement(te["a"],a,T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.title"})}),r.title),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.slug"})}),r.slug),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.introduce"})}),r.information.introduce),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.isUpdate"})}),T.a.createElement(le["a"],{checked:r.information.isUpdate})),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.count.episode"})}),r.information.eposideCount),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.count.rate"})}),r.information.rateCount),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.count.star"})}),r.information.rateStar),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.updatedTime"})}),Object(H["formatMessage"])({id:"common.day".concat(r.information.updateDay)})),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.firstPlay"})}),r.information.firstPlay),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.category.area"})}),r.category.area),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.category.year"})}),r.category.year)),T.a.createElement(te["a"],a,T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.noPrefix"})}),T.a.createElement(le["a"],{checked:r.play.noPrefix})),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.play.kind"})}),Object(H["formatMessage"])({id:"animate.play.kind.".concat(r.play.kind)})),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.play.downTitle"})}),r.play.downTitle),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.play.downLink"})}),r.play.downLink),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.cover.vertical"})}),T.a.createElement("img",{src:r.cover.vertical,alt:"",style:{width:"200px",height:"280px"}})),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.actor"})}),r.information.actor),T.a.createElement(se["a"].Item,me()({},t,{label:Object(H["formatMessage"])({id:"animate.staff"})}),r.information.staff))))},ue=he,de=K["a"].Search,pe=(o=Object(A["connect"])(function(e){var t=e.higher,a=e.loading;return{higher:t,loading:a.effects["higher/query"]}}),o((s=function(e){function t(){var e,a;k()(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return a=C()(this,(e=q()(t)).call.apply(e,[this].concat(n))),a.state={selectedRowKeys:[],info:{},visible:!1},a.query={title:null,size:null,page:null,sort:null,source:null,isUpdate:null},a.import=function(e){return function(){var t=a.props.dispatch,r=[];if(e)r=[e];else{var n=a.state.selectedRowKeys;r=n}ne["a"].loading("\u5bfc\u5165\u4e2d...\u8bf7\u7b49\u5bfc\u5165\u5b8c\u6210\u518d\u64cd\u4f5c",1e5),t({type:"higher/import",payload:{data:{list:r}}}).then(function(e){e&&(ne["a"].success(e.msg),a.setState({selectedRowKeys:[]}),a.queryAnimate())})}},a.showInfo=function(e){return function(){a.setState({info:e,visible:!0})}},a.hideModal=function(){a.setState({visible:!1})},a.onSearchVideo=function(e){a.query.title=e,a.queryAnimate()},a.onChangeTable=function(e,t,r){var n=e.current,i=e.pageSize,o=t["information.isUpdate"]?t["information.isUpdate"][0]:null,l=t.source?t.source[0]:null,s=null;if(r.order){var c="descend"===r.order?"-":"",m=r.field;s="".concat(c).concat(m)}a.query={size:i,page:n,sort:s,source:l||a.query.source,isUpdate:o,title:a.query.title},a.queryAnimate()},a.queryAnimate=function(){var e=oe()(a),t=e.query,r=a.props.dispatch;r({type:"higher/query",payload:{query:t}})},a}return N()(t,e),x()(t,[{key:"componentDidMount",value:function(){var e=this.props.higher.web;e.length>0&&(this.query.source=e[0],this.queryAnimate())}},{key:"componentWillReceiveProps",value:function(e){var t=e.higher.web;t!==this.props.higher.web&&t.length>0&&(this.query.source=t[0],this.queryAnimate())}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedRowKeys,r=t.info,n=t.visible,i=this.props,o=i.higher,l=o.list,s=o.total,c=o.web,m=i.loading,h=c.map(function(e){return{text:e,value:e}}),u=[{text:Object(H["formatMessage"])({id:"common.update.in"}),value:!0},{text:Object(H["formatMessage"])({id:"common.update.out"}),value:!1}],d=[{title:Object(H["formatMessage"])({id:"animate.title"}),dataIndex:"title",key:"title",sorter:!0,render:function(t,a){return T.a.createElement("a",{onClick:e.showInfo(a)},t)}},{title:Object(H["formatMessage"])({id:"animate.slug"}),dataIndex:"slug",align:"center",sorter:!0},{title:Object(H["formatMessage"])({id:"animate.count.star"}),dataIndex:"information.rateStar",align:"center",sorter:!0},{title:Object(H["formatMessage"])({id:"animate.count.rate"}),dataIndex:"information.rateCount",align:"center",sorter:!0},{title:Object(H["formatMessage"])({id:"animate.update"}),dataIndex:"information.isUpdate",filters:Object.values(u),filterMultiple:!1,render:function(e){return e?Object(H["formatMessage"])({id:"common.update.in"}):Object(H["formatMessage"])({id:"common.update.out"})}},{title:Object(H["formatMessage"])({id:"animate.firstPlay"}),dataIndex:"information.firstPlay",sorter:!0,align:"center"},{title:Object(H["formatMessage"])({id:"higher.animate.source"}),dataIndex:"source",align:"center",filters:h,filterMultiple:!1},{title:Object(H["formatMessage"])({id:"higher.animate.download"}),dataIndex:"play.downTitle",align:"center",render:function(e,t){return e?T.a.createElement("a",{href:t.play.downLink,target:"window"},e):Object(H["formatMessage"])({id:"higher.nodata"})}},{title:Object(H["formatMessage"])({id:"animate.updatedTime"}),dataIndex:"updatedAt",sorter:!0,align:"center",render:function(e){return J()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:Object(H["formatMessage"])({id:"animate.option"}),key:"action",dataIndex:"slug",align:"center",render:function(t,a){return a.exist?T.a.createElement(V["a"],{onClick:e.import(t)},Object(H["formatMessage"])({id:"higher.option.update"})):T.a.createElement(V["a"],{type:"primary",onClick:e.import(t)},Object(H["formatMessage"])({id:"higher.option.import"}))}}],p={selectedRowKeys:a,onChange:function(t){e.setState({selectedRowKeys:t})}},g={showSizeChanger:!0,showQuickJumper:!0,total:s,pageSizeOptions:["10","20"],showTotal:function(e){return"".concat(Object(H["formatMessage"])({id:"common.all.total"})," ").concat(e," ").concat(Object(H["formatMessage"])({id:"common.all.item"}))}};return T.a.createElement(O["a"],{className:"tableList",bordered:!1},T.a.createElement(ee["a"],{className:"head"},T.a.createElement(te["a"],{span:16},a.length>0&&T.a.createElement("span",null,T.a.createElement(V["a"],re()({onClick:this.import,type:"primary"},"onClick",this.import(!1)),Object(H["formatMessage"])({id:"higher.table.import"})))),T.a.createElement(te["a"],{span:8},T.a.createElement(de,{placeholder:Object(H["formatMessage"])({id:"animate.search"}),onSearch:this.onSearchVideo,enterButton:!0}))),T.a.createElement(ee["a"],null,T.a.createElement(_["a"],{loading:m,rowKey:"slug",rowSelection:p,columns:d,onChange:this.onChangeTable,dataSource:l,pagination:g})),T.a.createElement($["a"],{visible:n,footer:null,onCancel:this.hideModal,width:900},T.a.createElement(ue,{info:r})))}}]),t}(Y["Component"]),l=s))||l),ge=pe,fe=(a("giR+"),a("fyUT")),be=a("p0pE"),ye=a.n(be),Ee=(a("OaEy"),a("2fM7")),Me=Ee["a"].Option,Oe=(c=Object(A["connect"])(function(e){var t=e.higher,a=e.loading;return{higher:t,loading:a.effects["higher/auto"]}}),c((h=function(e){function t(){var e,a;k()(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return a=C()(this,(e=q()(t)).call.apply(e,[this].concat(n))),a.state={},a.setClock=function(){a.t=setInterval(function(){a.initData()},5e3)},a.handleSubmit=function(e){e.preventDefault();var t=a.props.dispatch;a.props.form.validateFields(function(e,r){e||(t({type:"higher/auto",payload:{data:ye()({},r)}}),a.setClock())})},a.initData=function(){var e=a.props.dispatch;e({type:"higher/getHigher",payload:{query:{}}}).then(function(e){!e&&clearInterval(a.t)})},a}return N()(t,e),x()(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.t)}},{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.higher,r=a.import,n=a.web,i=e.loading,o={labelCol:{span:2},wrapperCol:{span:18}},l={labelCol:{span:0},wrapperCol:{span:18,offset:2}},s=n.map(function(e){return{text:e,value:e}}),c=function(e){return e.total===e.success+e.error?T.a.createElement(R["a"],{color:"#87d068"},Object(H["formatMessage"])({id:"higher.auto.history.status.success"})):e.created+36e5<(new Date).getTime()?T.a.createElement(R["a"],{color:"#f50"},Object(H["formatMessage"])({id:"higher.auto.history.status.error"})):T.a.createElement(R["a"],{color:"#2db7f5"},Object(H["formatMessage"])({id:"higher.auto.history.status.doing"}))};return T.a.createElement("div",{className:W.a.auto},T.a.createElement("div",{className:W.a.top},T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.auto.tips1"})),T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.auto.tips2"})),T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.auto.tips3"})),T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.auto.tips4"}))),T.a.createElement("div",{className:W.a.main},T.a.createElement(se["a"],{onSubmit:this.handleSubmit},T.a.createElement(se["a"].Item,me()({},o,{label:Object(H["formatMessage"])({id:"higher.animate.source"})}),t("source",{initialValue:void 0,rules:[{required:!0,message:Object(H["formatMessage"])({id:"higher.input.tips"})}]})(T.a.createElement(Ee["a"],{style:{width:"300px"},placeholder:Object(H["formatMessage"])({id:"higher.input.tips"})},s.map(function(e){return T.a.createElement(Me,{value:e.value},e.text)})))),T.a.createElement(se["a"].Item,me()({},o,{label:Object(H["formatMessage"])({id:"higher.auto.start"})}),t("start",{initialValue:1,rules:[{required:!0,message:Object(H["formatMessage"])({id:"higher.input.tips"})}]})(T.a.createElement(fe["a"],{style:{width:"300px"},min:1}))),T.a.createElement(se["a"].Item,me()({},o,{label:Object(H["formatMessage"])({id:"higher.auto.end"})}),t("end",{initialValue:3,rules:[{required:!0,message:Object(H["formatMessage"])({id:"higher.input.tips"})}]})(T.a.createElement(fe["a"],{style:{width:"300px"},min:1}))),T.a.createElement(se["a"].Item,l,T.a.createElement(V["a"],{type:"primary",htmlType:"submit",loading:i},Object(H["formatMessage"])({id:"higher.auto.import"}))))),!!r.total&&T.a.createElement("div",{className:W.a.history},T.a.createElement("h3",null,Object(H["formatMessage"])({id:"higher.auto.history.title"})),T.a.createElement("p",null,T.a.createElement("span",null,Object(H["formatMessage"])({id:"higher.auto.history.status"}),":"),c(r)),T.a.createElement("p",null,T.a.createElement("span",null,Object(H["formatMessage"])({id:"higher.auto.history.total"}),":"),T.a.createElement(R["a"],{color:"magenta"},r.total||Object(H["formatMessage"])({id:"higher.nodata"}))),T.a.createElement("p",null,T.a.createElement("span",null,Object(H["formatMessage"])({id:"higher.auto.history.success"}),":"),T.a.createElement(R["a"],{color:"magenta"},r.success||Object(H["formatMessage"])({id:"higher.nodata"}))),T.a.createElement("p",null,T.a.createElement("span",null,Object(H["formatMessage"])({id:"higher.auto.history.error"}),":"),T.a.createElement(R["a"],{color:"magenta"},r.error||Object(H["formatMessage"])({id:"higher.nodata"}))),T.a.createElement("p",null,T.a.createElement("span",null,Object(H["formatMessage"])({id:"higher.auto.history.time"}),":"),T.a.createElement(R["a"],{color:"magenta"},r.created?J()(r.created).format("YYYY-MM-DD HH:mm:ss"):Object(H["formatMessage"])({id:"higher.nodata"})))))}}]),t}(Y["Component"]),m=h))||m),je=se["a"].create()(Oe),ve=(Ee["a"].Option,u=Object(A["connect"])(function(e){var t=e.higher,a=e.loading;return{higher:t,loading:a.effects["higher/postHigher"]}}),u((p=function(e){function t(){var e,a;k()(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return a=C()(this,(e=q()(t)).call.apply(e,[this].concat(n))),a.state={},a.handleSubmit=function(e){e.preventDefault();var t=a.props.dispatch;a.props.form.validateFields(function(e,a){e||t({type:"higher/postHigher",payload:{data:{update:ye()({},a)}}})})},a}return N()(t,e),x()(t,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.higher.update,r=e.loading,n={labelCol:{span:2},wrapperCol:{span:18}},i={labelCol:{span:0},wrapperCol:{span:18,offset:2}},o=function(e){return e.total===e.success+e.error?T.a.createElement(R["a"],{color:"#87d068"},Object(H["formatMessage"])({id:"higher.update.history.status.success"})):e.created+36e5<(new Date).getTime()?T.a.createElement(R["a"],{color:"#f50"},Object(H["formatMessage"])({id:"higher.update.history.status.error"})):T.a.createElement(R["a"],{color:"#2db7f5"},Object(H["formatMessage"])({id:"higher.update.history.status.doing"}))};return T.a.createElement("div",{className:W.a.update},T.a.createElement("div",{className:W.a.top},T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.update.tips1"})),T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.update.tips2"})),T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.update.tips3"}))),T.a.createElement("div",{className:W.a.main},T.a.createElement(se["a"],{onSubmit:this.handleSubmit},T.a.createElement(se["a"].Item,me()({},n,{label:Object(H["formatMessage"])({id:"higher.auto.hour"})}),t("use",{initialValue:!1,rules:[{required:!0,message:Object(H["formatMessage"])({id:"higher.input.tips"})}],valuePropName:"checked"})(T.a.createElement(le["a"],null))),T.a.createElement(se["a"].Item,i,T.a.createElement(V["a"],{type:"primary",htmlType:"submit",loading:r},Object(H["formatMessage"])({id:"higher.auto.save"}))))),!!a.total&&T.a.createElement("div",{className:W.a.history},T.a.createElement("h3",null,Object(H["formatMessage"])({id:"higher.update.history.title"})),T.a.createElement("p",null,T.a.createElement("span",null,Object(H["formatMessage"])({id:"higher.update.history.status"}),":"),o(a)),T.a.createElement("p",null,T.a.createElement("span",null,Object(H["formatMessage"])({id:"higher.update.history.total"}),":"),T.a.createElement(R["a"],{color:"magenta"},a.total||Object(H["formatMessage"])({id:"higher.nodata"}))),T.a.createElement("p",null,T.a.createElement("span",null,Object(H["formatMessage"])({id:"higher.update.history.success"}),":"),T.a.createElement(R["a"],{color:"magenta"},a.success||Object(H["formatMessage"])({id:"higher.nodata"}))),T.a.createElement("p",null,T.a.createElement("span",null,Object(H["formatMessage"])({id:"higher.update.history.error"}),":"),T.a.createElement(R["a"],{color:"magenta"},a.error||Object(H["formatMessage"])({id:"higher.nodata"}))),T.a.createElement("p",null,T.a.createElement("span",null,Object(H["formatMessage"])({id:"higher.update.history.time"}),":"),T.a.createElement(R["a"],{color:"magenta"},a.created?J()(a.created).format("YYYY-MM-DD HH:mm:ss"):Object(H["formatMessage"])({id:"higher.nodata"})))))}}]),t}(Y["Component"]),d=p))||d),ke=se["a"].create()(ve),we=Ee["a"].Option,xe=(g=Object(A["connect"])(function(e){var t=e.higher,a=e.loading;return{higher:t,loading:a.effects["higher/replace"]}}),g((b=function(e){function t(){var e,a;k()(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return a=C()(this,(e=q()(t)).call.apply(e,[this].concat(n))),a.state={type:"cover",before:"",after:""},a.handleSubmit=function(e){e.preventDefault();var t=a.props,r=t.dispatch,n=t.form;n.validateFields(function(e,t){e||r({type:"higher/replace",payload:{data:ye()({},t)}})})},a}return N()(t,e),x()(t,[{key:"render",value:function(){var e=this.state,t=e.type,a=e.before,r=e.after,n=this.props,i=n.form.getFieldDecorator,o=n.loading,l={labelCol:{span:2},wrapperCol:{span:18}},s={labelCol:{span:0},wrapperCol:{span:18,offset:2}};return T.a.createElement("div",{className:W.a.replace},T.a.createElement("div",{className:W.a.top},T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.replace.tips1"})),T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.replace.tips2"})),T.a.createElement("p",null,Object(H["formatMessage"])({id:"higher.replace.tips3"}))),T.a.createElement("div",{className:W.a.key},T.a.createElement(se["a"],{onSubmit:this.handleSubmit},T.a.createElement(se["a"].Item,me()({},l,{label:Object(H["formatMessage"])({id:"higher.replace.type"})}),i("type",{initialValue:t,rules:[{required:!0,message:Object(H["formatMessage"])({id:"higher.input.tips"})}]})(T.a.createElement(Ee["a"],{style:{width:"300px"}},T.a.createElement(we,{value:"cover"},Object(H["formatMessage"])({id:"higher.replace.cover"})),T.a.createElement(we,{value:"play"},Object(H["formatMessage"])({id:"higher.replace.play"}))))),T.a.createElement(se["a"].Item,me()({},l,{label:Object(H["formatMessage"])({id:"higher.replace.before"})}),i("before",{initialValue:a,rules:[{required:!0,message:Object(H["formatMessage"])({id:"higher.input.tips"})}]})(T.a.createElement(K["a"],{style:{width:"300px"}}))),T.a.createElement(se["a"].Item,me()({},l,{label:Object(H["formatMessage"])({id:"higher.replace.after"})}),i("after",{initialValue:r,rules:[{required:!0,message:Object(H["formatMessage"])({id:"higher.input.tips"})}]})(T.a.createElement(K["a"],{style:{width:"300px"}}))),T.a.createElement(se["a"].Item,s,T.a.createElement(V["a"],{type:"primary",htmlType:"submit",loading:o},Object(H["formatMessage"])({id:"higher.replace.submit"}))))))}}]),t}(Y["Component"]),f=b))||f),Ie=se["a"].create()(xe),Ce=(y=Object(A["connect"])(function(e){var t=e.higher,a=e.loading;return{higher:t,loading:a.models.higher}}),y((M=function(e){function t(){var e,a;k()(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return a=C()(this,(e=q()(t)).call.apply(e,[this].concat(n))),a.initData=function(){var e=a.props.dispatch;e({type:"higher/getHigher",payload:{query:{}}})},a}return N()(t,e),x()(t,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=j["a"].TabPane,t=this.props.higher;return T.a.createElement(P["a"],null,T.a.createElement(O["a"],{bordered:!1},T.a.createElement(j["a"],{defaultActiveKey:"1"},T.a.createElement(e,{tab:Object(H["formatMessage"])({id:"higher.baseinfo"}),key:"1"},T.a.createElement(G,{token:t.token})),T.a.createElement(e,{tab:Object(H["formatMessage"])({id:"higher.import.hand"}),key:"2"},T.a.createElement(ge,null)),T.a.createElement(e,{tab:Object(H["formatMessage"])({id:"higher.import.auto"}),key:"3"},T.a.createElement(je,null)),T.a.createElement(e,{tab:Object(H["formatMessage"])({id:"higher.update.auto"}),key:"4"},T.a.createElement(ke,null)),T.a.createElement(e,{tab:Object(H["formatMessage"])({id:"higher.tools"}),key:"5"},T.a.createElement(Ie,null)))))}}]),t}(Y["Component"]),E=M))||E);t["default"]=Ce}}]);