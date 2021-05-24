import React from 'react';
import './Switch.scss';
export const Switch = ({
  isOn, handleToggle, onColor, title
}) => {
  return (
    <div className="switch-container">
      <label className="switch-label">
        {title}
      </label>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new-${title}`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new-${title}`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  )
}