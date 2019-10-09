import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Battle from './components/Battle';
import Popular from './components/Popular';

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Battle />
      </div>
    );
  }
}

ReactDOM.render(
  // React Element
  <App />,
  // Where to render the Element to
  document.getElementById('app'),
);

export default App;
