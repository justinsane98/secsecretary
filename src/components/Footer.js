import React from "react";
import QR from "../images/$hearer.png"

function Footer(props) {
  var archives = [];
  var archiveLinks = [
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
    ["Federal Register", "/federalRegister"],
    ["Meetings","/events"],
    ["Appearances","/appearances"],
    ["Other Orders and Notices","/otherOrdersNotices"],
  ]

  archiveLinks.forEach(function(entry, i) {
    archives.push (
      <li key={("footer-" + entry[1] + i)} className="w-full 425px:w-1/2 1200px:w-1/3 mb-2"><a className="hover:underline" href={entry[1]}>{entry[0]}</a></li>
    );
  });
  return (
    <footer className="mt-12 bg-navy">
      <div className="py-12 mx-4 768px:mx-12 1200px:mx-auto 1200px:w-3/4 1400px:w-1/2">
        <div className="text-white">
          <h3 className="text-xl text-black-50">Don't see what you are looking for?</h3>
          <h3 className="text-3xl mb-6 opacity-75">Dive into the Archives</h3>
        
          <ul className="flex flex-wrap opacity-50">
            {archives}
          </ul>
        </div>
        <div className="mt-12 pt-12 text-black text-sm border-t border-black-25 leading-loose">
          <h3 className="text-xl pb-2 text-black-50">Disclaimers</h3>
          <p className="text-white-25">The official <a className="text-white-50 hover:underline" href="https://www.sec.gov/news/whatsnew/wn-today.shtml">What’s New page</a> for the SEC is no longer updated as of September 30, 2021. To stay current on the most recent materials posted to the SEC website, the SEC suggests subscribing to the <a className="text-white-50 hover:underline" href="https://www.sec.gov/about/secrss.shtml">SEC RSS feeds</a>. The Sec Secretary provides a free digest of the most recent materials posted by the SEC, updated fresh every 15 minutes Monday-Fridays EST excluding official holidays observed by the SEC. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and I hope they will provide a feed in the future.</p>
          <div className="text-white-25 mt-12">
            <div className="flex flex-wrap">
              <div className="w-full 768px:w-auto 768px:mr-4">
                <a className="inline-block w-20 opacity-50 hover:opacity-100 border-2 border-white rounded" href="https://cash.app/$hearer"><img src={QR} alt="$hearer"/></a>
              </div>
              <div className="w-full 768px:w-5/6">
                <p className="">Missing something? Please <a className="text-white-50 hover:underline" href="https://twitter.com/justinsane98">let me know</a> and I will try to add it.</p>
                <p className="-mb-2">No Ads. Like the free service? Please consider tipping.</p>
                <p className="mb-8">Bitcoin: <a onClick={(e)=> {e.preventDefault();e.target.focus();navigator.clipboard.writeText("33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt")}} href="#33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt" className="group inline-block my-2"><span className="bg-black-10 py-1 px-2 hover:cursor-pointer group-hover:bg-white-10 group-hover:text-navy group-active:bg-white-50 group-focus:text-navy group-focus:bg-white-50">33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt</span><span className="opacity-0 bg-white-25 py-1 px-2 group-focus:opacity-100 group-active:opacity-100">Copied!</span></a></p>
                </div>
              </div>
            </div>
        </div>
      </div>
      
      </footer>
  );
}

export default Footer;
