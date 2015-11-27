import React from 'react';
import Icon from '@economist/component-icon';

export default class Library extends React.Component {

  static get propTypes() {
    return {
      children: React.PropTypes.arrayOf(React.PropTypes.element),
    };
  }

  render() {
    return (
      <div className="library--wrapper">
        <div className="library--sidebar">
          <Icon icon="economist" size="60px" uri="assets/icons.svg"
            className="library--economist-logo"
          />
          {this.props.children.map((child) => {
            return (
              <a href={`#${child.props.metadata.name}`}
                className="library--sidebar-link"
                key={`${child.props.metadata.name}-menu`}
              >{child.props.metadata.name.replace('@economist\/component-', '')}</a>
            );
          })}
        </div>
        <div className="library--main" role="main">{this.props.children}</div>
      </div>
    );
  }
}
