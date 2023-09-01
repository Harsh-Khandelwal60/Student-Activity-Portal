import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import "./FAQStyles.css"
const FAQ = () => {
      useEffect(()=>{
        const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    currentlyActiveAccordionItemHeader.classList.toggle("active");
    currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});
      })
  return (
    <FAQTag>
      <div className='reveal'>
          <h1>Frequently Asked Questions</h1>

<div className="accordion">
    <div className="accordion-item">
        <div className="accordion-item-header">
          Which subjects are considered in the process of Department Change?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            In the online academic sessions, 7 theory subjects were considered for DepC but in the offline sessions all subjects other than EAA are considered.</div>
        </div>
    </div>
    
    <div className="accordion-item">
        <div className="accordion-item-header">
        What is the Eligibility Criteria of Branch change in  IIITM?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            <ul style={{marginLeft : '20px'}} >
               <li> Students should have passed their examinations(Semester-1 and -2) in one
                    attempt (without any F-grade). </li>
               <li>Student should NOT have dropped any course of the first year.</li>
               <li>Student must have scored a CGPA greater than or equal to 8.00, based upon
                  all the prescribed Credits for the respective first year. </li>
               <li>Conduct of the student in the first year at the Institute should be blemish free. </li>
            </ul>
            </div>
        </div>
    </div>
    <div className="accordion-item">
        <div className="accordion-item-header">
        What is an Elective?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            In the context of engineering education, "electives" refer to courses or subjects that students can choose to take based on their personal interests, career goals, or specialization within their engineering discipline. Elective courses are typically additional or supplementary to the core curriculum, which consists of mandatory courses required for the completion of an engineering degree.
            </div>
        </div>
    </div>
    <div className="accordion-item">
        <div className="accordion-item-header">
        Where can I get details about scholarships?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            You may see the Academic Information on the Resources page of this site. <a href='https://www.iiitm.ac.in/index.php/en/student/scholarships' target='_blank'> Cick here</a>
            </div>
        </div>
    </div>
    <div className="accordion-item">
        <div className="accordion-item-header">
        What are the Various  Cultural Events that Institute does for the Students?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
                Check the details <a href='https://www.iiitm.ac.in/index.php/en/activities/events-activities/73-cultural-event' target='_blank'>here </a>
           </div>
            </div>
    </div>
    <div className="accordion-item">
        <div className="accordion-item-header">
        What are the Various  Technical Events that Institute does for the Students?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            Check the details <a href='https://www.iiitm.ac.in/index.php/en/activities/events-activities/74-technical-events' target='_blank'>here </a></div>
        </div>
    </div>
</div></div>
    </FAQTag>
  )
}

const FAQTag=styled.section`
  position: relative;
  padding-bottom: 6vh;
  min-padding-bottom: 32px;
  padding-top: 4vh;
  h1{
    font-weight: 700;
  }

`

export default FAQ