// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

export default function Index() {
  const history = useHistory();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // .Then .catch
    // const fetchData = axios
    //   .post(`http://localhost:4000/logintest`, {
    //     name,
    //     password,
    //   })
    //   .then((resp) => {
    //     console.log(resp.data.message);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // Await
    setLoading(true);

    try {
      const fetchData = await axios.post(`http://localhost:4000/logintest`, {
        name,
        password,
      });

      console.log(fetchData);
      setLoading(false);

      history.push("/dasboard/1235");
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  function onChangeUsername(e) {
    setName(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      {/* <input placeholder="Enter username" type="text" />
      <input placeholder="password" type="password" />

      <button onClick={handleRedirectHomePage}>Submit</button> */}

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          placeholder="Enter username"
          type="text"
          name="username"
          onChange={onChangeUsername}
        />
        <input
          value={password}
          placeholder="password"
          type="password"
          name="password"
          onChange={onChangePassword}
        />
        {!loading ? <button type="submit">Submit</button> : <p>Loading</p>}
      </form>
    </div>
  );
}
