import React from 'react';
import assertNever from '../helpers/assertNever';
import { CoursePart } from '../types';

interface Props {
  coursePart: CoursePart;
}

const Part: React.FC<Props> = ({ coursePart }) => {
  let component = null;

  switch (coursePart.name) {
    case 'Deeper type usage': {
      component = (
        <p key={coursePart.name}>
          {coursePart.name} {coursePart.exerciseCount}
        </p>
      );
      break;
    }
    case 'Fundamentals': {
      component = (
        <p key={coursePart.name}>
          {coursePart.name} {coursePart.exerciseCount}
        </p>
      );
      break;
    }
    case 'Using props to pass data': {
      component = (
        <p key={coursePart.name}>
          {coursePart.name} {coursePart.exerciseCount}
        </p>
      );
      break;
    }
    default:
      assertNever(coursePart);
  }

  return component;
};

export default Part;

