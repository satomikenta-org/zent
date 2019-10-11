webpackJsonp([128],{1586:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return _.default.createElement(e.tag,(0,k.default)({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function o(e){return _.default.createElement(s,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function c(e){return _.default.createElement(s,{tag:"style",html:e.style})}function l(e,t){for(;e;)return e.offsetTop&&"static"!==getComputedStyle(e).position&&(t+=e.offsetTop),l(e.parentNode,t);return t}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),p=a(r),i=n(4),u=a(i),d=n(2),f=a(d),m=n(3),h=a(m),g=n(7),k=a(g),v=n(0),_=a(v),y=n(232),w=a(y),E=(function(e){function t(){var e,n,a,s;(0,p.default)(this,t);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return n=a=(0,f.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={showCode:!1},a.toggle=function(){a.setState({showCode:!a.state.showCode})},s=n,(0,f.default)(a,s)}(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.state.showCode,t=this.props,n=t.title,a=t.src,o=t.children;return _.default.createElement("div",{className:"zandoc-react-demo"},_.default.createElement("div",{className:"zandoc-react-demo__preview"},o),_.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},_.default.createElement("div",{className:"zandoc-react-demo__title"},_.default.createElement("p",null,n||"")),_.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(e?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),e&&_.default.createElement("pre",{className:"zandoc-react-demo__code"},_.default.createElement(s,{tag:"code",html:a,attributes:{className:"language-jsx"}})))}}])}(v.Component),function(e){function t(){return(0,p.default)(this,t),(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var t=document.querySelector('a[href="'+e+'"]');t&&(0,w.default)(document.documentElement,0,l(t,-9))}}},{key:"render",value:function(){return _.default.createElement("div",{className:"zandoc-react-container",key:null},_.default.createElement(c,{style:""}),_.default.createElement(o,{html:'<h2 class="anchor-heading"><a href="#i18n">¶</a><a href="javascript:void(0)" id="i18n" class="anchor-point"></a>I18n</h2>\n<p>The default language of Zent is Simplified Chinese, if you want switch to Engilish, you can follow the instruction below.</p>\n<h4 class="anchor-heading"><a href="#i18nprovider">¶</a><a href="javascript:void(0)" id="i18nprovider" class="anchor-point"></a>I18nProvider</h4>\n<p>Zent provides a React Component I18nProvider used to configure the locale text. Components using context, a feature of React, to achieve global effectiveness by wrapping your app.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> I18nProvider <span class="token keyword">as</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">\'zent/lib/i18n/en-US\'</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>Provider</span> <span class="token attr-name">i18n</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>enUS<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>App</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>Provider</span><span class="token punctuation">></span></span></code></pre>\n<p>At present, only Chinese / English language packs are available, corresponding to two files of <code>en-US.js</code> /<code>zh-CN.js</code> in i18n folder.</p>'}))}}]),t}(v.Component));t.default=E}});