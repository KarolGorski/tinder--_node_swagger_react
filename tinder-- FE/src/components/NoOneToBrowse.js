import React from 'react';
import LikedPerson from './LikedPerson';

const NoOneToBrowse = ({ activeUser, likedUsers, usersThatLikedBack}) => {
  const { image_id } = activeUser;

  return (
  <div id="lonely">
    <p>There's no new around you.</p>

    <span className="pulse">
      <img src={`/images/users/${image_id}.jpg`} alt="You..." />
    </span>

    <div id="liked-people">
      <p>
        {likedUsers.length > 0
          ? "People you liked...let's hope they like you too!"
          : ''}
      </p>

      {likedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}

    </div>
    <p>
        {usersThatLikedBack.length > 0
          ? "People that liked you too!"
          : ''}
    </p>

    {usersThatLikedBack.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}
  </div>
  );
        }

export default NoOneToBrowse;
