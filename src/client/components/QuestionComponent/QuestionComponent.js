import React from 'react';
import PropTypes from 'prop-types';
import './QuestionComponent.styles.css';

export default function QuestionComponent({ title, onClick, children }) {
  return (
    <div className="question-component">
      <h2>{title}</h2>
      <p>(this is a question component)</p>
      {children}
      <button type="button" onClick={onClick}>
        Back
      </button>
      <button type="button" onClick={onClick}>
        Next
      </button>
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
