/**
 * Server-rendered by default
 * Automatic code splitting for faster page loads
 * Simple client-side routing (page based)
 * Webpack-based dev environment which supports (HMR)
 * Able to implement with Express or any other Node.js HTTP server
 * Customizable with your own Babel and Webpack configurations
 */

/**
 * TODO:
 * Reprendre le tuto à cette étape...
 * => https://nextjs.org/learn/basics/clean-urls-with-route-masking/404
 */

import { withRouter } from "next/router";
import Layout from "../components/Layout.js";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const App = withRouter(props => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
});

export default App;
