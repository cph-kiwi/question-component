import { array, number, text } from '@storybook/addon-knobs';
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
    question={text(
      'Question',
      'Would you rather fight the Hulk or Captain America?',
    )}
    imageSrc={text('imageSrc', 'http://placekitten.com/800/500')}
    options={array('Options', ['The Hulk', 'Captain America'])}
    selectedOption={number('Selected Option', 0)}
    onClick={action('You have clicked a button')}
  />
);
