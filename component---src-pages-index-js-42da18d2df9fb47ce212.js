(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),l=a("d78D"),r=a("Fr/u"),i=a("xGJR"),o=function(e){var t=e.start,a=e.end;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(r.a,{title:"Other Orders and Notices",startDate:t,endDate:a,nodes:i,link:"/otherOrdersNotices"})))},c=a("7oih"),m=a("UeJ5"),d=a("hQ5q"),g=function(e){var t=e.start,a=e.end;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(r.a,{title:"Meetings",startDate:t,endDate:a,nodes:d,link:"/meetings",singleColumn:"true"}),s.a.createElement(r.a,{title:"Appearances",startDate:t,endDate:a,nodes:m,link:"/appearances",singleColumn:"true"})))};t.default=function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date,a=new Date(t);a.setDate(a.getDate()-7);var n=e[a.getMonth()]+" "+a.getDate()+", "+a.getFullYear(),r=new Date(t);r.setDate(r.getDate());var i=e[r.getMonth()]+" "+r.getDate()+", "+r.getFullYear(),m=new Date(t);m.setDate(m.getDate()+7);var d="";i===n?d=n:a.getMonth()===m.getMonth()?(d+=e[t.getMonth()]+" "+t.getDate(),d+=" - ",d+=m.getDate()+", "+m.getFullYear()):(d+=e[a.getMonth()]+" "+t.getDate()+", "+a.getFullYear(),d+=" - ",d+=e[m.getMonth()]+" "+m.getDate()+", "+m.getFullYear());var p="";n===i?p=n:a.getMonth()===r.getMonth()?(p+=e[a.getMonth()]+" "+a.getDate(),p+=" - ",p+=r.getDate()+", "+r.getFullYear()):(p+=e[a.getMonth()]+" "+a.getDate()+", "+a.getFullYear(),p+=" - ",p+=e[r.getMonth()]+" "+r.getDate()+", "+r.getFullYear());var u=[];return[["News","/news"],["Speeches","/speeches"],["Public Statements","/statements"],["Testimony","/testimony"],["Litigation","/litigation"],["Administrative Proceedings","/admin"],["Trading Suspensions","/tradingSuspensions"],["Proposed Rules","/proposedRules"],["Corporate Finance","/coporateFinance"],["Investor Alerts","/investorAlerts"],["Investment Management","/investmentManagement"],["Federal Register","/federalRegister"],["Meetings","/events"],["Appearances","/appearances"],["Other Orders and Notices","/otherOrdersNotices"]].forEach((function(e,t){u.push(s.a.createElement("li",{key:"archives-"+e[1]+t,className:"w-full mb-2"},s.a.createElement("a",{className:"hover:underline",href:e[1]},e[0],s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline ml-1 h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})))))})),s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,null,s.a.createElement("div",{className:"1024px:flex 1024px:space-x-12"},s.a.createElement("div",{className:"relative 1024px:w-2/3 pt-8"},s.a.createElement("h1",{className:"text-3xl text-navy -mb-2"},"What's New at the SEC"),s.a.createElement("h2",{className:"mb-8 text-navy opacity-50"},s.a.createElement("span",null,p)),s.a.createElement(l.a,{start:a,end:t}),s.a.createElement(o,{start:a,end:t})),s.a.createElement("div",{className:"1024px:w-1/3 pt-8 1024px:pl-8 bg-gradient-to-r from-black-1 to-white"},s.a.createElement("h3",{className:"text-3xl text-navy -mb-2"},"Upcoming Events"),s.a.createElement("div",{className:"mb-4 1024px:mb-8 text-navy opacity-50"},d),s.a.createElement(g,{start:a,end:m}),s.a.createElement("div",{className:"hidden 1024px:block mt-12 pt-12"},s.a.createElement("h3",{className:"text-xl leading-tight text-black-50"},"Don't see what you are looking for?"),s.a.createElement("h3",{className:"text-3xl mt-2 mb-6 leading-none opacity-75"},"Dive into the Archives"),s.a.createElement("ul",{className:"flex flex-wrap opacity-50"},u))))))}},UeJ5:function(e){e.exports=JSON.parse('[{"name":"Remarks at SIMFA‘s Annual Meeting: The Intersection of Public Policy and Finance","link":"https://www.sec.gov/news/upcoming-events/remarks-simfas-annual-meeting","date":"Nov. 2, 2021 | 10:00 am ET","description":"SIMFA‘s Annual Meeting"}]')},d78D:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),l=a("Wbzz"),r=a("Fr/u");t.a=function(e){var t=e.start,a=e.end,n=Object(l.useStaticQuery)("2759898392"),i=n.allFeedNews.nodes,o=n.allFeedSpeeches.nodes,c=n.allFeedTestimony.nodes,m=n.allFeedStatements.nodes,d=n.allFeedLitigation.nodes,g=n.allFeedAdmin.nodes,p=n.allFeedTradingSuspensions.nodes,u=n.allFeedProposedRules.nodes,v=n.allFeedCorporateFinance.nodes,D=n.allFeedInvestorAlerts.nodes,h=n.allFeedInvestmentManagement.nodes,E=n.allFeedFederalRegister.nodes;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(r.a,{title:"News",startDate:t,endDate:a,nodes:i,link:"/news"}),s.a.createElement(r.a,{title:"Speeches",startDate:t,endDate:a,nodes:o,link:"/speeches"}),s.a.createElement(r.a,{title:"Testimony",startDate:t,endDate:a,nodes:c,link:"/testimony"}),s.a.createElement(r.a,{title:"Public Statements",startDate:t,endDate:a,nodes:m,link:"/statements"}),s.a.createElement(r.a,{title:"Litigation",startDate:t,endDate:a,nodes:d,link:"/litigation"}),s.a.createElement(r.a,{title:"Administrative Proceedings",startDate:t,endDate:a,nodes:g,link:"/admin"}),s.a.createElement(r.a,{title:"Trading Suspensions",startDate:t,endDate:a,nodes:p,link:"/tradingSuspensions"}),s.a.createElement(r.a,{title:"Proposed Rules",startDate:t,endDate:a,nodes:u,link:"/proposedRules"}),s.a.createElement(r.a,{title:"Corporate Finance",startDate:t,endDate:a,nodes:v,link:"/corporateFinance"}),s.a.createElement(r.a,{title:"Investor Alerts",startDate:t,endDate:a,nodes:D,link:"/investorAlerts"}),s.a.createElement(r.a,{title:"Investment Management",startDate:t,endDate:a,nodes:h,link:"/investmentManagement"}),s.a.createElement(r.a,{title:"Federal Register",startDate:t,endDate:a,nodes:E,link:"/federalRegister"})))}},hQ5q:function(e){e.exports=JSON.parse('[{"name":"Asset Management Advisory Committee Meeting","link":"https://www.sec.gov/news/upcoming-events/amac-110321","date":"Nov. 3, 2021 | 10:00 am ET","description":"Meeting Notice"},{"name":"Closed Meeting","link":"https://www.sec.gov/news/upcoming-events/closed-meeting-110421","date":"Nov. 4, 2021 | 2:00 pm ET","description":"Sunshine Act Notice"},{"name":"Small Business Capital Formation Advisory Committee Meeting","link":"https://www.sec.gov/news/upcoming-events/sbcfac-111621","date":"Nov. 16, 2021 | 10:00 am ET","description":"Meeting Notice"}]')}}]);
//# sourceMappingURL=component---src-pages-index-js-42da18d2df9fb47ce212.js.map