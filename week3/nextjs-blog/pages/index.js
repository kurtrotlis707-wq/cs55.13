// Import Next.js Head component for managing document head elements
import Head from 'next/head';
// Import the custom Layout component and siteTitle constant
import Layout, { siteTitle } from '../components/layout';
// Import utility styles for consistent styling
import utilStyles from '../styles/utils.module.css';

/**
 * Home Component
 * A React functional component that renders the main home page
 * This is the default export for the root route ('/') in Next.js
 */
export default function Home() {
  return (
    // Use the Layout component with 'home' prop for home page styling
    <Layout home>
      {/* Head component allows us to modify the document head for this specific page */}
      <Head>
        {/* Set the page title in the browser tab using the siteTitle constant */}
        <title>{siteTitle}</title>
      </Head>

      {/* Main content section with utility styling */}
      <section className={utilStyles.headingMd}>
        {/* Personal introduction paragraph */}
        <p>[My name is Kurt. ]</p>

        {/* Information paragraph with link to Next.js tutorial */}
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}