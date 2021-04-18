import React from 'react';
import PropTypes from 'prop-types';
import './QuestionComponent.styles.css';

export default function QuestionComponent({
  question,
  imageSrc,
  options,
  selectedOption,
  onOptionChange,
  children,
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

      {options === null ? (
        <div className="question-options-agree-scale">
          <label className="question-option-label">
            Disagree
            <input
              type="radio"
              name="answer"
              checked={selectedOption === 0}
              onChange={() => onOptionChange(0)}
            />
          </label>
          <label className="question-option-label">
            <input
              type="radio"
              name="answer"
              checked={selectedOption === 1}
              onChange={() => onOptionChange(1)}
            />
          </label>
          <label className="question-option-label">
            <input
              type="radio"
              name="answer"
              checked={selectedOption === 2}
              onChange={() => onOptionChange(2)}
            />
            Agree
          </label>
        </div>
      ) : (
        <div className="question-options-multi-choice">
          {options.map((option, i) => {
            return (
              <label className="question-option-label">
                <input
                  type="radio"
                  name="answer"
                  checked={selectedOption === i}
                  onChange={() => onOptionChange(i)}
                />
                {option}
              </label>
            );
          })}
        </div>
      )}
      {/* Need to add back and next buttons in here once they have been created. */}
      {children}
    </div>
  );
}

QuestionComponent.propTypes = {
  question: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  selectedOption: PropTypes.number,
  onOptionChange: PropTypes.func,
  children: PropTypes.element.isRequired,
};

QuestionComponent.defaultProps = {
  options: null,
  selectedOption: null,
  onOptionChange: null,
};
