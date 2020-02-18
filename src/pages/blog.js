import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import BlogStyle from "./blog.module.scss"
import SEO from "../components/seo"

// import featuredImg from "../images/warri.jpg"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query postQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMM_Do, YYYY")
              path
              featuredimage
              tag
            }
            excerpt(pruneLength: 108)
          }
        }
      }
    }
  `)
  const edges = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <div className={BlogStyle.container}>
        <div className={BlogStyle.blogHeader}>
          <h1> NEWS AND INSIGHTS</h1>
        </div>

        <div className={BlogStyle.blogPostsContainer}>
          {edges.map((edge, index) => {
            return (
              <div key={index} className={BlogStyle.blogPost}>
                <Link to={`/blog/${edge.node.frontmatter.path}`}>
                  <img
                    alt="featured img"
                    src={edge.node.frontmatter.featuredimage}
                  />
                  <span className={BlogStyle.blogTag}>
                    {edge.node.frontmatter.tag}
                  </span>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.excerpt}</p>
                  <span>{edge.node.frontmatter.date}</span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
