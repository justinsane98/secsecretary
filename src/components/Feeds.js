import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Feed from "./Feed"

const Feeds = ({start, end}) => {
  const data = useStaticQuery(graphql`
  {
    allFeedNews {
      nodes {
        content
        guid
        pubDate
        title
        link
      }
    }
    allFeedSpeeches {
      nodes {
        content
        guid
        pubDate
        title
        link
      }
    }
    allFeedTestimony {
      nodes {
        content
        guid
        pubDate
        title
        link
      }
    }
    allFeedStatements {
      nodes {
        content
        guid
        pubDate
        title
        link
      }
    }
    allFeedLitigation {
      nodes {
        content
        guid
        pubDate
        title
        link
      }
    }
    allFeedAdmin {
      nodes {
        content
        guid
        pubDate
        title
        link
      }
    }
    allFeedTradingSuspensions {
      nodes {
        guid
        pubDate
        title
        link
      }
    }
    allFeedProposedRules {
      nodes {
        guid
        pubDate
        title
        link
      }
    }
    allFeedCorporateFinance {
      nodes {
        content
        guid
        pubDate
        title
        link
      }
    }
    allFeedInvestorAlerts {
      nodes {
        content
        guid
        pubDate
        title
        link
      }
    }
    allFeedInvestmentManagement {
      nodes {
        content
        guid
        pubDate
        title
        link
      }
    }
  }
`)
const newsNodes = data.allFeedNews.nodes;
const speechesNodes = data.allFeedSpeeches.nodes;
const testimonyNodes = data.allFeedTestimony.nodes;
const statementsNodes = data.allFeedStatements.nodes;
const litigationNodes = data.allFeedLitigation.nodes;
const adminNodes = data.allFeedAdmin.nodes;
const tradingSuspensionsNodes = data.allFeedTradingSuspensions.nodes;
const proposedRulesNodes = data.allFeedProposedRules.nodes;
const corporateFinanceNodes = data.allFeedCorporateFinance.nodes;
const investorAlertsNodes = data.allFeedInvestorAlerts.nodes;
const investmentManagementNodes = data.allFeedInvestmentManagement.nodes;

return (
  <>
  <div>

  <Feed title="News" startDate={start} endDate={end} nodes={newsNodes} link="/news" />
  <Feed title="Speeches" startDate={start} endDate={end} nodes={speechesNodes} link="/speeches" />
  <Feed title="Testimony" startDate={start} endDate={end} nodes={testimonyNodes} link="/testimony" />
  <Feed title="Public Statements" startDate={start} endDate={end} nodes={statementsNodes} link="/statements" />
  <Feed title="Litigation" startDate={start} endDate={end} nodes={litigationNodes} link="/litigation" />
  <Feed title="Administrative Proceedings" startDate={start} endDate={end} nodes={adminNodes} link="/admin" />
  <Feed title="Trading Suspensions" startDate={start} endDate={end} nodes={tradingSuspensionsNodes} link="/tradingSuspensions" />
  <Feed title="Proposed Rules" startDate={start} endDate={end} nodes={proposedRulesNodes} link="/proposedRules" />
  <Feed title="Corporate Finance" startDate={start} endDate={end} nodes={corporateFinanceNodes} link="/corporateFinance" />
  <Feed title="Investor Alerts" startDate={start} endDate={end} nodes={investorAlertsNodes} link="/investorAlerts" />
  <Feed title="Investment Management" startDate={start} endDate={end} nodes={investmentManagementNodes} link="/investmentManagement" />



        {/* 

        <div className="opacity-50 mt-12">
        <h2>Other Commission Orders, Notices, and Information</h2>
        No Feed... request page and scrape data:
        grab the table#mainlist and iterate manually
        https://www.sec.gov/rules/other.htm
        
        <h2 className="text-lg border-b-2">FOIA Program</h2>
        <h2 className="text-lg border-b-2">ALJ Initial Decisions</h2>
        <h2 className="text-lg border-b-2">ALJ Initial Orders</h2>
        <h2 className="text-lg border-b-2">Divisions</h2>
        <h2 className="text-lg border-b-2">Regulatory Actions</h2>
        </div> */}
        </div>
    </>
  )
}
export default Feeds
