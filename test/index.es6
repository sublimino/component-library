import Library from '../index.es6';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;
describe(`The component library`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      Library.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(<Library/>).should.equal(true);
    });
  });
  describe(`it provides a basic branded MastHead`, () => {
    it(`it have an Economist logo customisation`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(Library));

      const shallowLibrary = shallowRenderer.getRenderOutput();
      /* eslint-disable id-match */
      shallowLibrary.props.children[0].props.should.be.deep.equal({
        title: 'Component Library',
        logo: {
          href: 'http://www.economist.com',
          alt: 'The Economist',
          type: 'economist',
          size: '100%',
        },
      });
    });
  });
});
