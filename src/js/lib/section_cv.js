import { CreateExperienceCard } from './cv_class.js'

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



function createCards() {

  prior_experience.forEach(experience => {

    //console.log('experience: ',experience);

    const card = new CreateExperienceCard(experience);

    //card.fillSkills(experience);
  });
}

export function fillCV() {
  createCards();
  const skills = document.querySelectorAll('experience-card');


  skills.forEach( element => {
    console.log(element.children)
    element.children[4].innerHTML = 'hahaha';
  })


}
