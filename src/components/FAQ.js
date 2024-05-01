//useOutletContext is going to be how we receive state variables from parent components
import { useOutletContext } from "react-router-dom";
import "./FAQ.css";
import translate from "./TranslationStation";


function FAQ(props) {

   // const { stateVariable1, stateVariable2 } = useOutletContext();
   const language = props.language[0]
    
    return(
        <div className="faq-container">
        <div className="faq-title">Frequently Asked Questions (FAQs)</div>
        <div className="faq-item">
            <div className="faq-question">Can I use the website in my preferred language?</div>
            <div className="green-button">
                <div className="green-dot"></div>
            </div>
        </div>
        <div className="faq-item">
            <div className="faq-question">How can I connect to other international students?</div>
            <div className="green-button">
                <div className="green-dot"></div>
            </div>
        </div>
        <div className="faq-item">
            <div className="faq-question">Where can I find ongoing events and activities?</div>
            <div className="green-button">
                <div className="green-dot"></div>
            </div>
        </div>
        <div className="faq-item">
            <div className="faq-question">What type of resources are available for international students?</div>
            <div className="green-button">
                <div className="green-dot"></div>
            </div>
        </div>
        <div className="faq-item">
            <div className="faq-question">Who can I contact if I encounter technical issues while using the website?</div>
            <div className="green-button">
                <div className="green-dot"></div>
            </div>
        </div>
        <div className="faq-item">
            <div className="faq-question">How do I login using my Sacramento State credentials?</div>
            <div className="green-button">
                <div className="green-dot"></div>
            </div>
        </div>
    </div>

    );
}

export default FAQ;