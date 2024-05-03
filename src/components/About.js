import React from 'react';
import { useOutletContext } from "react-router-dom";
import translate from "./TranslationStation";
import mascot from '../assets/mascot.png';
import './about.css'; // Importing your CSS file
import poly1 from '../assets/poly1.png';



function About(props) {
  const language = props.language[0] // Assuming useOutletContext is a custom hook for language

  return (
    <>
      <img src={mascot} alt="mascot" className="mascot" />
      
      <div className="frame">
        <div className="div">
          <div className="div-wrapper">
            <div className="text-wrapper">{translate("About Us", language)}</div>
          </div>
          <p className="p">
            {translate("We as a team wanted to bring international students together, providing a platform where they can share their experiences, ideas, thoughts, and concerns. With all these cultivated experiences, we can grow the “hive mind” and support each other to succeed.", language)}
          </p>
        </div>
      </div>

      <div className="frame offset"> {/* Added 'offset' class */}
        <div className="div">
          <div className="div-wrapper">
            <div className="text-wrapper">{translate("Mission", language)}</div>
          </div>
          <p className="p">
            {translate("Creating an environment at Sacramento State University, California, that fosters connections, cultural exchange, and unforgettable experiences for international students.", language)}
          </p>
        </div>
      </div>

      <div className="framePoly">
        <img src={poly1} alt="poly1" className="poly1" />
        <div className="text-wrapper">IS</div>
      </div>
      
      <div className="framePoly">
        <img src={poly1} alt="poly1" className="poly1" />
        <div className="text-wrapper">SW</div>
      </div>

      <div className="framePoly">
        <img src={poly1} alt="poly1" className="poly1" />
        <div className="text-wrapper">IO</div>
      </div>

      <div className="framePoly offset">
        <img src={poly1} alt="poly1" className="poly1" />
        <div className="text-wrapper">VT</div>
      </div>

      <div className="framePoly offset">
        <img src={poly1} alt="poly1" className="poly1" />
        <div className="text-wrapper">EC</div>
      </div>
    </>
  );
}

export default About;
