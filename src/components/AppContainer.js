import React, { useState } from "react";
import cvPicture from "../updatecv.png";
import "../App.css";
import AllSkills from "./AllSkills";
import Experiences from "./Experiences";
import Education from "./Education";


function AppContainer() {
  const [state, setState] = useState({
    skills: [],
    experiences: [],
    education: [],
    languages: [],
    characters: [],
    links: [],
  });
  const addSkills = (e) => {};

  const submitSkillsForm = (e) => {
    e.preventDefault();
    let childs = e.target.childNodes;
    let skillsName = childs[0];
    let skillsLevel = childs[2];

    // setState((previousState)=>({
    //     skills: [...previousState.skills, {'skillsName': skillsName.value, 'skillsLevel': skillsLevel.value}]
    // }));

    setState({
      ...state,
      skills: state.skills.concat({
        skillsName: skillsName.value,
        skillsLevel: skillsLevel.value,
      }),
    });
    console.log(state.skills);
    // console.log(e.target.childNodes);
  };

  //submit professional experiences form
  const submitProfessionalExperiencesForm = (e) => {
    e.preventDefault();
    let childs = e.target.childNodes;
    console.log(childs);
    let companyName = childs[1];
    let startDate = childs[4];
    let endDate = childs[8];
    let workPosition = childs[13];

    setState({
      ...state,
      experiences: state.experiences.concat({
        companyName: companyName.value,
        startDate: startDate.value,
        endDate: endDate.value,
        workPosition: workPosition.value,
      }),
    });
    console.log(state.skills);
  };
  //submit cursus form
  const submitCursusForm = (e) => {
    e.preventDefault();
    let childs=e.target.childNodes;
    let schoolName=childs[2].value;
    let schoolCursus=childs[7].value;
    let startDate=childs[10].value; 
    let endDate=childs[13].value;

    setState({
        ...state,
        education: state.education.concat({
          schoolName: schoolName,
          cursus: schoolCursus,
          endDate: endDate,
          startDate: startDate,
        }),
      });
      console.log(e.target.childNodes);
  };

  //submit personalities form
  const submitPersonalitesForm = (e) => {
    e.preventDefault();
  };

  //submit languages
  const submitLanguagesForm = (e) => {
    e.preventDefault();
  };

  //submit passions form
  const submitPassionsForm = (e) => {
    e.preventDefault();
  };

  //submit links form
  const submitLinksForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="editorContainer">
        <h2>education</h2>
        <form onSubmit={submitCursusForm}>
          <label>Nom ecole</label>
          <br />
          <input type="text" name="schoolName" />
          <br /> 
          <label>Specialite</label> <br/>
          <input type="text" name="cursus" /><br/>
          <label>Debut</label>
          <input type="date" name="startDate" />
          <br />
          <label>Fin</label>
          <input type="date" name="endDate" />
          <br />
          <button>Ajout education</button>
        </form>
        <h2>Experiences</h2>
        <form onSubmit={submitProfessionalExperiencesForm}>
          <label>Nom societe</label>
          <input type="text" name="companyName" defaultValue="FranckyCodes" />
          <br />
          <label>Date debut</label>
          <input type="date" name="startDate" /> <br />
          <label>Date fin</label>
          <input type="date" name="endDate" />
          <br />
          <br />
          <label>Position</label>
          <br />
          <input
            type="text"
            name="workPosition"
            defaultValue="Dev React"
          />{" "}
          <br />
          <button>Ajout experiences</button>
        </form>
        <h2>activites et competences</h2>
        <form onSubmit={submitSkillsForm}>
          <input type="text" name="skillsName" defaultValue="html" />
          <br />
          <input type="text" name="skillsLevel" defaultValue="50" />
          <label>%</label>
          <br />
          <button onClick={addSkills}>Ajout competences</button>
        </form>

        <h2>langues</h2>
        <form onSubmit={submitLanguagesForm}>
          <label>Langue</label>
          <input type="text" name="language" />
          <br />
          <button>Ajout de langues</button>
        </form>
        <h2>personnalites</h2>
        <form onSubmit={submitPersonalitesForm}>
          <label>Personnalite</label>
          <input type="text" name="personality" />
          <br />
          <button>Ajout personnalite</button>
        </form>
        <h2>divers</h2>
        <form onSubmit={submitPassionsForm}>
          <label>Passion</label>
          <input type="text" name="passionName" defaultValue="Lecture" /> <br />
          <button>Ajout passion</button>
        </form>
        <h2>liens</h2>
        <form onSubmit={submitLinksForm}>
          <label>Texte du lien</label>
          <input type="text" name="linkText" /> <br />
          <label>Source du lien</label>
          <input type="text" name="linkSource" />
          <br />
          <button>Ajout lien</button>
        </form>
        <br />
        <button className="generateCv">Generer mon CV</button>
      </div>
      <div className="previewContainer">
        <h1>cv</h1>
        <img className="cvPicture" src={cvPicture} />
        <h2>education</h2> 
        <Education educationProp={state.education} />
        <h2>experiences</h2>
        <Experiences xpProp={state.experiences} />
        <h2>compétences</h2>
        <AllSkills skillsProp={state.skills} />
      </div>
    </div>
  );
}

export default AppContainer;
