const Accordion = (props) => {
  return (
    <div className="c-accordion">
      <p>Placeholder</p>

      {style()}
    </div>
  )
}

function style() {
  return <style jsx="true">{`
    .c-accordion {
      width: 4rem;
    }
  `}</style>
}

export default Accordion;