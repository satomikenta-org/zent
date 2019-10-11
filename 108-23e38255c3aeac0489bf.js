webpackJsonp([108],{1633:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}function e(n){return E.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function p(n){return E.default.createElement(e,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return E.default.createElement(e,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=t(7),u=s(l),i=t(1),r=s(i),k=t(4),d=s(k),f=t(2),m=s(f),g=t(3),h=s(g),v=t(0),E=s(v),_=t(232),y=s(_),b=t(359),z=function(){var n=function(n){function a(){return(0,r.default)(this,a),(0,m.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){return E.default.createElement("div",null,E.default.createElement(b.BlockHeader,{title:"Youzan wsc",tooltip:E.default.createElement("span",null,"test"),content:E.default.createElement("a",{href:"/"},"content"),position:"top-center"}),E.default.createElement("br",null),E.default.createElement(b.BlockHeader,{className:"test-class",title:"Youzan wsc",position:"top-center"},E.default.createElement("a",{href:"/"},"children")),E.default.createElement("br",null),E.default.createElement(b.BlockHeader,{title:"Youzan wsc",tooltip:E.default.createElement("div",null,E.default.createElement("p",null,"test1"),E.default.createElement("p",null,"test2")),content:E.default.createElement("a",{href:"/"},"content"),position:"top-center",childAlign:"right"}),E.default.createElement("br",null),E.default.createElement(b.BlockHeader,{className:"test-class",title:"Youzan wsc",tooltip:E.default.createElement("span",null,"test"),position:"top-center",childAlign:"right"},E.default.createElement("a",{href:"/"},"children")))}}]),a}(E.default.Component);return E.default.createElement(n,null)},w=function(n){function a(){var n,t,s,e;(0,r.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return t=s=(0,m.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),s.state={showCode:!1},s.toggle=function(){s.setState({showCode:!s.state.showCode})},e=t,(0,m.default)(s,e)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,p=a.children;return E.default.createElement("div",{className:"zandoc-react-demo"},E.default.createElement("div",{className:"zandoc-react-demo__preview"},p),E.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.default.createElement("div",{className:"zandoc-react-demo__title"},E.default.createElement("p",null,t||"")),E.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&E.default.createElement("pre",{className:"zandoc-react-demo__code"},E.default.createElement(e,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),N=function(n){function a(){return(0,r.default)(this,a),(0,m.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,h.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,y.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return E.default.createElement("div",{className:"zandoc-react-container",key:null},E.default.createElement(o,{style:""}),E.default.createElement(p,{html:'<h2 class="anchor-heading"><a href="#blockheader">¶</a><a href="javascript:void(0)" id="blockheader" class="anchor-point"></a>BlockHeader</h2>\n<p>This is a block header.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),E.default.createElement(w,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> BlockHeader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip={&lt;span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          content<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-class<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top-center<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>children<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BlockHeader</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>test1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>test2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span></span>\n          <span class="token attr-name">content={&lt;a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n          childAlign<span class="token operator">=</span><span class="token string">"right"</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-class<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip={&lt;span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n          childAlign<span class="token operator">=</span><span class="token string">"right"</span>\n        <span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>children<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BlockHeader</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.default.createElement(z)),E.default.createElement(p,{html:"<h2 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>prefix</td>\n<td>custom prefix</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom class name</td>\n<td>string</td>\n<td>''</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>title</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>tooltip</td>\n<td>content of the pop</td>\n<td>node</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>content</td>\n<td>custom content</td>\n<td>node</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>childAlign</td>\n<td>popsition of children</td>\n<td>string</td>\n<td><code>'left'</code></td>\n<td><code>'left'、'right'</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>pop position</td>\n<td>string</td>\n<td>'top-right'</td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}]),a}(v.Component);a.default=N}});