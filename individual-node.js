class IndividualNode extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    set individual(individual) {
        this.root.innerHTML = `
          <li>
            <p>${individual.first_name}</p>
            <p>${individual.last_name}</p>
            <p>${individual.gender}</p>
          </li>
        `;
    }

}
window.customElements.define('individual-node', IndividualNode);
