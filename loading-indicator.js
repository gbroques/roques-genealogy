const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        transform: rotate(45deg);
        transform-origin: 40px 40px;
        margin: auto;
    }

    :host div {
        top: 32px;
        left: 32px;
        position: absolute;
        width: 32px;
        height: 32px;
        background: #e08283;
        animation: loading-indicator 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    :host div:after,
    :host div:before {
        content: ' ';
        position: absolute;
        display: block;
        width: 32px;
        height: 32px;
        background: #e08283;
    }

    :host div:before {
        left: -24px;
        border-radius: 50% 0 0 50%;
    }

    :host div:after {
        top: -24px;
        border-radius: 50% 50% 0 0;
    }

    @keyframes loading-indicator {
        0% {
            transform: scale(0.95);
        }
        5% {
            transform: scale(1.1);
        }
        39% {
            transform: scale(0.85);
        }
        45% {
            transform: scale(1);
        }
        60% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(0.9);
        }
    }
  </style>
  <div></div>
`;

class LoadingIndicator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}
window.customElements.define('loading-indicator', LoadingIndicator);
