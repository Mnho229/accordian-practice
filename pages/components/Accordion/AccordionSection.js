const AccordionSection = (props) => {
  //Props: isOpen, Label, children, onClick

  const onClick = () => {
    props.onClick(props.label);
  };

  const lastItem = props.last ? 'c-accordion--last-item' : '';

  return (
    <div className={`c-accordion__item ${lastItem}`}>
      <div className="c-accordion__header" onClick={onClick}>
        <span className="c-accordion__label">{props.label}</span>

        <div className="c-accordion__headerarrow">
          {!props.isOpen && <span>&#9650;</span>}
          {props.isOpen && <span>&#9660;</span>}
        </div>
      </div>
      {props.isOpen && (
        <div className="c-accordion__content">
          {props.children}
        </div>

      )}

    {style()}
    </div>
  );
}

function style() {
  return <style jsx="true">{`
    .c-accordion__item {
    }

    .c-accordion__header {
      cursor: pointer;
      padding: 1rem;
      padding-top: 1.1rem;
      padding-bottom: 1.1rem;
      font-family: Arial;
      border-bottom: 1px solid white;
      background: linear-gradient(to right, rgba(135,199,255,1) 0%, rgba(71,172,240,1) 85%, rgba(71,172,240,1) 100%);
    }

    .c-accordion--last-item .c-accordion__header {
      border-bottom: none;
      
    }

    .c-accordion__label {
      font-weight: bold;
      color: white;
      font-size: 1.4rem;
    }

    .c-accordion__headerarrow {
      float: right;
      color: white;
    }

    .c-accordion__content {
      padding: 2rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      background-color: white;
      border-bottom: 1px solid gray;
    }

    .c-accordion__content p {
      line-height: 1.75rem;
    }
  `}</style>
}

export default AccordionSection;