import React from "react";

function Footer(props) {
  return (
   
    <div className="mt-12 pt-12 opacity-25 text-sm text-center border-t border-black-25">
        <h3 className="text-lg pb-2 font-bold">Fineprint / Legalese</h3>
        <p className="mb-4">This page provides a daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and we hope they will provide a feed in the future. Those sections include:</p>
        <ul className="pl-8">
          <li><a className="font-bold hover:underline" href="https://www.sec.gov/rules/other.htm">Other Commission Orders, Notices, and Information</a></li>
          <li><a className="font-bold hover:underline" href="https://www.sec.gov/about/upcoming-events.htm">Upcoming Events</a></li>
          <li><a className="font-bold hover:underline" href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent">Latest Filings</a></li>
          <li><a className="font-bold hover:underline" href="https://www.sec.gov/news/whatsnew/wn-archive.shtml">Previous What’s New Issues</a></li>
          <li><a className="font-bold hover:underline" href="https://www.sec.gov/news/digest.shtml">News Digest Archives (1956-2013)</a></li>
        </ul>
      </div>
  );
}

export default Footer;
