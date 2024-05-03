import React, { useState } from "react";
//useOutletContext is going to be how we receive state variables from parent components
import { useOutletContext } from "react-router-dom";
import "./FAQ.css";
import translate from "./TranslationStation";


function FAQ(props) {

  // const { stateVariable1, stateVariable2 } = useOutletContext();
  const language = props.language[0]

  // State to manage the FAQ items
  const [faqs, setFaqs] = useState([
    // FAQ data
    {
      question: translate("Can I use the website in my preferred language?", language),
      answer: translate("Absolutely! You can do so by clicking “Change Language” from the navigation bar above. From there you can set the website to your preferred language.", language),
      open: false
    },
    {
      question: translate("How can I connect to other international students?", language),
      answer: translate("You can connect to other students by both creating and reading posts on the “Home” page, accessible from the navigation bar above. Additionally, students can further connect to others by initiating and organizing group activities by posting through the “Ongoing” page, also located on the navigation bar above.", language),
      open: false
    },
    {
      question: translate("Where can I find ongoing events and activities?", language),
      answer: translate("To explore ongoing events and activities, simply click “Ongoing” from the navigation bar above. Here students can discover a variety of ongoing and activities.", language),
      open: false
    },
    {
      question: translate("What type of resources are available for international students?", language),
      answer: translate("Resources can be found by clicking on “Resources” on the navigation bar above. Here, international students can find resources such as Sac State’s International Programs, Global Engagement office, and academic support.", language),
      open: false
    },
    {
      question: translate("Who can I contact if I encounter technical issues while using the website?", language),
      answer: translate("If you experience any technical issues while using this website, please reach out to Sacramento State’s Division of Information Resources and Technology. You can visit their office located in the AIRC building, 2nd Floor, Room 2005, during their open hours, Monday through Friday, from 8am to 5pm. Alternatively, if you are unable to visit in person, you can contact them by phone at (916) 278-7337 or via email at servicedesk@csus.edu.", language),
      open: false
    },
    {
      question: translate("How do I login using my Sacramento State credentials?", language),
      answer: translate("In the upper right corner of the website there will be a green “Login” button. Simply click on this button to be redirected to Sacramento State’s login page. Once there, you will need to enter your student Sacramento State username and password.", language),
    },
    {
      question: translate("Are there any fees associated with using the website?", language),
      answer: translate("No, our website is free to use for all users. There are no hidden fees or charges associated with accessing the features and resources available on our platform.", language),
    }
  ]);

  // Function to toggle the visibility of FAQ answers
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  // JSX code for the FAQ component
  return (
    <div className="faq-page">
      <div className="faq-background"></div> {/* Background container */}
      <div className="faq-app">
        <header>
          <h1>{translate("Frequently Asked Questions", language)}</h1>
        </header>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <div
              className={"faq " + (faq.open ? "open" : "")}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{faq.question}</div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 

export default FAQ;
