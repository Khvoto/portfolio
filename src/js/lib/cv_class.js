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
    console.log('FFS DATA', this.data);

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        .cv-experience {
          background
        }

        .cv-skills {
          display: flex;
          gap: 25px;
          justify-content: start;
          padding-top: 20px;
          flex-wrap: wrap;

          .cv-skill {
            width: 30%;
            
          }
        }
      </style>

      <li class="cv-experience">
        <h3 class="cv-title">${this.data.title}</h3>
        <h4 class="cv-location">${this.data.location}</h4>
        <p class="cv-duration">${this.data.start} - ${this.data.end}</p>
        <p class="cv-description">${this.data.description}</p>
        <div class="cv-skills-container">
          <ul class="cv-skills">
          </ul>
        </div>
      </li>
    `;

    const targetColumn = document.getElementById('cv-' + this.data.type);
    targetColumn.appendChild(shadowRoot);
  }


  showData() {
    console.log(this.data);
  }

  fillSkills() {
    const skillz = this.querySelector('.cv-skills');
    console.log(skillz)
  }




}

window.customElements.define("experience-card", CreateExperienceCard);
