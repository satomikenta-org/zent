webpackJsonp([90],{1615:function(t,n,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function s(t){return v.default.createElement(t.tag,(0,y.default)({},t.attributes,{dangerouslySetInnerHTML:{__html:t.html}}))}function o(t){return v.default.createElement(s,{tag:"section",html:t.html,attributes:{className:"zandoc-react-markdown"}})}function c(t){return v.default.createElement(s,{tag:"style",html:t.style})}function p(t,n){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(n+=t.offsetTop),p(t.parentNode,n);return n}Object.defineProperty(n,"__esModule",{value:!0});var l=a(1),u=e(l),i=a(4),r=e(i),d=a(2),f=e(d),m=a(3),h=e(m),k=a(7),y=e(k),g=a(0),v=e(g),C=a(232),_=e(C),b=a(359),E=function(){return v.default.createElement(b.CopyButton,{text:"basic usage"})},w=function(){return v.default.createElement(b.CopyButton,{text:"customize usage",onCopySuccess:"Copied！"},v.default.createElement(b.Button,{type:"primary"},"Click！"))},z=function(t){function n(){var t,a,e,s;(0,u.default)(this,n);for(var o=arguments.length,c=Array(o),p=0;p<o;p++)c[p]=arguments[p];return a=e=(0,f.default)(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(c))),e.state={showCode:!1},e.toggle=function(){e.setState({showCode:!e.state.showCode})},s=a,(0,f.default)(e,s)}return(0,h.default)(n,t),(0,r.default)(n,[{key:"render",value:function(){var t=this.state.showCode,n=this.props,a=n.title,e=n.src,o=n.children;return v.default.createElement("div",{className:"zandoc-react-demo"},v.default.createElement("div",{className:"zandoc-react-demo__preview"},o),v.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.default.createElement("div",{className:"zandoc-react-demo__title"},v.default.createElement("p",null,a||"")),v.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(t?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),t&&v.default.createElement("pre",{className:"zandoc-react-demo__code"},v.default.createElement(s,{tag:"code",html:e,attributes:{className:"language-jsx"}})))}}]),n}(g.Component),N=function(t){function n(){return(0,u.default)(this,n),(0,f.default)(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return(0,h.default)(n,t),(0,r.default)(n,[{key:"componentDidMount",value:function(){var t=location.hash;if(t){var n=document.querySelector('a[href="'+t+'"]');n&&(0,_.default)(document.documentElement,0,p(n,-9))}}},{key:"render",value:function(){return v.default.createElement("div",{className:"zandoc-react-container",key:null},v.default.createElement(c,{style:""}),v.default.createElement(o,{html:'<h2 class="anchor-heading"><a href="#copybutton">¶</a><a href="javascript:void(0)" id="copybutton" class="anchor-point"></a>CopyButton</h2>\n<p>Copy button will copy the specified text to the system clipboard when clicked.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>When you need to copy some text, you can use this component.</li>\n<li>This component may fail in some older version browsers since it doesn\'t rely on Flash.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),v.default.createElement(z,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> CopyButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>basic usage<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(E)),v.default.createElement(z,{title:"Customize usage",id:"Democustomize",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> CopyButton<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>customize usage<span class="token punctuation">"</span></span> <span class="token attr-name">onCopySuccess</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Copied！<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CopyButton</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(w)),v.default.createElement(o,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>The next need to be copied</td>\n<td>text</td>\n<td></td>\n</tr>\n<tr>\n<td>onCopySuccess</td>\n<td>The callback function that is triggered when copy successful. If this property is string, it will show in \n<code>Notify.info</code>\n.</td>\n<td>function \n|\n string</td>\n<td><code>\'Copied\'</code></td>\n</tr>\n<tr>\n<td>onCopyError</td>\n<td>The callback function that is triggered when copy failed. If this property is string, it will show in \n<code>Notify.error</code>\n.</td>\n<td>function \n|\n string</td>\n<td><code>\'Copy failed\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),n}(g.Component);n.default=N}});