import Layout from './components/Layout';
import Accordion from './components/Accordion/Accordion';

const Accordions = (props) => {

  return (
    <Layout>
      <section className="l-container">
        <Accordion />
      </section>

      {style()}
    </Layout>
  )
}

function style() {
  return <style jsx="true">{`
    .l-container {
      display: flex;
      justify-content: center;
      font-size: 1.25rem;
      padding-top: 2rem;
    }
  `}</style>
}

export default Accordions