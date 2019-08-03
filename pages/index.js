import Layout from './components/Layout';

export default () => {
  return (
    <Layout>
      <div className="c-main">Welcome to a React Accordion Website!  Now with Hooks!</div>

      {style()}
    </Layout>
  )
}

function style() {
  return <style jsx="true">{`
    .c-main {
      text-align: center;
      font-size: 1.25rem;
      padding-top: 2rem;
    }
  `}</style>
}