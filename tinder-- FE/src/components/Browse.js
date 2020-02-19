import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import Person from './Person';
import NoOneToBrowse from './NoOneToBrowse';
import { handleResponse, handleError } from "../apiUtils";

const baseUrl = "http://localhost:10010" + "/browse/";
let data = new Array(Object);
let people = new Array(Object);

const getProfiles = () => {
    return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}


const Browse = () => {
    let activeUserIndex = 2;
    
    const [people, setPeople] = useState(data);
    const [likedUsers, setLikedUsers] = useState([]);
    const [likedBy, setLikedBy] = useState([]);
    const [dislikedUsers, setDislikedUsers] = useState([]);
    
    const peopleWithoutGivenUser = (peopleData, userId) =>
    peopleData.filter(user => user.id !== userId);
  
    useEffect(() =>
    {
      getProfiles().then((response) => {
        setPeople(response);
      });
    },[]);
    //setPeople(removedPersonFromDataSrc(people, activeUser));
  
    const handleChoiceAction = (userId, action) => {
      const newPeople = [...people];
      const newLikedUsers = [...likedUsers];
      const newDislikedUsers = [...dislikedUsers];
  
      switch (action) {
        case 'ADD_TO_LIKED_USERS':
          if (!people[activeUserIndex].liked_people.includes(userId)) {
            newPeople[activeUserIndex].liked_people.push(userId);
            newLikedUsers.push(data[userId]);
            setLikedUsers(newLikedUsers);
            setLikedBy(people.filter(person => person.likedUsers.find(me => me.id = people[activeUserIndex].id)));
            setPeople(peopleWithoutGivenUser(people, userId));
          }
          break;
        case 'ADD_TO_DISLIKED_USERS':
          if (!people[activeUserIndex].disliked_people.includes(userId)) {
            newPeople[activeUserIndex].disliked_people.push(userId);
            newDislikedUsers.push(data[userId]);
  
            setDislikedUsers(newLikedUsers);
            setPeople(peopleWithoutGivenUser(people, userId));
          }
          break;
        default:
          return people;
      }
    };
    return (
      <div className="app">
        <Header />
        {people[0] && people[0].id != activeUserIndex ? (
           <Person
            key={people[0].id}
            person={people[0]}
            handleChoiceAction={handleChoiceAction}
            likedUsers={likedUsers}
          />
        ) : (
          <NoOneToBrowse
            activeUser={people[activeUserIndex]}
            likedUsers={likedUsers}
            usersThatLikedBack={likedBy}
          />
        )}
      </div>
    );
  };

  export default Browse;
