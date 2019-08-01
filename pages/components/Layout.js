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
  </>
)

export default Layout;