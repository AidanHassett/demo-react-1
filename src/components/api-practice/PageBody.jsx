import {useState} from "react";
import axios from "axios";

const PageBody = () => {

  const [data, setData] = useState([]);

  const [query, setQuery] = useState("");

  const [id, setId] = useState(0);

  const [profile, setProfile] = useState({});

  const getData = () => {
    axios.get(`https://reqres.in/api/${query}`)
      .then((response) => {
        console.log(response);
        console.log(response.data.data);
        if (Array.isArray(response.data.data)) {
          console.log("type of running");
          setData(response.data.data)
        } else {
          setData([response.data.data]);
        }
      })
  }

  const deleteData = () => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        console.log("Profile Deleted");
      });
  }

  const setObject = (event) => {
    const {name, value} = event.target;
    setProfile((prevValue) => ({
      ...prevValue, [name]: value,
    }));
  };

  const postData = () => {
    axios.post(`https://reqres.in/api/users/`, profile)
      .then((response) => {
        console.log(response);
      })
  }

  const putData = () => {
    axios.put(`https://reqres.in/api/users/`, profile)
      .then((response) => {
        console.log(response);
      })
  }

  return (
    <>
      <input type="text" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
      <button type="button" onClick={() => {getData()}}> Click me to see data! </button>
      <br></br>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)}/>
      <button type="button" onClick={() => {deleteData()}}> Delete By ID </button>
      <br></br>
      <input type="text" value={profile.name} name="name" onChange={setObject} placeholder="Enter name"/>
      <input type="text" value={profile.job} name="job" onChange={setObject} placeholder="Enter job"/>
      <button type="button" onClick={postData}> Click me to post data </button>
      <button type="button" onClick={putData}> Click me to put data </button>
      <br/>
      <br/>
      {
        data.map((profile, key) => {
          return (
            <div>
              <img src={profile.avatar} alt={profile.first_name + " " + profile.last_name + "'s avatar"} />
              <h2> Name: {profile.first_name + " " + profile.last_name} </h2>
              <h4> Email: {profile.email} </h4>
            </div>
          )
        })
      }
    </>
  )
}

export default PageBody;
