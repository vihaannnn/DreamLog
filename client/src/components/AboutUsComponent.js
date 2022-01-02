import React, { useState } from 'react';
import Axios from "axios";
function About()
{
  const [data, setData] = useState(null);
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return(
    <div className="container text-white">
    <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.email}</h1> : null}
        
    </div>
      );
}

export default About;
