(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return u}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(145),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(181),m=n.n(s);n.d(t,"PageRenderer",function(){return m.a});var h=n(49);n.d(t,"parsePath",function(){return h.a});var d=i.a.createContext({}),p=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function u(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},181:function(e,t,n){var a;e.exports=(a=n(243))&&a.default||a},188:function(e,t,n){"use strict";n(179);var a,i=n(7),r=n.n(i),o=n(232),l=n(0),c=n.n(l),s=n(4),m=n.n(s),h=n(233),d=n.n(h),p=n(142),u=n.n(p),g=n(147),v=n(244),w=n.n(v),E=(n(78),n(79),n(22)),f=n(245),b=n(184),M=n(150),k=c.a.createElement("svg",((a={xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 30 72",viewBox:"0 0 30 72",width:"20",height:"20"}).viewBox="0 0 20 20",a),c.a.createElement("path",{fill:"white",d:"M15.5 15.5H18V18h-2.5zm-6.75 0h2.5V18h-2.5zM2 15.5h2.5V18H2zm13.5-6.75H18v2.5h-2.5zm-6.75 0h2.5v2.5h-2.5zM2 8.75h2.5v2.5H2zM15.5 2H18v2.5h-2.5zM8.75 2h2.5v2.5h-2.5zM2 2h2.5v2.5H2z"})),x=function(e){var t=e.isNavExpanded,n=e.onToggleNav,a=e.onToggleSwitcher,i=e.isSwitcherExpanded;return c.a.createElement(E.Location,null,function(e){var r=e.location,o=u()({"bx--side-nav--open":t,"bx--side-nav--website":!0,"bx--side-nav--website--with-header-nav":!0}),l=r.pathname.includes("approach"),s=u()({"submenu--active":l});return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.Header,{"aria-label":"Header",className:"bx--header--website"},c.a.createElement(f.SkipToContent,null),c.a.createElement(f.HeaderMenuButton,{className:"bx--header__action--menu","aria-label":"Open menu",onClick:n,isActive:t}),c.a.createElement(f.HeaderName,{prefix:"IBM",to:"/",element:g.Link},"Design"),c.a.createElement(f.HeaderNavigation,{"aria-label":"Main Navigation"},c.a.createElement(f.HeaderMenu,{"aria-label":"Approach",className:s},c.a.createElement(f.HeaderMenuItem,{to:"/approach/",element:g.Link},"Overview"),c.a.createElement(f.HeaderMenuItem,{to:"/approach/design-philosophy/",element:g.Link},"Design philosophy"),c.a.createElement(f.HeaderMenuItem,{to:"/approach/design-thinking/",element:g.Link},"Design thinking"),c.a.createElement(f.HeaderMenuItem,{to:"/approach/design-services/",element:g.Link},"Design services")),c.a.createElement(f.HeaderMenuItem,{to:"/teams/",element:g.Link},"Teams"),c.a.createElement(f.HeaderMenuItem,{to:"/practices/",element:g.Link},"Practices"),c.a.createElement(f.HeaderMenu,{"aria-label":"Impact",className:s},c.a.createElement(f.HeaderMenuItem,{to:"/impact/",element:g.Link},"Overview"),c.a.createElement(f.HeaderMenuItem,{to:"/impact/abd/",element:g.Link},"America by Design"),c.a.createElement(f.HeaderMenuItem,{to:"/impact/think/",element:g.Link},"Think")),c.a.createElement(f.HeaderMenuItem,{href:"https://www.ibm.com/employment/#jobs?job-category=Design"},"Open roles")),c.a.createElement(f.HeaderGlobalBar,null,c.a.createElement(f.HeaderGlobalAction,{className:"bx--header__action--switcher","aria-label":"Switch",onClick:a},i?c.a.createElement(M.d,null):c.a.createElement("div",null,k)))),c.a.createElement(f.SideNav,{"aria-label":"Mobile Navigation",className:o},c.a.createElement(f.SideNavItems,null,c.a.createElement(f.SideNavMenu,{title:"Approach",defaultExpanded:!!l},c.a.createElement(f.SideNavMenuItem,{to:"/approach/",element:g.Link},"Overview"),c.a.createElement(f.SideNavMenuItem,{to:"/approach/design-philosophy/",element:g.Link},"Design philosophy"),c.a.createElement(f.SideNavMenuItem,{to:"/approach/design-thinking/",element:g.Link},"Design thinking"),c.a.createElement(f.SideNavMenuItem,{to:"/approach/design-services/",element:g.Link},"Design services")),c.a.createElement(f.SideNavLink,{to:"/teams/",element:g.Link},"Teams"),c.a.createElement(f.SideNavLink,{to:"/practices/",element:g.Link},"Practices"),c.a.createElement(f.SideNavMenu,{title:"Impact",defaultExpanded:!!l},c.a.createElement(f.SideNavMenuItem,{to:"/impact/",element:g.Link},"Overview"),c.a.createElement(f.SideNavMenuItem,{to:"/impact/abd/",element:g.Link},"America by Design"),c.a.createElement(f.SideNavMenuItem,{to:"/impact/think/",element:g.Link},"Think")))),c.a.createElement(b.b,{role:"navigation","aria-label":"Site switcher",isSwitcherOpen:i,links:[{href:"https://ibm.com/brand",linkText:"IBM Brand Center"},{href:"https://www.ibm.com/design/language/",linkText:"IBM Design Language"},{href:"https://www.carbondesignsystem.com",linkText:"Carbon Design System"},{href:"https://www.ibm.com/standards/carbon/",linkText:"Carbon for IBM.com"},{href:"https://www.ibm.com/design/event/",linkText:"IBM Event Design"},{href:"https://www.ibm.com/design/workplace/",linkText:"IBM Workplace Design"},{href:"https://www.ibm.com/design/thinking/",linkText:"Enterprise Design Thinking"},{href:"https://www.ibm.com/able/",linkText:"IBM Accessibility"},{href:"https://www.ibm.com/design/ai/",linkText:"IBM Design for AI"},{href:"https://www.ibm.com/design/research/",linkText:"IBM Design Research"},{href:"https://www.ibm.com/services/ibmix/",linkText:"IBM iX"},{href:"https://w3.ibm.com/design/experience-standards/",linkText:"IBM Experience Standards"},{href:"https://w3.ibm.com/design/",linkText:"IBM Design"},{href:"https://www.ibm.com/design/racial-equity-in-design",linkText:"Racial Equity in Design"}]}))})};x.propTypes={isNavExpanded:m.a.bool.isRequired,isSwitcherExpanded:m.a.bool.isRequired,onToggleNavNav:m.a.func.isRequired,onToggleSwitcher:m.a.func.isRequired};var I=x,y=n(143).settings.prefix,S=c.a.createElement("svg",{width:"81",height:"32",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("g",{fill:"#BEBDBD",fillRule:"evenodd"},c.a.createElement("path",{d:"M0 32h15.689v-2.038H0zM0 27.721h15.689v-2.038H0zM4.483 23.442h6.724v-2.037H4.483zM4.483 19.164h6.724v-2.038H4.483zM4.483 14.885h6.724v-2.037H4.483zM4.482 10.606h6.724V8.568H4.482zM0 6.327h15.689V4.29H0zM0 2.049h15.689V.011H0zM17.93 29.963V32h16.504a8.521 8.521 0 0 0 5.54-2.037H17.93zM17.93 25.683v2.038h23.914a8.535 8.535 0 0 0 .85-2.038H17.93zM22.412 23.442h6.724v-2.037h-6.724zM40.124 17.126H22.412v2.038H41.77a8.62 8.62 0 0 0-1.645-2.038M22.413 12.848v2.036h17.786a8.612 8.612 0 0 0 1.644-2.037h-19.43zM42.693 6.327a8.447 8.447 0 0 0-.85-2.037H17.93v2.037h24.763zM39.974 2.049a8.521 8.521 0 0 0-5.54-2.037H17.93v2.037h22.044zM22.412 10.606h6.724V8.568h-6.724zM35.453 10.606h7.29a8.603 8.603 0 0 0 .248-2.038h-7.538v2.038zM35.453 21.405v2.037h7.538c0-.703-.09-1.384-.248-2.037h-7.29zM57.457 0H44.825v2.038h13.34zM44.826 32h11.21v-2.038h-11.21zM44.826 27.72h11.21v-2.038h-11.21zM49.309 23.439h6.727v-2.038h-6.727zM49.309 19.159h6.727v-2.038h-6.727zM69.488 32h11.21v-2.038h-11.21zM69.488 27.72h11.21v-2.038h-11.21zM69.488 23.439h6.726v-2.038h-6.726zM69.487 19.159h6.726v-2.038h-6.726zM69.488 14.879h6.726V12.84H63.606l-.707 2.038h5.903l.686-1.94zM61.916 12.84H49.31v2.039h6.726v-1.94l.686 1.94h5.903zM76.213 8.56H65.091l-.707 2.038h11.83zM68.06 0l-.706 2.038h13.344V0zM62.757 32l.72-2.038h-1.432zM61.254 27.72h3.015l.72-2.038h-4.455zM59.743 23.44h6.037l.72-2.039h-7.476zM58.232 19.159h9.06l.719-2.038h-10.5zM49.309 10.598h11.83l-.707-2.038H49.309zM65.868 6.318h14.83V4.28H66.576zM58.947 4.28H44.826v2.038h14.828z"}))),N=function(e){var t,n=e.children,a=e.linksCol1,i=e.linksCol2,r=e.logoOffset,o=u()([y+"--col-lg-12"],((t={})[y+"--offset-lg-4"]=r,t));return c.a.createElement("footer",{className:y+"--website-footer"},c.a.createElement("div",{className:"ibm--grid"},c.a.createElement("div",{className:"ibm--row"},c.a.createElement("nav",{"aria-label":"Footer nav",className:"bx--website-footer__nav ibm--col-lg-2 ibm--col-md-2 ibm--offset-lg-4"},c.a.createElement("ul",null,a&&a.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{className:"bx--website-footer__link",href:e.href,"aria-label":e.linkText},e.linkText))}))),c.a.createElement("nav",{"aria-label":"Footer nav continued",className:"bx--website-footer__nav ibm--col-lg-2 ibm--col-md-2"},c.a.createElement("ul",null,i&&i.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{className:"bx--website-footer__link",href:e.href,"aria-label":e.linkText},e.linkText))}))),c.a.createElement("div",{className:"bx--website-footer__content ibm--col-lg-5 ibm--col-md-4 ibm--offset-lg-2"},n)),c.a.createElement("div",{className:"ibm--row"},c.a.createElement("div",{className:o},c.a.createElement("a",{style:{boxShadow:"none"},href:"http://www.ibm.com","aria-label":"IBM.com"},S)))))};N.propTypes={linksCol1:m.a.array,linksCol2:m.a.array,logoOffset:m.a.bool},N.defaultProps={logoOffset:!0};var z=N,A=n(269),H=n.n(A),B=(n(270),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={isNavExpanded:!1,isSwitcherExpanded:!1},t.toggleClick=function(){t.setState(function(e){return{isNavExpanded:!e.isNavExpanded}}),t.state.isSwitcherExpanded&&t.setState({isSwitcherExpanded:!1})},t.toggleSwitcher=function(){t.setState(function(e){return{isSwitcherExpanded:!e.isSwitcherExpanded}}),t.state.isNavExpanded&&t.setState({isNavExpanded:!1})},t.closeClick=function(){t.state.isNavExpanded&&t.setState({isNavExpanded:!1})},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){new SmoothScroll('a[href*="#"]',{speedAsDuration:!0,speed:200,durationMin:90,durationMax:800,easing:"easeInOutCubic",offset:24})},n.render=function(){var e=this,t=this.props.children,n=(new Date).getFullYear(),a=new Intl.DateTimeFormat(void 0,{year:"numeric",month:"long",day:"numeric"}).format(new Date(Number(H.a))),i=this.state,r=i.isNavExpanded,l=i.isSwitcherExpanded;return c.a.createElement(g.StaticQuery,{query:"1044757290",render:function(i){var o;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{title:i.site.siteMetadata.title,meta:[{name:"description",content:"At IBM, our design philosophy is to help guide people so they can do their best work. Our human-centered design practices help us deliver on that goal."},{name:"keywords",content:"IBM, design, design thinking, design system, human-centered design, user-centered design, design services"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@ibmdesign"},{name:"twitter:title",content:"IBM Design"},{name:"twitter:description",content:"At IBM, our design philosophy is to help guide people so they can do their best work."},{name:"twitter:image",content:"https://media.licdn.com/dms/image/C4D22AQGYrpghhY5wNQ/feedshare-shrink_8192/0?e=1550019600&v=beta&t=ZZ_vrBmH0IR6N6IjJI6alKcJBwU_PX9TtqkBbjVl9ps"}],link:[{rel:"shortcut icon",type:"image/png",href:""+w.a}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(I,{isNavExpanded:r,isSwitcherExpanded:l,onToggleNav:e.toggleClick,onToggleSwitcher:e.toggleSwitcher}),c.a.createElement("div",{className:"container",role:"main","aria-label":"Main content area",onClick:e.closeClick},t,c.a.createElement(z,{logoOffset:!1,linksCol1:[{href:"https://www.ibm.com/privacy",linkText:"Privacy"},{href:"https://www.ibm.com/legal",linkText:"Terms of Use"},{href:"https://www.ibm.com",linkText:"IBM.com"}],linksCol2:[{href:"https://twitter.com/ibmdesign",linkText:"Twitter"}]},c.a.createElement("p",null,"Have questions? Please"," ",c.a.createElement("a",((o={href:"mailto:ibmdesign@us.ibm.com",target:"_blank",rel:"noopener"}).rel="noreferrer",o),"email us.")),c.a.createElement("p",null,"Last updated ",a,c.a.createElement("br",null),"Copyright © ",n," IBM"))))},data:o})},t}(c.a.Component));B.propTypes={children:m.a.any};t.a=B},189:function(e,t,n){"use strict";n(190),n(192),n(78),n(194),n(36),n(196),n(38),n(79),n(198),n(200);var a=n(205),i=n.n(a);(function(){try{new CustomEvent("test-event")}catch(e){return!0}})()&&"undefined"!=typeof window&&(window.CustomEvent=i.a);n(206),n(207),n(208)},206:function(e,t){"undefined"!=typeof Element&&"function"!=typeof Element.prototype.closest&&(Element.prototype.closest=function(e){for(var t=this.ownerDocument,n=this;n&&n!==t;n=n.parentNode)if(n.matches(e))return n;return null})},207:function(e,t,n){if(n(158),"undefined"!=typeof Element){var a=["matches","webkitMatchesSelector","msMatchesSelector"].filter(function(e){return"function"==typeof Element.prototype[e]})[0];"matches"!==a&&(Element.prototype.matches=Element.prototype[a])}},208:function(e,t,n){var a,i,r;(n(209),"undefined"!=typeof DOMTokenList)&&((i=document.createElement("div"),r="_random_class_"+Math.random().toString(36).slice(2),i.classList.toggle(r,!1),i.classList.contains(r))&&(a=DOMTokenList.prototype.toggle,DOMTokenList.prototype.toggle=function(e,t){return arguments.length<2||this.contains(e)===!t?a.call(this,e):t}))},232:function(e){e.exports={data:{site:{siteMetadata:{title:"IBM Design"}}}}},243:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(68),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},244:function(e,t){e.exports="data:image/png;base64,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"},269:function(e,t){e.exports="1668117470000\n"},270:function(e,t,n){}}]);
//# sourceMappingURL=1-f756ca737a2745278d70.js.map