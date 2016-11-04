const $last = Symbol();

class UrlExplorer {
  constructor(node, src) {
    this.node = node;
    this.src = src;
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
        $(iframe).one('load', () => {
            iframe.style.display = 'block';
            setTimeout(() => { iframe.style.opacity = 1; }, 500);
        });
        iframe.src = this.src;
        this.node.appendChild(iframe);
      break;
      case 'leave':
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
  return function(node) {
    var explorer = new UrlExplorer(node, url);

    this.on('beforeEnter', ()=>{
      explorer.trottleDispatch({
        type: 'beforeEnter'
      });
    });

    this.on('leave', function() {
      explorer.trottleDispatch({
        type: 'leave'
      });

    });

  }
}
