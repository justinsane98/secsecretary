(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{AKwe:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),n=a.n(s),r=a("Wbzz"),l=a("Fr/u"),o=a("JwsL"),i=a("rY4l");t.default=function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()-99999);var a=new Date(e);a.setDate(a.getDate());var s=Object(r.useStaticQuery)("3660182946").allFeedProposedRules.nodes;return n.a.createElement(n.a.Fragment,null,n.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),n.a.createElement(i.a,null),n.a.createElement("div",{className:"my-12 mx-auto max-w-2xl w-3/4 font-serif"},n.a.createElement("main",null,n.a.createElement("section",{className:"mb-12 relative"},n.a.createElement(l.a,{title:"Proposed Rules",startDate:t,endDate:a,nodes:s,link:"/proposedRules"}),n.a.createElement("div",{className:"relative -top-10 -mt-8 425px:mt-0 425px:absolute 425px:top-2 425px:right-0 bg-white 425px:text-right 425px:w-1/2"},n.a.createElement("a",{className:"text-gold leading-loose hover:underline",href:"https://www.sec.gov/rss/rules/proposed.xml"},"XML")," | ",n.a.createElement("a",{className:"inline-block text-navy hover:underline",href:"https://www.sec.gov/rules/proposed.shtml"},"Source")))),n.a.createElement(o.a,null)))}},"Fr/u":function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s);t.a=function(e){var t=e.startDate,a=e.endDate,s=e.nodes,r=e.title,l=e.link,o=["January","February","March","April","May","June","July","August","September","October","November","December"],i=[];return s.forEach((function(e,s){var r=e.pubDate.split(" ")[1],l=e.pubDate.split(" ")[2],c=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],h=m.split(":")[1],p=m.split(":")[0],d=e.content?e.content.replaceAll("<br />"," "):"",u=new Date(c,o.findIndex((function(e){return e.includes(l)})),r);u.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&u.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&i.push(n.a.createElement("li",{className:"py-4",key:e.title+s},n.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),n.a.createElement("p",{className:"opacity-90"},d),n.a.createElement("p",{className:"text-sm opacity-25"},l," ",r," ",p,":",h," EST")))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:(i.length>0?"":"hidden")+" mb-12 relative "},n.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},r),n.a.createElement("div",{className:i.length>0?"":"hidden"},n.a.createElement("ul",null,i)),n.a.createElement("div",{className:(i.length>0?"":"hidden")+" 425px:absolute top-2 right-0 text-navy"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block relative -top-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))," ",n.a.createElement("a",{className:"inline-block hover:underline",href:l},"Archives"))))}},"Ii+K":function(e,t,a){e.exports=a.p+"static/$hearer-dbe2261036a1f867bf711a20be6c12ac.png"},JwsL:function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s),r=a("Ii+K"),l=a.n(r);t.a=function(e){var t=[];return[["Yesterday","/yesterday"],["This Week","/week"],["News","/news"],["Speeches","/speeches"],["Testimony","/testimony"],["Litigation","/litigation"],["Administrative Proceedings","/admin"],["Trading Suspensions","/tradingSuspensions"],["Proposed Rules","/proposedRules"],["Corporate Finance","/coporateFinance"],["Investor Alerts","/investorAlerts"],["Investment Management","/investorManagement"]].forEach((function(e,a){t.push(n.a.createElement("li",{key:"footer-"+e[1]+a,className:"w-full 425px:w-1/2 1024px:w-1/3 mb-2"},n.a.createElement("a",{className:"hover:underline",href:e[1]},e[0])))})),n.a.createElement("footer",{className:"mt-12 bg-navy"},n.a.createElement("div",{className:"py-12 mx-4 768px:mx-auto 768px:max-w-2xl 768px:w-3/4 1200px:w-1/2"},n.a.createElement("div",{className:"text-white"},n.a.createElement("h3",{className:"text-2xl font-bold text-black-75"},"Don't see what you are looking for?"),n.a.createElement("h3",{className:"text-3xl font-bold mb-8 opacity-75"},"Dive into the archives"),n.a.createElement("ul",{className:"flex flex-wrap opacity-50"},t)),n.a.createElement("div",{className:"mt-12 pt-12 text-black text-sm border-t border-black-25 leading-loose"},n.a.createElement("h3",{className:"text-lg pb-2 font-bold opacity-50"},"Fineprint / Legalese"),n.a.createElement("p",{className:"mb-2 text-white-25"},"This page provides a free daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and I hope they will provide a feed in the future or I will look into alternative methods of acquiring the information. "),n.a.createElement("div",{className:"text-white-25"},n.a.createElement("p",{className:"mb-2"},"Those sections include: ",n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/rules/other.htm"},"Other Commission Orders, Notices, and Information"),", ",n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/about/upcoming-events.htm"},"Upcoming Events")),n.a.createElement("p",{className:"mb-2"},"Coming soon: ",n.a.createElement("a",{className:"hover:underline",href:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent"},"Latest Filings"),", ",n.a.createElement("a",{className:"hover:underline",href:"https://www.sec.gov/news/whatsnew/wn-archive.shtml"},"Previous What’s New Issues"),", ",n.a.createElement("a",{className:"hover:underline",href:"https://www.sec.gov/news/digest.shtml"},"News Digest Archives (1956-2013)")),n.a.createElement("p",{className:"mb-8"},"Missing something? Please ",n.a.createElement("a",{className:"font-bold hover:underline",href:"https://twitter.com/justinsane98"},"let me know")," and I will try to add it."),n.a.createElement("a",{className:"inline-block w-20 opacity-50 hover:opacity-100 border-2 border-white rounded",href:"https://cash.app/$hearer"},n.a.createElement("img",{src:l.a,alt:"$hearer"})),n.a.createElement("br",null),n.a.createElement("a",{href:"33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt",className:"my-2 py-1 px-2 bg-black-10 hover:cursor-pointer hover:bg-white-10 hover:text-navy active:bg-white-50"},"33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt"),n.a.createElement("p",{className:"my-2"},"No Ads. Like my work?",n.a.createElement("br",null),"Please consider tipping.")))))}},rY4l:function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s);t.a=function(e){return n.a.createElement("header",{className:"bg-navy"},n.a.createElement("div",{className:"relative mx-4 768px:mx-auto 768px:max-w-2xl 768px:w-3/4 1200px:w-1/2"},n.a.createElement("div",{className:"absolute top-2 left-0 bg-white-10 h-0.5 right-1/4 w-100 z-0"}),n.a.createElement("div",{className:"absolute top-3 left-0 bg-white-10 h-0.5 right-1/4 mr-1 w-100 z-0"}),n.a.createElement("div",{className:"absolute top-4 left-0 bg-white-10 h-0.5 right-1/4 mr-2 w-100 z-0"}),n.a.createElement("a",{href:"/",className:"relative inline-block bg-navy py-1 px-2 left-6 text-sm uppercase text-white-50 font-serif z-1"},"Secretary of the Secretary")))}}}]);
//# sourceMappingURL=component---src-pages-proposed-rules-js-7f0cba39a72adff8495e.js.map