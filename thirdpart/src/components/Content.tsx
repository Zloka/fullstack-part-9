import React from 'react';
import { CoursePart } from '../types';
import Part from './Part';

interface Props {
  courseParts: CoursePart[];
}

const Content: React.FC<Props> = ({ courseParts }) => {
  return (
    <>
      {courseParts.map((coursePart) => {
        return (
          <Part key={coursePart.name} coursePart={coursePart} />
        )
      })}
    </>
  );
};

export default Content;

