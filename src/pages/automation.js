import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroCard from "../components/IntroCard/IntroCard"
import Service from "../components/Service/Service"
import Booking from "../components/Booking/Booking"

const IndexPage = () => (
    <Service 
        title="Automation"
        description={[
            "Work smarter, not harder - that's the mantra behind our Automation services.",
            "We help you eliminate tedious manual tasks and orchestrate your business processes to run like a well-oiled machine. The result is higher productivity, fewer errors, and more time for your team to focus on innovation and customers."
        ]}
        serviceList={[
            {
                title: "Workflow Automation",
                content: [
                    "We analyze your day-to-day workflows and identify tasks that can be automated. Whether it's sending routine emails, updating spreadsheets, or moving data between apps, we can automate it.",
                    "By employing tools like Zapier or custom scripts, we link your apps together so actions in one trigger responses in another. For example, automatically create a Trello card or Slack notification when a new customer order comes in.",
                    "Your workflows will run in the background, hassle-free."
                ]
            },
            {
                title: "Business Process Automation (BPA)",
                content: [
                    "For more complex processes that span across departments or systems, we offer BPA solutions. This might involve implementing Robotic Process Automation (RPA) bots to handle repetitive tasks (like data entry), or developing custom software to streamline a multi-step process (like employee onboarding or invoice processing).",
                    "We map out each step of your business processes and then use technology to execute them faster and more reliably.",
                    "The outcome: reduced operational costs and improved efficiency."
                ]
            },
            {
                title: "Customer Lifecycle Automation",
                content: [
                    "Keep your customers engaged at every stage without manual effort. We set up automations for the entire customer journey - from the moment someone shows interest, to becoming a paying customer, and beyond.",
                    "For instance, we can automate welcome emails for new sign-ups, schedule check-in messages after a purchase, or trigger re-engagement campaigns if a user goes inactive.",
                    "By nurturing your customers automatically (yet in a personalized way), you build stronger relationships and higher lifetime value, all on autopilot."
                ]
            }
        ]}
    />
)

export const Head = () => <Seo title="Automation" />

export default IndexPage