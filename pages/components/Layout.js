import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <>
    <Head>
      <title>To Be Determined</title>
    </Head>
    <Navbar />
    <section className="c-main">
      {props.children}
    </section>
    
    {style()}
  </>
)

function style() {
  return <style global="true" jsx="true">{`
    * {
      box-sizing: border-box
    }

    body {
      margin: 0;
    }
  `}</style>
}

export default Layout;