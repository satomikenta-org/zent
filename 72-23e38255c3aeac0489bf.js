webpackJsonp([72],{1637:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}function e(n){return b.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function o(n){return b.default.createElement(e,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function p(n){return b.default.createElement(e,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=t(7),u=s(l),i=t(123),r=s(i),d=t(1),k=s(d),f=t(4),h=s(f),m=t(2),g=s(m),w=t(3),y=s(w),v=t(0),b=s(v),_=t(232),E=s(_),M=t(359),z=function(){var n=function(n){function a(){var n,t,s,e;(0,k.default)(this,a);for(var o=arguments.length,p=Array(o),c=0;c<o;c++)p[c]=arguments[c];return t=s=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(p))),s.state={list:[1,2,3,4,5,6,7,8,9,10]},e=t,(0,g.default)(s,e)}return(0,y.default)(a,n),(0,h.default)(a,[{key:"loadMore",value:function(n){var a=this,t=this.state.list,s=t.slice(t.length-10),e=s.map(function(n){return n+10});setTimeout(function(){a.setState({list:[].concat((0,r.default)(t),(0,r.default)(e))}),n&&n()},500)}},{key:"render",value:function(){var n=this.state.list;return b.default.createElement(M.InfiniteScroller,{className:"infinite-scroller-demo",useWindow:!1,loadMore:this.loadMore.bind(this)},n.map(function(n){return b.default.createElement(M.Card,{key:n},n)}))}}]),a}(b.default.Component);return b.default.createElement(n,null)},C=function(n){function a(){var n,t,s,e;(0,k.default)(this,a);for(var o=arguments.length,p=Array(o),c=0;c<o;c++)p[c]=arguments[c];return t=s=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(p))),s.state={showCode:!1},s.toggle=function(){s.setState({showCode:!s.state.showCode})},e=t,(0,g.default)(s,e)}return(0,y.default)(a,n),(0,h.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,o=a.children;return b.default.createElement("div",{className:"zandoc-react-demo"},b.default.createElement("div",{className:"zandoc-react-demo__preview"},o),b.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.default.createElement("div",{className:"zandoc-react-demo__title"},b.default.createElement("p",null,t||"")),b.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&b.default.createElement("pre",{className:"zandoc-react-demo__code"},b.default.createElement(e,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),j=function(n){function a(){return(0,k.default)(this,a),(0,g.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,y.default)(a,n),(0,h.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,E.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return b.default.createElement("div",{className:"zandoc-react-container",key:null},b.default.createElement(p,{style:".infinite-scroller-demo {\n\theight: 300px;\n}"}),b.default.createElement(o,{html:'<h2 class="anchor-heading"><a href="#infinitescroller">¶</a><a href="javascript:void(0)" id="infinitescroller" class="anchor-point"></a>InfiniteScroller</h2>\n<p>Infinite scrolling widget</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>Used to load content continuously as the user scrolls down the page.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),b.default.createElement(C,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> InfiniteScroller<span class="token punctuation">,</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    list<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">loadMore</span><span class="token punctuation">(</span>closeLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> latestList <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> newList <span class="token operator">=</span> latestList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        list<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">,</span> <span class="token operator">...</span>newList<span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      closeLoading <span class="token operator">&amp;&amp;</span> <span class="token function">closeLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InfiniteScroller</span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>infinite-scroller-demo<span class="token punctuation">"</span></span>\n        <span class="token attr-name">useWindow</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">loadMore</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>loadMore<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InfiniteScroller</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(z)),b.default.createElement(o,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>hasMore</td>\n<td>if pass true, it will call loadMore function</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>loadMore</td>\n<td>loadMore function, first argument is a callback to stop loading animation effect</td>\n<td>func(stopLoading)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>initialLoad</td>\n<td>whether it should be call loadMore function when it initialize</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>useWindow</td>\n<td>if pass true, it will listens window scroll event, or it will listens it\'s DOM element scroll event</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>useCapture</td>\n<td>whether to capture event when scroll event triggers</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>loader</td>\n<td>showing content when it is loaded</td>\n<td>node</td>\n<td>zent\'s Loading</td>\n<td></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>it will loads data when the distance threshold has been reached</td>\n<td>number</td>\n<td>20</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom extra classname</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>custom class prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#loadmore">¶</a><a href="javascript:void(0)" id="loadmore" class="anchor-point"></a>loadMore</h3>\n<p>When it is a async loading, it is expected that the return of loadMore function is a Promise that is used to control loading show. or you have to stop loading by yourself with the first param as callback from loadMore function</p>\n<h3 class="anchor-heading"><a href="#usewindow">¶</a><a href="javascript:void(0)" id="usewindow" class="anchor-point"></a>useWindow</h3>\n<p>The default prop is true, it\'s a full-screen scroll load, if you need to limit the scroll load within a region, then set this prop to false</p>'}))}}]),a}(v.Component);a.default=j}});