import { CreateExperienceCard } from './cv_class.js'

const experience = {
  type: '',
  title:'',
  location: '',
  start: Number,
  end: Number,
  description: '',
  skills: []
}

const template = `
    <li class="cv-experience">
      <h3 class="cv-title"></h3>
      <h4 class="cv-location"></h4>
      <p class="cv-duration"></p>
      <p class="cv-description"></p>
      <div class="cv-skills-container">
        <ul class="cv-skills">
        </ul>
      </div>
    </li>
`;

//function create ()

const template_skill = `
  <li class="cv-skill"></li>
`;

const prior_experience = [
  {
    id: 0,
    type: 'work',
    title: 'test_title',
    location: 'test_company',
    start: 2021,
    end: 2022,
    description: "asd",
    skills: {
      0: "a",
      1: "b",
      2: "c",
      3: "d",
    },
  },
  {
    id: 1,
    type: 'work',
    title: 'test_title',
    location: 'test_company',
    start: 2022,
    end: 2023,
    description: "asd",
    skills: {
      0: "a",
      1: "b",
      2: "c",
      3: "d",
    },
  },
  {
    id: 3,
    type: 'studies',
    title: "test-title",
    location: "test_school",
    start: 2023,
    end: 2024,
    description: "asd",
    skills: {
      0: "a",
      1: "b",
      2: "c",
      3: "d",
    },
  },
];

function getParent(type) {
  return document.getElementById('cv-'+ type);
}

function setValue(value, data){
  document.getElementsByClassName('cv-' + value).innerHTML = (data);
}

function createCards() {

  prior_experience.forEach(experience => {

    console.log(experience);

    const card = new CreateExperienceCard(experience)

    card.fillSkills();
  });
}

export function fillCV() {
  createCards();


}
