/**
 * Create cards for each experience
 *
 * @class CreateExperienceCard
 * @extends {HTMLElement}
 */
export class CreateExperienceCard extends HTMLElement {

  constructor(experience) {
    super();

    this.data = experience;

    const card = this.attachShadow({ mode: "open" });
    card.innerHTML = `
      <style>
        experience-card {
        display: block;
          height: 200px;
          width: 325px;
        }

        .cv-skills {
          display: flex;
          gap: 15px;
          justify-content: start;
          padding-top: 20px;
          flex-wrap: wrap;

          .cv-skill {
            width: 30%;
            
          }
        }
      </style>
      <experience-card class=" cv-experience exp-${this.data.id} ">
        <h3 class="cv-title">${this.data.title}</h3>
        <h4 class="cv-location">${this.data.location}</h4>
        <p class="cv-duration">${this.data.start} - ${this.data.end}</p>
        <p class="cv-description">${this.data.description}</p>
        <div class="cv-skills-container">
          <ul class="cv-skills">
            <slot name="skill"></slot>
          </ul>
        </div>
      </experience-card>
    `;

    const targetColumn = document.getElementById('cv-' + this.data.type);
    targetColumn.appendChild(card);
  }

  connectedCallback() {
    this.fillSkills(this.data)
  }


  showData() {
    console.log('Current Data: ', this.data);
  }

  fillSkills(experience) {
    setTimeout( () => {
      console.log('this:', experience) 
      const ffs = '.exp-' + experience.id;
      const element = card.shadowRoot.getElementsByClassName(ffs);
      //const skillList = element.querySelector('.cv-skills');

      console.log('ffs: ', ffs)
      
    })
  }




}

window.customElements.define("experience-card", CreateExperienceCard);
