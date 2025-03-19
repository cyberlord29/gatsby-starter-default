import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroCard from "../components/IntroCard/IntroCard"
import Service from "../components/Service/Service"
import Booking from "../components/Booking/Booking"

const IndexPage = () => (
    <Service 
        title="Applications & Product Development"
        description={[
            "Have an idea for a game-changing app or need a custom software product built from scratch? Our Applications & Product Development team turns your vision into reality.",
            "We cover the full development cycle - brainstorming features, designing the user experience, writing the code, and deploying the solution. The focus is on creating scalable, user-centric applications that propel your business forward."
        ]}
        serviceList={[
            {
                title: "Web Applications",
                content: [
                    "We develop powerful web apps tailored to your business model. This could be a software-as-a-service (SaaS) platform, a customer portal, or any custom web-based system.",
                    "Our developers use modern frameworks to ensure your web app is fast, secure, and scalable. We also pay attention to UI/UX design, making sure the app is intuitive and enjoyable for users.",
                    "From front-end features to back-end databases and APIs, we handle all aspects of web application development."
                ]
            },
            {
                title: "Consoles & Dashboards",
                content: [
                    "Need an internal tool or admin console to manage your operations? We build custom consoles that give you control and visibility.",
                    "For example, if you're running a marketplace startup, we could create an admin dashboard to manage listings, users, and transactions at a glance. These tailored consoles help you monitor activity in real time and make adjustments easily, without digging into raw databases.",
                    "We design them to be user-friendly for your team, so managing your business becomes a breeze."
                ]
            },
            {
                title: "Mobile Apps",
                content: [
                    "Want to be in your customer's pocket? We design and develop mobile applications for iOS and Android that delight users and expand your reach.",
                    "Whether it's a companion app for your service or a brand-new mobile-first product, we ensure high performance and smooth usability. Our team can build native apps or use cross-platform technologies like React Native or Flutter to save time and cost.",
                    "From concept to App Store/Play Store launch, we guide you through the mobile development journey."
                ]
            },
            {
                title: "Custom Client Interfaces",
                content: [
                    "Sometimes, off-the-shelf software doesn't meet your unique needs. We create bespoke client interfaces and systems tailored specifically to your workflows.",
                    "This could be anything from a custom CRM module adapted to your sales process, to a unique IoT device interface if your startup deals with hardware. If your business has a special requirement, we'll develop a solution that fits like a glove.",
                    "These custom interfaces ensure you're not bending your business to fit technology - instead, technology bends to support your way of doing business."
                ]
            }
        ]}
    />
)

export const Head = () => <Seo title="Applications & Product Development" />

export default IndexPage 