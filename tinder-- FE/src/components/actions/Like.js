import React from 'react';

const Like = ({ userId, handleChoiceAction }) => (
  <button
    type="button"
    onClick={() => handleChoiceAction(userId, 'ADD_TO_LIKED_USERS')}
  >
    <img src="images/misc/like.png" alt="Like User" />
  </button>
);

export default Like;
