// External Dependencies
import React from 'react';

// Internal Dependencies
import Text, { textProps } from '.';

// Component Definition
const Paragraph = ({
  children,
  ...props
}) => (
  <Text
    as="p"
    {...props}
  >
    {children}
  </Text>
);

Paragraph.propTypes = textProps;

export default Paragraph;
