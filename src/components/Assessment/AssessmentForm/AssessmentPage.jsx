import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from "react-router-dom";

import AssessmentSection from "./AssessmentSection";

function AssessmentPage ({functionsArray}) {
  const params = useParams();
  const structure = useSelector((store => store.structure))
  const tags = structure.tagsReducer;
  const subfunctionsArray = structure.subfunctionsReducer;
  const [formArray, setFormArray] = useState([]); // Overarching array of input objects, used to hold all input fields. 

  const [allInputFields, setAllInputFields] = useState( // Object for inputs on form subfunction sections
    {subfunctionID: null, levelRatingInput: null, findingsInput: '', impactsInput: '', 
    recommendationsInput: '', phaseInput: null, tagsInput: []}
  ); 

  function evalTagsInput(allInputFields, formObject){ // checks tag arrays for duplicates/uncheck action
    let keepTagInputs = formObject.tagsInput;
      for (const i of keepTagInputs) {
        for (const j of allInputFields.tagsInput) {
          if (i === j){
            console.log('i, j', i, j)
            let removeIndex = keepTagInputs.indexOf(i);
            keepTagInputs.splice(removeIndex, 1);
          }
        }
      }
    console.log('keepTagInputs: ', keepTagInputs)
    return keepTagInputs;
  }

  const handleInputChange = (subfunction, index, event) => {
    if (allInputFields.subfunctionID === null) {     // if no info in allInputFields, sets allInputFields where a value exists.
      setAllInputFields({[event.target.name]: event.target.value, 'subfunctionID': subfunction.id})
    } 
    else if (allInputFields.subfunctionID === subfunction.id) { // sets info if there's info in allInputFields w/ a matching subfunction
      if (event.target.name == 'tagsInput' && allInputFields.tagsInput) { 
        const newTagsInputArray = new Array(allInputFields.tagsInput, event.target.value).flat(Infinity);
        setAllInputFields({[event.target.name]: newTagsInputArray, 'subfunctionID': subfunction.id})
      } 
      else { // updates relevant allInputFields only
        setAllInputFields(prevState => ({...prevState, [event.target.name]: event.target.value}))
      }
     
    }
    else { // if there's already info in allInputFields *BUT* it's from a different subfunction section
      if (formArray.length >= 1) { // only runs the following logic if formArray has enough objects in it
      let formArrayToggle;
        for (const formObject of formArray) {
          if (formObject.subfunctionID === allInputFields.subfunctionID){
            let spliceInputIndex = formArray.indexOf(formObject)  
            let newFormObject = {
              ...formObject,
              levelRatingInput: allInputFields.levelRatingInput || formObject.levelRatingInput,
              findingsInput: allInputFields.findingsInput || formObject.findingsInput,
              impactsInput: allInputFields.impactsInput || formObject.impactsInput,
              recommendationsInput: allInputFields.recommendationsInput || formObject.recommendationsInput,
              phaseInput: allInputFields.phaseInput || formObject.phaseInput,
              tagsInput: 
                (!allInputFields.tagsInput) ? formObject.tagsInput
                : (!formObject.tagsInput) ? allInputFields.tagsInput
                : evalTagsInput(allInputFields, formObject)
            }; 
            formArray.splice(spliceInputIndex, 1, newFormObject);
            formArrayToggle = true;
            clearInputFields();
            setAllInputFields({[event.target.name]: event.target.value, 'subfunctionID': subfunction.id})
            return formArray;
          } 
          else {
            formArrayToggle = false;
          }
        }

        if (formArrayToggle === false) {
          let newFormObject = {
            subfunctionID: allInputFields.subfunctionID,
            levelRatingInput: allInputFields.levelRatingInput,
            findingsInput: allInputFields.findingsInput,
            impactsInput: allInputFields.impactsInput,
            recommendationsInput: allInputFields.recommendationsInput,
            phaseInput: allInputFields.phaseInput,
            tagsInput: allInputFields.tagsInput,
          }; 

          formArray.push(newFormObject);
          clearInputFields();
          setAllInputFields({[event.target.name]: event.target.value, 'subfunctionID': subfunction.id})
        }

      } else {
        let newFormObject = {
          subfunctionID: allInputFields.subfunctionID,
          levelRatingInput: allInputFields.levelRatingInput,
          findingsInput: allInputFields.findingsInput,
          impactsInput: allInputFields.impactsInput,
          recommendationsInput: allInputFields.recommendationsInput,
          phaseInput: allInputFields.phaseInput,
          tagsInput: allInputFields.tagsInput,
        }; 

        formArray.push(newFormObject);
        clearInputFields();
        setAllInputFields({[event.target.name]: event.target.value, 'subfunctionID': subfunction.id})
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formArray.length >= 1) {
      let formArrayToggle;
        for (const formObject of formArray) {
          if (formObject.subfunctionID === allInputFields.subfunctionID){
            let spliceInputIndex = formArray.indexOf(formObject)  
            let newFormObject = {
              ...formObject,
              levelRatingInput: allInputFields.levelRatingInput || formObject.levelRatingInput,
              findingsInput: allInputFields.findingsInput || formObject.findingsInput,
              impactsInput: allInputFields.impactsInput || formObject.impactsInput,
              recommendationsInput: allInputFields.recommendationsInput || formObject.recommendationsInput,
              phaseInput: allInputFields.phaseInput || formObject.phaseInput,
              tagsInput: 
                (!allInputFields.tagsInput) ? formObject.tagsInput
                : (!formObject.tagsInput) ? allInputFields.tagsInput
                : evalTagsInput(allInputFields, formObject)
            }; 
            formArray.splice(spliceInputIndex, 1, newFormObject);
            formArrayToggle = true;
            clearInputFields();
            return formArray;
          } 
          else {
            formArrayToggle = false;
          }
        }

        if (formArrayToggle === false) {
          let newFormObject = {
            subfunctionID: allInputFields.subfunctionID,
            levelRatingInput: allInputFields.levelRatingInput,
            findingsInput: allInputFields.findingsInput,
            impactsInput: allInputFields.impactsInput,
            recommendationsInput: allInputFields.recommendationsInput,
            phaseInput: allInputFields.phaseInput,
            tagsInput: allInputFields.tagsInput,
          }; 
          formArray.push(newFormObject);
          clearInputFields();
        }
        else {
          let newFormObject = {
            subfunctionID: allInputFields.subfunctionID,
            levelRatingInput: allInputFields.levelRatingInput,
            findingsInput: allInputFields.findingsInput,
            impactsInput: allInputFields.impactsInput,
            recommendationsInput: allInputFields.recommendationsInput,
            phaseInput: allInputFields.phaseInput,
            tagsInput: allInputFields.tagsInput,
          }; 

          formArray.push(newFormObject);
          clearInputFields();
        }
    } else {
      let newFormObject = {
        subfunctionID: allInputFields.subfunctionID,
        levelRatingInput: allInputFields.levelRatingInput,
        findingsInput: allInputFields.findingsInput,
        impactsInput: allInputFields.impactsInput,
        recommendationsInput: allInputFields.recommendationsInput,
        phaseInput: allInputFields.phaseInput,
        tagsInput: allInputFields.tagsInput,
      }; 

      formArray.push(newFormObject);
      clearInputFields();
    }

    
  }
  
  function clearInputFields() {
    setAllInputFields({subfunctionID: null, levelRatingInput: null, findingsInput: '',
    impactsInput: '', recommendationsInput: '', phaseInput: null, tagsInput: null})
  }

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  return (
    <>
    {functionsArray.map((functionObject) => {
      if (Number(params.function_id) === functionObject.id) {
        return (
          <div key={functionObject.id}>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={functionObject.function_index} aria-valuemin="0" aria-valuemax={functionsArray.length}>
              <div className="progress-bar w-75"></div>
            </div>
            <h3>{functionObject.name}</h3>
            {subfunctionsArray.map((subfunction, input, index) => {
              return (
                <form key={subfunction.id} className="mb-5 ">
                  <h4>{subfunction.name}</h4>
                  <div className="col-md-10 mb-3">
                    <label htmlFor="levelRatingInput" className="form-label"><h6>Level Rating</h6></label>
                    <ul>
                      <li>{(subfunction.level_criteria_strong)}</li>
                      <li>{(subfunction.level_criteria_adequate)}</li>
                      <li>{(subfunction.level_criteria_weak)}</li>
                    </ul>
                    <input 
                      type="range" 
                      className="form-range" 
                      name="levelRatingInput"
                      // id={subfunction.id} 
                      min="0" 
                      max="5" 
                      step="1" 
                      // value={input.levelRatingInput}
                      onChange={(event) => handleInputChange(subfunction, index, event)}
                    />
                  </div>

                  <div className="col mb-3">
                    <label htmlFor="findingsInput" className="form-label"><h6>Assessment Findings</h6></label>
                    <textarea 
                      type="text" 
                      className="form-control" 
                      name="findingsInput"
                      // id={subfunction.id} 
                      // value={input.findingsInput}
                      onChange={(event) => handleInputChange(subfunction, index, event)}
                    />
                  </div>

                  <div className="col mb-3">
                    <label htmlFor="impactsInput" className="form-label"><h6>Impacts</h6></label>
                    <textarea 
                      type="text" 
                      className="form-control" 
                      name="impactsInput"
                      // id={subfunction.id} 
                      // value={input.impactsInput}
                      onChange={(event) => handleInputChange(subfunction, index, event)} 
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-5 mb-3">
                      <label htmlFor="recommendationsInput" className="form-label"><h6>Recommendations</h6></label>
                      <textarea 
                        type="text" 
                        className="form-control" 
                        name="recommendationsInput"
                        // id={subfunction.id} 
                        // value={input.recommendationsInput}
                        onChange={(event) => handleInputChange(subfunction, index, event)}
                      />
                    </div>
                  
                    <div className="col-md-2 mb-3">
                      <label htmlFor="phaseInput" className="form-label"><h6>Phase</h6></label>
                      <input 
                        type="number" 
                        className="form-control" 
                        name="phaseInput"
                        // id={subfunction.id} 
                        // value={input.phaseInput}
                        onChange={(event) => handleInputChange(subfunction, index, event)}
                      />
                    </div>

                    <div className="col mb-3">
                      <h6>Tags</h6>
                      {tags.map((tag) => {
                        return (
                          <div key={tag.id} className="g-3">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              name="tagsInput"
                              // id={subfunction.id} 
                              value={tag.id} 
                              onChange={(event) => handleInputChange(subfunction, index, event)}/>
                            <label htmlFor="tagsInput" className="form-check-label"> {tag.name}</label>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <hr></hr>
                  {subfunction.subfunction_index === subfunctionsArray.length
                  ?
                  <>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
                    <Link to="/dashboard">
                      <button className="btn btn-primary">
                      Cancel
                      </button>
                    </Link>
                    <button className="btn btn-primary" onClick={(event) => handleSubfunctions(event)}>Continue</button>
                  </div>
                  <div className="d-grid g-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-link" type="submit">Save for Later</button>
                  </div>
                  </>
                  : <></>
                  }
                </form>
              )
            })}
          </div>
        )
      }
    })}
    </>
    
  )
}

export default AssessmentPage;