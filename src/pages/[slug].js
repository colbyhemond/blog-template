import Layout from '../components/Layout';
import { getAllPosts, getPostBySlug } from '../lib/posts';
import markdownToHtml from '../lib/markdown';

export default function Post({ meta, content }) {
  return <Layout meta={meta}>{content}</Layout>;
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      ...post,
      content
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: 'blocking'
  };
}