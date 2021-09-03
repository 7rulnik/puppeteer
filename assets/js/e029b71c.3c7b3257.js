"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76379],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||s[d]||p;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<p;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22038:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),l=["components"],o={},i=void 0,u={unversionedId:"puppeteer.page._eval",id:"version-9.1.1/puppeteer.page._eval",isDocsHomePage:!1,title:"puppeteer.page._eval",description:"Home &gt; puppeteer &gt; Page &gt; $eval",source:"@site/versioned_docs/version-9.1.1/puppeteer.page._eval.md",sourceDirName:".",slug:"/puppeteer.page._eval",permalink:"/puppeteer/docs/9.1.1/puppeteer.page._eval",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.page._eval.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.page.__eval",permalink:"/puppeteer/docs/9.1.1/puppeteer.page.__eval"},next:{title:"puppeteer.page._x",permalink:"/puppeteer/docs/9.1.1/puppeteer.page._x"}},c=[{value:"Page.$eval() method",id:"pageeval-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}],s={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.page"},"Page")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.page._eval"},"$eval")),(0,p.kt)("h2",{id:"pageeval-method"},"Page.$eval() method"),(0,p.kt)("p",null,"This method runs ",(0,p.kt)("inlineCode",{parentName:"p"},"document.querySelector")," within the page and passes the result as the first argument to the ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"$eval<ReturnType>(selector: string, pageFunction: (element: Element, ...args: unknown[]) => ReturnType | Promise<ReturnType>, ...args: SerializableOrJSHandle[]): Promise<WrapElementHandle<ReturnType>>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"selector"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"the ",(0,p.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," to query for")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,p.kt)("td",{parentName:"tr",align:null},"(element: Element, ...args: unknown","[","]",") =",">"," ReturnType ","|"," Promise","<","ReturnType",">"),(0,p.kt)("td",{parentName:"tr",align:null},"the function to be evaluated in the page context. Will be passed the result of ",(0,p.kt)("code",null,"document.querySelector(selector)")," as its first argument.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"args"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),(0,p.kt)("td",{parentName:"tr",align:null},"any additional arguments to pass through to ",(0,p.kt)("code",null,"pageFunction"),".")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.wrapelementhandle"},"WrapElementHandle"),"<","ReturnType",">",">"),(0,p.kt)("p",null,"The result of calling ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction"),". If it returns an element it is wrapped in an ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.elementhandle"},"ElementHandle"),", else the raw value itself is returned."),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"If no element is found matching ",(0,p.kt)("inlineCode",{parentName:"p"},"selector"),", the method will throw an error."),(0,p.kt)("p",null,"If ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a promise ",(0,p.kt)("inlineCode",{parentName:"p"},"$eval")," will wait for the promise to resolve and then return its value."),(0,p.kt)("h2",{id:"example-1"},"Example 1"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"const searchValue = await page.$eval('#search', el => el.value);\nconst preloadHref = await page.$eval('link[rel=preload]', el => el.href);\nconst html = await page.$eval('.main-container', el => el.outerHTML);\n\n")),(0,p.kt)("p",null,"If you are using TypeScript, you may have to provide an explicit type to the first argument of the ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction"),". By default it is typed as ",(0,p.kt)("inlineCode",{parentName:"p"},"Element"),", but you may need to provide a more specific sub-type:"),(0,p.kt)("h2",{id:"example-2"},"Example 2"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"// if you don't provide HTMLInputElement here, TS will error\n// as `value` is not on `Element`\nconst searchValue = await page.$eval('#search', (el: HTMLInputElement) => el.value);\n\n")),(0,p.kt)("p",null,"The compiler should be able to infer the return type from the ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction")," you provide. If it is unable to, you can use the generic type to tell the compiler what return type you expect from ",(0,p.kt)("inlineCode",{parentName:"p"},"$eval"),":"),(0,p.kt)("h2",{id:"example-3"},"Example 3"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"// The compiler can infer the return type in this case, but if it can't\n// or if you want to be more explicit, provide it as the generic type.\nconst searchValue = await page.$eval<string>(\n '#search', (el: HTMLInputElement) => el.value\n);\n\n")))}m.isMDXComponent=!0}}]);