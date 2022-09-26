"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[304],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Producer",c={unversionedId:"tutorials/producer",id:"tutorials/producer",title:"Producer",description:"Configuring application startup",source:"@site/docs/tutorials/producer.md",sourceDirName:"tutorials",slug:"/tutorials/producer",permalink:"/stream-net/docs/tutorials/producer",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Initial setup",permalink:"/stream-net/docs/tutorials/initial-setup"},next:{title:"Consumer",permalink:"/stream-net/docs/tutorials/consumer"}},s={},p=[{value:"Configuring application startup",id:"configuring-application-startup",level:2},{value:"Using a producer through dependency Injection",id:"using-a-producer-through-dependency-injection",level:2}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"producer"},"Producer"),(0,a.kt)("h2",{id:"configuring-application-startup"},"Configuring application startup"),(0,a.kt)("p",null,"At Startup.cs or Program.cs(in case of .net 6 or later), add the following line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"builder.Services.AddProducer();\n")),(0,a.kt)("h2",{id:"using-a-producer-through-dependency-injection"},"Using a producer through dependency Injection"),(0,a.kt)("p",null,"Just inject the IPublisher interface, and send message of any type in ProduceAsync() method.\nYou can also, use the optional parameter ",(0,a.kt)("strong",{parentName:"p"},"topicName")," to specify a topic name.\nBy default, the topic will be created with the following pattern: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Your.Namespace.Concatenated.With.Your.Event.Contract\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public class UseCaseTestImplementation : IUseCaseTestImplementation\n{\n    private readonly IPublisher _publisher;\n\n    public UseCaseTestImplementation(IPublisher publisher)\n    {\n        _publisher = publisher;\n    }\n    public async Task ExecuteAsync(MessageSampleEvent message)\n    {\n        await _publisher.ProduceAsync(message, "your.topic.name");\n    }\n}\n\npublic interface IUseCaseTestImplementation\n{\n    Task ExecuteAsync(MessageSampleEvent message);\n}\n')))}l.isMDXComponent=!0}}]);