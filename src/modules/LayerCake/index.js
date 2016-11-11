import styles from './style.css';
import Cover from './Cover';

function polyRender(content, node) {
  if ("string"===typeof content) {
    node.innerHTML = content;
  } else if (content instanceof HTMLElement) {
    node.appendChild(content);
  } else if ("function"===typeof content) {
    if ("object"===typeof React && (content instanceof React.Component || content.prototype.isReactComponent)) {
      ReactDOM.render(React.createElement(content, {
        store: this.store
      }), node);
    } else {
      content.call(this, node);
    }
  } else {
    throw new Error("Unknown type of layer content");
  }
}

export default function layerCake(config = {}) {
  var store = {
    dom: {}
  };
  var screenConfiguration = Object.assign(config.origin||{}, {
    onCreate: function() {
      // Creates lower layer
      store.dom.lower = document.createElement('div');
      store.dom.middle = document.createElement('div');

      store.dom.upperWrapper = document.createElement('div');
      store.dom.upper = document.createElement('div');
      store.dom.upperWrapper.appendChild(store.dom.upper);
      store.dom.upperWrapper.classList.add(styles.upperWrapper);

      store.dom.coverWrapper = document.createElement('div');
      store.dom.cover = document.createElement('div');
      store.dom.coverWrapper.appendChild(store.dom.cover);
      store.dom.coverWrapper.classList.add(styles.coverWrapper);

      store.dom.lower.classList.add(styles.lower);
      store.dom.middle.classList.add(styles.middle);


      this.node[0].appendChild(store.dom.lower);
      this.node[0].appendChild(store.dom.middle);
      this.node[0].appendChild(store.dom.upperWrapper);
      this.node[0].appendChild(store.dom.coverWrapper);

      // Get configuration for each of them
      ['lower','middle','upper'].forEach((layer) => {
        if (config[layer]) {
          polyRender.call(this, config[layer], store.dom[layer]);
        }
      });

      // Render supercover
      ReactDOM.render(React.createElement(Cover, {
          widget: this,
          store: this.provider
      }), store.dom.cover);
    },
    onEnter: function() {
      if (config.cover) {
        this.provider.dispatch({
          type: 'ASSIGN_SCORE',
          data: config.cover
        });
      }
    },
    onLeave: function() {
      this.provider.dispatch({
        type: 'RESET_SCORE'
      });
    }
  });

  if ("object"===typeof config.cover) {
    if (config.cover.title) {
      screenConfiguration.title = config.cover.title;
    }
  }
  return screenConfiguration;
}
