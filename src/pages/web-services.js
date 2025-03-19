import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroCard from "../components/IntroCard/IntroCard"
import Service from "../components/Service/Service"
import Booking from "../components/Booking/Booking"


const IndexPage = () => (
    <Service 
        title="Web Services"
        description={[
            "Your website and web systems are the foundation of your digital presence. We design and develop modern, responsive websites and integrations that not only look great but also drive business results.",
            "Our Web Services ensure your online presence is robust, user-friendly, and optimized for growth."
        ]}
        serviceList={[
            {
                title: "Business Websites",
                content: [
                    "Full-featured company websites that tell your story and convert visitors into customers.",
                    "We create sleek, professional websites that showcase your brand, highlight your products or services, and provide an intuitive experience for your users.",
                    "Every site is optimized for mobile responsiveness and speed, giving your audience a seamless experience on any device."
                ]
            },
            {
                title: "Landing Pages",
                content: [
                    "High-converting landing pages to support your campaigns and product launches.",
                    "Whether you're announcing a new app or running a marketing campaign, we build focused landing pages that drive specific actions (sign-ups, purchases, inquiries).",
                    "Our landing pages are designed with clear calls-to-action and persuasive content to maximize conversion rates."
                ]
            },
            {
                title: "Payment System & CRM Integrations",
                content: [
                    "We seamlessly integrate payment gateways (like Stripe, PayPal, etc.) and CRM systems into your website or app.",
                    "This means you can start accepting payments online securely and manage leads or customer information effortlessly.",
                    "We ensure all systems talk to each other – your website, shopping cart, subscription system, and CRM – for a smooth workflow."
                ]
            },
            {
                title: "Customer Care Setup",
                content: [
                    "Set up online customer support channels that keep your users happy.",
                    "We help implement live chat systems, chatbots, or helpdesk platforms so you can provide prompt customer service.",
                    "From configuring a knowledge base FAQ page to integrating a support ticket system, we make sure your customers always have a way to get help and feel valued."
                ]
            },
            {
                title: "Integrations & Workflow Automation",
                content: [
                    "We connect your website with the tools you use every day.",
                    "Need your contact form to create a task in Trello, or new sign-ups to trigger an email sequence? We can do that.",
                    "By integrating APIs and using automation platforms, we streamline your workflows – saving you time and reducing manual effort in daily operations."
                ]
            },
            {
                title: "SEO & Discovery",
                content: [
                    "Building a website is not enough if no one can find it.",
                    "Our team follows SEO best practices from the ground up – optimizing site structure, loading speed, keywords, and meta tags so your startup gets noticed on search engines.",
                    "We also set up analytics and Google Search Console to help you track performance. The result is a website that's primed for discovery and attracts the right audience organically."
                ]
            }
        ]}
    />
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Web Services" />

export default IndexPage

