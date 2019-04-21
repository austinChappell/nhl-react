// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import Nav from './Nav';

// Internal Dependencies

// Local Variables
const propTypes = {
  children: PropTypes.node.isRequired,
};

// Component Definition
const BaseLayout = ({ children }) => (
  <div>
    <Nav />
    {/* Enter children here */}
    <main>
      {children}
    </main>
  </div>
);

BaseLayout.propTypes = propTypes;

export default BaseLayout;
