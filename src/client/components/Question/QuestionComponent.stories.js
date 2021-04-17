import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import QuestionComponent from './QuestionComponent';

export default {
  title: 'Components / Question Component',
  component: QuestionComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => (
  <QuestionComponent
    title={text('Title', 'Question title')}
    onClick={action('You have clicked a button')}
  />
);
