import React from 'react';

import classNames from 'classnames';

export interface FieldElementProps {
  children: React.ReactNode;
  name: string;
  label: string;
  isFloatingLabel: boolean;
  className?: string;
  error?: string;
}

export const FieldElement = ({ children, name, label, error, isFloatingLabel }: FieldElementProps) => {
  return (
    <React.Fragment>
      <div className="relative my-5 flex w-full flex-col">
        {children}
        <label
          className={classNames('absolute left-0 my-2 text-gray-600 transition-all', {
            '-translate-y-5 text-sm z-10 text-indigo-800': isFloatingLabel
          })}
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      {error && <span className="text-red-700">{error}</span>}
    </React.Fragment>
  );
};
