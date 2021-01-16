import React from 'react';
import { CoursePart } from '../types';

interface Props {
  courseParts: CoursePart[];
}

const Content: React.FC<Props> = ({ courseParts }) => {
  return (
    <>
      {courseParts.map((coursePart) => {
        return (
          <p key={coursePart.name}>
            {coursePart.name} {coursePart.exerciseCount}
          </p>
        )
      })}
    </>
  );
};

export default Content;

