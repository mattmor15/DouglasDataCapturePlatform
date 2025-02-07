import React from 'react';

import { useQuery } from 'react-query';

import { SubjectsAPI } from '../api/subjects.api';
import { SubjectsTable } from '../components/SubjectsTable';

import { Spinner } from '@/components/core';

export const ViewSubjectsPage = () => {
  const { data, isLoading } = useQuery('ViewSubjects', () => SubjectsAPI.getSubjects());

  if (isLoading) {
    return <Spinner />;
  }

  return data ? (
    <div className="text-center">
      <h1>View Subjects</h1>
      <SubjectsTable data={data} />
    </div>
  ) : null;
};
