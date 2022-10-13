import '../styles/globals.css'
import Layout from '../components/Layout'
// import  "../styles/_slick.scss"
// import  "../styles/_slickTheme.css"

function MyApp({ Component, pageProps }) {
  return <Layout> <Component {...pageProps} /> </Layout>
}

export default MyApp
