import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroCard from "../components/IntroCard/IntroCard"
import Service from "../components/Service/Service"
import Booking from "../components/Booking/Booking"

const IndexPage = () => (
    <Service 
        title="Sales & Marketing Acceleration"
        description={[
            "Growing a startup isn't just about having great tech - it's about reaching the market effectively.",
            "Our Sales and Marketing services help you craft smart strategies and automate your outreach, so you can connect with customers and scale revenue faster. We blend growth marketing techniques with technology to amplify your brand and streamline your sales funnel."
        ]}
        serviceList={[
            {
                title: "Go-to-Market (GTM) Strategy",
                content: [
                    "Launching a new product or entering a market? We'll help you devise a solid GTM plan.",
                    "This includes defining your target audience, crafting your value proposition, choosing the right channels (online and offline), and setting clear goals for your launch or expansion.",
                    "A well-planned GTM strategy ensures you hit the ground running and make a splash in the market from day one."
                ]
            },
            {
                title: "Sales Automation",
                content: [
                    "Supercharge your sales pipeline with automation. We can implement tools and processes for lead generation and follow-up so your sales team can focus on closing deals.",
                    "This might involve setting up email automation campaigns that nurture leads, integrating LinkedIn marketing tools to find and engage prospects, or creating chatbot funnels to qualify inquiries on your website.",
                    "By automating repetitive sales tasks (like sending introduction emails or scheduling demos), you'll never miss an opportunity and can respond to potential customers faster."
                ]
            },
            {
                title: "Digital Marketing",
                content: [
                    "From SEO to social media ads, we cover the spectrum of digital marketing to get your startup noticed.",
                    "We can help manage pay-per-click campaigns on Google, Facebook, LinkedIn, or Reddit to drive targeted traffic. Need content marketing? We'll assist in creating blog strategies and email newsletters that keep your audience engaged.",
                    "Our marketing plans are data-driven - we continually measure results and tweak campaigns to boost performance and ROI."
                ]
            },
            {
                title: "Brand Management",
                content: [
                    "Your brand is more than just a logo - it's the personality of your startup. We guide you in building a strong, consistent brand identity across all channels.",
                    "This can include crafting your brand messaging and story, designing style guidelines, and ensuring your social media and web presence reflect a unified image. We also monitor online mentions and reviews to help manage your brand's reputation.",
                    "The goal is to establish trust and recognition for your startup in a crowded marketplace."
                ]
            },
            {
                title: "Dashboards & Analytics",
                content: [
                    "Knowledge is power, especially in sales and marketing. We set up real-time dashboards that consolidate your key metrics - from website traffic and SEO rankings to lead funnel stats and conversion rates.",
                    "Imagine having all your Google Analytics, ad campaign data, and sales KPIs in one interactive dashboard. With clear visual insights, you can make informed decisions quickly.",
                    "We tailor these dashboards to what matters most to you, so you're always on top of performance and can celebrate wins or course-correct swiftly."
                ]
            }
        ]}
    />
)

export const Head = () => <Seo title="Strategy, Sales and Marketing" />

export default IndexPage 