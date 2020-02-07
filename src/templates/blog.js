import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogStyle from "./blog.module.scss"

import authorImg from "../images/marvinoFunny.jpg"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className={BlogStyle.container}>
        <div className={BlogStyle.postMetaInfo}>
          <h1>{post.frontmatter.title}</h1>
          <h5>February 05, 2020</h5>
          <p>5min Read</p>
        </div>
        <div className={BlogStyle.blogPostBody}>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </div>

        <div className={BlogStyle.aboutAuthor}>
          <img alt="featured img" src={authorImg} />
          <div className={BlogStyle.authorInfo}>
            <span>About the Author</span>
            <h3>John Doe</h3>
            <p className={BlogStyle.description}>Lead @Waffiihub</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
