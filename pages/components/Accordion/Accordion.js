import { useState } from 'react';

import AccordionSection from './AccordionSection';

const Accordion = (props) => {
  const [openSections, setOpenSections] = useState({});

  const handleClick = label => {
    const isOpen = !!openSections[label];
    const { allowMultipleOpen } = props;

    setOpenSections(prevState => {

      if (allowMultipleOpen) {
        return { ...prevState, [label]: !isOpen };
      }
      else {
        return { [label]: !isOpen }
      }
    });
  };

  return (
    <div className="c-accordion">
      <AccordionSection label="Pony" isOpen={!!openSections["Pony"]} onClick={handleClick} >
        <p>Are you sure this is where we need to keep the real droids?</p>
        <p>I feel very nervous about this.  This is not where we need to be at the moment.  They could come after us any minute....present time...present DAYYYY HAHAHAHAHAHAHAHAHHA</p>
      </AccordionSection>
      <AccordionSection label="Pony 2" isOpen={!!openSections["Pony 2"]} onClick={handleClick}>
        <p>This section does not relate to the one above.</p>
      </AccordionSection>
      <AccordionSection label="Pony 3" isOpen={!!openSections["Pony 3"]} onClick={handleClick} last={true} >
        <p>And who are you to determine I cannot do such or so on from henceforward of course.</p>
      </AccordionSection>
      {style()}
    </div>
  );
}

function style() {
  return <style jsx="true">{`
    .c-accordion {
      width: 33%;
      box-shadow: 0 1px 5px rgba(0,0,0,0.46);
    }
  `}</style>
}

export default Accordion;