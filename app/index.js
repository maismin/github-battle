import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import Battle from './components/Battle';
import Popular from './components/Popular';
import Results from './components/Results';
import Nav from './components/Nav';

import { ThemeProvider } from './contexts/theme';

// Component
// State
// Lifecycle
// UI

/* eslint-disable react/no-unused-state */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light',
        }));
      },
    };
  }

  render() {
    const { theme } = this.state;
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={theme}>
            <div className="container">
              <Nav />
              <Route exact path="/" component={Popular} />
              <Route exact path="/battle" component={Battle} />
              <Route path="/battle/results" component={Results} />
            </div>
          </div>
        </ThemeProvider>
      </Router>
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
