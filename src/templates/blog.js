import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogStyle from "./blog.module.scss"
import SEO from "../components/seo"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const url =
  process.env.NODE_ENV === "development"
    ? window.location.href
    : global.location
const Blog = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className={BlogStyle.container}>
        <div className={BlogStyle.postMetaInfo}>
          <h1>{post.frontmatter.title}</h1>
          <div>
            <h5>
              {post.frontmatter.date} . {post.timeToRead} min Read
            </h5>
          </div>
        </div>
        <div className={BlogStyle.socialIcons}>
          <a
            href={`mailto:?&body=${url}/`}
            target="_blank"
            rel="noopener noreferrer"
            className={BlogStyle.email}
          >
            <MdEmail />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}/`}
            target="_blank"
            rel="noopener noreferrer"
            className={BlogStyle.facebook}
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://twitter.com/share?text=${post.frontmatter.title}&url=${url}/`}
            target="_blank"
            rel="noopener noreferrer"
            className={BlogStyle.twitter}
          >
            <FaTwitter />
          </a>
          <a
            href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}/`}
            target="_blank"
            rel="noopener noreferrer"
            className={BlogStyle.linkedin}
          >
            <FaLinkedinIn />
          </a>
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
