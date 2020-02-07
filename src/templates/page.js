import '../polyfills';
import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/Layouts';

// Components
import Snippet from '../components/CodeSnippet';
import PageTable from '../components/PageTable';
import BackToTop from '../components/BackToTop';
import TitleBlock from '../components/TitleBlock';
import WebsiteTile from '../components/WebsiteTile';
import AnchorLinks from '../components/AnchorLinks';
import Icon from '../components/Icon';
import Video from '../components/Video';
import Carousel from '../components/Carousel';
import BackLink from '../components/BackLink';
import { Grid, Column } from '../components/Grid/Grid';
import {
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  ul,
  ol,
} from '../components/Markdown/Markdown';
import ArtDirection from '../components/ArtDirection';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: a,
    p: p,
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    ul: ul,
    ol: ol,
    pre: Snippet,
    table: PageTable,
    'anchor-links': AnchorLinks,
    'title-block': TitleBlock,
    icon: Icon,
    tile: WebsiteTile,
    grid: Grid,
    column: Column,
    video: Video,
    carousel: Carousel,
    'back-link': BackLink,
    'art-direction': ArtDirection,
  },
}).Compiler;

export default ({ data }) => {
  const post = data.markdownRemark;
  let currentPage = post.fields.currentPage;
  let slug = post.fields.slug;

  return (
    <Layout>
      {/*<h1>{post.frontmatter.title}</h1>*/}
      <div className="page-content" id="main-content">
        {renderAst(post.htmlAst)}
      </div>

      <BackToTop />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
        currentPage
      }
      frontmatter {
        title
      }
    }
  }
`;
