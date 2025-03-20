import React from 'react';
import { Link } from 'gatsby';
import {
  IndustriesSection,
  SectionHeader,
  Title,
  Description,
  IndustriesGrid,
  IndustryCard,
  IndustryTitle,
  IndustryDescription
} from './Industries.elements';

const Industries = () => {
  const industries = [
    {
      title: "Advertising",
      description: "Improve your advertising capabilities through AI and advanced customer behavior analytics.",
      link: "/industries/advertising"
    },
    {
      title: "FinTech",
      description: "Optimize your processes and improve safety and security through custom AI solutions.",
      link: "/industries/fintech"
    },
    {
      title: "Retail & E-commerce",
      description: "The entire industry is using AI to make strategic decisions. Don't left behind! Let our data scientists help you!",
      link: "/industries/retail"
    },
    {
      title: "Entertainment",
      description: "Reduce customer churn and analyze enormous amounts of data to become more productive and provide outstanding services.",
      link: "/industries/entertainment"
    },
    {
      title: "Logistics & Supply Chain",
      description: "Enable greater operational efficiency by introducing disruptive logistic solutions that solve your business challenges.",
      link: "/industries/logistics"
    },
    {
      title: "Your Industry",
      description: "From a different industry? Contact us for data science consulting to learn how our AI company can add value to your business.",
      link: "/contact"
    }
  ];

  return (
    <IndustriesSection>
      <SectionHeader>
        <Title>Industries We Are Transforming</Title>
        <Description>
          Take a look at examples of our work and learn how our clients from different industries have benefited from our <Link to="/services">data science consulting services</Link>.
        </Description>
      </SectionHeader>
      
      <IndustriesGrid>
        {industries.map((industry, index) => (
          <IndustryCard key={index}>
            <IndustryTitle>{industry.title}</IndustryTitle>
            <IndustryDescription>{industry.description}</IndustryDescription>
          </IndustryCard>
        ))}
      </IndustriesGrid>
    </IndustriesSection>
  );
};

export default Industries;
