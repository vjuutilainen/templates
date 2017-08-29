
class App {
  
  constructor(selector='body') {
    this.container = null;
    this.selector = selector;
  }

  mount() {
    this.container = document.querySelector(this.selector);
  }

  unmount() {

  }

}

export default App;
