(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"Fr/u":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.startDate,a=e.endDate,n=e.nodes,s=e.title,l=e.link,o=["January","February","March","April","May","June","July","August","September","October","November","December"],i=[];return n.forEach((function(e,n){var s=e.pubDate.split(" ")[1],l=e.pubDate.split(" ")[2],c=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],h=m.split(":")[1],p=m.split(":")[0],d=e.content?e.content.replaceAll("<br />"," "):"",u=new Date(c,o.findIndex((function(e){return e.includes(l)})),s);u.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&u.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&i.push(r.a.createElement("li",{className:"py-4",key:e.title+n},r.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),r.a.createElement("p",{className:"opacity-90"},d),r.a.createElement("p",{className:"text-sm opacity-25"},l," ",s," ",p,":",h," EST")))})),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:(i.length>0?"":"hidden")+" mb-12 relative "},r.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},s),r.a.createElement("div",{className:i.length>0?"":"hidden"},r.a.createElement("ul",null,i)),r.a.createElement("div",{className:(i.length>0?"":"hidden")+" 425px:absolute top-2 right-0 text-navy"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block relative -top-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))," ",r.a.createElement("a",{className:"inline-block hover:underline",href:l},"Archives"))))}},JwsL:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("zayr"),l=a.n(s);t.a=function(e){var t=[];return[["Yesterday","/yesterday"],["This Week","/week"],["News","/news"],["Speeches","/speeches"],["Testimony","/testimony"],["Litigation","/litigation"],["Administrative Proceedings","/admin"],["Trading Suspensions","/tradingSuspensions"],["Proposed Rules","/proposedRules"],["Corporate Finance","/coporateFinance"],["Investor Alerts","/investorAlerts"],["Investment Management","/investorManagement"]].forEach((function(e,a){t.push(r.a.createElement("li",{className:"w-full 425px:w-1/2 1024px:w-1/3 mb-2"},r.a.createElement("a",{className:"hover:underline",href:e[1]},e[0])))})),r.a.createElement("footer",{className:"mt-12 pt-12 "},r.a.createElement("div",{className:"text-center text-navy"},r.a.createElement("h3",{className:"text-2xl"},"Don't see what you are looking for?"),r.a.createElement("h3",{className:"text-3xl font-bold mb-8"},"Dive into the archives"),r.a.createElement("ul",{className:"flex flex-wrap "},t)),r.a.createElement("div",{className:"mt-12 pt-12 opacity-25 text-sm text-center border-t border-black-25 leading-loose"},r.a.createElement("h3",{className:"text-lg pb-2 font-bold"},"Fineprint / Legalese"),r.a.createElement("p",{className:"mb-2"},"This page provides a free daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and I hope they will provide a feed in the future or I will look into alternative methods of acquiring the information. Those sections include: ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/rules/other.htm"},"Other Commission Orders, Notices, and Information"),", ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/about/upcoming-events.htm"},"Upcoming Events")),r.a.createElement("p",{className:"mb-2"},"Coming soon: ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent"},"Latest Filings"),", ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/whatsnew/wn-archive.shtml"},"Previous What’s New Issues"),", ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/digest.shtml"},"News Digest Archives (1956-2013)")),r.a.createElement("p",{className:"mb-8"},"Missing something? Please ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://twitter.com/justinsane98"},"let me know")," and I will try to add it."),r.a.createElement("a",{className:"inline-block w-20 opacity-50 hover:opacity-100",href:"https://cash.app/$hearer"},r.a.createElement("img",{src:l.a,alt:"$hearer"})),r.a.createElement("br",null),r.a.createElement("a",{className:"my-2 py-1 px-2 bg-black-10 hover:cursor-pointer hover:bg-black hover:text-white"},"33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt"),r.a.createElement("p",{className:"my-2"},"No Ads. Like my work?",r.a.createElement("br",null),"Please consider tipping.")))}},Odmb:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("Wbzz"),l=a("Fr/u"),o=a("JwsL"),i=a("rY4l");t.default=function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()-99999);var a=new Date(e);a.setDate(a.getDate());var n=Object(s.useStaticQuery)("3491440736").allFeedInvestorAlerts.nodes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),r.a.createElement(i.a,null),r.a.createElement("div",{className:"my-12 mx-auto max-w-2xl w-3/4 font-serif"},r.a.createElement("main",null,r.a.createElement("section",{className:"mb-12 relative"},r.a.createElement(l.a,{title:"Investor Alerts",startDate:t,endDate:a,nodes:n,link:"/investorAlerts"}),r.a.createElement("div",{className:"relative -top-10 -mt-8 425px:mt-0 425px:absolute 425px:top-2 425px:right-0 bg-white 425px:text-right 425px:w-1/2"},r.a.createElement("a",{className:"text-gold leading-loose hover:underline",href:"https://www.sec.gov/rss/investor/alertsandbulletins.xml"},"XML")," | ",r.a.createElement("a",{className:"inline-block text-navy hover:underline",href:"https://www.sec.gov/investor/alerts"},"Source")))),r.a.createElement(o.a,null)))}},rY4l:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){return r.a.createElement("header",{className:"bg-navy text-center px-12 relative"},r.a.createElement("div",{className:"absolute top-2 left-2 768px:left-1/4 bg-white-10 h-0.5 right-2 768px:right-1/4 w-100 z-0"}),r.a.createElement("div",{className:"absolute top-3 left-2 768px:left-1/4 ml-1 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-1 w-100 z-0"}),r.a.createElement("div",{className:"absolute top-4 left-2 768px:left-1/4 ml-2 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-2 w-100 z-0"}),r.a.createElement("a",{href:"/",className:"relative inline-block bg-navy py-1 px-2 text-sm uppercase text-white-50 font-serif z-1"},"Secretary of the Secretary"))}},zayr:function(e,t,a){e.exports=a.p+"static/$hearer-dbe2261036a1f867bf711a20be6c12ac.png"}}]);
//# sourceMappingURL=component---src-pages-investor-alerts-js-4faf1e2dd356e651f449.js.map