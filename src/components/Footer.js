import React from "react";
import QR from "/public/images/$hearer.png"

function Footer(props) {
  return (
   
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
        <p className="my-2 p-2 bg-black-10">33o3mMHWGy6MYRB5d5QcLA8nbNhzAbKjjt</p>
        <p className="my-2">No Ads. Like my work?<br/>Please consider tipping.</p>
      </div>
  );
}

export default Footer;
