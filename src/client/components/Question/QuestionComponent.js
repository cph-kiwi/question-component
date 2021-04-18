import React from 'react';
import PropTypes from 'prop-types';
import './QuestionComponent.styles.css';
import BackButtonComponent from '../Buttons/BackButton/BackButtonComponent';
import NextButtonComponent from '../Buttons/NextButton/NextButtonComponent';

export default function QuestionComponent({
  question,
  imageSrc,
  options,
  selectedOption,
  onOptionChange,
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
        {options.map((option, i) => {
          return (
            <label className="option-label">
              <input
                type="radio"
                name="answer"
                checked={selectedOption === i}
                onChange={() => onOptionChange(selectedOption)}
              />
              {option}
            </label>
          );
        })}
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
  selectedOption: PropTypes.number,
  onOptionChange: PropTypes.func,
  onClick: PropTypes.func,
};

QuestionComponent.defaultProps = {
  options: null,
  selectedOption: null,
  onOptionChange: null,
  onClick: null,
};
