!function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],u=0,h=[];u<i.length;u++)a=i[u],s[a]&&h.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);h.length;)h.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},s={1:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;r.push([31,0]),o()}({31:function(e,t,o){e.exports=o(54)},44:function(e,t,o){"use strict";o.r(t),function(e){const{isArray:o}=Array,{getPrototypeOf:n,create:s,defineProperty:r,defineProperties:a,isExtensible:i,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:d,preventExtensions:u,hasOwnProperty:h}=Object,{push:p,concat:m,map:g}=Array.prototype,b={}.toString;function f(e){return void 0===e}function y(e){return"function"==typeof e}const w=new WeakMap;function v(e,t){w.set(e,t)}const k=e=>w.get(e)||e;function _(e,t){return e.valueIsObservable(t)?e.getProxy(t):t}function x(e,t,o){m.call(l(o),d(o)).forEach(n=>{let s=c(o,n);s.configurable||(s=j(e,s,_)),r(t,n,s)}),u(t)}class L{constructor(e,t){this.originalTarget=t,this.membrane=e}get(e,t){const{originalTarget:o,membrane:n}=this,s=o[t],{valueObserved:r}=n;return r(o,t),n.getProxy(s)}set(e,t,n){const{originalTarget:s,membrane:{valueMutated:r}}=this;return s[t]!==n?(s[t]=n,r(s,t)):"length"===t&&o(s)&&r(s,t),!0}deleteProperty(e,t){const{originalTarget:o,membrane:{valueMutated:n}}=this;return delete o[t],n(o,t),!0}apply(e,t,o){}construct(e,t,o){}has(e,t){const{originalTarget:o,membrane:{valueObserved:n}}=this;return n(o,t),t in o}ownKeys(e){const{originalTarget:t}=this;return m.call(l(t),d(t))}isExtensible(e){const t=i(e);if(!t)return t;const{originalTarget:o,membrane:n}=this,s=i(o);return s||x(n,e,o),s}setPrototypeOf(e,t){throw new Error(`Invalid setPrototypeOf invocation for reactive proxy ${o=this.originalTarget,o&&o.toString?o.toString():"object"==typeof o?b.call(o):o+""}. Prototype of reactive objects cannot be changed.`);var o}getPrototypeOf(e){const{originalTarget:t}=this;return n(t)}getOwnPropertyDescriptor(e,t){const{originalTarget:o,membrane:n}=this,{valueObserved:s}=this.membrane;s(o,t);let a=c(o,t);if(f(a))return a;const i=c(e,t);return f(i)?((a=j(n,a,_)).configurable||r(e,t,a),a):i}preventExtensions(e){const{originalTarget:t,membrane:o}=this;return x(o,e,t),u(t),!0}defineProperty(e,t,o){const{originalTarget:n,membrane:s}=this,{valueMutated:a}=s,{configurable:i}=o;if(h.call(o,"writable")&&!h.call(o,"value")){const e=c(n,t);o.value=e.value}return r(n,t,function(e){return h.call(e,"value")&&(e.value=k(e.value)),e}(o)),!1===i&&r(e,t,j(s,o,_)),a(n,t),!0}}function R(e,t){return e.valueIsObservable(t)?e.getReadOnlyProxy(t):t}class A{constructor(e,t){this.originalTarget=t,this.membrane=e}get(e,t){const{membrane:o,originalTarget:n}=this,s=n[t],{valueObserved:r}=o;return r(n,t),o.getReadOnlyProxy(s)}set(e,t,o){{const{originalTarget:e}=this;throw new Error(`Invalid mutation: Cannot set "${t.toString()}" on "${e}". "${e}" is read-only.`)}}deleteProperty(e,t){{const{originalTarget:e}=this;throw new Error(`Invalid mutation: Cannot delete "${t.toString()}" on "${e}". "${e}" is read-only.`)}}apply(e,t,o){}construct(e,t,o){}has(e,t){const{originalTarget:o,membrane:{valueObserved:n}}=this;return n(o,t),t in o}ownKeys(e){const{originalTarget:t}=this;return m.call(l(t),d(t))}setPrototypeOf(e,t){{const{originalTarget:e}=this;throw new Error(`Invalid prototype mutation: Cannot set prototype on "${e}". "${e}" prototype is read-only.`)}}getOwnPropertyDescriptor(e,t){const{originalTarget:o,membrane:n}=this,{valueObserved:s}=n;s(o,t);let a=c(o,t);if(f(a))return a;const i=c(e,t);return f(i)?(a=j(n,a,R),h.call(a,"set")&&(a.set=void 0),a.configurable||r(e,t,a),a):i}preventExtensions(e){{const{originalTarget:e}=this;throw new Error(`Invalid mutation: Cannot preventExtensions on ${e}". "${e} is read-only.`)}}defineProperty(e,t,o){{const{originalTarget:e}=this;throw new Error(`Invalid mutation: Cannot defineProperty "${t.toString()}" on "${e}". "${e}" is read-only.`)}}}const C={header:e=>{const t=k(e);return t&&t!==e?["object",{object:function e(t){if(o(t))return t.map(t=>{const o=k(t);return o!==t?e(o):t});const r=s(n(t)),a=l(t);return m.call(a,d(t)).reduce((o,n)=>{const s=t[n],r=k(s);return o[n]=r!==s?e(r):s,o},r)}(e)}]:null},hasBody:()=>!1,body:()=>null};function U(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{}}function P(e){let t=void 0;return o(e)?t=[]:"object"==typeof e&&(t={}),t}(function(){const e=U(),t=e.devtoolsFormatters||[];p.call(t,C),e.devtoolsFormatters=t})();const E=Object.prototype;function O(e){if(null===e)return!1;if("object"!=typeof e)return!1;if(o(e))return!0;const t=n(e);return t===E||null===t||null===n(t)}const S=(e,t)=>{},T=(e,t)=>{},q=e=>e;function j(e,t,o){const{set:n,get:s}=t;return h.call(t,"value")?t.value=o(e,t.value):(f(s)||(t.get=function(){return o(e,s.call(k(this)))}),f(n)||(t.set=function(t){n.call(k(this),e.unwrapProxy(t))})),t}t.default=class{constructor(e){if(this.valueDistortion=q,this.valueMutated=T,this.valueObserved=S,this.valueIsObservable=O,this.objectGraph=new WeakMap,!f(e)){const{valueDistortion:t,valueMutated:o,valueObserved:n,valueIsObservable:s}=e;this.valueDistortion=y(t)?t:q,this.valueMutated=y(o)?o:T,this.valueObserved=y(n)?n:S,this.valueIsObservable=y(s)?s:O}}getProxy(e){const t=k(e),o=this.valueDistortion(t);if(this.valueIsObservable(o)){const n=this.getReactiveState(t,o);return n.readOnly===e?e:n.reactive}return o}getReadOnlyProxy(e){e=k(e);const t=this.valueDistortion(e);return this.valueIsObservable(t)?this.getReactiveState(e,t).readOnly:t}unwrapProxy(e){return k(e)}getReactiveState(e,t){const{objectGraph:o}=this;let n=o.get(t);if(n)return n;const s=this;return n={get reactive(){const o=new L(s,t),n=new Proxy(P(t),o);return v(n,e),r(this,"reactive",{value:n}),n},get readOnly(){const o=new A(s,t),n=new Proxy(P(t),o);return v(n,e),r(this,"readOnly",{value:n}),n}},o.set(t,n),n}}}.call(this,o(45))},45:function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o},54:function(e,t,o){"use strict";o.r(t);var n=o(1);var s=[function(e,t,o){return".tile_area"+t+" {display: flex;flex-wrap: wrap;justify-content: center;align-content: stretch;}\nmy-tile"+t+" {width: 25%;margin: 2vw;}\nimg"+t+" {max-width: 90px;}\n"}];var r=[function(e,t,o){return"\n"+(o?":host {display: flex;flex-direction: column;align-items: center;color: #032e61;}":e+" {display: flex;flex-direction: column;align-items: center;color: #032e61;}")+"\nimg"+t+" {max-width: 150px;margin: 1vh;}\n.slds-text-heading_large"+t+",.slds-text-heading--large"+t+" {font-weight: 300;font-size: 1.75rem;line-height: 1.25;}\n.slds-text-heading_medium"+t+",.slds-text-heading--medium"+t+" {font-weight: 300;font-size: 1.25rem;line-height: 1.25;}\n"}];function a(e,t,o,n){const{h:s,d:r}=e;return[s("img",{attrs:{src:"/resources/images/platform_logo.png",alt:"LWC logo"},key:2},[]),s("div",{classMap:{"slds-text-heading_large":!0},key:3},[r(t.title)]),s("div",{classMap:{"slds-text-heading_medium":!0},key:4},[s("b",{key:5},[r(t.subhead)])])]}var i=Object(n.registerTemplate)(a);a.stylesheets=[],r&&a.stylesheets.push.apply(a.stylesheets,r),a.stylesheetTokens={hostAttribute:"my-header-_header-host",shadowAttribute:"my-header-_header"};class c extends n.LightningElement{constructor(...e){super(...e),this.title="Salesforce Platform Workshops",this.subhead="Now Building Apps is Everyone's Business",this.offerWiaB=!1,this.internalDocs=!1}}Object(n.registerDecorators)(c,{publicProps:{title:{config:0},subhead:{config:0},offerWiaB:{config:0},internalDocs:{config:0}}});var l=Object(n.registerComponent)(c,{tmpl:i});var d=[function(e,t,o){return"\n"+(o?":host {padding: 1vw;background-color: white;border-radius: 0.25rem;}":e+" {padding: 1vw;background-color: white;border-radius: 0.25rem;}")+"\n.slds-text-align_center"+t+",.slds-text-align--center"+t+" {text-align: center;}\n.slds-text-heading_small"+t+",.slds-text-heading--small"+t+" {font-size: 1rem;line-height: 1.25;}\n.tile_container"+t+" {height: 100%;display: flex;flex-direction: column;justify-content: space-between;}\n.button_area"+t+" {margin-top: 1vw;display: flex;flex-direction: row;justify-content: space-around;}\n.slds-button_brand:link"+t+",.slds-button_brand:visited"+t+",.slds-button_brand:active"+t+",.slds-button--brand:link"+t+",.slds-button--brand:visited"+t+",.slds-button--brand:active"+t+" {color: white;}\n.slds-button:hover"+t+",.slds-button:focus"+t+",.slds-button:active"+t+",.slds-button:visited"+t+" {text-decoration: none;}\na.slds-button"+t+" {text-align: center;}\n.slds-button"+t+" {position: relative;display: inline-block;padding: 0;background: transparent;background-clip: border-box;border: 1px solid transparent;border-radius: 0.25rem;line-height: 1.875rem;text-decoration: none;color: #0070d2;-webkit-appearance: none;white-space: normal;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\na"+t+",button"+t+" {cursor: pointer;}\na"+t+" {color: #0070d2;text-decoration: none;transition: color 0.1s linear;}\na"+t+" {background-color: transparent;}\n*"+t+",*"+t+":before,*"+t+":after {box-sizing: border-box;}\n.slds-button_brand"+t+",.slds-button--brand"+t+" {padding-left: 1rem;padding-right: 1rem;text-align: center;vertical-align: middle;border: 1px solid #dddbda;transition: border 0.15s linear;background-color: #0070d2;border-color: #0070d2;color: white;}\n.slds-button_neutral"+t+",.slds-button--neutral"+t+" {padding-left: 1rem;padding-right: 1rem;text-align: center;vertical-align: middle;border: 1px solid #dddbda;transition: border 0.15s linear;border-color: #dddbda;background-color: white;}\n.slds-button:hover"+t+",.slds-button:focus"+t+" {color: #005fb2;}\n.slds-button:hover"+t+",.slds-button:focus"+t+",.slds-button:active"+t+",.slds-button:visited"+t+" {text-decoration: none;}\n.slds-button_brand:hover"+t+",.slds-button_brand:focus"+t+",.slds-button--brand:hover"+t+",.slds-button--brand:focus"+t+" {background-color: #005fb2;border-color: #005fb2;color: white;}\n.slds-button_neutral:hover"+t+",.slds-button_neutral:focus"+t+",.slds-button--neutral:hover"+t+",.slds-button--neutral:focus"+t+" {background-color: #f4f6f9;}\n"}];function u(e,t,o,n){const{d:s,h:r,t:a}=e;return[r("div",{classMap:{tile_container:!0},key:2},[r("p",{classMap:{"slds-text-heading_small":!0,"slds-text-align_center":!0},key:3},[s(t.tile.name)]),r("div",{key:4},[s(t.tile.description)]),r("div",{classMap:{button_area:!0},key:5},[r("a",{classMap:{"slds-button":!0,"slds-button_brand":!0},attrs:{href:t.tile.launchURL,target:"_blank"},key:6},[a("Create Org")]),r("a",{classMap:{"slds-button":!0,"slds-button_neutral":!0},attrs:{href:t.tile.docsURL,target:"_blank"},key:7},[a("Open Guide")])])])]}var h=Object(n.registerTemplate)(u);u.stylesheets=[],d&&u.stylesheets.push.apply(u.stylesheets,d),u.stylesheetTokens={hostAttribute:"my-tile-_tile-host",shadowAttribute:"my-tile-_tile"};class p extends n.LightningElement{constructor(...e){super(...e),this.tile=void 0}}Object(n.registerDecorators)(p,{publicProps:{tile:{config:0}}});var m=Object(n.registerComponent)(p,{tmpl:h});var g=[function(e,t,o){return"\n"+(o?":host {margin: auto;display: flex;justify-content: center;flex-direction: row;flex-grow: 0;}":e+" {margin: auto;display: flex;justify-content: center;flex-direction: row;flex-grow: 0;}")+"\np"+t+" {margin: 0;padding: 0;}\n.uppercase"+t+" {text-transform: uppercase;}\n.slds-text-heading_medium"+t+",.slds-text-heading--medium"+t+" {font-weight: 300;font-size: 1.25rem;line-height: 1.25;}\n.slds-m-bottom_medium"+t+",.slds-m-bottom--medium"+t+" {margin-bottom: 1rem;}\n.banner"+t+" {background-color: #215ca0;color: white;border: none;flex-grow: 0;align-self: center;margin-left: -60px;min-width: 60vw;margin-top: 100px;padding: 1rem;border-radius: 0.25rem;}\n.banner"+t+" .banner_body"+t+" {display: flex;align-items: center;flex-direction: row;justify-content: space-between;}\nimg"+t+" {width: 20%;margin: 0.75rem 0 0.75rem 0;}\na.slds-button"+t+" {text-align: center;}\n.slds-button"+t+" {position: relative;display: inline-block;padding: 0;background: transparent;background-clip: border-box;border: 1px solid transparent;border-radius: 0.25rem;line-height: 1.875rem;text-decoration: none;color: #0070d2;-webkit-appearance: none;white-space: normal;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\na"+t+",button"+t+" {cursor: pointer;}\na"+t+" {color: #0070d2;text-decoration: none;transition: color 0.1s linear;}\na"+t+" {background-color: transparent;}\n*"+t+",*"+t+":before,*"+t+":after {box-sizing: border-box;}\n.slds-button_brand"+t+",.slds-button--brand"+t+" {padding-left: 1rem;padding-right: 1rem;text-align: center;vertical-align: middle;border: 1px solid #dddbda;transition: border 0.15s linear;background-color: #0070d2;border-color: #0070d2;color: white;}\n.slds-button_neutral"+t+",.slds-button--neutral"+t+" {padding-left: 1rem;padding-right: 1rem;text-align: center;vertical-align: middle;border: 1px solid #dddbda;transition: border 0.15s linear;border-color: #dddbda;background-color: white;}\n.slds-button:hover"+t+",.slds-button:focus"+t+" {color: #005fb2;}\n.slds-button:hover"+t+",.slds-button:focus"+t+",.slds-button:active"+t+",.slds-button:visited"+t+" {text-decoration: none;}\n.slds-button_brand:hover"+t+",.slds-button_brand:focus"+t+",.slds-button--brand:hover"+t+",.slds-button--brand:focus"+t+" {background-color: #005fb2;border-color: #005fb2;color: white;}\n.slds-button_neutral:hover"+t+",.slds-button_neutral:focus"+t+",.slds-button--neutral:hover"+t+",.slds-button--neutral:focus"+t+" {background-color: #f4f6f9;}\n"}];function b(e,t,o,n){const{h:s,t:r}=e;return[s("img",{attrs:{src:"/resources/images/Codey.png",alt:"codey the bear"},key:2},[]),s("div",{classMap:{banner:!0},key:3},[s("p",{classMap:{"slds-text-heading_medium":!0,uppercase:!0,"slds-m-bottom_medium":!0},key:4},[s("b",{key:5},[r("Run your own Lightning Platform workshops!")])]),s("div",{classMap:{banner_body:!0},key:6},[s("div",{key:7},[s("p",{key:8},[r("Want to help others build apps fast and easy with the Lightning Platform?")]),s("p",{key:9},[r("Find out how the Lightning Platform Workshop-in-a-Box can give you everything you need!")])]),s("a",{classMap:{"slds-button":!0,"slds-button_neutral":!0},attrs:{href:"https://www.salesforce.com/campaign/lightning-platform-workshop-in-a-box/",target:"_blank"},key:10},[r("Learn More")])])])]}var f=Object(n.registerTemplate)(b);b.stylesheets=[],g&&b.stylesheets.push.apply(b.stylesheets,g),b.stylesheetTokens={hostAttribute:"my-wiab-_wiab-host",shadowAttribute:"my-wiab-_wiab"};var y=Object(n.registerComponent)(class extends n.LightningElement{},{tmpl:f});function w(e,t,o,n){const{c:s,k:r,i:a,h:i}=e;return[s("my-header",l,{key:2},[]),i("div",{classMap:{tile_area:!0},key:3},a(t.tiles,function(e){return s("my-tile",m,{props:{tile:e},key:r(5,e.shortname)},[])})),s("my-wiab",y,{key:6},[])]}var v=Object(n.registerTemplate)(w);w.stylesheets=[],s&&w.stylesheets.push.apply(w.stylesheets,s),w.stylesheetTokens={hostAttribute:"my-app-_app-host",shadowAttribute:"my-app-_app"};const k={tdx19dev:["heroku_connect","code_for_clicks","heroku_pipelines","lightning_vf","cdc","lwc"],tdx19admin:["automate","crash_course","agility","flows","epb"],tdx19adoption:["flows_simple","go_live","js_buttons","console_apps"],all:["automate","cdc","lwc","epb","flows","heroku_connect","lightning_features","code_for_clicks","crash_course","agility","adoption_sales","adoption_service","go_live","quick_actions","lightning_vf","reporting","js_buttons","heroku_pipelines","console_apps","flows_simple"],main:["automate","cdc","lwc","epb","flows","heroku_connect","lightning_features","code_for_clicks","crash_course","agility","adoption_sales","adoption_service","go_live","quick_actions","lightning_vf","reporting","js_buttons","heroku_pipelines","console_apps","flows_simple"],df18zone:["agility","heroku_connect","code_for_clicks","crash_course","js_buttons","heroku_pipelines"],df18rapids:["automate","agility","crash_course","reporting"],df18adoption:["adoption_sales","adoption_service","go_live","quick_actions"],sfwt:["crash_course","automate","go_live","adoption_service"],daydreamin:["reporting","lightning_features","code_for_clicks"],adoption:["adoption_sales","adoption_service","reporting","go_live","quick_actions","lightning_features","js_buttons"],demos:["electron_core_object","demo_custExp","demo_departmental","demo_employeeengagement","demo_align_heroku","demo_volvo_lea","demo_volvo_low_code","easy_spaces","demo_extend_crm","demo_integrate","demo_ducati_heroku","demo_grocery","demo_encryption","demo_sfdx_mulesoft","demo_volvo_trust","demo_dubsmash"],fy20plays:["demo_employeeengagement","demo_custExp","demo_departmental"],df18campground:["demo_volvo_low_code","demo_volvo_lea","demo_volvo_iot","demo_dubsmash","demo_volvo_trust","demo_align_heroku","demo_sfdx_mulesoft"],cpq:["cpq"],brokenWorkshops:["iot"]};var _="https://hosted-scratch.herokuapp.com/launch?template=";const x=[{shortname:"lwc",name:"Workshop: 5 Things You Can Now Do with Lightning Web Components",description:"Lightning Web Components (LWC) launched with a bang. Whether you have used them before or are brand new, join this workshop to learn five ways LWC improve developer productivity.",launchURL:_+"https://github.com/mshanemc/lwc-workshop",docsURL:"https://salesforce.quip.com/zyReABEBOtK5"},{shortname:"epb",name:"Add AI Predictions to Your Custom Objects with Einstein Prediction Builder",description:"Want to use the power of Einstein in your custom apps? Learn how to take your current objects and data in Salesforce, and build predictions based on them.  No code or data science experience required.",launchURL:_+"https://github.com/mshanemc/epb-workshop",docsURL:"https://salesforce.quip.com/DsKRAZg9MRNn"},{shortname:"flows",name:"Learn New Tricks for the New Flow Builder",description:"Get hands on with the new Flow Builder and create a no-code integration to a 3rd party API so you can use it in your flows and deliver a seamless UI to your users",launchURL:_+"https://github.com/mshanemc/flow-workshop",docsURL:"https://salesforce.quip.com/t6u5AbPUvhxY"},{shortname:"console_apps",name:"Boost Productivity with Console Apps",description:"In this workshop, you will get hands on with a Console App and learn how to maximize user productivity through features like Console navigation, Quick Text and Macros.",launchURL:_+"https://github.com/mshanemc/adoption-service",docsURL:"https://salesforce.quip.com/tLICALPsrTWb"},{shortname:"flows_simple",name:"Get started with the new Flow Builder",description:"We know Flow can be intimidating. So we've partnered with Jennifer Lee, automation all-star and Lightning Champion, to help you understand what Flow is all about and to help you get started with the new Flow Builder. In this workshop, you will learn about the foundational building blocks of Flow and build your very first flow.",launchURL:_+"https://github.com/mshanemc/flows-simple",docsURL:"https://salesforce.quip.com/qN8KAZb8xT5Y"},{shortname:"automate",name:"Automate A Business Process with Point And Click Tools",description:"Still relying on humans to take routine actions? Let's automate that to keep data cleaner, everyone informed, and your people focused on important work. Dive into this fun 30-minute workshop on Process Builder and walk away with automation super-tips to slim your backlog fast.",launchURL:_+"https://github.com/mshanemc/process-automation-workshop-df17",docsURL:"https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000Fkdv/aw_hTQB2MzP_YrQF81nAKJ.RoOiS4srqKjdLeYiAia4"},{shortname:"heroku_connect",name:"Build Apps that Span Heroku and Salesforce with Heroku Connect",description:"We know that all of your apps won't run on Force infrastructure because of architectural or talent reasons. Take this 30-minute workshop to see how Heroku lets professional developers build apps without creating new data silos or integration headaches.",launchURL:_+"https://github.com/mshanemc/DF17integrationWorkshops&email=required",docsURL:"https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000Fkdq/ApV8wFxmSvWWb8PEgPUyyFV6zl9uvV112J0msTcS.mw"},{shortname:"lightning_features",name:"Take Custom Apps to the Next Level with Lightning Experience Features",description:"You've built your first app with no code. This 30-minute workshop will explore features available only in Lightning Experience that will make your app engaging and awesome",launchURL:_+"https://github.com/mshanemc/volunteering-base-pkg",docsURL:"https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000Fkdl/gPOcHdq_oUW8Ary3Udov9Bi6x3T5sXyyMofvnn3ea5Y"},{shortname:"code_for_clicks",name:"Write Code that Empowers Non-Coders",description:"You're a developer and someone asks you to add a feature to Salesforce to “do something it doesn't do that needs code”.  This 30-minute workshop explores your options for working smarter, not harder when adding UI and automation in Salesforce.",launchURL:_+"https://github.com/mshanemc/codeForClicks",docsURL:"https://salesforce.quip.com/6qEJAfbdid2T"},{shortname:"crash_course",name:"Building Apps With Clicks - A Crash Course",description:"Build a working app in one sitting? This is your chance to explore the possibilities of our platform to let anyone in your organization build apps with skills they have.",launchURL:_+"https://github.com/mshanemc/df17AppBuilding",docsURL:"https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000Fkdg/4aAxvkmnXrOAq0Mh5NsTo4.7e1CEhBoH76A0r11V_zE"},{shortname:"agility",name:"Make Salesforce Your Back Office Agility Layer",description:"Need to bring together customer data from SAP, Oracle, SharePoint, and others to create connected experiences? Try this workshop for a 30 minute dive into unlocking the most valuable data for your customers and building an Agility Layer in Salesforce with simple point and click tools.",launchURL:_+"https://github.com/mshanemc/DF17integrationWorkshops&email=required",docsURL:"https://salesforce.quip.com/quIaA12BQylG"},{shortname:"cdc",name:"Change Data Capture (CDC)",description:"Salesforce has enabled a bunch of new features for Event Driven Architectures.  During this workshop, we'll activate Change Data Capture and use change events in 3 different scenarios: reactive Salesforce UIs, asynchronous triggers, and apps running outside of Salesforce.",launchURL:_+"https://github.com/mshanemc/cdc-workshop",docsURL:"https://salesforce.quip.com/ivR4ASYKOFig"},{shortname:"employee_community",name:"Engage Employees with Custom Branded Community Apps",description:"Today's workforce is hungry for engagement and collaboration. In this 30 minute guided workshop, learn how to quickly build a custom-branded employee community app with clicks, not code. You'll never see your Intranet the same way again!",launchURL:_+"https://github.com/mshanemc/community-apps-workshop-df17",docsURL:"https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-7-Engage-Employees-with-Custom-Branded-Community-Apps.pdf"},{shortname:"audiences",name:"Design a Captivating Community with Ease for Each Audience",description:"Now you can build your community once, with a different look for each audience! In this 30 minute interactive workshop you'll learn how to integrate CMS and personalize experiences with audiences based on profile or location or brand",launchURL:_+"https://github.com/mshanemc/df17-community-content-workshop",docsURL:"https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-8-Design-a-Captivating-Community-with-Ease-for-Each-Audience.pdf"},{shortname:"reporting",name:"Track Anything in Salesforce with Lightning Reports and Dashboards",description:"Reports and dashboards in Lightning are better than ever.  This 30-minute hands-on workshop will walk you through the new UI and new, only-in-Lightning features.",launchURL:_+"https://github.com/mshanemc/reporting-workshop",docsURL:"https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000FlQ9/05rX658z51XeM4ja98Rcy.PJM0ZIuk3P2L5KRAO._2w"},{shortname:"iot",name:"Connect Devices and Automate Service with Salesforce IoT",description:"How do you automate service based on things happening outside of Salesforce?  This 30-minute hands-on workshop will teach you how to connect devices with Platform Events, and take actions in Salesforce IoT using rules you create—no code required! ",launchURL:_+"https://github.com/mshanemc/iot-workshop",docsURL:"https://salesforce.quip.com/KpGCA3REE3Gs"},{shortname:"demo_extend_crm",name:"Ducati: Extend CRM",description:"Custom Objects help manage Bikes, Dealers, and Live Events.  A Lightning App built with Components helps organize Live Events and Process Builder keep Sales Managers in the loop.  (from the DF17 Campground)",launchURL:_+"https://github.com/mshanemc/cg1",docsURL:"https://salesforce.quip.com/bY08A4XodAFN"},{shortname:"demo_integrate",name:"Ducati: Integrate Data from Anywhere",description:"Salesorce Connect brings Invoices from an ERP system into Salesforce, including the mobile app, with no code.  (from the DF17 Campground)",launchURL:_+"https://github.com/mshanemc/cg4Integrate&email=required",docsURL:"https://salesforce.quip.com/sh0EAdWZDsiW"},{shortname:"demo_ducati_heroku",name:"Ducati: Transform Customer Experiences",description:"Our broad vision--Connected products, customer-facing mobile apps backed by Heroku + Heroku Pipelines, and Lightning seamlessly share information with Heroku Connect and Platform Events.  Some setup required, but totally worth it! (from the DF17 Campground)",launchURL:_+"https://github.com/mshanemc/platform-campground-customer-exp&email=required",docsURL:"https://salesforce.quip.com/pySzAu1av18a"},{shortname:"demo_grocery",name:"Mobile App Dev, no code!",description:"for a webinar 1/23/2018 about Salesforce Mobile.  Explores standard features, AppExchange, custom objects/actions, Connect, and more",launchURL:_+"https://github.com/mshanemc/mobileWebinar&email=required",docsURL:"https://salesforce.quip.com/a0buAtozS9PB"},{shortname:"adoption_sales",name:"Elevate the Opportunity Workspace with Lightning Experience Features",description:"Learn how to take advantage of the layouts and app builder to get the most out of Sales Cloud Lightning. Get on the fast track to configuring the Opportunity Workspace in creative new ways with standard components like Path and take advantage of key capabilities to make your workspace dynamic.",launchURL:_+"https://github.com/mshanemc/adoption-sales",docsURL:"https://quip.com/cQVqAeCVBbn2"},{shortname:"heroku_pipelines",name:"More Apps, Less Ops: Continuous Delivery with Heroku",description:"Do you have a gap between dev and release?  This 30-minute workshop walks through setting up Heroku Pipelines to streamline GitHub, CI, and Release processes for your apps and services.",docsURL:"https://salesforce.quip.com/WbCTAJrd2mlp"},{shortname:"adoption_service",name:"Tailor Your Case View with Lightning Experience Features",description:"Learn how to take advantage of the layouts and app builder to get the most out of Service Cloud Lightning. Get on the fast track to configuring the Case Workspace in creative new ways with standard components like Path and take advantage of key capabilities to make your workspace dynamic and more productive with Actions.",launchURL:_+"https://github.com/mshanemc/adoption-service",docsURL:"https://quip.com/7irfAcFQV7hH"},{shortname:"go_live",name:"From Readiness Check to Rolling out Users, go Live on Lightning!",description:"Are you ready to Go Live with Lightning Experience and need a little help? Join the experts to discover the next steps from running the Readniness report to enabling your users and updating your page layouts to take advantage of new Lightning Experience features.",launchURL:_+"https://github.com/mshanemc/lightning-go-live",docsURL:"https://quip.com/CZQVAT6E1rsz"},{shortname:"quick_actions",name:"Boost Productivity with Quick Actions",description:"Learn new ways in which you can incorporate Quick Actions in Lightning to drive productivity updating records, creating multiple records at one time and updating Global Actions to save your users time and clicks.",launchURL:_+"https://github.com/mshanemc/quick-actions",docsURL:"https://quip.com/bM09AIaMpwKW"},{shortname:"js_buttons",name:"Move JavaScript Buttons and Actions with the Lightning Configuration Converter",description:"JavaScript Buttons is one area that needs to be addressed prior to moving to Lightning Experience. Come discover the Lightning Configuration Converter to understand the manual and automated ways in which you should replace your JavaScript Buttons.",launchURL:_+"https://github.com/mshanemc/js-buttons",docsURL:"https://quip.com/RHBdAp0sApaH"},{shortname:"lightning_vf",name:"Make Visualforce Ready for Lightning Experience with Lightning Stylesheets and More",description:"Are your Visualforce Pages ready for Lightning Experience? Come review a Visualforce Report and learn where to focus your efforts and get hands-on styling a Visualforce page to enhance its look using Lightning Stylesheets.",launchURL:_+"https://github.com/mshanemc/lightning-vf",docsURL:"https://quip.com/TXrnA5QyQ12d"},{shortname:"cpq",name:"Salesforce CPQ Admin Workshop",description:"Salesforce CPQ is providing you an opportunity for an in-depth hands-on walkthrough of Salesforce CPQ. The workshop will give you first-hand experience in administering Salesforce CPQ as we walk through a series of hands-on exercises in the product so you can learn how to leverage the Salesforce platform to take your business to the next level.",launchURL:_+"https://github.com/mshanemc/cpq-workshop",docsURL:"https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000NMcz/ARRuQmp4l2sEgVA328NeZek.r_02tWXiPto_XycHAOw"},{shortname:"demo_volvo_low_code",name:"Empower Everyone to Build Apps with No Code",description:"Volvo demo #1 for low code builders.  Objects, Fields, Validation Rules, Processes, Flows, App Builder, Components",launchURL:_+"https://github.com/mshanemc/cg1-lowcode",docsURL:"https://quip.com/Ovp6AePa5wDU"},{shortname:"demo_volvo_lea",name:"Build Apps for Customers and Partners",description:"Volvo demo #6 for external apps.  Shows customer community, community builder, and dealer community",launchURL:_+"https://github.com/mshanemc/cg6-lea",docsURL:"https://salesforce.quip.com/2iKgARDJthTt"},{shortname:"demo_dubsmash",name:"Transform Customer Experiences",description:"Dubsmash uses Heroku for their apps and services.  See teams, pipelines, process dynos, buildpacks, addons, and more that make Heroku so magical",docsURL:"https://salesforce.quip.com/sakTAqiyuk6G"},{shortname:"demo_volvo_iot",name:"Volvo IoT and Einstein AI",description:"Volvo demo #4 IoT orchestrations, context, and platform events help track scheduled maintenance for a customer's Volvo.  Plus prediction builder!",docsURL:"https://salesforce.quip.com/Fmj7AQPxoof9",launchURL:_+"https://github.com/mshanemc/cg4"},{shortname:"demo_volvo_trust",name:"Volvo Sandbox and Shield",description:"Volvo demo #5: Sandboxes, Change Sets, Deployment Connections, Permissions, Encryption, Transaction Security",docsURL:"https://salesforce.quip.com/sCxCAUzgweCg"},{shortname:"easy_spaces",name:"Easy Spaces",description:"From the trailhead team's sample gallery.  Sample event management application. Easy Spaces is a fictional event management company. This application helps Easy Spaces event coordinators manage reservations and find the right theme for their customers. Regardless of the industry you work in, this app demonstrates how to build flexible, user-centric experiences with dynamic flows, Flow Actions, and object-agnostic Lightning components. This app also demonstrates how to structure your source code for modular distribution using unlocked packages.",docsURL:"https://trailhead.salesforce.com/sample-gallery",launchURL:_+"https://github.com/mshanemc/easy-spaces"},{shortname:"demo_align_heroku",name:"Invisalign and Heroku Connect",description:"Customer website on heroku with heroku connect to send events and leads between Postgres and Lightning Platform",docsURL:"https://salesforce.quip.com/FKmoA0FeESf8",launchURL:_+"https://github.com/mshanemc/align"},{shortname:"demo_sfdx_mulesoft",name:"Accelerate App Dev with Pro Code Tools",description:"SFDX, lightning components, Mulesoft, Azure integration, and Salesforce Connect",docsURL:"https://salesforce.quip.com/Vb5qA2I1QPJk"},{shortname:"demo_encryption",name:"Shield: Platform Encryption",description:"Encrypt fields, search index, chatter, attachments, and platform events with Shield",docsURL:"https://salesforce.quip.com/mQPVA3LL303r",launchURL:_+"https://github.com/mshanemc/encryption-demo"},{shortname:"demo_rviot",name:"Lippert IoT Demo",description:"Connected product service use case for IoT, from TDX18.  Lippert makes RV components",docsURL:"https://salesforce.quip.com/Hm38AYycTIjb",launchURL:_+"https://github.com/mshanemc/rviot"},{shortname:"demo_employeeengagement",name:"Employee Engagement",description:"Electron Motors branded demo of SSO/Aloha, a chatter-powered intranet, Cadalys Concierge, and employee apps (org chart and safety reporting).  There's even a story for the BRK",docsURL:"https://salesforce.quip.com/JHbUACURUYc1",launchURL:_+"https://github.com/mshanemc/solutions-engagement"},{shortname:"demo_custExp",name:"Customer Experience",description:"Electron Motors branded demo of Heroku, Lightning External Apps, and External Identity.  Some assembly required",docsURL:"https://salesforce.quip.com/prigALiQl9rD",launchURL:_+"https://github.com/mshanemc/custexp"},{shortname:"demo_departmental",name:"Departmental Apps",description:"Electron Motors branded demo of app builder, mobile, flows, prediction builder, object creator",docsURL:"https://salesforce.quip.com/8HZrAw1eImuD",launchURL:_+"https://github.com/mshanemc/solutions-departmental-apps"},{shortname:"electron_core_object",name:"Electron Motors Core Object Demo",description:"Tell the full platform story with our fake car company and the Core Object concept",docsURL:"https://docs.google.com/presentation/d/16ewwBG9NN5F7RDpm0LcFfkt-s25HYzCIj4tXmyvSLX8/edit#slide=id.g54fd34ed74_0_322",launchURL:_+"https://github.com/gabesumner/electron-motors-sfdx"}],L=(e,t)=>{const o=[];return!e||"/"===e||"#"!==t&&t||(t=`#${e=e.replace("/","")}`),t="/"!==e&&e||"#"!==t&&t?t.replace("#",""):"all",k[t]||(console.log(`not found: ${t}.  Returning 'all'`),t="all"),k[t].forEach(e=>{o.push(x.find(t=>t.shortname===e))}),o};class R extends n.LightningElement{constructor(...e){super(...e),this.pathname=window.location.pathname,this.hash=window.location.hash}get tiles(){return L(this.pathname,this.hash)}}Object(n.registerDecorators)(R,{track:{pathname:1,hash:1}});var A=Object(n.registerComponent)(R,{tmpl:v});customElements.define("my-app",Object(n.buildCustomElementConstructor)(A))}});