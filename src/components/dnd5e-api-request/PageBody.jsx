import {useEffect, useState} from 'react';
import axios from "axios";

import Spell from "./Spell";

const PageBody = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/spells/")
      .then((response) => {
        setData(response.data.results);
      })
  }, [])

  return (
    <div>
      {
        data.map((spell) => {
          return (
            <Spell spellId={spell} />
          )
        })
      }
    </div>
  )
}

export default PageBody;
