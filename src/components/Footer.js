import React from "react";
import QR from "../images/$hearer.png"

function Footer(props) {
  var archives = [];
  var archiveLinks = [
    ["Yesterday", "/yesterday"],
    ["This Week", "/week"],
    ["News", "/news"],
    ["Speeches", "/speeches"],
    ["Public Statements", "/statements"],
    ["Testimony", "/testimony"],
    ["Litigation", "/litigation"],
    ["Administrative Proceedings", "/admin"],
    ["Trading Suspensions", "/tradingSuspensions"],
    ["Proposed Rules", "/proposedRules"],
    ["Corporate Finance", "/coporateFinance"],
    ["Investor Alerts", "/investorAlerts"],
    ["Investment Management", "/investmentManagement"],
  ]

  archiveLinks.forEach(function(entry, i) {
    archives.push (
      <li key={("footer-" + entry[1] + i)} className="w-full 425px:w-1/2 1200px:w-1/3 mb-2"><a className="hover:underline" href={entry[1]}>{entry[0]}</a></li>
    );
  });
  return (
    <footer className="mt-12 bg-navy">
      <div className="py-12 mx-4 768px:mx-auto 768px:max-w-2xl 768px:w-3/4 1200px:w-1/2">
        <div className="text-white">
          <h3 className="text-2xl font-bold text-black-75">Don't see what you are looking for?</h3>
          <h3 className="text-3xl font-bold mb-8 opacity-75">Dive into the archives</h3>
        
          <ul className="flex flex-wrap opacity-50">
            {archives}
          </ul>
        </div>
        <div className="mt-12 pt-12 text-black text-sm border-t border-black-25 leading-loose">
          <h3 className="text-lg pb-2 font-bold opacity-75">Fineprint / Legalese</h3>
          <p className="mb-2 text-white-25">This page provides a free daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and I hope they will provide a feed in the future or I will look into alternative methods of acquiring the information. </p>
          <div className="text-white-25">
            <p className="mb-2">Those sections include: <a className="text-white-50 hover:underline" href="https://www.sec.gov/rules/other.htm">Other Commission Orders, Notices, and Information</a>, <a className="text-white-50 hover:underline" href="https://www.sec.gov/about/upcoming-events.htm">Upcoming Events</a></p>
            <p className="mb-2">Coming soon:&nbsp;<a className="text-white-50 hover:underline" href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent">Latest Filings</a>
            ,&nbsp;<a className="text-white-50 hover:underline" href="https://www.sec.gov/news/whatsnew/wn-archive.shtml">Previous What’s New Issues</a>
            ,&nbsp;<a className="text-white-50 hover:underline" href="https://www.sec.gov/news/digest.shtml">News Digest Archives (1956-2013)</a>
            </p>
            
            <p className="mb-8">Missing something? Please <a className="text-white-50 hover:underline" href="https://twitter.com/justinsane98">let me know</a> and I will try to add it.</p>
            <a className="inline-block w-20 opacity-50 hover:opacity-100 border-2 border-white rounded" href="https://cash.app/$hearer"><img src={QR} alt="$hearer"/></a>
            <br/>
            <a href="33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt" className="my-2 py-1 px-2 bg-black-10 hover:cursor-pointer hover:bg-white-10 hover:text-navy active:bg-white-50">33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt</a>
            <p className="my-2">No Ads. Like my work?<br/>Please consider tipping.</p>
          </div>
        </div>
      </div>
      
      </footer>
  );
}

export default Footer;
