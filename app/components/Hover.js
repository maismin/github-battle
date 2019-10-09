import React from 'react';
import PropTypes from 'prop-types';

class Hover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({
      hovering: true,
    });
  }

  mouseOut() {
    this.setState({
      hovering: false,
    });
  }

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
