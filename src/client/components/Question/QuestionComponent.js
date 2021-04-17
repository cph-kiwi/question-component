import React from 'react';
import PropTypes from 'prop-types';
import './QuestionComponent.styles.css';
import BackButtonComponent from '../Buttons/BackButton/BackButtonComponent';
import NextButtonComponent from '../Buttons/NextButton/NextButtonComponent';

export default function QuestionComponent({ title, onClick, children }) {
  return (
    <div className="question-component">
      <h2>{title}</h2>
      <p>(this is a question component)</p>
      {children}
      <BackButtonComponent onClick={onClick} />
      <NextButtonComponent onClick={onClick} />
    </div>
  );
}

QuestionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

QuestionComponent.defaultProps = {
  onClick: null,
  children: null,
};
