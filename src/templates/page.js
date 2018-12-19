import '../polyfills';
import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/Layouts';

// Components
import Snippet from '../components/CodeSnippet';
import PageTable from '../components/PageTable';
import ClickTile from '../components/ClickableTile';
import GridWrapper from '../components/GridWrapper';
import BackToTop from '../components/BackToTop';
import TitleBlock from '../components/TitleBlock';
import InfoTile from '../components/InfoTile';
import InfoTileContainer from '../components/InfoTileContainer';

// Custom Markdown
import {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  ul,
  ol,
  AnchorLinks,
  Dark,
  Light,
} from '../components/Markdown/Markdown';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: p,
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    ul: ul,
    ol: ol,
    pre: Snippet,
    dark: Dark,
    light: Light,
    table: PageTable,
    'grid-wrapper': GridWrapper,
    'clickable-tile': ClickTile,
    'anchor-links': AnchorLinks,
    'title-block': TitleBlock,
    'info-tile': InfoTile,
    'info-tile-container': InfoTileContainer,
  },
}).Compiler;

export default ({ data }) => {
  const post = data.markdownRemark;
  let currentPage = post.fields.currentPage;
  let slug = post.fields.slug;

  return (
    <Layout>
      {/*<h1>{post.frontmatter.title}</h1>*/}
      <main className="page-content" id="maincontent">{renderAst(post.htmlAst)}</main>
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
