import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserActivity() {
  // Declare state variables for user and activity data
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);

  // Fetch user data from API
  useEffect(() => {
    axios.get('http://localhost:8000/usuario/')
      .then(response => {
        // Set the user state with the response data
        setUser(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  }, []); // Pass an empty array as dependency to run only once

  // Fetch activity data from API
  useEffect(() => {
    axios.get('http://localhost:8000/activity/')
      .then(response => {
        // Set the activities state with the response data
        setActivities(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  }, []); // Pass an empty array as dependency to run only once

  // Return JSX for rendering the component
  return (
    <div>
      {/* Display user information */}
      {user && (
        <div>
          <h1>User Information</h1>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
          <p>Last name: {user.lname}</p>
          <p>Gender: {user.gender}</p>
          <p>Age: {user.age}</p>
          <p>Country: {user.country}</p>
          <p>Discipline: {user.discipline}</p>
          <p>School: {user.school.name}</p>
        </div>
      )}

      {/* Display activity information */}
      {activities.length > 0 && (
        <div>
          <h1>Activity Information</h1>
          <ul>
            {activities.map(activity => (
              <li key={activity.id}>
                <p>Name: {activity.name}</p>
                <p>Author: {activity.author.name}</p>
                <p>File space: {activity.file_space}</p>
                <p>Completed space: {activity.completed_space ? 'Yes' : 'No'}</p>
                {/* Add a button to download the file */}
                <button onClick={() => window.open(activity.file_space)}>Download file</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserActivity;
