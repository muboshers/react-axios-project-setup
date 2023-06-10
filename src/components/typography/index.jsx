import React from 'react';
import { Text } from './typography.style';

export const Typography = ({ tag, children, ...props }) => (
  <Text
    as={tag}
    {...props}
  >
    {children}
  </Text>
);
