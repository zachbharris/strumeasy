import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({data}) => (
  <div>
    <section name="hero">
      <div className="container">
        <div className="content">
          <span className="featuredTag">Featured</span>
          <h1 className="postTitle">Picking your strings</h1>
          <p className="postExcerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor dapibus lacinia. Sed maximus mauris eu consectetur porttitor. Maecenas efficitur, velit vitae tempus porta, purus.</p>
          <Link className="postLink" to="/">Read More →</Link>
        </div>
        <div className="featuredImage"></div>
      </div>
    </section>
   
    <section name="posts">
      <div className="container">
        {data.allMarkdownRemark.edges.map(post => (
          <Link className="card" key={post.node.id} to={post.node.frontmatter.path}>
            <span className="tag">{post.node.frontmatter.tags}</span>
            <h2 className="title">{post.node.frontmatter.title}</h2>
            <span className="date">{post.node.frontmatter.postDate}</span>
            <span className="readMore">Read More →</span>
          </Link>
        ))};
      </div>
    </section>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 6) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            path
            postDate
          }
        }
      }
    }
  }
`;

export default IndexPage;