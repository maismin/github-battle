import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Battle from './components/Battle';
import Popular from './components/Popular';
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
      <ThemeProvider value={this.state}>
        <div className={theme}>
          <div className="container">
            <Nav />
            <Popular />
          </div>
        </div>
      </ThemeProvider>
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
