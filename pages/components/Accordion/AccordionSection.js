const AccordionSection = (props) => {
  //Props: isOpen, Label, children, onClick

  return (
    <div className="c-accordion__item">
      <div className="c-accordion__label"></div>

    </div>
  )
}

function style() {
  return <style jsx="true">{`
    .c-accordion__item {}
  `}</style>
}

export default AccordionSection;