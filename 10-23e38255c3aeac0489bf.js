webpackJsonp([10],{1629:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function p(n){return v.default.createElement(n.tag,(0,l.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function e(n){return v.default.createElement(p,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return v.default.createElement(p,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var u=s(7),l=t(u),i=s(1),k=t(i),r=s(4),d=t(r),m=s(2),g=t(m),f=s(3),h=t(f),y=s(0),v=t(y),w=s(232),b=t(w),N=s(359),x=function(){var n=[{id:205772,name:"test1"},{id:205773,name:"test2"},{id:205774,name:"test3"}],a=function(a){function s(n){(0,k.default)(this,s);var a=(0,g.default)(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,n));return a.state={imageList:[]},a}return(0,h.default)(s,a),(0,d.default)(s,[{key:"renderTrigger",value:function(){return v.default.createElement("span",null)}},{key:"fetchNetworkImage",value:function(n){var a=this;return new Promise(function(s){a.setState({imageList:[{file:null,src:n}]}),s(n)})}},{key:"updateLocalImage",value:function(n){var a=this;return new Promise(function(s){a.setState({imageList:n}),setTimeout(function(){s(n)},1e3)})}},{key:"render",value:function(){return v.default.createElement("div",null,this.state.imageList.map(function(n,a){return v.default.createElement("img",{width:"80",height:"80",key:a,src:n.src,style:{marginRight:"10px"}})}),v.default.createElement(N.Upload,{maxSize:1048576,maxAmount:2,triggerInline:!0,tips:"Recommended image size: 640px x 640px",categoryList:n,onFetch:this.fetchNetworkImage.bind(this),onUpload:this.updateLocalImage.bind(this),errorMessages:{overMaxSize:function(n){return"Over size: "+n.maxSize},overMaxAmount:"So many",wrongMimeType:function(){return!1}}}))}}]),s}(v.default.Component);return v.default.createElement(a,null)},z=function(){var n=function(n){function a(n){(0,k.default)(this,a);var s=(0,g.default)(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return s.state={voiceList:[]},s}return(0,h.default)(a,n),(0,d.default)(a,[{key:"renderTrigger",value:function(){return v.default.createElement("span",null)}},{key:"fetchNetworkImage",value:function(n){var a=this;return new Promise(function(s){a.setState({voiceList:[n]}),s(n)})}},{key:"updateLocalImage",value:function(n){var a=this;return new Promise(function(s){a.setState({voiceList:n}),s(n)})}},{key:"render",value:function(){return v.default.createElement("div",null,this.state.voiceList.map(function(n,a){return v.default.createElement("div",{key:a,style:{fontSize:12,lineHeight:1.5,marginTop:10}},v.default.createElement("p",null,"File Name: ",n.file.name),v.default.createElement("p",null,"File Size: ",(n.file.size/1024).toFixed(1)," KB"))}),v.default.createElement(N.Upload,{maxSize:8e6,triggerInline:!0,tips:"",type:"voice",accept:"audio/mp3, audio/mpeg",maxAmount:1,onFetch:this.fetchNetworkImage.bind(this),onUpload:this.updateLocalImage.bind(this),triggerClassName:"",trigger:function(){return v.default.createElement("a",{href:"javascript:;"},"Upload Voice")}}))}}]),a}(v.default.Component);return v.default.createElement(n,null)},_=function(n){function a(){var n,s,t,p;(0,k.default)(this,a);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return s=t=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},p=s,(0,g.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return v.default.createElement("div",{className:"zandoc-react-demo"},v.default.createElement("div",{className:"zandoc-react-demo__preview"},e),v.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.default.createElement("div",{className:"zandoc-react-demo__title"},v.default.createElement("p",null,s||"")),v.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.default.createElement("pre",{className:"zandoc-react-demo__code"},v.default.createElement(p,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),E=function(n){function a(){return(0,k.default)(this,a),(0,g.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,h.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,b.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return v.default.createElement("div",{className:"zandoc-react-container",key:null},v.default.createElement(o,{style:""}),v.default.createElement(e,{html:'<h1 class="anchor-heading"><a href="#upload">¶</a><a href="javascript:void(0)" id="upload" class="anchor-point"></a>Upload</h1>\n<p>File uploader. Supports images and audios.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),v.default.createElement(_,{title:"Basics",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> categoryList <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">205772</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'test1\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">205773</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'test2\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">205774</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'test3\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n          imageList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">renderTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">fetchNetworkImage</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          imageList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n            file<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n            src<span class="token punctuation">:</span> data\n          <span class="token punctuation">}</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">updateLocalImage</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            imageList<span class="token punctuation">:</span> data\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>imageList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>img width<span class="token operator">=</span><span class="token string">"80"</span> height<span class="token operator">=</span><span class="token string">"80"</span> key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> src<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>src<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>marginRight<span class="token punctuation">:</span> <span class="token string">\'10px\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token operator">&lt;</span>Upload\n            maxSize<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">}</span>\n            maxAmount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>\n            triggerInline\n            tips<span class="token operator">=</span><span class="token string">"Recommended image size: 640px x 640px"</span>\n            categoryList<span class="token operator">=</span><span class="token punctuation">{</span>categoryList<span class="token punctuation">}</span>\n            onFetch<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>fetchNetworkImage<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            onUpload<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>updateLocalImage<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            errorMessages<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              overMaxSize<span class="token punctuation">:</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token string">`Over size: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>maxSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span> <span class="token comment">// function</span>\n              overMaxAmount<span class="token punctuation">:</span> <span class="token string">\'So many\'</span><span class="token punctuation">,</span> <span class="token comment">// string</span>\n              wrongMimeType<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token operator">||</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token string">\'\'</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// show nothing</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(x)),v.default.createElement(_,{title:"Upload Voice",id:"Demovoice",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n          voiceList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">renderTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">fetchNetworkImage</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          voiceList<span class="token punctuation">:</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">updateLocalImage</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            voiceList<span class="token punctuation">:</span> data\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>voiceList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> lineHeight<span class="token punctuation">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>File Name<span class="token punctuation">:</span> <span class="token punctuation">{</span>item<span class="token punctuation">.</span>file<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>File Size<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>file<span class="token punctuation">.</span>size <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span> KB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>\n            <span class="token attr-name">maxSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">triggerInline</span>\n            <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>\n            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>voice<span class="token punctuation">"</span></span>\n            <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>audio/mp3, audio/mpeg<span class="token punctuation">"</span></span>\n            <span class="token attr-name">maxAmount</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onFetch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>fetchNetworkImage<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onUpload</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>updateLocalImage<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">triggerClassName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>\n            <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Upload Voice<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(z)),v.default.createElement(e,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Required</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>Upload type, the default value is 'image', use 'voice' for audio</td>\n<td>string</td>\n<td><code>'image'</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>localOnly</td>\n<td>Allow local images only</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>tips</td>\n<td>Hint text</td>\n<td>string</td>\n<td><code>''</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>maxSize</td>\n<td>Image size limit in bytes</td>\n<td>number</td>\n<td><code>1024 * 1024</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>maxAmount</td>\n<td>Limit number of images, 0 means no limit</td>\n<td>number</td>\n<td><code>0</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>accept</td>\n<td>Allowed file types</td>\n<td>string</td>\n<td><code>'image/gif, image/jpeg, image/png, image/bmp'</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>silent</td>\n<td>Deprecated, No notification about sucesss/failure when set to true</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>triggerInline</td>\n<td>Make trigger node's display inline</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>onFetch</td>\n<td>Callback to fetch remote image</td>\n<td>function</td>\n<td><code>noop</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>onUpload</td>\n<td>Callback to upload local image</td>\n<td>function</td>\n<td><code>noop</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>filterFiles</td>\n<td>Filter local files, supports Promise as return value</td>\n<td>function</td>\n<td><code>noop</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>categoryList</td>\n<td>Group data</td>\n<td>array</td>\n<td>[]</td>\n<td>No</td>\n</tr>\n<tr>\n<td>categoryId</td>\n<td>Group id</td>\n<td>number</td>\n<td>[]</td>\n<td>No</td>\n</tr>\n<tr>\n<td>auto</td>\n<td>Open upload dialog automatically</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>withoutPopup</td>\n<td>Don't render inside a popup</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>triggerClassName</td>\n<td>Custom trigger class name</td>\n<td>string</td>\n<td><code>'zent-upload-trigger'</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>errorMessages</td>\n<td>Custom error message, contains overMaxSize, overMaxAmount, wrongMimeType</td>\n<td>object</td>\n<td><code>{}</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>className</td>\n<td>Extension class name</td>\n<td>string</td>\n<td><code>''</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>Custom prefix</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td>No</td>\n</tr>\n</tbody>\n</table>"}))}}]),a}(y.Component);a.default=E}});