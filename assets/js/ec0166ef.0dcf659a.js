"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63342],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),w=s(r),b=o,f=w["".concat(i,".").concat(b)]||w[b]||l[b]||p;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,c=new Array(p);c[0]=w;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<p;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},55721:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return w}});var n=r(87462),o=r(63366),p=(r(67294),r(3905)),c=["components"],a={},i=void 0,s={unversionedId:"puppeteer.browser.createincognitobrowsercontext",id:"version-10.1.0/puppeteer.browser.createincognitobrowsercontext",isDocsHomePage:!1,title:"puppeteer.browser.createincognitobrowsercontext",description:"Home &gt; puppeteer &gt; Browser &gt; createIncognitoBrowserContext",source:"@site/versioned_docs/version-10.1.0/puppeteer.browser.createincognitobrowsercontext.md",sourceDirName:".",slug:"/puppeteer.browser.createincognitobrowsercontext",permalink:"/puppeteer/docs/puppeteer.browser.createincognitobrowsercontext",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.browser.createincognitobrowsercontext.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.browser.close",permalink:"/puppeteer/docs/puppeteer.browser.close"},next:{title:"puppeteer.browser.defaultbrowsercontext",permalink:"/puppeteer/docs/puppeteer.browser.defaultbrowsercontext"}},u=[{value:"Browser.createIncognitoBrowserContext() method",id:"browsercreateincognitobrowsercontext-method",children:[]},{value:"Example",id:"example",children:[]}],l={toc:u};function w(e){var t=e.components,r=(0,o.Z)(e,c);return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browser"},"Browser")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browser.createincognitobrowsercontext"},"createIncognitoBrowserContext")),(0,p.kt)("h2",{id:"browsercreateincognitobrowsercontext-method"},"Browser.createIncognitoBrowserContext() method"),(0,p.kt)("p",null,"Creates a new incognito browser context. This won't share cookies/cache with other browser contexts."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"createIncognitoBrowserContext(): Promise<BrowserContext>;\n")),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browsercontext"},"BrowserContext"),">"),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"(async () => {\n const browser = await puppeteer.launch();\n  // Create a new incognito browser context.\n  const context = await browser.createIncognitoBrowserContext();\n  // Create a new page in a pristine context.\n  const page = await context.newPage();\n  // Do stuff\n  await page.goto('https://example.com');\n})();\n\n")))}w.isMDXComponent=!0}}]);