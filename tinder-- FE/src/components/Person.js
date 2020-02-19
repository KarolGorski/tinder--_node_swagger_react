import React from 'react';
import Actions from './Actions';

const Person = ({ person, handleChoiceAction }) => {
  const { name, description, age, image_id } = person;

  return (
    <>
      <div className="person">
        <div className="person-photo">
          <img src={`/images/users/${image_id}.jpg`} alt={name} />
        </div>

        <div className="person-description">
          <p className="person-name-age">
            {name}, <span>{age}</span>
          </p>
          <p className="person-info">{description}</p>
        </div>
      </div>

      <Actions
        person={person}
        handleChoiceAction={handleChoiceAction}
      />
    </>
  );
};

export default Person;
