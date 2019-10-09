import React from 'react';
import PropTypes from 'prop-types';

class Hover extends React.Component {
  state = {
    hovering: false,
  };

  mouseOver = () => {
    this.setState({
      hovering: true,
    });
  };

  mouseOut = () => {
    this.setState({
      hovering: false,
    });
  };

  render() {
    const { hovering } = this.state;
    const { render } = this.props;
    return (
      <div
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        onFocus={() => {}}
        onBlur={() => {}}
      >
        {render(hovering)}
      </div>
    );
  }
}

Hover.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Hover;
