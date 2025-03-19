import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Service from "../components/Service/Service"

const IndexPage = () => (
    <Service 
        title="AI Applications"
        description={[
            "Leverage the power of artificial intelligence to work smarter, not harder.",
            "Advanta's AI Application services inject intelligent automation and insights into your business. We create AI-driven tools that can elevate customer experiences, streamline operations, and generate content - giving your startup a tech edge."
        ]}
        serviceList={[
            {
                title: "Chatbots (LLMs, GenAI, Agentic AI)",
                content: [
                    "Imagine having a 24/7 assistant to handle customer queries or internal tasks. We build intelligent chatbots using advanced Large Language Models (like GPT-based tech) and generative AI.",
                    "Whether you need a friendly website chatbot to support customers, an AI agent to automate your customer service, or a custom Slack bot to assist your team, we can create it.",
                    "Our chatbots understand natural language, provide relevant responses, and continuously learn to become more helpful over time."
                ]
            },
            {
                title: "Knowledge Bases & Q&A Systems",
                content: [
                    "Turn your company's knowledge into an instantly accessible resource. We develop AI-powered knowledge base systems that allow users (or employees) to ask questions and get answers from your documentation, FAQs, or data.",
                    "This could be an internal tool that lets your team query a database of info, or a customer-facing portal where an AI quickly retrieves answers about your product.",
                    "It's like having an interactive, searchable encyclopedia for your business, powered by AI."
                ]
            },
            {
                title: "Recommendations & Personalization",
                content: [
                    "Boost engagement and sales by showing the right content to the right user. We implement recommendation engines and personalization algorithms - the kind that suggests products, content, or features based on user behavior and preferences.",
                    "Think 'customers who bought this also liked...' or personalized content feeds.",
                    "By analyzing user data, our solutions can increase relevance for your users, making their experience more tailored and enjoyable, which in turn drives loyalty and conversions."
                ]
            },
            {
                title: "Content Generation (Text & Multimedia)",
                content: [
                    "Need help creating content? Our AI solutions can generate text, images, or even basic videos to keep your content pipeline flowing.",
                    "For example, we can set up AI tools to draft blog posts or social media captions that you can then fine-tune. Or generate product descriptions and marketing copy at scale.",
                    "On the multimedia front, we can assist with AI-generated imagery (for concept art, design mockups, etc.) and more. This generative AI approach saves you time and sparks creativity, all while maintaining your brand's voice and style guidelines."
                ]
            }
        ]}
    />
)

export const Head = () => <Seo title="AI Applications" />

export default IndexPage 