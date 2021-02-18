import Layout from "../components/Layout";
import "../styles/globals.scss";
import Head from "next/head";
import store from "../components/redux/Store";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
