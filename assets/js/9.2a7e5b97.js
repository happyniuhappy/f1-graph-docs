(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1422:function(t,s,a){"use strict";a.r(s);var e=a(30),l=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"自动成图操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动成图操作"}},[t._v("#")]),t._v(" 自动成图操作")]),t._v(" "),e("h2",{attrs:{id:"一、单线图成图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、单线图成图"}},[t._v("#")]),t._v(" 一、单线图成图")]),t._v(" "),e("h3",{attrs:{id:"使用demo提供的文件上传方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用demo提供的文件上传方式"}},[t._v("#")]),t._v(" 使用demo提供的文件上传方式")]),t._v(" "),e("ol",[e("li",[t._v("使用页面“导入数据”按钮，选择需要成图的json文件，提交到成图服务接口")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(855),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"使用三方工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用三方工具"}},[t._v("#")]),t._v(" 使用三方工具")]),t._v(" "),e("ol",[e("li",[t._v("使用接口调用工具（例如：postman），将需要成图的json文件发送到成图服务接口")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(856),alt:""}})]),t._v(" "),e("p",[t._v("json文件格式示例")]),t._v(" "),e("p",[e("img",{attrs:{src:a(857),alt:""}})]),t._v(" "),e("p",[t._v("需注意使用post方式，send后即可得到成图是否成功的提示")]),t._v(" "),e("br"),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("接口说明")])]),t._v(" "),e("h4",{attrs:{id:"简要描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简要描述"}},[t._v("#")]),t._v(" 简要描述")]),t._v(" "),e("ul",[e("li",[t._v("导入JSON文件自动成图功能接口")])]),t._v(" "),e("h4",{attrs:{id:"请求url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求url"}},[t._v("#")]),t._v(" 请求URL")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("http://xx.xx.xx.xx:xx/zuul/giscore/layout/poleLineNoPosition.do")])])]),t._v(" "),e("h4",{attrs:{id:"请求方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求方式"}},[t._v("#")]),t._v(" 请求方式")]),t._v(" "),e("ul",[e("li",[t._v("POST")])]),t._v(" "),e("h4",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("filePath")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MultipartFile")]),t._v(" "),e("td",[t._v("JSON文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("websocketTid")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",[t._v("ws主题")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("websocketIid")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",[t._v("ws标识")])])])]),t._v(" "),e("h4",{attrs:{id:"返回示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//普通请求返回\n{"successful":true,"resultHint":"成图完成","resultValue":"ed1e77a8-edaf-4901-b32c-9d17235c67e2"}\n{"successful":false,"resultHint":"成图失败，请检查数据","resultValue":""}\n\n//ws请求\n{"successful":true,"resultHint":"已发送异步请求，请等待返回结果","resultValue":""}\n//ws返回\n{"successful":true,"resultHint":"成图完成","resultValue":"ed1e77a8-edaf-4901-b32c-9d17235c67e2"}\n{"successful":false,"resultHint":"成图失败，请检查数据","resultValue":""}\n\n')])])]),e("h4",{attrs:{id:"返回参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回参数说明"}},[t._v("#")]),t._v(" 返回参数说明")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("successful")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),e("td",[t._v("操作结果")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("resultHint")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",[t._v("提示信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("resultValue")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",[t._v("返回数据（layerId）")])])])]),t._v(" "),e("h2",{attrs:{id:"二、成图静态浏览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、成图静态浏览"}},[t._v("#")]),t._v(" 二、成图静态浏览")]),t._v(" "),e("ol",[e("li",[t._v("打开静态浏览页面，在左侧列表中选择相应的图层，即可在页面上浏览。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(858),alt:""}})]),t._v(" "),e("p",[t._v("静态浏览页面包括：图层列表、绘制区域、操作按钮、鹰眼模式等部分")]),t._v(" "),e("p",[e("img",{attrs:{src:a(859),alt:""}})]),t._v(" "),e("br"),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("选择相应图层后，自动进行图形绘制")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(860),alt:""}})]),t._v(" "),e("p",[t._v("可以使用鼠标工具，或点击缩放按钮，进行拖动缩放等操作\n同时在鹰眼区域，显示当前区域在整个图形的位置")]),t._v(" "),e("p",[e("img",{attrs:{src:a(861),alt:""}})]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("图形动画")])]),t._v(" "),e("ul",[e("li",[t._v("点击图形后，图形高亮显示")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(862),alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("检索到相应的图形后，动画显示")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(863),alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("其他动画效果包括潮流等。")])])])}),[],!1,null,null,null);s.default=l.exports},855:function(t,s,a){t.exports=a.p+"assets/img/layout-1-1-web.9f690135.png"},856:function(t,s,a){t.exports=a.p+"assets/img/layout-1-1-postman.f3eb1b0f.png"},857:function(t,s,a){t.exports=a.p+"assets/img/layout-1-2-json.37346f19.png"},858:function(t,s,a){t.exports=a.p+"assets/img/layout-2-1-view.798d142c.png"},859:function(t,s,a){t.exports=a.p+"assets/img/layout-2-2-view.ad649bc3.png"},860:function(t,s,a){t.exports=a.p+"assets/img/layout-2-3-view.a10306ec.png"},861:function(t,s,a){t.exports=a.p+"assets/img/layout-2-4-view.c09d34bf.png"},862:function(t,s,a){t.exports=a.p+"assets/img/layout-2-5-click.6995e95f.png"},863:function(t,s,a){t.exports=a.p+"assets/img/layout-2-6-location.4377b384.png"}}]);