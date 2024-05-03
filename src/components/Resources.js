//useOutletContext is going to be how we receive state variables from parent components
import { useOutletContext } from "react-router-dom";
import translate from "./TranslationStation";
import './resources.css'; // Importing your CSS file
import React from "react";

function Resources(props) {
    const language = props.language[0]
 

    return(
        <>
        <div className="frameHex">
        <svg className= "frameHex polygon" width="500" height="550" viewBox="0 0 564 650" fill="none" xmlns="http://www.w3.org/2000/svg"> x{100}
        <path d="M282 0L563.458 162.5V487.5L282 650L0.541748 487.5V162.5L282 0Z" fill="#F0DFA7"/>
    </svg>
                   
         <div className="rectangle-wrapperHex">
          <div className="rectangleHex"/>
         </div>
         <div className="frame-wrapperHex">
          <div className="div-wrapperHex">
            <div className="divHex">
                <div className="div-2Hex">
                    <p className="internationalHex">
                        <a
                            href="https://www.csus.edu/international-programs-global-engagement/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className= "text-wrapper">{translate("International programs and Global Engagement", language)}</span>
                        </a>
                        <span className="spanHex">
                            :<br />
                        </span>
                    </p>
                    <p className="pHex">
                        <a
                            href="https://www.csus.edu/international-programs-global-engagement/application-admissions-process/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                                {translate("International Admissions", language)}
                                <br />
                                <br />
                                <br />
                            </span>
                        </a>
                        <a
                            href="https://www.csus.edu/international-programs-global-engagement/study-abroad/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                                {translate("Study Abroad and Exchange", language)}
                                <br />
                                <br />
                                <br />
                            </span>      
                        </a>
                        <a
                            href="https://www.csus.edu/international-programs-global-engagement/international-student-scholar-services/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                                {translate("International Student and Scholar Services", language)}
                                <br />
                                <br />
                                <br />
                            </span>
                        </a>
                        <a
                            href="https://www.csus.edu/international-programs-global-engagement/global-initiatives/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                                {translate("Global Initiatives", language)}
                                <br />
                                <br />
                                <br />
                            </span>
                        </a>
                        <a
                            href="https://www.csus.edu/international-programs-global-engagement/the-passport-place.html"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                            {translate("The Passport Place", language)} <br />
                                <br />
                               </span>
                        </a>
                        <span className= "text-wrapper-2Hex">
                            <br />
                        </span>
                        <a 
                            href="https://www.cce.csus.edu/english-language-institute"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                                {translate("English Language Institute", language)}
                                <br />
                            </span>
                        </a>
                    </p>
                    </div>
                </div>
            </div>
         </div>
        </div>
        


    
        <div className="frameHex"> 
        <svg className= "frameHex polygon" width="500" height="550" viewBox="0 0 564 650" fill="none" xmlns="http://www.w3.org/2000/svg"> x{100}
        <path d="M282 0L563.458 162.5V487.5L282 650L0.541748 487.5V162.5L282 0Z" fill="#F0DFA7"/>
    </svg>
                   
         <div className="rectangle-wrapperHex">
          <div className="rectangleHex"/>
         </div>
         <div className="frame-wrapperHex">
          <div className="div-wrapperHex">
            <div className="divHex">
                <div className="div-2Hex">
                    <p className="internationalHex">
                        <a
                            href="https://www.csus.edu/student-life/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className= "text-wrapper">{translate("Student Life at Sac State", language)}</span>
                        </a>
                        <span className="spanHex">
                            :<br />
                        </span>
                    </p>
                    <p className="pHex">
                        <a
                            href="https://www.csus.edu/student-life/academic-advising/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                                {translate("Academic Advising", language)}
                                <br />
                                <br />
                                <br />
                            </span>
                        </a>
                        <a
                            href="https://asi.csus.edu/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                                {translate("Associated Students, INC.", language)}
                                <br />
                                <br />
                                <br />
                            </span>      
                        </a>
                        <a
                            href="https://www.csus.edu/student-life/career-center/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                                {translate("Career Center", language)}
                                <br />
                                <br />
                                <br />
                            </span>
                        </a>
                        <a
                            href="https://www.csus.edu/student-life/class-schedules/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                            {translate("Class Schedules", language)}
                                <br />
                                <br />
                                <br />
                            </span>
                        </a>
                        <a
                            href="https://www.csus.edu/student-life/health-counseling/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                            {translate("Health and Counseling", language)} <br />
                                <br />
                               </span>
                        </a>
                        <span className= "text-wrapper-2Hex">
                            <br />
                        </span>
                        <a 
                            href="https://www.csus.edu/student-life/housing/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                            {translate("Housing", language)}
                                <br />
                            </span>
                        </a>
                    </p>
                    </div>
                </div>
            </div>
         </div>
        </div>

        <div className="frameHex offset">
        <svg className= "frameHex polygon" width="500" height="550" viewBox="0 0 564 650" fill="none" xmlns="http://www.w3.org/2000/svg"> x{100}
        <path d="M282 0L563.458 162.5V487.5L282 650L0.541748 487.5V162.5L282 0Z" fill="#F0DFA7"/>
    </svg>
                   
         <div className="rectangle-wrapperHex">
          <div className="rectangleHex"/>
         </div>
         <div className="frame-wrapperHex">
          <div className="div-wrapperHex">
            <div className="divHex">
                <div className="div-2Hex">
                    <p className="internationalHex">
                        <a
                            href="https://www.csus.edu/information-resources-technology/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className= "text-wrapper">{translate("Technical Support", language)}</span>
                        </a>
                        <span className="spanHex">
                            :<br />
                        </span>
                    </p>
                    <p className="pHex">
                        <a
                            href="https://www.csus.edu/information-resources-technology/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                               {translate("Information Resources and Technology (IRT)", language)}
                                <br />
                                <br />
                                <br />
                            </span>
                        </a>
                        <a
                            href="https://www.csus.edu/student-affairs/information-technology/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-wrapperHex">
                                {translate("Information Technology (SAIT)", language)}
                                <br />
                                <br />
                                <br />
                            </span>      
                        </a>
                   
                        
                    </p>
                    </div>
                </div>
            </div>
         </div>
        </div>
    

       

         
    
               
                

        

            
        </>
    );
}


export default Resources;