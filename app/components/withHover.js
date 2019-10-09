import React from 'react';

function withHover(Component, propName = 'hovering') {
  return class WithHover extends React.Component {
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

    /* eslint-disable react/jsx-props-no-spreading */
    render() {
      const { hovering } = this.state;
      const props = {
        [propName]: hovering,
        ...this.props,
      };
      return (
        <div
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
          onFocus={() => {}}
          onBlur={() => {}}
        >
          <Component {...props} />
        </div>
      );
    }
  };
}

export default withHover;
