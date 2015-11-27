'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

var Library = (function (_React$Component) {
  _inherits(Library, _React$Component);

  function Library() {
    _classCallCheck(this, Library);

    _React$Component.apply(this, arguments);
  }

  Library.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'library--wrapper' },
      _react2['default'].createElement(
        'div',
        { className: 'library--sidebar' },
        _react2['default'].createElement(_economistComponentIcon2['default'], { icon: 'economist', size: '60px', uri: 'assets/icons.svg',
          className: 'library--economist-logo'
        }),
        this.props.children.map(function (child) {
          return _react2['default'].createElement(
            'a',
            { href: '#' + child.props.metadata.name,
              className: 'library--sidebar-link',
              key: child.props.metadata.name + '-menu'
            },
            child.props.metadata.name.replace('@economist\/component-', '')
          );
        })
      ),
      _react2['default'].createElement(
        'div',
        { className: 'library--main', role: 'main' },
        this.props.children
      )
    );
  };

  _createClass(Library, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        children: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element)
      };
    }
  }]);

  return Library;
})(_react2['default'].Component);

exports['default'] = Library;
module.exports = exports['default'];