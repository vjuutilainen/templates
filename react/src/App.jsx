import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="app">
        App
      </div>
    );
  } 

}

export default App;

App.defaultProps = {
  path: ''
};
