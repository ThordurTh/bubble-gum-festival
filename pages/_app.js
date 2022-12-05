import "../styles/globals.scss";
import "../styles/index.scss";
import Layout from "../Components/Layout";
import WelcomeSection from "../components/frontpage/WelcomeSection";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
