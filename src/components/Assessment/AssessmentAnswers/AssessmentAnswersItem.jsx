// import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// function AssessmentAnswersItem({ answers }) {

//     return (
//         <div className="accordion" id="accordionExample">
//     {/* <h4>Bucket Function Subfunction Level Phase Tags</h4> */}
//     {/* <div className="accordion-item">
//             <h2 className="accordion-header" id="headingOne">
//             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
//                 Bucket Function Subfunction Level Phase Tags
//             </button>
//             </h2>
//             <button>See Overview</button>
//             <button>Edit</button>
//             <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                 <div className="accordion-body">
//             </div>
//             </div>
//         </div> */}
//         <div className="accordion-item">
//             <h2 className="accordion-header" id="headingTwo">
//             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                 {answers.bucket_name || ''} {answers.function_name || ''} {answers.subfunction_name || ''} {answers.level_rating || ''} {answers.tag_name || ''}
//             </button>
//             </h2>
//         <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//             <div className="accordion-body">
//                 <strong>Findings:</strong> {answers.findings || ''} 
//                 <strong>Impact:</strong> {answers.impact || ''} 
//                 <strong>Recommendations:</strong>{answers.recommendations || ''}
//             </div>
//             </div>
//             <button>See Overview</button>
//             <button>Edit</button>
//         </div>
//         {/*
//         <div className="accordion-item">
//             <h2 className="accordion-header" id="headingThree">
//             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                 Accordion Item #3
//             </button>
//             </h2>
//         <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//             <div className="accordion-body">
//                 <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//             </div>
//             </div> 
//         </div> */}
//         </div>
// )
// }

// export default AssessmentAnswersItem;