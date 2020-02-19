import React, { useState, useEffect } from 'react';
import { handleResponse, handleError } from "../apiUtils";
import Header from "./Header";


const baseUrl = "http://localhost:10010/user/123";
let user = new Object;

const getProfile = () => {
    return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

const Profile = () => {

    const [person, setPerson] = useState(user);
    useEffect(() =>
    {
      getProfile().then((response) => {
        setPerson(response);
      });
    },[]);

  const { name, description, age, image_id } = person;

  return (
    <div className="app">
        <Header />
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
    </div>
  );
};

export default Profile;
