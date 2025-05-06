import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const BlogTitle = styled.h1`
  margin-bottom: 2rem;
  color: #333;
`;

const BlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(Link)`
  background: white;
  border-radius: 16px;
  padding: 32px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 20px rgba(68, 88, 132, 0.1);
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(68, 88, 132, 0.15);
  }
`;

const BlogCardTitle = styled.h2`
  margin: 0;
  color: #445884;
  font-size: 1.5rem;
  font-weight: 600;
`;

const BlogCardDate = styled.p`
  color: #8790A5;
  font-size: 0.9rem;
  margin: 0;
`;

const blogs = [
  {
    id: 'small-business-tech-trends-2025-part2',
    title: '9 Small Business Tech Trends You Need to Know in 2025',
    date: 'January 14, 2025',
  },
  {
    id: 'small-business-tech-trends-2025',
    title: '11 Small Business Technology Trends to Watch in 2025',
    date: 'January 2024',
  },
  {
    id: 'top-4-small-business-tech-trends-2024',
    title: 'Top 4 Small Business Technology Trends in 2024',
    date: 'August 26, 2024',
  },
  {
    id: 'new-tech-opportunities-small-business',
    title: 'New Technology Is Creating New Opportunities for Small Businesses',
    date: 'December 10, 2024',
  },
  {
    id: 'top-5-trends-small-business-success-2024',
    title: 'Top 5 Trends Shaping Small Business Success in 2024',
    date: 'December 4, 2024',
  },
  {
    id: 'tech-trends-business-size-software-spending',
    title: '2024 Tech Trends: How Business Size Influences Software Spending',
    date: 'January 24, 2023',
  }
];

const BlogIndex = () => {
  return (
    <Layout>
      <Seo title="Blog" />
      <BlogContainer>
        <BlogTitle>Blog</BlogTitle>
        <BlogList>
          {blogs.map(blog => (
            <BlogCard key={blog.id} to={`/blogs/${blog.id}`}>
              <BlogCardTitle>{blog.title}</BlogCardTitle>
              <BlogCardDate>{blog.date}</BlogCardDate>
            </BlogCard>
          ))}
        </BlogList>
      </BlogContainer>
    </Layout>
  );
};

export default BlogIndex; 