"use strict";(self.webpackChunkorca_docs=self.webpackChunkorca_docs||[]).push([[195],{4100:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(7294),r=n(6010),i=n(6698),s=n(2263),o={container:"container_1TK4",topLeftOverlay:"topLeftOverlay_m1me",topRightOverlay:"topRightOverlay_OqWY",bottomLeftOverlay:"bottomLeftOverlay_1dlH",bottomRightOverlay:"bottomRightOverlay_1S6r",homePageFeatures:"homePageFeatures_6qLx",heroBanner:"heroBanner_1ZBZ",title:"title_21mN",subtitle:"subtitle_fCNr",buttons:"buttons_irzW",screenshot:"screenshot_Vx-O"},c=n(7462),l=n(6742),m="link_18Jj",u="linkBlack_5vvR",d="linkWhite_1eZC";function p(e){var t=e.className;return a.createElement("div",{className:t},a.createElement(l.Z,{className:(0,r.Z)(m,u),href:"/docs/getting-started/installation"},"Get started"),"\xa0","\xa0","\xa0","\xa0",a.createElement("a",{className:(0,r.Z)(m,d),href:"https://community.getorca.org",target:"__blank",rel:"noreferrer noopener"},"Try demo"))}var v="container_3bjB",g="bottomContainer_2F9W",h="featuresSection_2t1G",f="featuresGrid_Fjav",E="featureContainer_2uzs",b="feature_3oKz",y="icon_2CEl",N="featureText_zfnI",_="buttons_3nF_",k="npx_UXgw",O="button_2SY2",w="buttonCheck_gDRo",C="npx create-orca-app my-app",x=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return a.createElement("div",{className:k},a.createElement("div",null,C),t?a.createElement("button",{className:(0,r.Z)(O,w)},a.createElement("img",{src:"/img/check.svg",al:"Check Icon"})):a.createElement("button",{className:O,onClick:function(){navigator.clipboard.writeText(C),n(!0)},title:"Copy"},a.createElement("img",{src:"/img/copy.svg",alt:"Copy Icon"})))},S=[{title:"Real-time notifications",description:"Be notified instantly when someone likes or comments on your post, follows you, messages you, etc.",icon:"real-time-notifications.svg"},{title:"Email notifications",description:"Receive an email every time someone interacts with your profile or posts.",icon:"email-notifications.svg"},{title:"Messenger",description:"Have a private conversation with other members via an instant messaging system.",icon:"messenger.svg"},{title:"Channels",description:"Create channels to focus your users on specific subjects.",icon:"channels.svg"},{title:"Newsfeed and Following",description:"See the fresh posts of the members that you are following in your Newsfeed.",icon:"newsfeed.svg"},{title:"User presence system",description:"See instantly when members become online or leave the app.",icon:"user-presence.svg"},{title:"Responsive",description:"Great user experience on every device and screen.",icon:"responsive.svg"},{title:"SEO-friendly",description:"Built-in SEO best practices such as meta tags and page loading performance.",icon:"seo.svg"},{title:"100% open source",description:"Integrate Orca into your site with complete confidence.",icon:"open-source.svg"},{title:"Branding",description:"Customize the platform to match your brand.",icon:"branding.svg"},{title:"UI library",description:"Dozens of reusable UI components are included.",icon:"ui-library.svg"},{title:"Search and Explore",description:"Explore and Search for new members and their posts.",icon:"search.svg"}];function Z(e){var t=e.title,n=e.description,r=e.icon;return a.createElement("div",{className:E},a.createElement("div",{className:b},a.createElement("img",{src:"/img/"+r,className:y,alt:t}),a.createElement("div",{className:N},a.createElement("h3",{className:"heading"},t),a.createElement("p",{className:"text"},n))))}function R(){return a.createElement("div",{className:"container"},a.createElement("div",{className:v},a.createElement("h2",{className:"heading"},"Why Orca?"),a.createElement("p",{className:"text"},"Equipped with all you need to start fast and scale.")),a.createElement("section",{className:h},a.createElement("div",{className:f},S.map((function(e,t){return a.createElement(Z,(0,c.Z)({key:t},e))})))),a.createElement("div",{className:g},a.createElement("h2",null,"Ready to start?"),a.createElement(p,{className:_}),a.createElement(x,null)))}n(2389);var B="ANNOUNCEMENT_DISABLED",I="announcement_13NY",z="announcementStars_2x8F",F=function(e){var t=e.setIsAnnouncementOpen;return a.createElement("div",{className:I},a.createElement("div",null,"\u2606 If you like Orca, give it a star on"," ",a.createElement("a",{href:"https://github.com/dimimikadze/orca",target:"__blank",rel:"noreferrer noopener"},"Github")," ","\u2606"),a.createElement("div",null,a.createElement("iframe",{className:z,src:"https://ghbtns.com/github-btn.html?user=dimimikadze&repo=orca&type=star&count=true",frameBorder:"0",scrolling:"0",width:"104",height:"20",title:"GitHub"})),a.createElement("button",{onClick:function(){!function(e,t,n){if(void 0===n&&(n=1),"undefined"!=typeof window){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var r="expires="+a.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}}(B,"true",1),t(!1)}},"\u2715"))};function L(){var e=(0,s.Z)().siteConfig;return a.createElement("div",null,a.createElement("header",{className:o.heroBanner},a.createElement("div",{className:"container"},a.createElement("h1",{className:(0,r.Z)("hero__title heading ",o.title)},e.title),a.createElement("p",{className:(0,r.Z)("hero__subtitle text",o.subtitle)},e.tagline),a.createElement(p,{className:o.buttons}),a.createElement(x,null))),a.createElement("div",{className:o.screenshot},a.createElement("img",{src:"https://res.cloudinary.com/dkkf9iqnd/image/upload/v1633071697/community/Home_Page.png",alt:"Orca Home Page"})))}function T(){var e=function(e){if("undefined"!=typeof window){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var r=n[a];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}}(B),t=(0,a.useState)("true"!==e),n=t[0],r=t[1],c=(0,s.Z)().siteConfig;return a.createElement("div",null,n&&a.createElement(F,{setIsAnnouncementOpen:r}),a.createElement(i.Z,{className:o.homePage,title:c.title,description:c.description},a.createElement("div",{className:o.container},a.createElement("div",{className:o.topLeftOverlay}),a.createElement("div",{className:o.topRightOverlay}),a.createElement(L,null),a.createElement("div",{className:o.homePageFeatures},a.createElement(R,null),a.createElement("div",{className:o.bottomLeftOverlay}),a.createElement("div",{className:o.bottomRightOverlay})))))}}}]);