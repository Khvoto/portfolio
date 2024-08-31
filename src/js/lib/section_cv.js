//import { CreateExperienceCard } from './cv_class.js'

/**
 * Array filled with each prior work och studies.
 */
const prior_experience = [
  {
    id: 0,
    type: 'work',
    title: 'Junior Frontendutvecklare',
    location: 'Webblandskapet - Norrköping',
    start: 2023,
    end: 'current',
    description: "Arbetat gentemot kunder med olika projekt, ",
    skills: {
      0: "Javascript",
      1: "PHP",
      2: "CSS",
      3: "HTML",
      4: "SASS",
      5: "Docker",
      6: "Ddev",
      7: "Linux",
      8: "Git",
      9: "Agile dev",
      10: "Eline",
      11: "Zoezi"
    },
  },
  {
    id: 1,
    type: 'work',
    title: 'Personlig Assistent',
    location: 'Akria Assistans - Norrköping',
    start: 2022,
    end: 'current',
    description: "Hjälper en vän till familjen, numera en förmiddag i veckan, tidigare som enda arbete.",
    skills: {
      0: "Flexibilitet",
      1: "Ansvarstagande",
      2: "Struktur",
      3: "",
    },
  },
  {
    id: 2,
    type: 'work',
    title: 'Personlig Assistent',
    location: 'Humana AB - Stockholm',
    start: 2021.02,
    end: 2021.10,
    description: "Arbete åt brukare med Autism, var dennes trygga punkt och skulle läsa av situationer som brukaren inte var bekväm i. ",
    skills: {
      0: "Ickeverbal kommunikation",
      1: "Ansvarstagande",
      2: "Struktur",
      3: "Förbli lugn",
    },
  },
  {
    id: 3,
    type: 'studies',
    title: "Webbutvecklare",
    location: "Linnéuniversitetet - Distans",
    start: 2021,
    end: 'current',
    description: "Läser detta program vid sidan av arbete på 25%",
    skills: {
      0: "Javascript",
      1: "OOP",
      2: "CSS",
      3: "HTML",
      4: "Java",
      5: "Gitlab",
      6: "Docker",
      7: "Kubernetes"
    },
  },
  {
    id: 4,
    type: 'work',
    title: 'Personlig Assistent',
    location: 'Liv Ihop - Norrköping',
    start: 2019,
    end: 2021,
    description: "Hjälpa en vän till familjen, halvtid under denna period",
    skills: {
      0: "Flexibilitet",
      1: "Ansvarstagande",
      2: "Struktur",
      3: "Förbli lugn",
    },
  },
  {
    id: 5,
    type: 'work',
    title: 'Charkeritekniker',
    location: 'Charkman - Norrköping',
    start: 2019.06,
    end: 2019.09,
    description: "Sommarplacering i charkeri",
    skills: {
      0: "Stresstålighet",
      1: "Flexibilitet",
      2: "Struktur",
      3: "Högt tempo",
    },
  },
  {
    id: 6,
    type: 'studies',
    title: 'Fritidslärare',
    location: 'Linköpings Univeristet - Norrköping',
    start: 2015,
    end: 2016,
    description: "Påbörjad utbildning till fritidslärare, avbruten pga. sjukskrivning",
    skills: {
      0: "Pedagogik",
      1: "Didaktik",
      2: "Utvärdering",
      3: "Bedömning",
    },
  },
  {
    id: 7,
    type: 'studies',
    title: 'Miljövetenskap',
    location: 'Linköpings Univeristet - Norrköping',
    start: 2013,
    end: 2015,
    description: "Påbörjad utbildning till Miljövetare, avbruten då jag inte såg mig själv i detta område.",
    skills: {
      0: "Labteknik",
      1: "Informationssökning",
      2: "Vetenskaplig metodik",
      3: "Kritiskt tänkande",
    },
  },
  {
    id: 8,
    type: 'work',
    title: 'Parkskötare',
    location: 'PEAB AB - Norrköping',
    start: 2008,
    end: 2013,
    description: "Säsongsanställning Start mars, slut oktober/november veroende på säsong. ",
    skills: {
      0: "Renhållning",
      1: "Trädgårdsskötsel",
      2: "Planering",
      3: "Maskinvana",
    },
  },
  {
    id: 9,
    type: 'studies',
    title: 'Naturvetenskap',
    location: 'Hagagymnasiet - Norrköping',
    start: 2005,
    end: 2008,
    description: "Gymnasiestudier, Matematik & Data inriktning",
    skills: {
      1: "Programmering ( C++ )",
      2: "Webdesign",
      3: "Webbproduktion",
      4: "Engelska C",
      5: "Matematik E"
    },
  },
];

/**
 * Create cards for each experience
 */
function createCards() {
  prior_experience.forEach(experience => {
    const li = document.createElement('li');
    const target = document.getElementById('cv-'+ experience.type);
    li.classList.add('cv-position','exp-' + experience.id);
    target.appendChild(li)

    addFieldsToCards(experience)
  });
}

function addFieldsToCards(experience) {
  const current = document.getElementsByClassName('exp-' + experience.id);
  const target = current[0];
  const skillContainer = document.createElement('div');
  const title = document.createElement('h3');
  const location = document.createElement('h4');
  const duration = document.createElement('p');
  const description = document.createElement('p');
  const skills = document.createElement('ul');
  const li = document.createElement('li');

  title.classList.add('cv-title')
  title.innerHTML = experience.title;
  target.appendChild(title);

  location.classList.add('cv-location');
  location.innerHTML = experience.location;
  target.appendChild(location);

  duration.classList.add('cv-duration');
  duration.innerHTML = experience.start + ' - ' + experience.end;
  target.appendChild(duration)

  description.classList.add('cv-description');
  description.innerHTML = experience.description;
  target.appendChild(description);

  skillContainer.classList.add('cv-skills-container');
  skillContainer.classList.add('cv-skills-container' + experience.id);
  target.appendChild(skillContainer)

  const currentSkills = document.getElementsByClassName('cv-skills-container' + experience.id)
  const skillsContainer = currentSkills[0]

  skills.classList.add('cv-skills', 'cv-skills-' + experience.id);
  skillsContainer.appendChild(skills);

  fillSkills(experience.skills, experience.id)
}

/**
 * Function to populate the skills list for each experience in CV
 * 
 * @param {object} skills Contains all skills related to specific experience
 * @param {number} id Identifies which experience we're adding skills to
 */
function fillSkills(skills, id) {
  const current = document.getElementsByClassName('cv-skills-' + id)
  const target = current[0];

  for( let key in skills  ) {
    const skill = document.createElement('li')
    skill.classList.add('cv-skill');
    skill.innerHTML = skills[key];
    target.appendChild(skill)
  }

  
}

/**
 * Function called from main.js
 */
export function fillCV() {
  createCards();
}
