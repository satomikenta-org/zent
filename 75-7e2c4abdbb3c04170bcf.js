(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{658:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return L});var t=s(586),e=s.n(t),o=s(587),p=s.n(o),c=s(23),l=s.n(c),u=s(24),i=s.n(u),r=s(25),d=s.n(r),k=s(26),m=s.n(k),h=s(32),f=s.n(h),g=s(27),w=s.n(g),v=s(28),y=s.n(v),b=s(0),E=s.n(b),z=s(111),M=s(82),_=function(){var n=function(n){function a(){var n,s;l()(this,a);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return s=d()(this,(n=m()(a)).call.apply(n,[this].concat(e))),y()(f()(s),"state",{list:[1,2,3,4,5,6,7,8,9,10]}),s}return w()(a,n),i()(a,[{key:"loadMore",value:function(n){var a=this,s=this.state.list,t=s.slice(s.length-10).map(function(n){return n+10});setTimeout(function(){a.setState({list:[].concat(p()(s),p()(t))}),n&&n()},500)}},{key:"render",value:function(){var n=this.state.list;return E.a.createElement(M.P,{className:"infinite-scroller-demo",useWindow:!1,loadMore:this.loadMore.bind(this)},n.map(function(n){return E.a.createElement(M.k,{key:n},n)}))}}]),a}(E.a.Component);return E.a.createElement(n,null)};function C(n){return E.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function N(n){return E.a.createElement(C,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return E.a.createElement(C,{tag:"style",html:n.style})}var S=function(n){function a(){var n,s;l()(this,a);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return s=d()(this,(n=m()(a)).call.apply(n,[this].concat(e))),y()(f()(s),"state",{showCode:!1}),y()(f()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return w()(a,n),i()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return E.a.createElement("div",{className:"zandoc-react-demo"},E.a.createElement("div",{className:"zandoc-react-demo__preview"},e),E.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.a.createElement("div",{className:"zandoc-react-demo__title"},E.a.createElement("p",null,s||"")),E.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&E.a.createElement("pre",{className:"zandoc-react-demo__code"},E.a.createElement(C,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(b.Component),L=function(n){function a(){return l()(this,a),d()(this,m()(a).apply(this,arguments))}return w()(a,n),i()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(z.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return E.a.createElement("div",{className:"zandoc-react-container",key:null},E.a.createElement(j,{style:".infinite-scroller-demo {\n\theight: 300px;\n}"}),E.a.createElement(N,{html:'<h2 class="anchor-heading"><a href="#infinitescroller-wu-xian-gun-dong-zu-jian">¶</a><a href="javascript:void(0)" id="infinitescroller-wu-xian-gun-dong-zu-jian" class="anchor-point"></a>InfiniteScroller 无限滚动组件</h2>\n<p>无限滚动组件</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>常用于一个区域内内容的滚动加载</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),E.a.createElement(S,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> InfiniteScroller<span class="token punctuation">,</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    list<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">loadMore</span><span class="token punctuation">(</span>closeLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> latestList <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> newList <span class="token operator">=</span> latestList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        list<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">,</span> <span class="token operator">...</span>newList<span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      closeLoading <span class="token operator">&amp;&amp;</span> <span class="token function">closeLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InfiniteScroller</span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>infinite-scroller-demo<span class="token punctuation">"</span></span>\n        <span class="token attr-name">useWindow</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">loadMore</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>loadMore<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InfiniteScroller</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(_)),E.a.createElement(N,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>hasMore</td>\n<td>是否可以调用loadMore回调</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>loadMore</td>\n<td>加载更多的回调函数，如果函数接收参数则会传入一个停止loading效果的回调</td>\n<td>func(stopLoading)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>initialLoad</td>\n<td>初始化时是否调用loadMore回调</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>useWindow</td>\n<td>是否监听window上的滚动事件，如果传入false，则监听该DOM元素上的滚动事件</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>useCapture</td>\n<td>滚动事件是否在事件捕获阶段接收</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>loader</td>\n<td>加载时显示的内容</td>\n<td>node</td>\n<td>zent的Loading</td>\n<td></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>触发滚动加载的阈值</td>\n<td>number</td>\n<td>20</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#loadmore">¶</a><a href="javascript:void(0)" id="loadmore" class="anchor-point"></a>loadMore</h3>\n<p>当异步加载时，期望传入的loadMore函数的返回值是一个promise对象，用于组件控制loading的显示，否则需要使用loadMore的回调函数手动停止loading。</p>\n<h3 class="anchor-heading"><a href="#usewindow">¶</a><a href="javascript:void(0)" id="usewindow" class="anchor-point"></a>useWindow</h3>\n<p>默认为true，作用于全屏的滚动加载，如果需要限定为某一个区域内的滚动加载，则将此参数置为false</p>'}))}}]),a}(b.Component)}}]);