import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import BlogStyle from "../styles/blog.module.scss"
import SEO from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Blog" />
      <div className={BlogStyle.container}>
        <h1 className={BlogStyle.header}> Blog</h1>
        <p>Posts will show up here later on.</p>

        <ol className={BlogStyle.list}>
          {data.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <li key={index}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
