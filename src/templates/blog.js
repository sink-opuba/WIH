import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogStyle from "./blog.module.scss"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className={BlogStyle.container}>
        <div className={BlogStyle.postMetaInfo}>
          <h1>{post.frontmatter.title}</h1>
          <h5>{post.frontmatter.date}</h5>
          <p>{post.timeToRead}min Read</p>
        </div>
        <div className={BlogStyle.featuredImg}>
          <img alt="featured img" src={post.frontmatter.featuredimage} />
        </div>
        <div className={BlogStyle.blogPostBody}>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </div>

        <div className={BlogStyle.aboutAuthor}>
          <img alt="featured img" src={post.frontmatter.authorimage} />
          <div className={BlogStyle.authorInfo}>
            <span>About the Author</span>
            <h3>{post.frontmatter.author}</h3>
            <p className={BlogStyle.description}>
              {post.frontmatter.authorrole ? post.frontmatter.authorrole : null}{" "}
              @Waffiihub
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        path
        description
        date(formatString: "MMMM D, YYYY")
        featuredimage
        author
        authorrole
        authorimage
      }
      html
      timeToRead
    }
  }
`
