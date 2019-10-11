webpackJsonp([89],{1547:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{default:n}}function s(n){return v.default.createElement(n.tag,(0,y.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function o(n){return v.default.createElement(s,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function c(n){return v.default.createElement(s,{tag:"style",html:n.style})}function p(n,t){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(t+=n.offsetTop),p(n.parentNode,t);return t}Object.defineProperty(t,"__esModule",{value:!0});var u=a(1),l=e(u),r=a(4),i=e(r),d=a(2),f=e(d),k=a(3),m=e(k),h=a(7),y=e(h),g=a(0),v=e(g),_=a(232),E=e(_),z=a(359),C=function(){return v.default.createElement(z.CopyButton,{text:"basic usage"})},b=function(){return v.default.createElement(z.CopyButton,{text:"customize usage",onCopySuccess:"复制成功啦！"},v.default.createElement(z.Button,{type:"primary"},"点我"))},N=function(n){function t(){var n,a,e,s;(0,l.default)(this,t);for(var o=arguments.length,c=Array(o),p=0;p<o;p++)c[p]=arguments[p];return a=e=(0,f.default)(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(c))),e.state={showCode:!1},e.toggle=function(){e.setState({showCode:!e.state.showCode})},s=a,(0,f.default)(e,s)}return(0,m.default)(t,n),(0,i.default)(t,[{key:"render",value:function(){var n=this.state.showCode,t=this.props,a=t.title,e=t.src,o=t.children;return v.default.createElement("div",{className:"zandoc-react-demo"},v.default.createElement("div",{className:"zandoc-react-demo__preview"},o),v.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.default.createElement("div",{className:"zandoc-react-demo__title"},v.default.createElement("p",null,a||"")),v.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.default.createElement("pre",{className:"zandoc-react-demo__code"},v.default.createElement(s,{tag:"code",html:e,attributes:{className:"language-jsx"}})))}}]),t}(g.Component),B=function(n){function t(){return(0,l.default)(this,t),(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,m.default)(t,n),(0,i.default)(t,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var t=document.querySelector('a[href="'+n+'"]');t&&(0,E.default)(document.documentElement,0,p(t,-9))}}},{key:"render",value:function(){return v.default.createElement("div",{className:"zandoc-react-container",key:null},v.default.createElement(c,{style:""}),v.default.createElement(o,{html:'<h2 class="anchor-heading"><a href="#copybutton-fu-zhi-an-niu">¶</a><a href="javascript:void(0)" id="copybutton-fu-zhi-an-niu" class="anchor-point"></a>CopyButton 复制按钮</h2>\n<p>复制按钮，点击后复制指定的文本到系统剪贴板中。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>当需要复制某些文本的时候，可以使用此组件</li>\n<li>不依赖 Flash，所以在某些老版本浏览器上可能失败</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),v.default.createElement(N,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> CopyButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>basic usage<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(C)),v.default.createElement(N,{title:"自定义组件",id:"Democustomize",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> CopyButton<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>customize usage<span class="token punctuation">"</span></span> <span class="token attr-name">onCopySuccess</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>复制成功啦！<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CopyButton</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(b)),v.default.createElement(o,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>需要复制的文本</td>\n<td>text</td>\n<td></td>\n</tr>\n<tr>\n<td>onCopySuccess</td>\n<td>复制成功后的回调函数，如果是字符串则使用 \n<code>Notify.info</code>\n 提示</td>\n<td>function \n|\n string</td>\n<td><code>\'复制成功\'</code></td>\n</tr>\n<tr>\n<td>onCopyError</td>\n<td>复制失败后的回调函数，如果是字符串则使用 \n<code>Notify.error</code>\n 提示</td>\n<td>function \n|\n string</td>\n<td><code>\'复制失败\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),t}(g.Component);t.default=B}});