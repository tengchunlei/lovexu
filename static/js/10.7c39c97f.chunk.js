(this.webpackJsonpzhangxu=this.webpackJsonpzhangxu||[]).push([[10],{266:function(e,a,n){"use strict";n.r(a);var t=n(30),r=n(270),s=n(271),o=n(121),l=n(0),c=n.n(l),i=n(31),u=n(79),m=n(35);function p(){var e=Object(t.a)(["\nmargin-bottom:30px;\ntext-align:center;\n"]);return p=function(){return e},e}function g(){var e=Object(t.a)(["\nmax-width:600px;\nmargin:100px  auto;\nbox-shadow:2px 2px 4px 4px rgba(0,0,0,0.2);\nborder-radius:5px;\npadding:18px;\n"]);return g=function(){return e},e}var b=i.a.div(g()),d=i.a.h1(p()),f={labelCol:{span:6},wrapperCol:{span:18}};a.default=function(){var e=Object(u.a)().AuthStore,a=Object(m.f)();return c.a.createElement(b,null,c.a.createElement(d,null,"\u767b\u5f55"),c.a.createElement(r.a,Object.assign({},f,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:function(n){e.setUsername(n.username),e.setPassword(n.password),console.log("Success:",n),e.login().then((function(){console.log("\u767b\u5f55\u6210\u529f\uff0c\u5373\u5c06\u8df3\u8f6c\u5230\u9996\u9875"),a.push("/")})).catch((function(){console.log("\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u68c0\u67e5\u7528\u6237\u540d\u4e0e\u5bc6\u7801")}))},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off"}),c.a.createElement(r.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u54e6"},{validator:function(e,a){return/\W/.test(a)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf\u54e6"):a.length<4||a.length>10?Promise.reject("\u8f93\u5165\u957f\u5ea6\u4e3a4-10\u4e2a\u5b57\u7b26\u54e6"):Promise.resolve()}}]},c.a.createElement(s.a,null)),c.a.createElement(r.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\u54e6"},{min:4,message:"\u6700\u5c11\u8981\u8f93\u51654\u4e2a\u5b57\u7b26\u54e6"},{max:10,message:"\u6700\u591a\u53ea\u80fd\u8f93\u516510\u4e2a\u5b57\u7b26\u54e6"}]},c.a.createElement(s.a.Password,null)),c.a.createElement(r.a.Item,{wrapperCol:{offset:8,span:16}},c.a.createElement(o.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))}}}]);
//# sourceMappingURL=10.7c39c97f.chunk.js.map