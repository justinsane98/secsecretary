(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7oih":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("rY4l"),l=a("JwsL");t.a=function(e){e.props;var t=e.children;return s.a.createElement("div",null,s.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),s.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),s.a.createElement("div",{className:"font-serif"},s.a.createElement(r.a,null),s.a.createElement("div",{className:"my-12 mx-4 768px:mx-auto 768px:max-w-2xl 768px:w-3/4 1200px:w-1/2"},s.a.createElement("main",{className:"min-h-screen relative"},t)),s.a.createElement(l.a,null)))}},"Fr/u":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n);t.a=function(e){var t=e.startDate,a=e.endDate,n=e.nodes,r=e.title,l=e.link,i=["January","February","March","April","May","June","July","August","September","October","November","December"],o=[];return n.forEach((function(e,n){var r=e.pubDate.split(" ")[1],l=e.pubDate.split(" ")[2],c=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],d=m.split(":")[1],h=m.split(":")[0],p=e.content?e.content.replaceAll("<br />"," "):"",u=new Date(c,i.findIndex((function(e){return e.includes(l)})),r);u.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&u.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&o.push(s.a.createElement("li",{className:"py-4",key:e.title+n},s.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),s.a.createElement("p",{className:"opacity-90"},p),s.a.createElement("p",{className:"text-sm opacity-25"},l," ",r," ",h,":",d," EST")))})),s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:(o.length>0?"":"hidden")+" mb-12 relative "},s.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},r),s.a.createElement("div",{className:o.length>0?"":"hidden"},s.a.createElement("ul",null,o)),s.a.createElement("div",{className:(o.length>0?"":"hidden")+" 425px:absolute top-2 right-0 text-navy"},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block relative -top-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))," ",s.a.createElement("a",{className:"inline-block hover:underline",href:l},"Archives"))))}},"Ii+K":function(e,t,a){e.exports=a.p+"static/$hearer-dbe2261036a1f867bf711a20be6c12ac.png"},JwsL:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("Ii+K"),l=a.n(r);t.a=function(e){var t=[];return[["Yesterday","/yesterday"],["This Week","/week"],["News","/news"],["Speeches","/speeches"],["Testimony","/testimony"],["Litigation","/litigation"],["Administrative Proceedings","/admin"],["Trading Suspensions","/tradingSuspensions"],["Proposed Rules","/proposedRules"],["Corporate Finance","/coporateFinance"],["Investor Alerts","/investorAlerts"],["Investment Management","/investorManagement"]].forEach((function(e,a){t.push(s.a.createElement("li",{key:"footer-"+e[1]+a,className:"w-full 425px:w-1/2 1024px:w-1/3 mb-2"},s.a.createElement("a",{className:"hover:underline",href:e[1]},e[0])))})),s.a.createElement("footer",{className:"mt-12 bg-navy"},s.a.createElement("div",{className:"py-12 mx-4 768px:mx-auto 768px:max-w-2xl 768px:w-3/4 1200px:w-1/2"},s.a.createElement("div",{className:"text-white"},s.a.createElement("h3",{className:"text-2xl font-bold text-black-75"},"Don't see what you are looking for?"),s.a.createElement("h3",{className:"text-3xl font-bold mb-8 opacity-75"},"Dive into the archives"),s.a.createElement("ul",{className:"flex flex-wrap opacity-50"},t)),s.a.createElement("div",{className:"mt-12 pt-12 text-black text-sm border-t border-black-25 leading-loose"},s.a.createElement("h3",{className:"text-lg pb-2 font-bold opacity-75"},"Fineprint / Legalese"),s.a.createElement("p",{className:"mb-2 text-white-25"},"This page provides a free daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and I hope they will provide a feed in the future or I will look into alternative methods of acquiring the information. "),s.a.createElement("div",{className:"text-white-25"},s.a.createElement("p",{className:"mb-2"},"Those sections include: ",s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/rules/other.htm"},"Other Commission Orders, Notices, and Information"),", ",s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/about/upcoming-events.htm"},"Upcoming Events")),s.a.createElement("p",{className:"mb-2"},"Coming soon: ",s.a.createElement("a",{className:"hover:underline",href:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent"},"Latest Filings"),", ",s.a.createElement("a",{className:"hover:underline",href:"https://www.sec.gov/news/whatsnew/wn-archive.shtml"},"Previous What’s New Issues"),", ",s.a.createElement("a",{className:"hover:underline",href:"https://www.sec.gov/news/digest.shtml"},"News Digest Archives (1956-2013)")),s.a.createElement("p",{className:"mb-8"},"Missing something? Please ",s.a.createElement("a",{className:"font-bold hover:underline",href:"https://twitter.com/justinsane98"},"let me know")," and I will try to add it."),s.a.createElement("a",{className:"inline-block w-20 opacity-50 hover:opacity-100 border-2 border-white rounded",href:"https://cash.app/$hearer"},s.a.createElement("img",{src:l.a,alt:"$hearer"})),s.a.createElement("br",null),s.a.createElement("a",{href:"33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt",className:"my-2 py-1 px-2 bg-black-10 hover:cursor-pointer hover:bg-white-10 hover:text-navy active:bg-white-50"},"33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt"),s.a.createElement("p",{className:"my-2"},"No Ads. Like my work?",s.a.createElement("br",null),"Please consider tipping.")))))}},d78D:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("Wbzz"),l=a("Fr/u");t.a=function(e){var t=e.start,a=e.end,n=Object(r.useStaticQuery)("234759781"),i=n.allFeedNews.nodes,o=n.allFeedSpeeches.nodes,c=n.allFeedTestimony.nodes,m=n.allFeedStatements.nodes,d=n.allFeedLitigation.nodes,h=n.allFeedAdmin.nodes,p=n.allFeedTradingSuspensions.nodes,u=n.allFeedProposedRules.nodes,v=n.allFeedCorporateFinance.nodes,w=n.allFeedInvestorAlerts.nodes,g=n.allFeedInvestmentManagement.nodes;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(l.a,{title:"News",startDate:t,endDate:a,nodes:i,link:"/news"}),s.a.createElement(l.a,{title:"Speeches",startDate:t,endDate:a,nodes:o,link:"/speeches"}),s.a.createElement(l.a,{title:"Testimony",startDate:t,endDate:a,nodes:c,link:"/testimony"}),s.a.createElement(l.a,{title:"Public Statements",startDate:t,endDate:a,nodes:m,link:"/statements"}),s.a.createElement(l.a,{title:"Litigation",startDate:t,endDate:a,nodes:d,link:"/litigation"}),s.a.createElement(l.a,{title:"Administrative Proceedings",startDate:t,endDate:a,nodes:h,link:"/admin"}),s.a.createElement(l.a,{title:"Trading Suspensions",startDate:t,endDate:a,nodes:p,link:"/tradingSuspensions"}),s.a.createElement(l.a,{title:"Proposed Rules",startDate:t,endDate:a,nodes:u,link:"/proposedRules"}),s.a.createElement(l.a,{title:"Corporate Finance",startDate:t,endDate:a,nodes:v,link:"/corporateFinance"}),s.a.createElement(l.a,{title:"Investor Alerts",startDate:t,endDate:a,nodes:w,link:"/investorAlerts"}),s.a.createElement(l.a,{title:"Investment Management",startDate:t,endDate:a,nodes:g,link:"/investmentManagement"})))}},rY4l:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n);t.a=function(e){return s.a.createElement("header",{className:"bg-navy"},s.a.createElement("div",{className:"relative mx-4 768px:mx-auto 768px:max-w-2xl 768px:w-3/4 1200px:w-1/2"},s.a.createElement("div",{className:"absolute top-2 left-0 bg-white-10 h-0.5 right-1/4 w-100 z-0"}),s.a.createElement("div",{className:"absolute top-3 left-0 bg-white-10 h-0.5 right-1/4 mr-1 w-100 z-0"}),s.a.createElement("div",{className:"absolute top-4 left-0 bg-white-10 h-0.5 right-1/4 mr-2 w-100 z-0"}),s.a.createElement("a",{href:"/",className:"relative inline-block bg-navy py-1 px-2 left-6 text-sm uppercase text-white-50 font-serif z-1"},"Secretary of the Secretary")))}},xPhh:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),r=a("d78D"),l=a("7oih");t.default=function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date,a=new Date(t);a.setDate(a.getDate()-7);var n=e[a.getMonth()]+" "+a.getDate()+", "+a.getFullYear(),i=new Date(t);i.setDate(i.getDate());var o=e[i.getMonth()]+" "+i.getDate()+", "+i.getFullYear();return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,null,s.a.createElement("h1",{className:"text-3xl text-navy 768px:mb-8"},"This week at the SEC"),s.a.createElement("h2",{className:"mb-4 text-lg 768px:absolute top-3 right-0"},n===o?n:n+" - "+o,s.a.createElement("a",{className:"text-navy-50 inline-block relative top-1 left-2",href:"/yesterday"},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})))),s.a.createElement(r.a,{start:a,end:i,message:"was published the past week."})))}}}]);
//# sourceMappingURL=component---src-pages-week-js-6cf4d8efd0fe152db22f.js.map