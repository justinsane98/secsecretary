(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{HMpK:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),n=a.n(s),r=a("YqR4"),l=a("JwsL"),o=a("rY4l");t.default=function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()-99999);var a=new Date(e);return a.setDate(a.getDate()),n.a.createElement(n.a.Fragment,null,n.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),n.a.createElement(o.a,null),n.a.createElement("div",{className:"my-12 mx-auto max-w-2xl w-3/4 font-serif"},n.a.createElement("main",null,n.a.createElement("section",{className:"mb-12 relative"},n.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Testimony"),n.a.createElement(r.a,{startDate:t,endDate:a}),n.a.createElement("div",{className:"425px:absolute top-2 right-0"},n.a.createElement("a",{className:"text-gold leading-loose hover:underline",href:"https://www.sec.gov/news/testimony.rss"},"XML")," | ",n.a.createElement("a",{className:"inline-block text-navy hover:underline",href:"https://www.sec.gov/news/testimony"},"Source")))),n.a.createElement(l.a,null)))}},JwsL:function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s),r=a("zayr"),l=a.n(r);t.a=function(e){return n.a.createElement("div",{className:"mt-12 pt-12 opacity-25 text-sm text-center border-t border-black-25 leading-loose"},n.a.createElement("h3",{className:"text-lg pb-2 font-bold"},"Fineprint / Legalese"),n.a.createElement("p",{className:"mb-2"},"This page provides a free daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and I hope they will provide a feed in the future or I will look into alternative methods of acquiring the information. Those sections include: ",n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/rules/other.htm"},"Other Commission Orders, Notices, and Information"),", ",n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/about/upcoming-events.htm"},"Upcoming Events")),n.a.createElement("p",{className:"mb-2"},"Coming soon: ",n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent"},"Latest Filings"),", ",n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/whatsnew/wn-archive.shtml"},"Previous What’s New Issues"),", ",n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/digest.shtml"},"News Digest Archives (1956-2013)")),n.a.createElement("p",{className:"mb-8"},"Missing something? Please ",n.a.createElement("a",{className:"font-bold hover:underline",href:"https://twitter.com/justinsane98"},"let me know")," and I will try to add it."),n.a.createElement("a",{className:"inline-block w-50 opacity-50 hover:opacity-100",href:"https://cash.app/$hearer"},n.a.createElement("img",{src:l.a,alt:"$hearer"})),n.a.createElement("p",{className:"my-2"},"No Ads. Like my work? Please consider tipping."))}},YqR4:function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s),r=a("Wbzz");t.a=function(e){var t=e.startDate,a=e.endDate,s=e.message,l=Object(r.useStaticQuery)("2476850674"),o=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return l.allFeedTestimony.nodes.forEach((function(e,s){var r=e.pubDate.split(" ")[1],l=e.pubDate.split(" ")[2],i=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],h=m.split(":")[0],u=e.content?e.content.replaceAll("<br />"," "):"",f=new Date(i,o.findIndex((function(e){return e.includes(l)})),r);f.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&f.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(n.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+s},n.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),n.a.createElement("p",{className:"opacity-90"},u),n.a.createElement("p",{className:"text-sm opacity-25"},l," ",r," ",h,":",p," EST")))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),n.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No testimony ",s,"."))}},rY4l:function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s);t.a=function(e){return n.a.createElement("header",{className:"bg-navy text-center px-12 relative"},n.a.createElement("div",{className:"absolute top-2 left-2 768px:left-1/4 bg-white-10 h-0.5 right-2 768px:right-1/4 w-100 z-0"}),n.a.createElement("div",{className:"absolute top-3 left-2 768px:left-1/4 ml-1 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-1 w-100 z-0"}),n.a.createElement("div",{className:"absolute top-4 left-2 768px:left-1/4 ml-2 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-2 w-100 z-0"}),n.a.createElement("a",{href:"/",className:"relative inline-block bg-navy py-1 px-2 text-sm uppercase text-white-50 font-serif z-1"},"Secretary of the Secretary"))}},zayr:function(e,t,a){e.exports=a.p+"static/$hearer-dbe2261036a1f867bf711a20be6c12ac.png"}}]);
//# sourceMappingURL=component---src-pages-testimony-js-e88e8c97a4f22f3d9d05.js.map