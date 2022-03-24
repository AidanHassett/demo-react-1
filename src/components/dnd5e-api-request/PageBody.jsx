import {useEffect, useState} from 'react';
import axios from "axios";

const PageBody = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/spells/acid-arrow/")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>

    </>
  )
}

export default PageBody;
