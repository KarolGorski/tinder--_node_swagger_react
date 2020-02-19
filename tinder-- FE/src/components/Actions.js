import React from 'react';
import Dislike from './actions/Dislike';
import Like from './actions/Like';

const Actions = ({ person, handleChoiceAction }) => (
  <div id="actions">
    <Dislike
      userId={person.id}
      handleChoiceAction={handleChoiceAction}
    />
    <Like
      userId={person.id}
      handleChoiceAction={handleChoiceAction}
    />
  </div>
);

export default Actions;
