(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JwsL:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("zayr"),l=a.n(r);t.a=function(e){var t=[];return[["Yesterday","/yesterday"],["This Week","/week"],["News","/news"],["Speeches","/speeches"],["Testimony","/testimony"],["Litigation","/litigation"],["Administrative Proceedings","/admin"],["Trading Suspensions","/tradingSuspensions"],["Proposed Rules","/proposedRules"],["Corporate Finance","/coporateFinance"],["Investor Alerts","/investorAlerts"],["Investment Management","/investorManagement"]].forEach((function(e,a){t.push(s.a.createElement("li",{className:"w-full 425px:w-1/2 1024px:w-1/3 mb-2"},s.a.createElement("a",{className:"hover:underline",href:e[1]},e[0])))})),s.a.createElement("footer",{className:"mt-12 pt-12"},s.a.createElement("div",{className:"text-center text-navy"},s.a.createElement("h3",{className:"text-2xl"},"Don't see what you are looking for?"),s.a.createElement("h3",{className:"text-3xl font-bold mb-8"},"Dive into the archives"),s.a.createElement("ul",{className:"flex flex-wrap "},t)),s.a.createElement("div",{className:"mt-12 pt-12 opacity-25 text-sm text-center border-t border-black-25 leading-loose"},s.a.createElement("h3",{className:"text-lg pb-2 font-bold"},"Fineprint / Legalese"),s.a.createElement("p",{className:"mb-2"},"This page provides a free daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and I hope they will provide a feed in the future or I will look into alternative methods of acquiring the information. Those sections include: ",s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/rules/other.htm"},"Other Commission Orders, Notices, and Information"),", ",s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/about/upcoming-events.htm"},"Upcoming Events")),s.a.createElement("p",{className:"mb-2"},"Coming soon: ",s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent"},"Latest Filings"),", ",s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/whatsnew/wn-archive.shtml"},"Previous What’s New Issues"),", ",s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/digest.shtml"},"News Digest Archives (1956-2013)")),s.a.createElement("p",{className:"mb-8"},"Missing something? Please ",s.a.createElement("a",{className:"font-bold hover:underline",href:"https://twitter.com/justinsane98"},"let me know")," and I will try to add it."),s.a.createElement("a",{className:"inline-block w-20 opacity-50 hover:opacity-100",href:"https://cash.app/$hearer"},s.a.createElement("img",{src:l.a,alt:"$hearer"})),s.a.createElement("br",null),s.a.createElement("a",{className:"my-2 py-1 px-2 bg-black-10 hover:cursor-pointer hover:bg-black hover:text-white"},"33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt"),s.a.createElement("p",{className:"my-2"},"No Ads. Like my work?",s.a.createElement("br",null),"Please consider tipping.")))}},YLxZ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),r=a("Wbzz"),l=function(e){var t=e.startDate,a=e.endDate,n=Object(r.useStaticQuery)("681042767"),l=["January","February","March","April","May","June","July","August","September","October","November","December"],o=[];return n.allFeedStatements.nodes.forEach((function(e,n){var r=e.pubDate.split(" ")[1],i=e.pubDate.split(" ")[2],c=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],h=m.split(":")[1],p=m.split(":")[0],d=e.content?e.content.replaceAll("<br />"," "):"",u=new Date(c,l.findIndex((function(e){return e.includes(i)})),r);u.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&u.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&o.push(s.a.createElement("li",{className:"py-4",key:e.title+n},s.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),s.a.createElement("p",{className:"opacity-90"},d),s.a.createElement("p",{className:"text-sm opacity-25"},i," ",r," ",p,":",h," EST")))})),s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:(o.length>0?"":"hidden")+" mb-12 relative "},s.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Public Statements"),s.a.createElement("div",{className:o.length>0?"":"hidden"},s.a.createElement("ul",null,o)),s.a.createElement("div",{className:(o.length>0?"":"hidden")+" 425px:absolute top-2 right-0 text-navy"},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block relative -top-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))," ",s.a.createElement("a",{className:"inline-block hover:underline",href:"/statements"},"Archives"))))},o=a("JwsL"),i=a("rY4l");t.default=function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()-99999);var a=new Date(e);return a.setDate(a.getDate()),s.a.createElement(s.a.Fragment,null,s.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),s.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),s.a.createElement(i.a,null),s.a.createElement("div",{className:"my-12 mx-auto max-w-2xl w-3/4 font-serif"},s.a.createElement("main",null,s.a.createElement("section",{className:"mb-12 relative"},s.a.createElement(l,{startDate:t,endDate:a}),s.a.createElement("div",{className:"relative -top-10 -mt-8 425px:mt-0 425px:absolute 425px:top-2 425px:right-0 bg-white 425px:text-right 425px:w-1/2"},s.a.createElement("a",{className:"text-gold leading-loose hover:underline",href:"https://www.sec.gov/news/statements.rss"},"XML")," | ",s.a.createElement("a",{className:"inline-block text-navy hover:underline",href:"https://www.sec.gov/news/statements"},"Source")))),s.a.createElement(o.a,null)))}},rY4l:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n);t.a=function(e){return s.a.createElement("header",{className:"bg-navy text-center px-12 relative"},s.a.createElement("div",{className:"absolute top-2 left-2 768px:left-1/4 bg-white-10 h-0.5 right-2 768px:right-1/4 w-100 z-0"}),s.a.createElement("div",{className:"absolute top-3 left-2 768px:left-1/4 ml-1 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-1 w-100 z-0"}),s.a.createElement("div",{className:"absolute top-4 left-2 768px:left-1/4 ml-2 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-2 w-100 z-0"}),s.a.createElement("a",{href:"/",className:"relative inline-block bg-navy py-1 px-2 text-sm uppercase text-white-50 font-serif z-1"},"Secretary of the Secretary"))}},zayr:function(e,t,a){e.exports=a.p+"static/$hearer-dbe2261036a1f867bf711a20be6c12ac.png"}}]);
//# sourceMappingURL=component---src-pages-statements-js-1c0f4d2c316821cb4fe2.js.map