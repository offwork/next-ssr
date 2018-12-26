import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Header from './Header';
import Footer from './Footer';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default ({ children, title = 'NextConf Schedule', ...props }) => (
  <div id="root">
    <Head>
      <title>{title}</title>
      <link rel="stylesheet" href="/static/nprogress.css" />
    </Head>
    <Header {...props} />
    <main>{children}</main>
    <Footer />
  </div>
);
