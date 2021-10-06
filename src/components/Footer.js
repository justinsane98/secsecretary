import React from "react";
import QR from "/public/images/$hearer.png"

function Footer(props) {
  var archives = [];
  var archiveLinks = [
    ["Yesterday", "/yesterday"],
    ["This Week", "/week"],
    ["News", "/news"],
    ["Speeches", "/speeches"],
    ["Testimony", "/testimony"],
    ["Litigation", "/litigation"],
    ["Administrative Proceedings", "/admin"],
    ["Trading Suspensions", "/tradingSuspensions"],
    ["Proposed Rules", "/proposedRules"],
    ["Corporate Finance", "/coporateFinance"],
    ["Investor Alerts", "/investorAlerts"],
    ["Investment Management", "/investorManagement"],
  ]

  archiveLinks.forEach(function(entry, i) {
    archives.push (
      <li className="w-full 425px:w-1/2 1024px:w-1/3 mb-2"><a className="hover:underline" href={entry[1]}>{entry[0]}</a></li>
    );
  });
  return (
    <footer className="mt-12 pt-12">
      <div className="text-center text-navy">
        <h3 className="text-2xl">Don't see what you are looking for?</h3>
        <h3 className="text-3xl font-bold mb-8">Dive into the archives</h3>
      
        <ul className="flex flex-wrap ">
          {archives}
        </ul>
      </div>
      <div className="mt-12 pt-12 opacity-25 text-sm text-center border-t border-black-25 leading-loose">
          <h3 className="text-lg pb-2 font-bold">Fineprint / Legalese</h3>
          <p className="mb-2">This page provides a free daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and I hope they will provide a feed in the future or I will look into alternative methods of acquiring the information. Those sections include: <a className="font-bold hover:underline" href="https://www.sec.gov/rules/other.htm">Other Commission Orders, Notices, and Information</a>, <a className="font-bold hover:underline" href="https://www.sec.gov/about/upcoming-events.htm">Upcoming Events</a>
          </p>
          <p className="mb-2">
          Coming soon:&nbsp;<a className="font-bold hover:underline" href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent">Latest Filings</a>
          ,&nbsp;<a className="font-bold hover:underline" href="https://www.sec.gov/news/whatsnew/wn-archive.shtml">Previous What’s New Issues</a>
          ,&nbsp;<a className="font-bold hover:underline" href="https://www.sec.gov/news/digest.shtml">News Digest Archives (1956-2013)</a>
          </p>
          <p className="mb-8">Missing something? Please <a className="font-bold hover:underline" href="https://twitter.com/justinsane98">let me know</a> and I will try to add it.</p>
          <a className="inline-block w-20 opacity-50 hover:opacity-100" href="https://cash.app/$hearer"><img src={QR} alt="$hearer"/></a>
          <br/>
          <a className="my-2 py-1 px-2 bg-black-10 hover:cursor-pointer hover:bg-black hover:text-white">33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt</a>
          <p className="my-2">No Ads. Like my work?<br/>Please consider tipping.</p>
        </div>
      </footer>
  );
}

export default Footer;
