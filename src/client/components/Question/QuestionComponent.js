import React from 'react';
import PropTypes from 'prop-types';
import './QuestionComponent.styles.css';
import BackButtonComponent from '../Buttons/BackButton/BackButtonComponent';
import NextButtonComponent from '../Buttons/NextButton/NextButtonComponent';

export default function QuestionComponent({
  question,
  imageSrc,
  options,
  onClick,
}) {
  return (
    <div className="question-component">
      <div
        className="question-box"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="question-box-filter">
          <p className="question">{question}</p>
        </div>
      </div>
      <div className="options">
        <label className="option-label">
          <input type="radio" name="answer" />
          The Hulk
        </label>
        <label className="option-label">
          <input type="radio" name="answer" />
          Captain America
        </label>
      </div>
      <BackButtonComponent onClick={onClick} />
      <NextButtonComponent onClick={onClick} />
    </div>
  );
}

QuestionComponent.propTypes = {
  question: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

QuestionComponent.defaultProps = {
  options: null,
  onClick: null,
};
