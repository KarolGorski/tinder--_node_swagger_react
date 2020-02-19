import React from 'react';

const Dislike = ({ userId, handleChoiceAction }) => (
  <button
    type="button"
    onClick={() => handleChoiceAction(userId, 'ADD_TO_DISLIKED_USERS')}
  >
    <img src="images/misc/dislike.png" alt="Dislike User" />
  </button>
);

export default Dislike;
