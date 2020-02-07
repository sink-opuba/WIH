import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import BlogStyle from "./blog.module.scss"
import SEO from "../components/seo"

import featuredImg from "../images/warri.jpg"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query postQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
            }
            fields {
              slug
            }
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
          <h1> Blog</h1>
          <p>Posts will show up here later on.</p>
        </div>

        <div className={BlogStyle.blogPostsContainer}>
          {edges.map((edge, index) => {
            return (
              <div key={index} className={BlogStyle.blogPost}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <img alt="featured img" src={featuredImg} />
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>
                    Lorem Ipsum some text to here. Tihs juts dummy text oesd not
                    make any sense ...
                  </p>
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
