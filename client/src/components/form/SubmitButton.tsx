import React from 'react';

import { Button } from '../core';

export interface SubmitButtonProps {
  label?: string;
}
//my-4 w-full rounded-md bg-indigo-800 px-2 py-1 text-white
export const SubmitButton = ({ label = 'Submit' }: SubmitButtonProps) => {
  return <Button className="my-4 w-full" type="submit">{label}</Button>;
};
