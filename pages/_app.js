import '../styles/globals.css'
import DefaultLayout from "../components/layouts/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return <div>
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  </div>
}

export default MyApp
