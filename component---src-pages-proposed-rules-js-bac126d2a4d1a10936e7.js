(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{AKwe:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),r=a.n(s),l=a("NbC0"),n=a("JwsL"),o=a("rY4l");t.default=function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()-99999);var a=new Date(e);return a.setDate(a.getDate()),r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),r.a.createElement(o.a,null),r.a.createElement("div",{className:"my-12 mx-auto max-w-2xl w-3/4 font-serif"},r.a.createElement("main",null,r.a.createElement("section",{className:"mb-12 relative"},r.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Proposed Rules"),r.a.createElement(l.a,{startDate:t,endDate:a}),r.a.createElement("div",{className:"425px:absolute top-2 right-0"},r.a.createElement("a",{className:"text-gold leading-loose hover:underline",href:"https://www.sec.gov/rss/rules/proposed.xml"},"XML")," | ",r.a.createElement("a",{className:"inline-block text-navy hover:underline",href:"https://www.sec.gov/rules/proposed.shtml"},"Source")))),r.a.createElement(n.a,null)))}},JwsL:function(e,t,a){"use strict";var s=a("q1tI"),r=a.n(s),l=a("zayr"),n=a.n(l);t.a=function(e){return r.a.createElement("div",{className:"mt-12 pt-12 opacity-25 text-sm text-center border-t border-black-25 leading-loose"},r.a.createElement("h3",{className:"text-lg pb-2 font-bold"},"Fineprint / Legalese"),r.a.createElement("p",{className:"mb-2"},"This page provides a free daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and I hope they will provide a feed in the future or I will look into alternative methods of acquiring the information. Those sections include: ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/rules/other.htm"},"Other Commission Orders, Notices, and Information"),", ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/about/upcoming-events.htm"},"Upcoming Events")),r.a.createElement("p",{className:"mb-2"},"Coming soon: ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent"},"Latest Filings"),", ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/whatsnew/wn-archive.shtml"},"Previous What’s New Issues"),", ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/digest.shtml"},"News Digest Archives (1956-2013)")),r.a.createElement("p",{className:"mb-8"},"Missing something? Please ",r.a.createElement("a",{className:"font-bold hover:underline",href:"https://twitter.com/justinsane98"},"let me know")," and I will try to add it."),r.a.createElement("a",{className:"inline-block w-20 opacity-50 hover:opacity-100",href:"https://cash.app/$hearer"},r.a.createElement("img",{src:n.a,alt:"$hearer"})),r.a.createElement("p",{className:"my-2"},"No Ads. Like my work?",r.a.createElement("br",null),"Please consider tipping."))}},NbC0:function(e,t,a){"use strict";var s=a("q1tI"),r=a.n(s),l=a("Wbzz");t.a=function(e){var t=e.startDate,a=e.endDate,s=e.message,n=Object(l.useStaticQuery)("1505888469"),o=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return n.allFeedProposedRules.nodes.forEach((function(e,s){var l=e.pubDate.split(" ")[1],n=e.pubDate.split(" ")[2],i=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],h=m.split(":")[0],u=new Date(i,o.findIndex((function(e){return e.includes(n)})),l);u.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&u.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(r.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+s},r.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),r.a.createElement("p",{className:"text-sm opacity-25"},n," ",l," ",h,":",p," EST")))})),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),r.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No proposed rule ",s,"."))}},rY4l:function(e,t,a){"use strict";var s=a("q1tI"),r=a.n(s);t.a=function(e){return r.a.createElement("header",{className:"bg-navy text-center px-12 relative"},r.a.createElement("div",{className:"absolute top-2 left-2 768px:left-1/4 bg-white-10 h-0.5 right-2 768px:right-1/4 w-100 z-0"}),r.a.createElement("div",{className:"absolute top-3 left-2 768px:left-1/4 ml-1 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-1 w-100 z-0"}),r.a.createElement("div",{className:"absolute top-4 left-2 768px:left-1/4 ml-2 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-2 w-100 z-0"}),r.a.createElement("a",{href:"/",className:"relative inline-block bg-navy py-1 px-2 text-sm uppercase text-white-50 font-serif z-1"},"Secretary of the Secretary"))}},zayr:function(e,t,a){e.exports=a.p+"static/$hearer-dbe2261036a1f867bf711a20be6c12ac.png"}}]);
//# sourceMappingURL=component---src-pages-proposed-rules-js-bac126d2a4d1a10936e7.js.map