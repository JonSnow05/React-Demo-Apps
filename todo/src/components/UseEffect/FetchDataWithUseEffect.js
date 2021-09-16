import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchDataWithUseEffect() {
  /* const [user, setUser] = useState([]); */ //to get all users
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(1);
  const [IdFromButton, setIdFromButton] = useState(1);

  const handleOnClick = () => {
    setIdFromButton(userId);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${IdFromButton}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [IdFromButton]);

  return (
    <div>
      <input value={userId} onChange={(e) => setUserId(e.target.value)} />
      <br />
      <button onClick={handleOnClick}>Fetch Post</button>
      <div>
        Name: {user.name} Email: {user.email}
      </div>
      {/* <ul>
        {user.map(user => (
          <li key={user.id}>
            UserName : {user.username}, Email : {user.email}
          </li>
        ))}
      </ul> */}
      {/* This is to get whole data */}
    </div>
  );
}

export default FetchDataWithUseEffect;
