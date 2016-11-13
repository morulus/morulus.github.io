const $last = Symbol();

class UrlExplorer {
  constructor(node, src, dispatch) {

    this.node = node;
    this.src = src;
    this.providerDispatch = dispatch;
  }

  isDublicate(that) {
    return this[$last]==(this[$last] = that);
  }

  dispatch(action) {
    if (this.isDublicate(action.type)) return false;
    switch(action.type) {
      case 'beforeEnter':
        var iframe = this.iframe = document.createElement('iframe');
        iframe.classList.add('brahma-widgets-screens-se-soft-opacity');
        iframe.style.position = 'absolute';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 0;
        iframe.style.display = 'none';
        iframe.style.opacity = 0;
        this.providerDispatch({
          type: 'START_LOADING'
        });
        $(iframe).one('load', () => {
            this.providerDispatch({
              type: 'END_LOADING'
            });
            iframe.style.display = 'block';
            setTimeout(() => { iframe.style.opacity = 1; }, 500);
        });
        iframe.src = this.src;
        this.node.appendChild(iframe);
      break;
      case 'leave':
        this.providerDispatch({
          type: 'CANCEL_LOADING'
        });
        $(iframe).unbind('load');
        requestAnimationFrame(() => {
          this.node.removeChild(this.iframe);
        });
      break;
    }
  }

  trottleDispatch(action) {
    clearTimeout(this.trottleTimer);
    this.trottleTimer = setTimeout(this.dispatch.bind(this, action), 1000);
  }
}


export default function explorer(url) {
  return function(screen) {
    var explorer = new UrlExplorer(screen, url, this.provider.dispatch.bind(this.provider));

    this.on('active', ()=>{
      explorer.trottleDispatch({
        type: 'beforeEnter'
      });
    });

    this.on('unactive', function() {
      explorer.trottleDispatch({
        type: 'leave'
      });
    });

    if (this.active) {
      explorer.trottleDispatch({
        type: 'beforeEnter'
      });
    }
  }
}
